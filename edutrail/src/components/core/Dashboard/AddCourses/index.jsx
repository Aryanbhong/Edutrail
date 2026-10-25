// // import React from 'react'
// // import { AiFillThunderbolt } from "react-icons/ai";
// // import RenderSteps from './RenderSteps';

// // const AddCourse = () => {
// //   return (
// //     <>
// //       <div  className="flex w-full items-start gap-x-6 overflow-x-hidden">
// //         <div className="flex flex-1 flex-col">
// //             <h1 className="mb-14 text-3xl font-medium text-richblack-5">
// //               Add Course
// //               </h1>
// //             <div className="flex-1">
// //                 <RenderSteps/>
// //             </div>
// //         </div>
// //         <div>
// //            <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
// //            <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          
// //             <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
// //                 <li>Set the Course Price options or make it free.</li>
// //                 <li>Standard size for the course thumbnail is 1024*576</li>
// //                 <li>Video section controls the course overview video.</li>
// //                 <li>Course Builder is where you create & organize a course.</li>
// //                 <li>Add topics to the course builder section to create lessons, quizzes ans assignments.</li>
// //                 <li>information from the Additional Data section shows up on the course single page.</li>
// //                 <li>Make Announcements to notify any important.</li>
// //                 <li>Notes to all enrolled students at once.</li>
// //             </ul>
// //             </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default AddCourse


// import React from 'react'
// import { AiFillThunderbolt } from "react-icons/ai"
// import RenderSteps from './RenderSteps'

// const AddCourse = () => {
//   return (
//     <div className="flex w-full items-start gap-x-8 overflow-x-hidden p-2 sm:p-4">
//       {/* Main Course Builder Column */}
//       <div className="flex flex-1 flex-col">
//         <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//           Add Course
//         </h1>
//         <div className="flex-1">
//           <RenderSteps />
//         </div>
//       </div>

//       {/* Course Upload Tips Sidebar Panel */}
//       <div className="hidden xl:block max-w-[380px] w-full shrink-0">
//         <div className="sticky top-10 relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)]">
          
//           {/* Ambient Top Glow Line */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//           {/* Tips Section Header */}
//           <div className="mb-6 flex items-center gap-x-2.5">
//             <div className="p-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
//               <AiFillThunderbolt className="text-xl drop-shadow-[0_0_6px_#00f0ff]" />
//             </div>
//             <p className="text-base font-bold tracking-wide text-white">
//               Course Upload Tips
//             </p>
//           </div>

//           {/* Tips List */}
//           <ul className="space-y-4 text-xs font-medium text-slate-300">
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Set the Course Price options or make it free.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Standard size for the course thumbnail is 1024x576.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Video section controls the course overview video.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Course Builder is where you create & organize a course.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Add topics to the course builder section to create lessons, quizzes and assignments.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Information from the Additional Data section shows up on the course single page.</span>
//             </li>
//             <li className="flex items-start gap-x-2.5 leading-relaxed">
//               <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
//               <span>Make Announcements to notify any important notes to enrolled students.</span>
//             </li>
//           </ul>

//           {/* Subtle Inner Ambient Glow */}
//           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 bg-cyan-500/10 blur-2xl pointer-events-none" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddCourse


import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiBookOpen, FiImage, FiVideo, FiLayers, FiBell, FiInfo } from "react-icons/fi";
import RenderSteps from "./RenderSteps";

const AddCourse = () => {
  const tips = [
    {
      icon: FiBookOpen,
      text: "Set the course price or make your course free.",
    },
    {
      icon: FiImage,
      text: "The recommended course thumbnail size is 1024 × 576.",
    },
    {
      icon: FiVideo,
      text: "The video section controls your course overview video.",
    },
    {
      icon: FiLayers,
      text: "Use the Course Builder to create and organize your course.",
    },
    {
      icon: FiBookOpen,
      text: "Add topics to create lessons, quizzes, and assignments.",
    },
    {
      icon: FiInfo,
      text: "Additional Data appears on your course details page.",
    },
    {
      icon: FiBell,
      text: "Use announcements to share important updates with enrolled students.",
    },
  ];

  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-[#09090b] font-sans text-zinc-100">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/[0.10] blur-[150px]" />
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-indigo-600/[0.08] blur-[160px]" />
        <div className="absolute -bottom-40 left-[30%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[150px]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] items-start gap-6 p-3 sm:gap-8 sm:p-6 lg:p-8 xl:gap-10">
        {/* Main Course Builder */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-7 sm:mb-9">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Instructor workspace
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Add Course
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
              Build your course, organize your lessons, and prepare it for
              your students.
            </p>
          </div>

          <div className="min-w-0 flex-1">
            <RenderSteps />
          </div>
        </div>

        {/* Course Upload Tips Sidebar */}
        <aside className="hidden w-full max-w-[330px] shrink-0 xl:block 2xl:max-w-[360px]">
          <div className="sticky top-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6">
            {/* Top accent */}
            <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

            {/* Sidebar heading */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
                <AiFillThunderbolt className="text-xl" />
              </div>

              <div>
                <h2 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  Course Upload Tips
                </h2>
                <p className="mt-0.5 text-xs text-zinc-500">
                  A quick guide for instructors
                </p>
              </div>
            </div>

            {/* Tips list */}
            <ul className="space-y-1">
              {tips.map((tip, index) => {
                const TipIcon = tip.icon;

                return (
                  <li
                    key={index}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-colors duration-200 group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08] group-hover:text-violet-300">
                      <TipIcon className="text-sm" />
                    </span>

                    <span className="pt-1 text-xs leading-5 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                      {tip.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Bottom note */}
            <div className="mt-5 rounded-xl border border-violet-400/10 bg-violet-500/[0.04] p-4">
              <p className="text-xs font-medium text-violet-200">
                <span className="mr-1.5">✦</span>
                Quality matters
              </p>
              <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                Clear course information and well-organized lessons help
                students get the most out of your content.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AddCourse;
