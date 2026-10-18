// import React from 'react'
// import { FaCheck } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import CourseInformationForm from './CourseInformation/CourseInformationForm';
// import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';
// import PublishCourse from './PublishCourse/index';

// const RenderSteps = () => {
//     const { step } = useSelector((state) => state.course)

//     const steps = [
//       {
//         id: 1,
//         title: "Course Information",
//       },
//       {
//         id: 2,
//         title: "Course Builder",
//       },
//       {
//         id: 3,
//         title: "Publish",
//       },
//     ]
  
//     return (
//       <>
//         <div className="relative mb-2 flex w-full justify-center">
//           {steps.map((item) => (
//             <React.Fragment key={item.id}>
//               <div
//                 className="flex flex-col items-center "
              
//               >
//                 <button
//                   className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                     step === item.id
//                       ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                       : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                   } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
//                 >
//                   {step > item.id ? (
//                     <FaCheck className="font-bold text-richblack-900" />
//                   ) : (
//                     item.id
//                   )}
//                 </button>
                
//               </div>
//               {item.id !== steps.length && (
//                 <>
//                   <div
//                     className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
//                     step > item.id  ? "border-yellow-50" : "border-richblack-500"
//                   } `}
//                   ></div>
//                 </>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
  
//         <div className="relative mb-16 flex w-full select-none justify-between">
//           {steps.map((item) => (
//             <React.Fragment key={item.id}>
//               <div
//                 className="flex min-w-[130px] flex-col items-center gap-y-2"
               
//               >
                
//                 <p
//                   className={`text-sm ${
//                     step >= item.id ? "text-richblack-5" : "text-richblack-500"
//                   }`}
//                 >
//                   {item.title}
//                 </p>
//               </div>
              
//             </React.Fragment>
//           ))}
//         </div>
//         {/* Render specific component based on current step */}
//         {step === 1 && <CourseInformationForm />}
//        {step === 2 && <CourseBuilderForm />}
//         {step === 3 &&  <PublishCourse /> } 
//       </>
//     )
// }

// export default RenderSteps



import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import CourseInformationForm from './CourseInformation/CourseInformationForm'
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm'
import PublishCourse from './PublishCourse/index'

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course)

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ]

  return (
    <>
      {/* Stepper Badges & Connecting Lines */}
      <div className="relative mb-3 flex w-full justify-center items-center">
        {steps.map((item) => (
          <React.Fragment key={item.id}>
            {/* Step Circle Badge */}
            <div className="flex flex-col items-center z-10">
              <button
                className={`grid cursor-default aspect-square w-[38px] place-items-center rounded-full border-2 font-bold text-sm transition-all duration-300 ${
                  step === item.id
                    ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_18px_rgba(0,240,255,0.6)]"
                    : step > item.id
                    ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-[0_0_12px_#00f0ff]"
                    : "border-slate-700/80 bg-[#030712] text-slate-500"
                }`}
              >
                {step > item.id ? (
                  <FaCheck className="font-extrabold text-slate-950" />
                ) : (
                  item.id
                )}
              </button>
            </div>

            {/* Connecting Dashed Line */}
            {item.id !== steps.length && (
              <div
                className={`h-[1px] w-[30%] border-dashed border-b-2 transition-all duration-300 ${
                  step > item.id
                    ? "border-cyan-400/80 shadow-[0_0_8px_#00f0ff]"
                    : "border-slate-800"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Titles */}
      <div className="relative mb-12 flex w-full select-none justify-between px-2">
        {steps.map((item) => (
          <div
            key={item.id}
            className="flex min-w-[120px] sm:min-w-[140px] flex-col items-center text-center"
          >
            <p
              className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                step === item.id
                  ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                  : step > item.id
                  ? "text-slate-100"
                  : "text-slate-500"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Dynamic Step Component Content */}
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />}
    </>
  )
}

export default RenderSteps

