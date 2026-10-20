import React from "react"
import progress from "../../assets/images/Know_your_progress.png"
import lessons from "../../assets/images/Plan_your_lessons.png"
import compare from "../../assets/images/compare.png"
import CButton from "../core/Button"

const LanguageLearning = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-8 items-center rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-14 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_10px_#00f0ff]" />

        {/* Header Content */}
        <div className="text-center space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Your Precision Toolkit for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Mastering Any Language
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Multi-language code environments, real-time syntax visualizers, progress analytics, and automated milestone tracking.
          </p>
        </div>

        {/* Feature Images Stack */}
        <div className="flex flex-col lg:flex-row items-center justify-center my-4 max-w-4xl">
          <img
            src={progress}
            alt="Know your progress"
            className="object-contain lg:-mr-24 z-10 transition-transform duration-500 hover:scale-105"
          />
          <img
            src={compare}
            alt="Compare progress"
            className="object-contain z-20 my-2 lg:my-0 transition-transform duration-500 hover:scale-105 shadow-2xl"
          />
          <img
            src={lessons}
            alt="Plan your lessons"
            className="object-contain lg:-ml-28 z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CTA Button */}
        <div className="w-fit pt-2">
          <CButton active={true} linkto="/signup">
            <span>Learn More</span>
          </CButton>
        </div>
      </div>
    </div>
  )
}

export default LanguageLearning
