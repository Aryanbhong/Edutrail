import React from 'react'

const Tab = ({ tabData, field, setField }) => {
  return (
    <div
      className="relative flex items-center gap-x-1.5 my-2 p-1 rounded-full bg-[#0B132B]/60 backdrop-blur-xl border border-white/[0.08] shadow-lg max-w-max"
    >
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {tabData.map((tab) => {
        const isActive = field === tab.type
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setField(tab.type)}
            className={`relative py-1.5 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-[1.02]"
                : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]"
            }`}
          >
            {tab?.tabName}
          </button>
        )
      })}
    </div>
  )
}

export default Tab
