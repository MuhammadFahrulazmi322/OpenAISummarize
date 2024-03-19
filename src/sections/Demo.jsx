import React, { useEffect, useState } from "react";
import { copy, link, loader } from "../assets/images";
import { useLazyGetSummaryQuery } from "../services/article";
function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticle, setAllArticle] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articleFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articleFromLocalStorage) {
      setAllArticle(articleFromLocalStorage);
    }
  }, []);

  console.log(article);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticle];

      setArticle(newArticle);
      setAllArticle(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log(newArticle);
    }
  };
  return (
    <section className=" max-w-xl w-full">
      <div className="flex flex-col gap-2 w-full">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            className="absolute left-0 my-2 ml-3 w-5"
            src={link}
            alt="link"
          />
          <input
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg 
            font-medium focus:border-black focus:outline-none focus:ring-0 peer"
            type="url"
            placeholder="Enter the URL"
            required
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
          />
          <button
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border
         border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700"
            type="submit"
          >
            ⏎
          </button>
        </form>
        {/* Browser History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticle.map((item, index) => (
            <div
              key={`link-${index}`}
              className="flex flex-row gap-2 items-center py-4"
            >
              <div>
                <img src={copy} alt="icon copy" />
              </div>
              <div>
                <p>{item.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* display stats */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} className="w-20 h-20 object-contain" />
        ) : error ? (
          <p>
            Something Happen, not expected
            <br />
            <span>{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-4">
              <h2 className="font-bold ">Article Summary</h2>
              <p>{article.summary}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
