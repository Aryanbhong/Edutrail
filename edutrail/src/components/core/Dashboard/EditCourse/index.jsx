// // import React, { useEffect, useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { useParams } from 'react-router-dom';
// // import RenderSteps from '../AddCourses/RenderSteps';
// // import { getFullDetailsOfCourse } from '../../../../services/opreations/courseDetails';
// // import { setCourse, setEditCourse, setPaymentLoading } from '../../../../slices/courseSlice';
// // import { SiNextbilliondotai } from 'react-icons/si';

// // const EditCourse = () => {

// //     const dispatch = useDispatch();
// //     const {courseId} = useParams();
// //     const {course} = useSelector((state) => state.course);
// //     const [loading,setLoading] = useState(false);
// //     const {token} = useSelector((state) => state.auth);

// //    useEffect(()=>{
// //     const populateCourseDetails = async()=>{
// //         setLoading(true);
// //         const result = await getFullDetailsOfCourse(courseId, token);
// //         if(result?.courseDetails){
// //             dispatch(setEditCourse(true));
// //             dispatch(setCourse(result?.courseDetails));
// //         }
// //         setLoading(false);
// //     }
// //     populateCourseDetails();
// //    },[])

// //   return (
// //     <div>
// //       <h1 className="mb-14 text-3xl font-medium text-richblack-5">
// //         Edit Course
// //         </h1>
// //       <div className="mx-auto max-w-[600px]">
// //         {
// //             course ? (<RenderSteps/>): 
// //             (
// //             <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
// //               Course Not Found
// //             </p>
// //           )
// //         }
// //       </div>
// //     </div>
// //   )
// // }

// // export default EditCourse


// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import RenderSteps from '../AddCourses/RenderSteps'
// import { getFullDetailsOfCourse } from '../../../../services/opreations/courseDetails'
// import { setCourse, setEditCourse } from '../../../../slices/courseSlice'

// const EditCourse = () => {
//   const dispatch = useDispatch()
//   const { courseId } = useParams()
//   const { course } = useSelector((state) => state.course)
//   const [loading, setLoading] = useState(false)
//   const { token } = useSelector((state) => state.auth)

//   useEffect(() => {
//     const populateCourseDetails = async () => {
//       setLoading(true)
//       const result = await getFullDetailsOfCourse(courseId, token)
//       if (result?.courseDetails) {
//         dispatch(setEditCourse(true))
//         dispatch(setCourse(result?.courseDetails))
//       }
//       setLoading(false)
//     }
//     populateCourseDetails()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   if (loading) {
//     return (
//       <div className="grid min-h-[calc(100vh-10rem)] place-items-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
//           <p className="text-sm font-semibold tracking-wider text-cyan-300 animate-pulse">
//             Loading Course Details...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="w-full p-2 sm:p-4">
//       {/* Title */}
//       <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         Edit Course
//       </h1>

//       {/* Main Content Area */}
//       <div className="mx-auto max-w-[650px]">
//         {course ? (
//           <RenderSteps />
//         ) : (
//           <div className="my-14 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.5)]">
//             <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-wide">
//               Course Not Found
//             </p>
//             <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/70">
//               The requested course could not be retrieved or does not exist.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default EditCourse


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import RenderSteps from '../AddCourses/RenderSteps'
import { getFullDetailsOfCourse } from '../../../../services/opreations/courseDetails'
import { setCourse, setEditCourse } from '../../../../slices/courseSlice'

const EditCourse = () => {
  const dispatch = useDispatch()
  const { courseId } = useParams()
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    const populateCourseDetails = async () => {
      setLoading(true)
      const result = await getFullDetailsOfCourse(courseId, token)
      if (result?.courseDetails) {
        dispatch(setEditCourse(true))
        dispatch(setCourse(result?.courseDetails))
      }
      setLoading(false)
    }
    populateCourseDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-10rem)] place-items-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-white/10 border-t-white animate-spin" />
          <p className="text-sm font-medium tracking-tight text-[#9A9A9E] animate-pulse">
            Loading Course Details...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-2 sm:p-4 font-sans">
      {/* Title */}
      <h1 className="mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Edit Course
      </h1>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[650px]">
        {course ? (
          <RenderSteps />
        ) : (
          <div className="my-14 flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#121216]/90 p-12 text-center backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Course Not Found
            </p>
            <p className="mt-2 text-xs sm:text-sm font-normal text-[#9A9A9E]">
              The requested course could not be retrieved or does not exist.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditCourse
