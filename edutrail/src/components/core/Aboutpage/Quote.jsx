// import React from "react"

// const Quote = () => {
//   return (
//     <div className="relative max-w-4xl text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide mx-auto py-8 text-center text-slate-200 [text-wrap:balance]">
//       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_8px_#00f0ff]" />

//       We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
//       <span className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.5)] font-extrabold">
//         combines technology
//       </span>
//       ,{" "}
//       <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] font-extrabold">
//         industry expertise
//       </span>
//       , and community to create an{" "}
//       <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_16px_rgba(0,240,255,0.7)] font-extrabold">
//         unparalleled educational experience
//       </span>
//       .
//     </div>
//   )
// }

// export default Quote



import React from "react"

const Quote = () => {
  return (
    <section className="relative w-full px-4 py-12 font-sans sm:py-16 md:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0e0e12]/70 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-600/[0.08] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-500/[0.06] blur-[90px]" />

        {/* Top accent line */}
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

        {/* Quote mark */}
        <div className="relative mb-5 text-5xl font-semibold leading-none text-violet-400/60 sm:text-6xl">
          “
        </div>

        <p className="relative mx-auto max-w-4xl text-center text-xl font-normal leading-relaxed tracking-tight text-zinc-400 [text-wrap:balance] sm:text-2xl md:text-3xl lg:text-4xl">
          We are passionate about revolutionizing the way we learn. Our
          innovative platform{" "}
          <span className="font-semibold text-white transition-colors duration-300 hover:text-violet-300">
            combines technology
          </span>
          ,{" "}
          <span className="font-semibold text-white transition-colors duration-300 hover:text-violet-300">
            industry expertise
          </span>
          , and community to create an{" "}
          <span className="font-semibold text-violet-300">
            unparalleled educational experience
          </span>
          .
        </p>

        {/* Bottom accent */}
        <div className="relative mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent sm:mt-10" />
      </div>
    </section>
  )
}

export default Quote

