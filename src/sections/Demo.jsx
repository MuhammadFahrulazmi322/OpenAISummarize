import React from "react";
import { link } from "../assets/images";

function Demo() {
  return (
    <section className=" max-w-xl w-full">
      <div className="flex flex-col gap-2 w-full">
      <form className="relative flex justify-center items-center" 
      onSubmit={()=>{}}>
        <img className="absolute left-0 my-2 ml-3 w-5" src={link} alt="link" />
        <input
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg 
            font-medium focus:border-black focus:outline-none focus:ring-0 peer"
          type="url"
          placeholder="Enter the URL"
          required
          onChange={()=>{}}
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
      </div>
      {/* display stats */}
    </section>
  );
}

export default Demo;
