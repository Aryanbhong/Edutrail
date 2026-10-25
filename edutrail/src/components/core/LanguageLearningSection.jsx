// import React from "react"
// import progress from "../../assets/images/Know_your_progress.png"
// import lessons from "../../assets/images/Plan_your_lessons.png"
// import compare from "../../assets/images/compare.png"
// import CButton from "../core/Button"

// const LanguageLearning = () => {
//   return (
//     <div className="w-full">
//       <div className="relative flex flex-col gap-8 items-center rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-14 backdrop-blur-xl shadow-2xl overflow-hidden">
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_10px_#00f0ff]" />

//         {/* Header Content */}
//         <div className="text-center space-y-3 max-w-2xl">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
//             Your Precision Toolkit for{" "}
//             <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
//               Mastering Any Language
//             </span>
//           </h2>
//           <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//             Multi-language code environments, real-time syntax visualizers, progress analytics, and automated milestone tracking.
//           </p>
//         </div>

//         {/* Feature Images Stack */}
//         <div className="flex flex-col lg:flex-row items-center justify-center my-4 max-w-4xl">
//           <img
//             src={progress}
//             alt="Know your progress"
//             className="object-contain lg:-mr-24 z-10 transition-transform duration-500 hover:scale-105"
//           />
//           <img
//             src={compare}
//             alt="Compare progress"
//             className="object-contain z-20 my-2 lg:my-0 transition-transform duration-500 hover:scale-105 shadow-2xl"
//           />
//           <img
//             src={lessons}
//             alt="Plan your lessons"
//             className="object-contain lg:-ml-28 z-10 transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         {/* CTA Button */}
//         <div className="w-fit pt-2">
//           <CButton active={true} linkto="/signup">
//             <span>Learn More</span>
//           </CButton>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LanguageLearning




import React from "react"
import progress from "../../assets/images/Know_your_progress.png"
import lessons from "../../assets/images/Plan_your_lessons.png"
import compare from "../../assets/images/compare.png"
import CButton from "../core/Button"

const features = [
  { src: progress, alt: "Know your progress" },
  { src: compare, alt: "Compare progress" },
  { src: lessons, alt: "Plan your lessons" },
]

const LanguageLearning = () => {
  return (
    <section className="w-full font-sans">
      <div
        className="group relative isolate flex flex-col items-center gap-8
          overflow-hidden rounded-2xl border border-white/[0.08]
          bg-[#121216]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl transition-all duration-500
          hover:border-violet-300/20 hover:shadow-[0_25px_65px_rgba(0,0,0,0.4)]
          sm:p-10 lg:p-14"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10
            h-72 w-3/4 -translate-x-1/2 rounded-full
            bg-violet-500/[0.07] blur-[100px]
            transition-opacity duration-700 group-hover:opacity-150"
        />

        {/* Top highlight */}
        <div
          aria-hidden="true"
          className="absolute left-1/4 right-1/4 top-0 h-px
            bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        {/* Heading */}
        <div className="animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]
          max-w-2xl space-y-3 text-center">
          <h2 className="text-balance text-2xl font-bold leading-tight
            tracking-tight text-white sm:text-3xl lg:text-4xl">
            Your Precision Toolkit for{" "}
            <span className="font-normal text-zinc-400 transition-colors
              duration-500 group-hover:text-violet-200">
              Mastering Any Language
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-xs leading-relaxed
            text-[#9A9A9E] sm:text-sm">
            Multi-language code environments, real-time syntax visualizers,
            progress analytics, and automated milestone tracking.
          </p>
        </div>

        {/* Feature gallery */}
        <div className="flex w-full max-w-5xl flex-col items-center
          justify-center gap-5 py-2 lg:flex-row lg:gap-0">
          {features.map((feature, index) => (
            <div
              key={feature.alt}
              className={`group/feature relative w-full max-w-[360px]
                animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]
                transition-transform duration-500 ease-out
                hover:-translate-y-2
                ${
                  index === 1
                    ? "z-20 lg:scale-105 lg:hover:scale-[1.08]"
                    : "z-10 lg:-mx-10 lg:hover:scale-105"
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-4 rounded-2xl bg-violet-400/0
                blur-2xl transition-colors duration-500
                group-hover/feature:bg-violet-400/[0.08]" />

              <img
                src={feature.src}
                alt={feature.alt}
                loading="lazy"
                draggable="false"
                className="relative block h-auto w-full select-none
                  object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)]
                  transition-all duration-700 ease-out
                  group-hover/feature:drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]
          pt-1 [animation-delay:450ms]">
          <CButton active={true} linkto="/signup">
            <span className="inline-flex items-center gap-2">
              Learn More
              <span className="inline-block transition-transform duration-300
                group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </CButton>
        </div>
      </div>
    </section>
  )
}

export default LanguageLearning
