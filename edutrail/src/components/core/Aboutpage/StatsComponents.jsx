import React from "react"

const Stats = [
  { count: "4K+", label: "Active Students" },
  { count: "10+", label: "Expert Mentors" },
  { count: "200+", label: "Curated Trails" },
  { count: "50+", label: "Industry Partners" },
]

const StatsComponents = () => {
  return (
    <section className="relative bg-[#040612]/90 border-y border-white/[0.08] py-14 backdrop-blur-xl overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {Stats.map((data, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border border-white/[0.08] bg-[#0b1224]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]"
            >
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all duration-300" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                {data.count}
              </h2>

              <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsComponents
