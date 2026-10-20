// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { getUserEnrolledCourses } from '../../../../services/opreations/profileApis';
// import ProgressBar from '@ramonak/react-progress-bar';
// import { useNavigate } from 'react-router-dom';

// const EnrolledCourses = () => {
//     const navigate = useNavigate();
//     const {token} = useSelector((state) => state.auth);
//     const [enrolledCourses, setEnrolledCourses] = useState(null);
//     // console.log(token);
//     const getEnrolledCourses= async() =>{
//         try{
//          const response = await getUserEnrolledCourses(token);
//          setEnrolledCourses(response);
//         }
//         catch(error){
//             console.log("Unable to Fetch Enrolled Courses");
//         }
//     }

//     useEffect(()=>{
//         getEnrolledCourses();
//     },[])
//     console.log(" enrolledcourses ka data toh mil gaya bhaii", enrolledCourses)
//   return (

//     <>
//     <div className="text-3xl text-richblack-50">Enrolled Courses</div>
//     {!enrolledCourses ? (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     ) : !enrolledCourses.length ? (
//       <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
//         You have not enrolled in any course yet.
//         {/* TODO: Modify this Empty State */}
//       </p>
//     ) : (
//       <div className="my-8 text-richblack-5">
//         {/* Headings */}
//         <div className="flex rounded-t-lg bg-richblack-500 ">
//           <p className="w-[45%] px-5 py-3">Course Name</p>
//           <p className="w-1/4 px-2 py-3">Duration</p>
//           <p className="flex-1 px-2 py-3">Progress</p>
//         </div>
//         {/* Course Names */}
//         {enrolledCourses.map((course, i, arr) => (
//           <div
//             className={`flex items-center border border-richblack-700 ${
//               i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
//             }`}
//             key={i}
//           >
//             <div
//               className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
//               onClick={() => {
//                 navigate(
//                   `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
//                 )
//               }}
//             >
//               <img
//                 src={course.thumbnail}
//                 alt="course_img"
//                 className="h-14 w-14 rounded-lg object-cover"
//               />
//               <div className="flex max-w-xs flex-col gap-2">
//                 <p className="font-semibold">{course.courseName}</p>
//                 <p className="text-xs text-richblack-300">
//                   {course.courseDescription.length > 50
//                     ? `${course.courseDescription.slice(0, 50)}...`
//                     : course.courseDescription}
//                 </p>
//               </div>
//             </div>
//             <div className="w-1/4 px-2 py-3">{course?.totalDuration}</div>
//             <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
//               <p>Progress: {course.progressPercentage || 0}%</p>
//               <ProgressBar
//                 completed={course.progressPercentage || 0}
//                 height="8px"
//                 isLabelVisible={false}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     )}
//   </>
//   )
// }
// export default EnrolledCourses

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../../services/opreations/profileApis'
import ProgressBar from '@ramonak/react-progress-bar'
import { useNavigate } from 'react-router-dom'

const EnrolledCourses = () => {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [enrolledCourses, setEnrolledCourses] = useState(null)

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token)
      setEnrolledCourses(response)
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses")
    }
  }

  useEffect(() => {
    getEnrolledCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        Enrolled Courses
      </h1>

      {!enrolledCourses ? (
        <div className="grid min-h-[350px] place-items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
              Loading Enrolled Courses...
            </p>
          </div>
        </div>
      ) : !enrolledCourses.length ? (
        <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <p className="text-2xl font-bold text-slate-200 tracking-wide">
            You have not enrolled in any course yet
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/70">
            Browse our course catalog to begin your learning journey.
          </p>
        </div>
      ) : (
        <div className="relative my-8 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)]">
          {/* Ambient Top Glow Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

          {/* Table Headings */}
          <div className="flex border-b border-cyan-500/20 bg-[#030712]/70 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <p className="w-[45%] px-6 py-4">Course Name</p>
            <p className="w-1/4 px-4 py-4">Duration</p>
            <p className="flex-1 px-6 py-4">Progress</p>
          </div>

          {/* Course Items */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              key={i}
              className={`flex items-center border-b border-slate-800/80 transition-all duration-300 hover:bg-cyan-950/20 ${
                i === arr.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Course Info */}
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-6 py-4 group"
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                }}
              >
                <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 shrink-0 shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-14 w-14 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex max-w-xs flex-col gap-1">
                  <p className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {course.courseName}
                  </p>
                  <p className="text-xs font-medium text-slate-400 line-clamp-1">
                    {course.courseDescription}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="w-1/4 px-4 py-4 text-xs sm:text-sm font-medium text-slate-300">
                {course?.totalDuration || "N/A"}
              </div>

              {/* Progress Bar */}
              <div className="flex w-1/5 flex-col gap-1.5 px-6 py-4">
                <p className="text-xs font-semibold text-cyan-300">
                  Progress: {course.progressPercentage || 0}%
                </p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                  bgColor="#00f0ff"
                  baseBgColor="#030712"
                  borderRadius="9999px"
                  className="shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EnrolledCourses
