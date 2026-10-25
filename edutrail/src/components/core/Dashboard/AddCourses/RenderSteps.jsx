// // import React from 'react'
// // import { FaCheck } from 'react-icons/fa';
// // import { useSelector } from 'react-redux';
// // import CourseInformationForm from './CourseInformation/CourseInformationForm';
// // import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';
// // import PublishCourse from './PublishCourse/index';

// // const RenderSteps = () => {
// //     const { step } = useSelector((state) => state.course)

// //     const steps = [
// //       {
// //         id: 1,
// //         title: "Course Information",
// //       },
// //       {
// //         id: 2,
// //         title: "Course Builder",
// //       },
// //       {
// //         id: 3,
// //         title: "Publish",
// //       },
// //     ]
  
// //     return (
// //       <>
// //         <div className="relative mb-2 flex w-full justify-center">
// //           {steps.map((item) => (
// //             <React.Fragment key={item.id}>
// //               <div
// //                 className="flex flex-col items-center "
              
// //               >
// //                 <button
// //                   className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
// //                     step === item.id
// //                       ? "border-yellow-50 bg-yellow-900 text-yellow-50"
// //                       : "border-richblack-700 bg-richblack-800 text-richblack-300"
// //                   } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
// //                 >
// //                   {step > item.id ? (
// //                     <FaCheck className="font-bold text-richblack-900" />
// //                   ) : (
// //                     item.id
// //                   )}
// //                 </button>
                
// //               </div>
// //               {item.id !== steps.length && (
// //                 <>
// //                   <div
// //                     className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
// //                     step > item.id  ? "border-yellow-50" : "border-richblack-500"
// //                   } `}
// //                   ></div>
// //                 </>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </div>
  
// //         <div className="relative mb-16 flex w-full select-none justify-between">
// //           {steps.map((item) => (
// //             <React.Fragment key={item.id}>
// //               <div
// //                 className="flex min-w-[130px] flex-col items-center gap-y-2"
               
// //               >
                
// //                 <p
// //                   className={`text-sm ${
// //                     step >= item.id ? "text-richblack-5" : "text-richblack-500"
// //                   }`}
// //                 >
// //                   {item.title}
// //                 </p>
// //               </div>
              
// //             </React.Fragment>
// //           ))}
// //         </div>
// //         {/* Render specific component based on current step */}
// //         {step === 1 && <CourseInformationForm />}
// //        {step === 2 && <CourseBuilderForm />}
// //         {step === 3 &&  <PublishCourse /> } 
// //       </>
// //     )
// // }

// // export default RenderSteps



// import React from 'react'
// import { FaCheck } from 'react-icons/fa'
// import { useSelector } from 'react-redux'
// import CourseInformationForm from './CourseInformation/CourseInformationForm'
// import CourseBuilderForm from './CourseBuilder/CourseBuilderForm'
// import PublishCourse from './PublishCourse/index'

// const RenderSteps = () => {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     {
//       id: 1,
//       title: "Course Information",
//     },
//     {
//       id: 2,
//       title: "Course Builder",
//     },
//     {
//       id: 3,
//       title: "Publish",
//     },
//   ]

//   return (
//     <>
//       {/* Stepper Badges & Connecting Lines */}
//       <div className="relative mb-3 flex w-full justify-center items-center">
//         {steps.map((item) => (
//           <React.Fragment key={item.id}>
//             {/* Step Circle Badge */}
//             <div className="flex flex-col items-center z-10">
//               <button
//                 className={`grid cursor-default aspect-square w-[38px] place-items-center rounded-full border-2 font-bold text-sm transition-all duration-300 ${
//                   step === item.id
//                     ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_18px_rgba(0,240,255,0.6)]"
//                     : step > item.id
//                     ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_12px_#00f0ff]"
//                     : "border-slate-700/80 bg-[#030712] text-slate-500"
//                 }`}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-extrabold text-slate-950" />
//                 ) : (
//                   item.id
//                 )}
//               </button>
//             </div>

//             {/* Connecting Dashed Line */}
//             {item.id !== steps.length && (
//               <div
//                 className={`h-[1px] w-[30%] border-dashed border-b-2 transition-all duration-300 ${
//                   step > item.id
//                     ? "border-cyan-400/80 shadow-[0_0_8px_#00f0ff]"
//                     : "border-slate-800"
//                 }`}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       {/* Step Titles */}
//       <div className="relative mb-12 flex w-full select-none justify-between px-2">
//         {steps.map((item) => (
//           <div
//             key={item.id}
//             className="flex min-w-[120px] sm:min-w-[140px] flex-col items-center text-center"
//           >
//             <p
//               className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 ${
//                 step === item.id
//                   ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
//                   : step > item.id
//                   ? "text-slate-100"
//                   : "text-slate-500"
//               }`}
//             >
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Dynamic Step Component Content */}
//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }

// export default RenderSteps



import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import PublishCourse from "./PublishCourse/index";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
      description: "Basic details",
    },
    {
      id: 2,
      title: "Course Builder",
      description: "Add your content",
    },
    {
      id: 3,
      title: "Publish",
      description: "Go live",
    },
  ];

  return (
    <div className="w-full min-w-0 font-sans">
      {/* Stepper */}
      <div className="mb-8 rounded-2xl border border-white/[0.07] bg-[#111114]/80 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.15)] sm:mb-10 sm:p-6">
        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-between">
          {steps.map((item, index) => {
            const isActive = step === item.id;
            const isCompleted = step > item.id;

            return (
              <React.Fragment key={item.id}>
                {/* Step */}
                <div className="relative z-10 flex min-w-0 flex-col items-center">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-semibold transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${
                      isActive
                        ? "border-violet-400/40 bg-violet-500/[0.14] text-violet-200 shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                        : isCompleted
                        ? "border-violet-400/30 bg-violet-500 text-white"
                        : "border-white/[0.08] bg-[#0b0b0e] text-zinc-500"
                    }`}
                  >
                    {isCompleted ? (
                      <FaCheck className="text-sm" />
                    ) : (
                      item.id
                    )}
                  </div>

                  <div className="mt-3 w-[90px] text-center sm:w-36">
                    <p
                      className={`text-[11px] font-semibold leading-4 transition-colors duration-300 sm:text-sm ${
                        isActive
                          ? "text-white"
                          : isCompleted
                          ? "text-violet-300"
                          : "text-zinc-500"
                      }`}
                    >
                      {item.title}
                    </p>

                    <p className="mt-1 hidden text-xs text-zinc-600 sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="mx-1 mb-10 h-px min-w-4 flex-1 overflow-hidden bg-white/[0.08] sm:mx-3">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isCompleted
                          ? "w-full bg-gradient-to-r from-violet-500 to-indigo-400"
                          : "w-0"
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active step content */}
      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111114]/70 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.16)] sm:p-5 lg:p-7">
        <div className="pointer-events-none absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

        {step === 1 && <CourseInformationForm />}
        {step === 2 && <CourseBuilderForm />}
        {step === 3 && <PublishCourse />}
      </div>
    </div>
  );
};

export default RenderSteps;

