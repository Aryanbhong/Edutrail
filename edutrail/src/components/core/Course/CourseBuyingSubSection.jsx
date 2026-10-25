// // import React from 'react'

// // import { HiOutlineVideoCamera } from "react-icons/hi"


// // const CourseBuyingSubSection = ({ subSec }) => {
// //     return (
// //         <div>
// //           <div className="flex justify-between py-2">
// //             <div className={`flex items-center gap-2`}>
// //               <span>
// //                 <HiOutlineVideoCamera />
// //               </span>
// //               <p>{subSec?.title}</p>
// //             </div>
// //           </div>
// //         </div>
// //       )
// // }

// // export default CourseBuyingSubSection;


// import React from 'react'
// import { HiOutlineVideoCamera } from "react-icons/hi"

// const CourseBuyingSubSection = ({ subSec }) => {
//   return (
//     <div className="group relative flex items-center justify-between rounded-xl border border-cyan-500/10 bg-[#0B132B]/40 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] my-1">
//       {/* Left Active Accent Bar */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-transparent group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff] transition-all duration-300 rounded-r-full" />

//       <div className="flex items-center gap-x-3">
//         {/* Glowing Camera Icon Badge */}
//         <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_12px_#00f0ff] transition-all duration-300">
//           <HiOutlineVideoCamera className="text-base" />
//         </div>

//         {/* Title */}
//         <p className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-cyan-200 transition-colors duration-200 tracking-wide">
//           {subSec?.title}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default CourseBuyingSubSection;



import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

const CourseBuyingSubSection = ({ subSec }) => {
  return (
    <div className="group relative my-1 flex items-center justify-between overflow-hidden rounded-xl border border-white/[0.06] bg-[#111114]/80 px-3 py-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#17151d] sm:px-4">
      {/* Hover Accent */}
      <div className="absolute bottom-2 left-0 top-2 w-[2px] rounded-r-full bg-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex min-w-0 items-center gap-3">
        {/* Video Icon */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08] group-hover:text-violet-300">
          <HiOutlineVideoCamera className="text-lg" />
        </div>

        {/* Lecture Title */}
        <p className="line-clamp-2 text-xs font-medium leading-5 tracking-tight text-zinc-400 transition-colors duration-300 group-hover:text-zinc-100 sm:text-sm">
          {subSec?.title}
        </p>
      </div>

      {/* Lecture Indicator */}
      <span className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-violet-400" />
    </div>
  );
};

export default CourseBuyingSubSection;
