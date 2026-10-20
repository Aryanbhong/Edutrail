// import React, { useEffect, useRef, useState } from 'react'
// import { AiOutlineDown } from "react-icons/ai"
// import { PiCourtBasketballDuotone } from 'react-icons/pi'
// import CourseBuyingSubSection from './CourseBuyingSubSection'

// const CourseBuyingCard = ({ course, isActive, handleActive }) => {
//     const contentEl = useRef(null)
  
//     // Accordian state
//     const [active, setActive] = useState(false)
//     useEffect(() => {
//       setActive(isActive?.includes(course._id))
//     }, [isActive])
//     const [sectionHeight, setSectionHeight] = useState(0)
//     useEffect(() => {
//       setSectionHeight(active ? contentEl.current.scrollHeight : 0)
//     }, [active])
    
  
//     return (
//       <div className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0">
//         <div>
//           <div
//             className={`flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]`}
//             onClick={() => {
//               handleActive(course._id)
//             }}
//           >
//             <div className="flex items-center gap-2">
//               <i
//                 className={
//                   isActive.includes(course._id) ? "rotate-180" : "rotate-0"
//                 }
//               >
//                 <AiOutlineDown />
//               </i>
//               <p>{course?.sectionName}</p>
//             </div>
//             <div className="space-x-4">
//               <span className="text-yellow-25">
//                 {`${course.subSection.length || 0} lecture(s)`}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div
//           ref={contentEl}
//           className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
//           style={{
//             height: sectionHeight,
//           }}
//         >
//           <div className="text-textHead flex flex-col gap-2 px-7 py-6 font-semibold">
//             {course?.subSection?.map((subSec, i) => {
//              return <CourseBuyingSubSection subSec={subSec} key={i}/>
//             })}
//           </div>
//         </div>
//       </div>
//     )
// }

// export default CourseBuyingCard


import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from "react-icons/ai"
import CourseBuyingSubSection from './CourseBuyingSubSection'

const CourseBuyingCard = ({ course, isActive, handleActive }) => {
  const contentEl = useRef(null)

  // Accordion state
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(isActive?.includes(course?._id))
  }, [isActive, course?._id])

  const [sectionHeight, setSectionHeight] = useState(0)

  useEffect(() => {
    setSectionHeight(active ? contentEl.current?.scrollHeight : 0)
  }, [active])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0B132B]/60 text-slate-100 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 shadow-[0_0_20px_rgba(0,0,0,0.4)] my-3">
      {/* Accordion Header */}
      <div>
        <div
          className={`flex cursor-pointer items-center justify-between px-6 py-4.5 transition-all duration-300 select-none ${
            active 
              ? "bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
              : "hover:bg-slate-900/40 hover:text-cyan-200"
          }`}
          onClick={() => handleActive(course?._id)}
        >
          <div className="flex items-center gap-3 font-semibold text-sm sm:text-base tracking-wide">
            <span
              className={`text-cyan-400 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] ${
                active ? "rotate-180" : "rotate-0"
              }`}
            >
              <AiOutlineDown className="text-base" />
            </span>
            <p className="truncate">{course?.sectionName}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.15)]">
              {`${course?.subSection?.length || 0} lecture(s)`}
            </span>
          </div>
        </div>
      </div>

      {/* Accordion Body */}
      <div
        ref={contentEl}
        className="relative h-0 overflow-hidden bg-[#030712]/80 transition-[height] duration-300 ease-in-out border-t border-cyan-500/10"
        style={{
          height: sectionHeight,
        }}
      >
        <div className="flex flex-col gap-2 p-5 font-medium text-slate-300">
          {course?.subSection?.map((subSec, i) => (
            <CourseBuyingSubSection subSec={subSec} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseBuyingCard
