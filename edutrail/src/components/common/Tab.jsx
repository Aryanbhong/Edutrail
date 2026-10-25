// import React from 'react'

// const Tab = ({ tabData, field, setField }) => {
//   return (
//     <div
//       className="relative flex items-center gap-x-1.5 my-2 p-1 rounded-full bg-[#0B132B]/60 backdrop-blur-xl border border-white/[0.08] shadow-lg max-w-max"
//     >
//       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

//       {tabData.map((tab) => {
//         const isActive = field === tab.type
//         return (
//           <button
//             key={tab.id}
//             type="button"
//             onClick={() => setField(tab.type)}
//             className={`relative py-1.5 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
//               isActive
//                 ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-[1.02]"
//                 : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]"
//             }`}
//           >
//             {tab?.tabName}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// export default Tab


import React from "react"

const Tab = ({ tabData, field, setField }) => {
  return (
    <div className="relative flex max-w-max items-center gap-1 overflow-hidden rounded-full border border-white/[0.08] bg-[#0e0e12] p-1.5 font-sans shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
      {/* Subtle top accent */}
      <div className="pointer-events-none absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      {tabData.map((tab) => {
        const isActive = field === tab.type

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setField(tab.type)}
            aria-pressed={isActive}
            className={`relative rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 sm:px-6 sm:py-2.5 sm:text-sm ${
              isActive
                ? "border border-violet-300/20 bg-violet-400/[0.13] text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.10)]"
                : "border border-transparent text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"
            }`}
          >
            {isActive && (
              <span className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
            )}

            <span className="relative z-10">{tab?.tabName}</span>
          </button>
        )
      })}
    </div>
  )
}

export default Tab
