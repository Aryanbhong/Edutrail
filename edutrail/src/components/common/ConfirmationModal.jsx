// import React from 'react'
// import IconBtn from './IconBtn'

// const ConfirmationModal = ({ modalData }) => {
//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-black/75 backdrop-blur-md animate-fadeIn">
//       {/* Neon Glass Container */}
//       <div className="relative w-11/12 max-w-[400px] rounded-3xl border border-white/[0.1] bg-[#0B132B]/95 p-7 shadow-2xl backdrop-blur-2xl">
//         {/* Subtle Neon Top Highlight Line */}
//         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

//         {/* Header Text */}
//         <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
//           {modalData?.text1}
//         </p>

//         {/* Subtext */}
//         <p className="mt-2.5 mb-6 text-xs sm:text-sm leading-relaxed text-slate-300">
//           {modalData?.text2}
//         </p>

//         {/* Action Buttons */}
//         <div className="flex items-center justify-end gap-x-3">
//           <button
//             type="button"
//             className="cursor-pointer rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-white/[0.08] hover:text-white active:scale-95"
//             onClick={modalData?.btn2Handler}
//           >
//             {modalData?.btn2Text}
//           </button>
//           <IconBtn
//             onclick={modalData?.btn1Handler}
//             text={modalData?.btn1Text}
//             customClasses="cursor-pointer rounded-xl px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ConfirmationModal


import React from 'react'
import IconBtn from './IconBtn'

const ConfirmationModal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Visuvate Glass Container */}
      <div className="relative w-11/12 max-w-[420px] rounded-2xl border border-[#262626] bg-[#141414]/95 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        {/* Top Fine Line Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ededed]/20 to-transparent" />

        {/* Header Text */}
        <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#ededed]">
          {modalData?.text1}
        </p>

        {/* Subtext */}
        <p className="mt-2 mb-6 text-xs sm:text-sm leading-relaxed text-[#888888]">
          {modalData?.text2}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-x-3">
          <button
            type="button"
            className="cursor-pointer rounded-xl border border-[#262626] bg-[#141414] px-4 py-2 text-xs sm:text-sm font-medium text-[#888888] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#ededed]/40 hover:bg-[#141414]/80 hover:text-[#ededed] active:scale-95"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            customClasses="cursor-pointer rounded-xl bg-[#ededed] px-5 py-2 text-xs sm:text-sm font-medium text-[#0a0a0a] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:scale-[1.02] active:scale-95"
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
