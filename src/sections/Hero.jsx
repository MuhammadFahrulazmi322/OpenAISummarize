import React from 'react'

function Hero() {
  return (
    <section className='flex flex-col items-center gap-8 py-20'>
        <h1 className='text-4xl lg:text-[68px] font-bold text-center leading-normal'>Summarize Articles with <br/><span className='bg-gradient-to-l from-orange-600 via-green-700 to-slate-500 bg-clip-text text-transparent '>OpenAI GPT-4</span></h1>
        <h2 className='text-base text-center max-w-4xl'>Like reading articles but tired of lengthy reads? OpenAI Summarize is an open-source article summarizer designed to simplify your reading experience. Transform long articles into clear and concise summaries effortlessly. Let's Try! </h2>
    </section>
  )
}

export default Hero