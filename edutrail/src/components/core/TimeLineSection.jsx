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
    <div className="w-full">
      <div className="relative flex flex-col lg:flex-row items-center gap-12 sm:gap-16 w-full max-w-6xl mx-auto rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top ambient highlight */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_10px_#00f0ff]" />

        {/* Left Timeline Points */}
        <div className="w-full lg:w-1/2 space-y-7">
          {timeLine.map((item, index) => (
            <div className="flex items-start gap-4 group" key={index}>
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#050816]/90 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <img src={item.Logo} alt={item.heading} className="w-5 h-5 object-contain" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  {item.heading}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Frame */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
            <img
              src={timelineImg}
              alt="timeline preview"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineSection
