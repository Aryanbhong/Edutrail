// import React from "react"
// import Logo1 from "../../assets/images/logo1.png"
// import Logo2 from "../../assets/images/logo2.png"
// import Logo3 from "../../assets/images/logo3.png"
// import Logo4 from "../../assets/images/logo4.png"
// import timelineImg from "../../assets/images/TimelineImage.png"

// const timeLine = [
//   {
//     Logo: Logo1,
//     heading: "Leadership",
//     Description: "Fully committed to the success of our learners' careers.",
//   },
//   {
//     Logo: Logo2,
//     heading: "Responsibility",
//     Description: "Students will always remain our highest priority.",
//   },
//   {
//     Logo: Logo3,
//     heading: "Flexibility",
//     Description: "Adaptive pacing tailored to your work and life demands.",
//   },
//   {
//     Logo: Logo4,
//     heading: "Problem Solving",
//     Description: "Hands-on projects designed to build true problem-solving intuition.",
//   },
// ]

// const TimeLineSection = () => {
//   return (
//     <div className="w-full">
//       <div className="relative flex flex-col lg:flex-row items-center gap-12 sm:gap-16 w-full max-w-6xl mx-auto rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
//         {/* Top ambient highlight */}
//         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_10px_#00f0ff]" />

//         {/* Left Timeline Points */}
//         <div className="w-full lg:w-1/2 space-y-7">
//           {timeLine.map((item, index) => (
//             <div className="flex items-start gap-4 group" key={index}>
//               <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#050816]/90 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
//                 <img src={item.Logo} alt={item.heading} className="w-5 h-5 object-contain" />
//               </div>
//               <div className="space-y-1">
//                 <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
//                   {item.heading}
//                 </h3>
//                 <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
//                   {item.Description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Image Frame */}
//         <div className="relative w-full lg:w-1/2 flex justify-center">
//           <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
//             <img
//               src={timelineImg}
//               alt="timeline preview"
//               className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TimeLineSection



import React from "react"
import Logo1 from "../../assets/images/logo1.png"
import Logo2 from "../../assets/images/logo2.png"
import Logo3 from "../../assets/images/logo3.png"
import Logo4 from "../../assets/images/logo4.png"
import timelineImg from "../../assets/images/TimelineImage.png"

const timeLine = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success of our learners' careers.",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always remain our highest priority.",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "Adaptive pacing tailored to your work and life demands.",
  },
  {
    Logo: Logo4,
    heading: "Problem Solving",
    Description: "Hands-on projects designed to build true problem-solving intuition.",
  },
]

const TimeLineSection = () => {
  return (
    <section className="w-full px-4 py-10 font-sans text-slate-100 sm:px-6 sm:py-16">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0e0e12] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-10 lg:flex-row lg:gap-16 lg:p-12">
        {/* Subtle background accents */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-indigo-500/[0.06] blur-3xl" />

        {/* Top accent */}
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

        {/* Left Timeline Points */}
        <div className="relative w-full space-y-8 lg:w-1/2">
          {timeLine.map((item, index) => (
            <div
              className="group relative flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 ease-out hover:translate-x-1 hover:border-white/[0.07] hover:bg-white/[0.02] sm:gap-5 sm:p-4"
              key={item.heading}
            >
              {/* Timeline connector */}
              {index !== timeLine.length - 1 && (
                <div className="absolute left-[2.35rem] top-[4.25rem] h-8 w-px bg-gradient-to-b from-violet-400/30 to-transparent sm:left-[2.6rem] sm:top-[4.5rem]" />
              )}

              {/* Icon */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#15151b] shadow-sm transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]">
                <img
                  src={item.Logo}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-lg">
                    {item.heading}
                  </h3>

                  <span className="h-px w-0 bg-violet-400/60 transition-all duration-500 group-hover:w-8" />
                </div>

                <p className="max-w-sm text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Frame */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -inset-3 rounded-3xl bg-violet-500/[0.08] opacity-60 blur-2xl transition-opacity duration-500 hover:opacity-100" />

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#15151b] shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25">
            <img
              src={timelineImg}
              alt="Learning timeline illustration"
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/25 via-transparent to-white/[0.03]" />

            {/* Corner accents */}
            <div className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l border-t border-violet-400/30" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 border-b border-r border-violet-400/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeLineSection
