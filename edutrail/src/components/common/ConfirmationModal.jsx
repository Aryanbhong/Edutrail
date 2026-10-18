// import React from 'react'
// import IconBtn from './IconBtn'

// const ConfirmationModal = ({modalData}) => {
//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
//       <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
//         <p className="text-2xl font-semibold text-richblack-5">
//             {modalData.text1}
//         </p>
//         <p className="mt-3 mb-5 leading-6 text-richblack-200">
//             {modalData.text2}
//         </p>
//         <div className="flex items-center gap-x-4">
//             <IconBtn  onclick={modalData?.btn1Handler}
//             text={modalData?.btn1Text}/>
//             <button
//             className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
//              onClick={modalData?.btn2Handler}>
//                 {modalData?.btn2Text}
//             </button>
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
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-[#030712]/80 backdrop-blur-md animate-fadeIn">
      {/* Neon Glass Container */}
      <div className="relative w-11/12 max-w-[380px] rounded-2xl border border-cyan-500/30 bg-[#0B132B]/60 p-7 shadow-[0_0_30px_rgba(0,240,255,0.15)] backdrop-blur-xl transition-all duration-300">
        
        {/* Subtle Neon Top Highlight Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

        {/* Header Text */}
        <p className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
          {modalData?.text1}
        </p>

        {/* Subtext */}
        <p className="mt-3 mb-6 text-sm leading-relaxed text-cyan-200/80">
          {modalData?.text2}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-x-3">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            customClasses="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] active:scale-95"
          />
          <button
            className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
