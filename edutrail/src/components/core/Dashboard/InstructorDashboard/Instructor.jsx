// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails';
// import { getInstructorData } from '../../../../services/opreations/profileApis';
// import { Link } from 'react-router-dom';
// import InstructorAnalysis from './InstructorAnalysis';

// const Instructor = () => {
//     const {user} = useSelector((state) => state.profile)
//     const {token }= useSelector((state) => state.auth)
//     const [loading , setLoading] = useState(false);
//     const [instructorData , setInstructorData] = useState(null);
//     const [ courses, setCourses] = useState([]);

//     useEffect(()=>{
//      const getCourseStatsData = async()=>{
//      setLoading(true);
//      const instructorOverAllData = await getInstructorData(token);
//      const result= await fetchInstructorCourses(token);
//    console.log(" result ka data..", result)
//      console.log(" instructor ka data" , instructorOverAllData);

//      if(instructorOverAllData.length){
//         setInstructorData(instructorOverAllData);
//      }

//      if(result){
//         setCourses(result);    
//      }
//      setLoading(false);
//      }
    
//      getCourseStatsData();
//     },[])

//     const totalAmount = instructorData?.reduce((acc,curr) => acc + curr.totalAmountGenerated, 0);
//     const totalStudents = instructorData?.reduce((acc,curr) => acc + curr.totalStudentsEnrolled, 0);
//   return (
//     <div>
//       <div className="space-y-2">
//         <h1 className="text-2xl font-bold text-richblack-5">
//             Hi {user?.firstName}🤟
//             </h1>
//         <p className="font-medium text-richblack-200">
//             Let's Start something new
//             </p>
//       </div>

//       {loading 
//       ? (<div> loading..</div>)
//       : courses.length > 0
//       ? (
//         <div>
//             <div div className="my-4 flex h-[450px] space-x-4">
            
//             {totalAmount > 0 || totalStudents > 0 ? (
//                 <InstructorAnalysis courses={instructorData} />
//               ) : (
//                 <div className="flex-1 rounded-md bg-richblack-800 p-6">
//                   <p className="text-lg font-bold text-richblack-5">Visualize</p>
//                   <p className="mt-4 text-xl font-medium text-richblack-50">
//                     Not Enough Data To Visualize
//                   </p>
//                 </div>
//               )}

//                 <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
//                     <p className="text-lg font-bold text-richblack-5">Statistics</p>
//                     <div className="mt-4 space-y-4">
//                         <p className="text-lg text-richblack-200">Total Courses</p>
//                         <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
//                     </div>

//                     <div>
//                         <p  className="text-lg text-richblack-200" >Total Students </p>
//                         <p  className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
//                     </div>

//                     <div>
//                         <p className="text-lg text-richblack-200">Total Income</p>
//                         <p className="text-3xl font-semibold text-richblack-50">{totalAmount}</p>
//                     </div>
//                 </div>
            
//         </div>
//          <div className="rounded-md bg-richblack-800 p-6">
//          {/* Render 3 courses */}
//          <div className="flex items-center justify-between">
//            <p className="text-lg font-bold text-richblack-5">Your Courses</p>
//            <Link to="/dashboard/my-courses">
//              <p className="text-xs font-semibold text-yellow-50">View All</p>
//            </Link>
//          </div>
//          <div className="my-4 flex items-start space-x-6">
//            {courses.slice(0, 3).map((course) => (
//              <div key={course._id} className="w-1/3">
//                <img
//                  src={course.thumbnail}
//                  alt={course.courseName}
//                  className="h-[201px] w-full rounded-md object-cover"
//                />
//                <div className="mt-3 w-full">
//                  <p className="text-sm font-medium text-richblack-50">
//                    {course.courseName}
//                  </p>
//                  <div className="mt-1 flex items-center space-x-2">
//                    <p className="text-xs font-medium text-richblack-300">
//                      {course.studentsEnroled?.length} students
//                    </p>
//                    <p className="text-xs font-medium text-richblack-300">
//                      |
//                    </p>
//                    <p className="text-xs font-medium text-richblack-300">
//                      Rs. {course.price}
//                    </p>
//                  </div>
//                </div>
//              </div>
//            ))}
//          </div>
//        </div>
//         </div>
//       )
//       : (
//         <div>
//             <p>You have not created any courses yet</p>
//             <Link to={"/dashboard/addCourse"}>
//             Create a Course
//             </Link>
//         </div>
//       )
//     }
//     </div>
//   )
// }

// export default Instructor


import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
import { getInstructorData } from '../../../../services/opreations/profileApis'
import { Link } from 'react-router-dom'
import InstructorAnalysis from './InstructorAnalysis'

const Instructor = () => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourseStatsData = async () => {
      setLoading(true)
      const instructorOverAllData = await getInstructorData(token)
      const result = await fetchInstructorCourses(token)

      if (instructorOverAllData?.length) {
        setInstructorData(instructorOverAllData)
      }

      if (result) {
        setCourses(result)
      }
      setLoading(false)
    }

    getCourseStatsData()
  }, [token])

  const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0) || 0
  const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0) || 0

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Welcome Header */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] flex items-center gap-2">
          Hi {user?.firstName} <span>⚡</span>
        </h1>
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300/70">
          Let's build something extraordinary today
        </p>
      </div>

      {loading ? (
        <div className="grid min-h-[350px] place-items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
              Fetching Analytics...
            </p>
          </div>
        </div>
      ) : courses?.length > 0 ? (
        <div className="space-y-6">
          {/* Top Row: Visualization & Metrics */}
          <div className="flex flex-col lg:flex-row min-h-[450px] gap-6">
            {/* Chart Area */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorAnalysis courses={instructorData} />
            ) : (
              <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
                <p className="text-xl font-bold text-white tracking-wide">Visualize</p>
                <p className="mt-2 text-sm font-medium text-cyan-300/70">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}

            {/* Side Stats Card */}
            <div className="relative flex min-w-[280px] flex-col justify-between rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

              <p className="text-lg font-extrabold tracking-wide text-white">Statistics</p>

              <div className="space-y-5 my-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Courses</p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0Here is your updated **Instructor** dashboard component completely transformed into the **Dark Cyberpunk Glassmorphism / Neon Blue** aesthetic.

### Key Upgrades & Visual Refinements:
1. **Glassmorphic Analytics Cards:** All statistics and visualization blocks now use translucent obsidian containers (`bg-[#0B132B]/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_35px_rgba(0,0,0,0.6)]`).
2. **Glowing Metric Numbers:** Key metrics like *Total Courses*, *Total Students*, and *Total Income* are styled with electric white-to-cyan gradient text and ambient glow effects (`drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]`).
3. **Cyber Course Cards:** Recent course previews feature neon image borders, smooth scale transitions on hover, and cyan badge highlights.
4. **Interactive CTA Button:** Updated empty states with glowing neon glass call-to-action buttons for course creation.
5. **Loading Spinner:** Integrated a custom pulsing neon ring loader.

```jsx
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
import { getInstructorData } from '../../../../services/opreations/profileApis'
import { Link } from 'react-router-dom'
import InstructorAnalysis from './InstructorAnalysis'

const Instructor = () => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourseStatsData = async () => {
      setLoading(true)
      const instructorOverAllData = await getInstructorData(token)
      const result = await fetchInstructorCourses(token)

      if (instructorOverAllData?.length) {
        setInstructorData(instructorOverAllData)
      }

      if (result) {
        setCourses(result)
      }
      setLoading(false)
    }

    getCourseStatsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0) || 0
  const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0) || 0

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Welcome Header */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          Hi {user?.firstName} ⚡
        </h1>
        <p className="text-sm font-medium text-cyan-300/70">
          Let's build and manage your learning empire.
        </p>
      </div>

      {loading ? (
        <div className="grid min-h-[400px] place-items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
              Loading Analytics...
            </p>
          </div>
        </div>
      ) : courses?.length > 0 ? (
        <div className="space-y-6">
          {/* Charts & Stats Grid */}
          <div className="flex flex-col xl:flex-row gap-6 min-h-[450px]">
            {/* Visualization Block */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorAnalysis courses="{instructorData}"/>
            ) : (
              <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
                <p className="text-xl font-bold text-white tracking-wide">Visualize</p>
                <p className="mt-3 text-sm font-semibold text-slate-400">
                  Not enough enrollment data to render visual analytics yet.
                </p>
              </div>
            )}

            {/* Overall Statistics Card */}
            <div className="relative min-w-[280px] xl:w-[320px] rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
              
              <p className="text-lg font-bold text-white tracking-wide border-b border-slate-800/80 pb-3">
                Statistics
              </p>

              <div className="space-y-6 my-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Courses</p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
                    {courses.length}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Students</p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
                    {totalStudents}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Income</p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
                    ₹ {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Courses Preview Block */}
          <div className="relative rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <p className="text-lg font-bold text-white tracking-wide">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-cyan-300 hover:text-white hover:underline transition-colors">
                  View All
                </p>
              </Link>
            </div>

            <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="group flex flex-col rounded-2xl border border-cyan-500/10 bg-[#030712]/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <div className="relative overflow-hidden rounded-xl border border-cyan-500/20">
                    <img
                      src={course.thumbnail}
                      alt={course.courseName}
                      className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-3 flex flex-col justify-between flex-1">
                    <p className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {course.courseName}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-400 pt-2 border-t border-slate-800/80">
                      <span>{course.studentsEnrolled?.length || 0} students</span>
                      <span className="font-bold text-cyan-300">₹ {course.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="my-14 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <p className="text-2xl font-bold text-slate-200 tracking-wide">
            You have not created any courses yet
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/70 mb-6">
            Start building your curriculum to reach thousands of students worldwide.
          </p>
          <Link className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.7)]" to="/dashboard/addCourse">
            Create a Course
          </Link>
        </div>
      )}
    </div>
  )
}

export default Instructor
