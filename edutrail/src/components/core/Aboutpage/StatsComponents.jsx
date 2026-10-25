// import React from "react"

// const Stats = [
//   { count: "4K+", label: "Active Students" },
//   { count: "10+", label: "Expert Mentors" },
//   { count: "200+", label: "Curated Trails" },
//   { count: "50+", label: "Industry Partners" },
// ]

// const StatsComponents = () => {
//   return (
//     <section className="relative bg-[#040612]/90 border-y border-white/[0.08] py-14 backdrop-blur-xl overflow-hidden">
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

//       <div className="w-11/12 max-w-6xl mx-auto relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
//           {Stats.map((data, index) => (
//             <div
//               key={index}
//               className="relative group rounded-2xl border border-white/[0.08] bg-[#0b1224]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]"
//             >
//               <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all duration-300" />

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//                 {data.count}
//               </h2>

//               <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//                 {data.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default StatsComponents



import React from "react"

const Stats = [
  { count: "4K+", label: "Active Students" },
  { count: "10+", label: "Expert Mentors" },
  { count: "200+", label: "Curated Trails" },
  { count: "50+", label: "Industry Partners" },
]

const StatsComponents = () => {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#09090d] py-16 font-sans sm:py-20">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-violet-600/[0.10] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/[0.10] blur-[100px]" />

      {/* Moving background lights */}
      <div className="pointer-events-none absolute left-[15%] top-10 h-1 w-1 animate-ping rounded-full bg-violet-300/70" />
      <div className="pointer-events-none absolute right-[20%] top-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300/70" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-1 w-1 animate-ping rounded-full bg-purple-300/50 [animation-delay:1000ms]" />

      <div className="relative z-10 mx-auto w-11/12 max-w-[1200px]">
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            EduTrail in numbers
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Small steps.{" "}
            <span className="text-violet-300">Big impact.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            A growing community of learners building skills for the future.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4">
          {Stats.map((data, index) => (
            <div
              key={data.label}
              style={{ animationDelay: `${index * 180}ms` }}
              className="group relative animate-[float_4s_ease-in-out_infinite] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111116]/90 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-400/40 hover:bg-[#15131d] hover:shadow-[0_20px_50px_rgba(109,40,217,0.12)] sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent transition-all duration-500 group-hover:via-violet-300" />

              {/* Card glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.16]" />

              {/* Animated orbit accent */}
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-violet-400/40 transition-all duration-500 group-hover:scale-150 group-hover:bg-violet-300" />

              <div className="relative">
                <h3 className="text-3xl font-bold tracking-tight text-white transition-all duration-300 group-hover:scale-105 group-hover:text-violet-200 sm:text-4xl lg:text-5xl">
                  {data.count}
                </h3>

                <div className="mx-auto mt-3 h-px w-8 bg-violet-400/40 transition-all duration-500 group-hover:w-14 group-hover:bg-violet-300" />

                <p className="mt-3 text-xs font-medium tracking-wide text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 sm:text-sm">
                  {data.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsComponents

