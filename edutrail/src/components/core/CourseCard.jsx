import React from "react"
import { HiUsers } from "react-icons/hi"
import { ImTree } from "react-icons/im"

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading

  return (
    <div
      className={`w-full sm:w-[340px] lg:w-[30%] h-[300px] rounded-3xl cursor-pointer transform transition-all duration-300 ease-in-out backdrop-blur-xl flex flex-col justify-between overflow-hidden ${
        isActive
          ? "bg-gradient-to-br from-cyan-950/80 via-[#0B132B]/90 to-blue-950/70 border-2 border-cyan-400 text-slate-100 scale-[1.03] shadow-[0_0_35px_rgba(0,240,255,0.35)]"
          : "bg-[#0B132B]/70 border border-white/[0.08] text-slate-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:scale-[1.01]"
      }`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top Section */}
      <div className="h-[75%] border-b border-white/[0.06] p-6 flex flex-col gap-3">
        <h2
          className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
            isActive ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" : "text-white"
          }`}
        >
          {cardData?.heading}
        </h2>
        <p
          className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
            isActive ? "text-slate-200" : "text-slate-400"
          }`}
        >
          {cardData?.description}
        </p>
      </div>

      {/* Bottom Section */}
      <div
        className={`flex justify-between items-center px-6 py-4 text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#030612]/60 ${
          isActive ? "text-cyan-300" : "text-slate-400"
        }`}
      >
        {/* Level */}
        <div className="flex items-center gap-2">
          <HiUsers className="text-base text-cyan-400" />
          <p>{cardData?.level}</p>
        </div>

        {/* Lesson Count */}
        <div className="flex items-center gap-2">
          <ImTree className="text-base text-cyan-400" />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
