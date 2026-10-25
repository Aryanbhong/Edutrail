// import React from "react"
// import CTButton from "../Button"

// const LearnData = [
//   {
//     order: -1,
//     heading: "Learning Made Simple for",
//     colorText: " Everyone, Everywhere",
//     description:
//       "EduTrail is engineered to make technology learning straightforward, engaging, and directly applicable. Whether you are beginning your journey or advancing towards senior roles, we provide clear pathways that adapt to your ambitions.",
//     BtnText: "Explore Courses",
//     BtnLink: "/catalog/all",
//   },
//   {
//     order: 1,
//     heading: "Beginner-Friendly Curriculums",
//     description:
//       "Our learning paths break down complex engineering concepts into intuitive, digestible modules with zero confusing jargon.",
//   },
//   {
//     order: 2,
//     heading: "Production-Grade Projects",
//     description:
//       "Build real-world web, mobile, and backend applications that prove your capabilities to industry hiring teams.",
//   },
//   {
//     order: 3,
//     heading: "Direct Mentor Guidance",
//     description:
//       "Get feedback from experienced software practitioners who have walked the path and know what it takes to succeed.",
//   },
//   {
//     order: 4,
//     heading: "Learn at Your Own Pace",
//     description:
//       "No artificial deadlines or rigid schedules. Access lifetime coursework whenever your schedule allows.",
//   },
//   {
//     order: 5,
//     heading: "Continuously Evolving Content",
//     description:
//       "Our curriculum adapts to current industry frameworks, tools, and developer standards so your skills remain cutting-edge.",
//   },
// ]

// const GridLearning = () => {
//   return (
//     <div className="grid mx-auto w-full max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-12 gap-4">
//       {LearnData.map((card, i) => {
//         if (card.order < 0) {
//           return (
//             <div
//               key={i}
//               className="xl:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0b1224]/50 backdrop-blur-xl"
//             >
//               <div>
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
//                   {card.heading}
//                   <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//                     {card.colorText}
//                   </span>
//                 </h2>
//                 <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
//                   {card.description}
//                 </p>
//               </div>

//               <div className="mt-6 w-fit">
//                 <CTButton active={true} linkto={card.BtnLink}>
//                   {card.BtnText}
//                 </CTButton>
//               </div>
//             </div>
//           )
//         }

//         return (
//           <div
//             key={i}
//             className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0b1224]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
//           >
//             <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400 transition-all" />

//             <div>
//               <div className="w-8 h-8 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold mb-4">
//                 0{card.order}
//               </div>
//               <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
//                 {card.heading}
//               </h3>
//             </div>

//             <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
//               {card.description}
//             </p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default GridLearning


import React from "react"
import CTButton from "../Button"

const LearnData = [
  {
    order: -1,
    heading: "Learning Made Simple for",
    colorText: " Everyone, Everywhere",
    description:
      "EduTrail is engineered to make technology learning straightforward, engaging, and directly applicable. Whether you are beginning your journey or advancing towards senior roles, we provide clear pathways that adapt to your ambitions.",
    BtnText: "Explore Courses",
    BtnLink: "/catalog/all",
  },
  {
    order: 1,
    heading: "Beginner-Friendly Curriculums",
    description:
      "Our learning paths break down complex engineering concepts into intuitive, digestible modules with zero confusing jargon.",
  },
  {
    order: 2,
    heading: "Production-Grade Projects",
    description:
      "Build real-world web, mobile, and backend applications that prove your capabilities to industry hiring teams.",
  },
  {
    order: 3,
    heading: "Direct Mentor Guidance",
    description:
      "Get feedback from experienced software practitioners who have walked the path and know what it takes to succeed.",
  },
  {
    order: 4,
    heading: "Learn at Your Own Pace",
    description:
      "No artificial deadlines or rigid schedules. Access lifetime coursework whenever your schedule allows.",
  },
  {
    order: 5,
    heading: "Continuously Evolving Content",
    description:
      "Our curriculum adapts to current industry frameworks, tools, and developer standards so your skills remain cutting-edge.",
  },
]

const GridLearning = () => {
  return (
    <section className="w-full px-4 py-8 font-sans sm:px-6 sm:py-12">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {LearnData.map((card) => {
          if (card.order < 0) {
            return (
              <div
                key={card.order}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0e0e12] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:border-violet-400/25 sm:p-9 xl:col-span-2"
              >
                {/* Background accents */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[90px] transition-all duration-700 group-hover:bg-violet-500/[0.14]" />

                <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

                <div className="relative">
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    Why EduTrail
                  </span>

                  <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {card.heading}
                    <span className="text-violet-300">
                      {card.colorText}
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {card.description}
                  </p>
                </div>

                <div className="relative mt-8 w-fit">
                  <CTButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTButton>
                </div>
              </div>
            )
          }

          return (
            <div
              key={card.order}
              className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0e0e12]/90 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-violet-400/25 hover:bg-[#111116] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-300 group-hover:via-violet-400/50" />

              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.12]" />

              <div className="relative">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-xs font-semibold tracking-wide text-zinc-400 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/[0.08] group-hover:text-violet-200">
                  {String(card.order).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-violet-100">
                  {card.heading}
                </h3>
              </div>

              <p className="relative mt-5 text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                {card.description}
              </p>

              {/* Bottom indicator */}
              <div className="mt-6 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-violet-400/60" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GridLearning

