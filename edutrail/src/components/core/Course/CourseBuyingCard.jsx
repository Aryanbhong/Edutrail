// // import React, { useEffect, useRef, useState } from 'react'
// // import { AiOutlineDown } from "react-icons/ai"
// // import { PiCourtBasketballDuotone } from 'react-icons/pi'
// // import CourseBuyingSubSection from './CourseBuyingSubSection'

// // const CourseBuyingCard = ({ course, isActive, handleActive }) => {
// //     const contentEl = useRef(null)
  
// //     // Accordian state
// //     const [active, setActive] = useState(false)
// //     useEffect(() => {
// //       setActive(isActive?.includes(course._id))
// //     }, [isActive])
// //     const [sectionHeight, setSectionHeight] = useState(0)
// //     useEffect(() => {
// //       setSectionHeight(active ? contentEl.current.scrollHeight : 0)
// //     }, [active])
    
  
// //     return (
// //       <div className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0">
// //         <div>
// //           <div
// //             className={`flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]`}
// //             onClick={() => {
// //               handleActive(course._id)
// //             }}
// //           >
// //             <div className="flex items-center gap-2">
// //               <i
// //                 className={
// //                   isActive.includes(course._id) ? "rotate-180" : "rotate-0"
// //                 }
// //               >
// //                 <AiOutlineDown />
// //               </i>
// //               <p>{course?.sectionName}</p>
// //             </div>
// //             <div className="space-x-4">
// //               <span className="text-yellow-25">
// //                 {`${course.subSection.length || 0} lecture(s)`}
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           ref={contentEl}
// //           className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
// //           style={{
// //             height: sectionHeight,
// //           }}
// //         >
// //           <div className="text-textHead flex flex-col gap-2 px-7 py-6 font-semibold">
// //             {course?.subSection?.map((subSec, i) => {
// //              return <CourseBuyingSubSection subSec={subSec} key={i}/>
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     )
// // }

// // export default CourseBuyingCard


// import React, { useEffect, useRef, useState } from 'react'
// import { AiOutlineDown } from "react-icons/ai"
// import CourseBuyingSubSection from './CourseBuyingSubSection'

// const CourseBuyingCard = ({ course, isActive, handleActive }) => {
//   const contentEl = useRef(null)

//   // Accordion state
//   const [active, setActive] = useState(false)

//   useEffect(() => {
//     setActive(isActive?.includes(course?._id))
//   }, [isActive, course?._id])

//   const [sectionHeight, setSectionHeight] = useState(0)

//   useEffect(() => {
//     setSectionHeight(active ? contentEl.current?.scrollHeight : 0)
//   }, [active])

//   return (
//     <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0B132B]/60 text-slate-100 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 shadow-[0_0_20px_rgba(0,0,0,0.4)] my-3">
//       {/* Accordion Header */}
//       <div>
//         <div
//           className={`flex cursor-pointer items-center justify-between px-6 py-4.5 transition-all duration-300 select-none ${
//             active 
//               ? "bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
//               : "hover:bg-slate-900/40 hover:text-cyan-200"
//           }`}
//           onClick={() => handleActive(course?._id)}
//         >
//           <div className="flex items-center gap-3 font-semibold text-sm sm:text-base tracking-wide">
//             <span
//               className={`text-cyan-400 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] ${
//                 active ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               <AiOutlineDown className="text-base" />
//             </span>
//             <p className="truncate">{course?.sectionName}</p>
//           </div>

//           <div className="flex items-center space-x-4">
//             <span className="text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.15)]">
//               {`${course?.subSection?.length || 0} lecture(s)`}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Accordion Body */}
//       <div
//         ref={contentEl}
//         className="relative h-0 overflow-hidden bg-[#030712]/80 transition-[height] duration-300 ease-in-out border-t border-cyan-500/10"
//         style={{
//           height: sectionHeight,
//         }}
//       >
//         <div className="flex flex-col gap-2 p-5 font-medium text-slate-300">
//           {course?.subSection?.map((subSec, i) => (
//             <CourseBuyingSubSection subSec={subSec} key={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseBuyingCard



import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import CourseBuyingSubSection from "./CourseBuyingSubSection";

const CourseBuyingCard = ({ course, isActive, handleActive }) => {
  const contentEl = useRef(null);
  const [active, setActive] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    setActive(isActive?.includes(course?._id));
  }, [isActive, course?._id]);

  useEffect(() => {
    setSectionHeight(
      active ? contentEl.current?.scrollHeight || 0 : 0
    );
  }, [active, course?.subSection]);

  return (
    <div
      className={`my-3 overflow-hidden rounded-2xl border bg-[#111114] font-sans text-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ${
        active
          ? "border-violet-400/25 shadow-[0_8px_30px_rgba(109,40,217,0.06)]"
          : "border-white/[0.08] hover:border-white/[0.14]"
      }`}
    >
      {/* Accordion Header */}
      <button
        type="button"
        className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 sm:px-5 sm:py-5 ${
          active
            ? "bg-violet-500/[0.04]"
            : "bg-transparent hover:bg-white/[0.02]"
        }`}
        onClick={() => handleActive(course?._id)}
        aria-expanded={active}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
              active
                ? "rotate-180 border-violet-400/20 bg-violet-500/10 text-violet-300"
                : "border-white/[0.08] bg-white/[0.03] text-zinc-500"
            }`}
          >
            <AiOutlineDown className="text-sm" />
          </span>

          <div className="min-w-0">
            <p
              className={`truncate text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base ${
                active
                  ? "text-violet-100"
                  : "text-zinc-200 group-hover:text-white"
              }`}
            >
              {course?.sectionName}
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Course section
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide sm:px-3 sm:text-xs ${
            active
              ? "border-violet-400/20 bg-violet-500/[0.08] text-violet-300"
              : "border-white/[0.08] bg-white/[0.03] text-zinc-400"
          }`}
        >
          {course?.subSection?.length || 0} lectures
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: sectionHeight }}
        aria-hidden={!active}
      >
        <div
          ref={contentEl}
          className="border-t border-white/[0.07] bg-[#0c0c0f]"
        >
          {course?.subSection?.length > 0 ? (
            <div className="flex flex-col gap-2 p-3 sm:p-4">
              {course.subSection.map((subSec, index) => (
                <CourseBuyingSubSection
                  subSec={subSec}
                  key={subSec?._id || index}
                />
              ))}
            </div>
          ) : (
            <p className="px-5 py-6 text-center text-sm text-zinc-500">
              No lectures available in this section yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBuyingCard;

