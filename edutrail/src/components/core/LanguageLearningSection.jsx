// import React from "react";
// import progress from "../../assets/images/Know_your_progress.png";
// import lessons from "../../assets/images/Plan_your_lessons.png";
// import compare from "../../assets/images/compare.png";
// import CButton from "../core/Button";



// const LanguageLearning=()=>{
//     return(
//         <div className="mt-[130px] mb-32 ">
//           <div className="flex flex-col gap-5 items-center">
              
//               <div className="text-4xl font-semibold text-center">
//                 Your Swiss Knife for <span className="text-blue-400"> learning any language</span>
//               </div>

//               <div className="text-center text-richblack-500 mx-auto text-base w-[70%] font-medium">
//                 Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
//                 progress tracking custom schedule and more.
//               </div>

//            <div className="flex flex-row items-center justify-center mt-5">
//             <img
//              src={progress}
//              alt="know your progress"
//              className="object-contain -mr-32"
//             />
//              <img
//              src={compare}
//              alt="know your progress"
//              className="object-contain"
//             />
//              <img
//              src={lessons}
//              alt="know your progress"
//              className="object-contain -ml-36"
//             />
//            </div>

//            <div className="w-fit mb-9">
//             <CButton active={true} linkto={"/signup"}>
//              <div>Learn More</div>
//             </CButton>
//            </div>
          

//           </div>
//       </div>
//     )
// }
// export default LanguageLearning

import React from "react"
import progress from "../../assets/images/Know_your_progress.png"
import lessons from "../../assets/images/Plan_your_lessons.png"
import compare from "../../assets/images/compare.png"
import CButton from "../core/Button"

const LanguageLearning = () => {
  return (
    <div className="mt-24 mb-32 w-full">
      <div className="relative flex flex-col gap-8 items-center rounded-3xl border border-cyan-500/30 bg-[#0B132B]/80 p-8 sm:p-16 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        {/* Header Content */}
        <div className="text-center space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            Your Swiss Knife for <span className="text-cyan-400">learning any language</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            Using spin making learning multiple languages easy. With 20+ languages, realistic voice-overs,
            progress tracking, custom schedules, and more.
          </p>
        </div>

        {/* Feature Images Stack */}
        <div className="flex flex-col lg:flex-row items-center justify-center my-6 max-w-5xl">
          <img
            src={progress}
            alt="Know your progress"
            className="object-contain lg:-mr-32 z-10 transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          />
          <img
            src={compare}
            alt="Compare progress"
            className="object-contain z-20 my-4 lg:my-0 transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]"
          />
          <img
            src={lessons}
            alt="Plan your lessons"
            className="object-contain lg:-ml-36 z-10 transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          />
        </div>

        {/* CTA Button */}
        <div className="w-fit pt-4">
          <CButton active={true} linkto={"/signup"}>
            <span className="tracking-wide">Learn More</span>
          </CButton>
        </div>

      </div>
    </div>
  )
}

export default LanguageLearning
