// import React from 'react'
// import { AiFillThunderbolt } from "react-icons/ai";
// import RenderSteps from './RenderSteps';

// const AddCourse = () => {
//   return (
//     <>
//       <div  className="flex w-full items-start gap-x-6 overflow-x-hidden">
//         <div className="flex flex-1 flex-col">
//             <h1 className="mb-14 text-3xl font-medium text-richblack-5">
//               Add Course
//               </h1>
//             <div className="flex-1">
//                 <RenderSteps/>
//             </div>
//         </div>
//         <div>
//            <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
//            <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          
//             <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
//                 <li>Set the Course Price options or make it free.</li>
//                 <li>Standard size for the course thumbnail is 1024*576</li>
//                 <li>Video section controls the course overview video.</li>
//                 <li>Course Builder is where you create & organize a course.</li>
//                 <li>Add topics to the course builder section to create lessons, quizzes ans assignments.</li>
//                 <li>information from the Additional Data section shows up on the course single page.</li>
//                 <li>Make Announcements to notify any important.</li>
//                 <li>Notes to all enrolled students at once.</li>
//             </ul>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddCourse


import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai"
import RenderSteps from './RenderSteps'

const AddCourse = () => {
  return (
    <div className="flex w-full items-start gap-x-8 overflow-x-hidden p-2 sm:p-4">
      {/* Main Course Builder Column */}
      <div className="flex flex-1 flex-col">
        <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          Add Course
        </h1>
        <div className="flex-1">
          <RenderSteps />
        </div>
      </div>

      {/* Course Upload Tips Sidebar Panel */}
      <div className="hidden xl:block max-w-[380px] w-full shrink-0">
        <div className="sticky top-10 relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)]">
          
          {/* Ambient Top Glow Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

          {/* Tips Section Header */}
          <div className="mb-6 flex items-center gap-x-2.5">
            <div className="p-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              <AiFillThunderbolt className="text-xl drop-shadow-[0_0_6px_#00f0ff]" />
            </div>
            <p className="text-base font-bold tracking-wide text-white">
              Course Upload Tips
            </p>
          </div>

          {/* Tips List */}
          <ul className="space-y-4 text-xs font-medium text-slate-300">
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Set the Course Price options or make it free.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Standard size for the course thumbnail is 1024x576.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Video section controls the course overview video.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Course Builder is where you create & organize a course.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Add topics to the course builder section to create lessons, quizzes and assignments.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Information from the Additional Data section shows up on the course single page.</span>
            </li>
            <li className="flex items-start gap-x-2.5 leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
              <span>Make Announcements to notify any important notes to enrolled students.</span>
            </li>
          </ul>

          {/* Subtle Inner Ambient Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 bg-cyan-500/10 blur-2xl pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default AddCourse

