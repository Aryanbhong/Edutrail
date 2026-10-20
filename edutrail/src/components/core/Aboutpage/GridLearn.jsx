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
    <div className="grid mx-auto w-full max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-12 gap-4">
      {LearnData.map((card, i) => {
        if (card.order < 0) {
          return (
            <div
              key={i}
              className="xl:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0b1224]/50 backdrop-blur-xl"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {card.heading}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                    {card.colorText}
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 w-fit">
                <CTButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTButton>
              </div>
            </div>
          )
        }

        return (
          <div
            key={i}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0b1224]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
          >
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400 transition-all" />

            <div>
              <div className="w-8 h-8 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold mb-4">
                0{card.order}
              </div>
              <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {card.heading}
              </h3>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              {card.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default GridLearning
