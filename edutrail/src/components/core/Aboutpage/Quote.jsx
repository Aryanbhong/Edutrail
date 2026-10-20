import React from "react"

const Quote = () => {
  return (
    <div className="relative max-w-4xl text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide mx-auto py-8 text-center text-slate-200 [text-wrap:balance]">
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_8px_#00f0ff]" />

      We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
      <span className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.5)] font-extrabold">
        combines technology
      </span>
      ,{" "}
      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] font-extrabold">
        industry expertise
      </span>
      , and community to create an{" "}
      <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_16px_rgba(0,240,255,0.7)] font-extrabold">
        unparalleled educational experience
      </span>
      .
    </div>
  )
}

export default Quote
