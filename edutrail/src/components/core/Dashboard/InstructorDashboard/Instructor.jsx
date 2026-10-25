// // import React, { useEffect, useState } from 'react'
// // import { useSelector } from 'react-redux';
// // import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails';
// // import { getInstructorData } from '../../../../services/opreations/profileApis';
// // import { Link } from 'react-router-dom';
// // import InstructorAnalysis from './InstructorAnalysis';

// // const Instructor = () => {
// //     const {user} = useSelector((state) => state.profile)
// //     const {token }= useSelector((state) => state.auth)
// //     const [loading , setLoading] = useState(false);
// //     const [instructorData , setInstructorData] = useState(null);
// //     const [ courses, setCourses] = useState([]);

// //     useEffect(()=>{
// //      const getCourseStatsData = async()=>{
// //      setLoading(true);
// //      const instructorOverAllData = await getInstructorData(token);
// //      const result= await fetchInstructorCourses(token);
// //    console.log(" result ka data..", result)
// //      console.log(" instructor ka data" , instructorOverAllData);

// //      if(instructorOverAllData.length){
// //         setInstructorData(instructorOverAllData);
// //      }

// //      if(result){
// //         setCourses(result);    
// //      }
// //      setLoading(false);
// //      }
    
// //      getCourseStatsData();
// //     },[])

// //     const totalAmount = instructorData?.reduce((acc,curr) => acc + curr.totalAmountGenerated, 0);
// //     const totalStudents = instructorData?.reduce((acc,curr) => acc + curr.totalStudentsEnrolled, 0);
// //   return (
// //     <div>
// //       <div className="space-y-2">
// //         <h1 className="text-2xl font-bold text-richblack-5">
// //             Hi {user?.firstName}🤟
// //             </h1>
// //         <p className="font-medium text-richblack-200">
// //             Let's Start something new
// //             </p>
// //       </div>

// //       {loading 
// //       ? (<div> loading..</div>)
// //       : courses.length > 0
// //       ? (
// //         <div>
// //             <div div className="my-4 flex h-[450px] space-x-4">
            
// //             {totalAmount > 0 || totalStudents > 0 ? (
// //                 <InstructorAnalysis courses={instructorData} />
// //               ) : (
// //                 <div className="flex-1 rounded-md bg-richblack-800 p-6">
// //                   <p className="text-lg font-bold text-richblack-5">Visualize</p>
// //                   <p className="mt-4 text-xl font-medium text-richblack-50">
// //                     Not Enough Data To Visualize
// //                   </p>
// //                 </div>
// //               )}

// //                 <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
// //                     <p className="text-lg font-bold text-richblack-5">Statistics</p>
// //                     <div className="mt-4 space-y-4">
// //                         <p className="text-lg text-richblack-200">Total Courses</p>
// //                         <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
// //                     </div>

// //                     <div>
// //                         <p  className="text-lg text-richblack-200" >Total Students </p>
// //                         <p  className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
// //                     </div>

// //                     <div>
// //                         <p className="text-lg text-richblack-200">Total Income</p>
// //                         <p className="text-3xl font-semibold text-richblack-50">{totalAmount}</p>
// //                     </div>
// //                 </div>
            
// //         </div>
// //          <div className="rounded-md bg-richblack-800 p-6">
// //          {/* Render 3 courses */}
// //          <div className="flex items-center justify-between">
// //            <p className="text-lg font-bold text-richblack-5">Your Courses</p>
// //            <Link to="/dashboard/my-courses">
// //              <p className="text-xs font-semibold text-yellow-50">View All</p>
// //            </Link>
// //          </div>
// //          <div className="my-4 flex items-start space-x-6">
// //            {courses.slice(0, 3).map((course) => (
// //              <div key={course._id} className="w-1/3">
// //                <img
// //                  src={course.thumbnail}
// //                  alt={course.courseName}
// //                  className="h-[201px] w-full rounded-md object-cover"
// //                />
// //                <div className="mt-3 w-full">
// //                  <p className="text-sm font-medium text-richblack-50">
// //                    {course.courseName}
// //                  </p>
// //                  <div className="mt-1 flex items-center space-x-2">
// //                    <p className="text-xs font-medium text-richblack-300">
// //                      {course.studentsEnroled?.length} students
// //                    </p>
// //                    <p className="text-xs font-medium text-richblack-300">
// //                      |
// //                    </p>
// //                    <p className="text-xs font-medium text-richblack-300">
// //                      Rs. {course.price}
// //                    </p>
// //                  </div>
// //                </div>
// //              </div>
// //            ))}
// //          </div>
// //        </div>
// //         </div>
// //       )
// //       : (
// //         <div>
// //             <p>You have not created any courses yet</p>
// //             <Link to={"/dashboard/addCourse"}>
// //             Create a Course
// //             </Link>
// //         </div>
// //       )
// //     }
// //     </div>
// //   )
// // }

// // export default Instructor


// // import React, { useEffect, useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
// // import { getInstructorData } from '../../../../services/opreations/profileApis'
// // import { Link } from 'react-router-dom'
// // import InstructorAnalysis from './InstructorAnalysis'

// // const Instructor = () => {
// //   const { user } = useSelector((state) => state.profile)
// //   const { token } = useSelector((state) => state.auth)
// //   const [loading, setLoading] = useState(false)
// //   const [instructorData, setInstructorData] = useState(null)
// //   const [courses, setCourses] = useState([])

// //   useEffect(() => {
// //     const getCourseStatsData = async () => {
// //       setLoading(true)
// //       const instructorOverAllData = await getInstructorData(token)
// //       const result = await fetchInstructorCourses(token)

// //       if (instructorOverAllData?.length) {
// //         setInstructorData(instructorOverAllData)
// //       }

// //       if (result) {
// //         setCourses(result)
// //       }
// //       setLoading(false)
// //     }

// //     getCourseStatsData()
// //   }, [token])

// //   const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0) || 0
// //   const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0) || 0

// //   return (
// //     <div className="w-full space-y-6 p-2 sm:p-4">
// //       {/* Welcome Header */}
// //       <div className="space-y-1">
// //         <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] flex items-center gap-2">
// //           Hi {user?.firstName} <span>⚡</span>
// //         </h1>
// //         <p className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300/70">
// //           Let's build something extraordinary today
// //         </p>
// //       </div>

// //       {loading ? (
// //         <div className="grid min-h-[350px] place-items-center">
// //           <div className="flex flex-col items-center gap-4">
// //             <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
// //             <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
// //               Fetching Analytics...
// //             </p>
// //           </div>
// //         </div>
// //       ) : courses?.length > 0 ? (
// //         <div className="space-y-6">
// //           {/* Top Row: Visualization & Metrics */}
// //           <div className="flex flex-col lg:flex-row min-h-[450px] gap-6">
// //             {/* Chart Area */}
// //             {totalAmount > 0 || totalStudents > 0 ? (
// //               <InstructorAnalysis courses={instructorData} />
// //             ) : (
// //               <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
// //                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
// //                 <p className="text-xl font-bold text-white tracking-wide">Visualize</p>
// //                 <p className="mt-2 text-sm font-medium text-cyan-300/70">
// //                   Not Enough Data To Visualize
// //                 </p>
// //               </div>
// //             )}

// //             {/* Side Stats Card */}
// //             <div className="relative flex min-w-[280px] flex-col justify-between rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
// //               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

// //               <p className="text-lg font-extrabold tracking-wide text-white">Statistics</p>

// //               <div className="space-y-5 my-4">
// //                 <div>
// //                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Courses</p>
// //                   <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0Here is your updated **Instructor** dashboard component completely transformed into the **Dark Cyberpunk Glassmorphism / Neon Blue** aesthetic.

// // ### Key Upgrades & Visual Refinements:
// // 1. **Glassmorphic Analytics Cards:** All statistics and visualization blocks now use translucent obsidian containers (`bg-[#0B132B]/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_35px_rgba(0,0,0,0.6)]`).
// // 2. **Glowing Metric Numbers:** Key metrics like *Total Courses*, *Total Students*, and *Total Income* are styled with electric white-to-cyan gradient text and ambient glow effects (`drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]`).
// // 3. **Cyber Course Cards:** Recent course previews feature neon image borders, smooth scale transitions on hover, and cyan badge highlights.
// // 4. **Interactive CTA Button:** Updated empty states with glowing neon glass call-to-action buttons for course creation.
// // 5. **Loading Spinner:** Integrated a custom pulsing neon ring loader.

// // ```jsx
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
// import { getInstructorData } from '../../../../services/opreations/profileApis'
// import { Link } from 'react-router-dom'
// import InstructorAnalysis from './InstructorAnalysis'

// const Instructor = () => {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const [loading, setLoading] = useState(false)
//   const [instructorData, setInstructorData] = useState(null)
//   const [courses, setCourses] = useState([])

//   useEffect(() => {
//     const getCourseStatsData = async () => {
//       setLoading(true)
//       const instructorOverAllData = await getInstructorData(token)
//       const result = await fetchInstructorCourses(token)

//       if (instructorOverAllData?.length) {
//         setInstructorData(instructorOverAllData)
//       }

//       if (result) {
//         setCourses(result)
//       }
//       setLoading(false)
//     }

//     getCourseStatsData()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0) || 0
//   const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0) || 0

//   return (
//     <div className="w-full space-y-6 p-2 sm:p-4">
//       {/* Welcome Header */}
//       <div className="space-y-1">
//         <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//           Hi {user?.firstName} ⚡
//         </h1>
//         <p className="text-sm font-medium text-cyan-300/70">
//           Let's build and manage your learning empire.
//         </p>
//       </div>

//       {loading ? (
//         <div className="grid min-h-[400px] place-items-center">
//           <div className="flex flex-col items-center gap-4">
//             <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
//             <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
//               Loading Analytics...
//             </p>
//           </div>
//         </div>
//       ) : courses?.length > 0 ? (
//         <div className="space-y-6">
//           {/* Charts & Stats Grid */}
//           <div className="flex flex-col xl:flex-row gap-6 min-h-[450px]">
//             {/* Visualization Block */}
//             {totalAmount > 0 || totalStudents > 0 ? (
//               <InstructorAnalysis courses="{instructorData}"/>
//             ) : (
//               <div className="relative flex-1 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
//                 <p className="text-xl font-bold text-white tracking-wide">Visualize</p>
//                 <p className="mt-3 text-sm font-semibold text-slate-400">
//                   Not enough enrollment data to render visual analytics yet.
//                 </p>
//               </div>
//             )}

//             {/* Overall Statistics Card */}
//             <div className="relative min-w-[280px] xl:w-[320px] rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />
              
//               <p className="text-lg font-bold text-white tracking-wide border-b border-slate-800/80 pb-3">
//                 Statistics
//               </p>

//               <div className="space-y-6 my-4">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Courses</p>
//                   <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
//                     {courses.length}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Students</p>
//                   <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
//                     {totalStudents}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Income</p>
//                   <p className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] mt-1">
//                     ₹ {totalAmount}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Courses Preview Block */}
//           <div className="relative rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//             <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
//               <p className="text-lg font-bold text-white tracking-wide">Your Courses</p>
//               <Link to="/dashboard/my-courses">
//                 <p className="text-xs font-semibold text-cyan-300 hover:text-white hover:underline transition-colors">
//                   View All
//                 </p>
//               </Link>
//             </div>

//             <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {courses.slice(0, 3).map((course) => (
//                 <div key={course._id} className="group flex flex-col rounded-2xl border border-cyan-500/10 bg-[#030712]/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
//                   <div className="relative overflow-hidden rounded-xl border border-cyan-500/20">
//                     <img
//                       src={course.thumbnail}
//                       alt={course.courseName}
//                       className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
                  
//                   <div className="mt-3 flex flex-col justify-between flex-1">
//                     <p className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
//                       {course.courseName}
//                     </p>

//                     <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-400 pt-2 border-t border-slate-800/80">
//                       <span>{course.studentsEnrolled?.length || 0} students</span>
//                       <span className="font-bold text-cyan-300">₹ {course.price}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="my-14 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.5)]">
//           <p className="text-2xl font-bold text-slate-200 tracking-wide">
//             You have not created any courses yet
//           </p>
//           <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/70 mb-6">
//             Start building your curriculum to reach thousands of students worldwide.
//           </p>
//           <Link className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.7)]" to="/dashboard/addCourse">
//             Create a Course
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Instructor




import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiUsers,
  FiTrendingUp,
  FiArrowUpRight,
  FiPlus,
  FiBarChart2,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

import { fetchInstructorCourses } from "../../../../services/opreations/courseDetails";
import { getInstructorData } from "../../../../services/opreations/profileApis";
import InstructorAnalysis from "./InstructorAnalysis";

const Instructor = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourseStatsData = async () => {
      setLoading(true);

      try {
        const [instructorOverAllData, result] = await Promise.all([
          getInstructorData(token),
          fetchInstructorCourses(token),
        ]);

        if (instructorOverAllData?.length) {
          setInstructorData(instructorOverAllData);
        }

        if (result) {
          setCourses(result);
        }
      } finally {
        setLoading(false);
      }
    };

    getCourseStatsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalAmount =
    instructorData?.reduce(
      (acc, curr) => acc + (Number(curr.totalAmountGenerated) || 0),
      0
    ) || 0;

  const totalStudents =
    instructorData?.reduce(
      (acc, curr) => acc + (Number(curr.totalStudentsEnrolled) || 0),
      0
    ) || 0;

  const formatCurrency = (amount) =>
    `₹${Number(amount || 0).toLocaleString("en-IN")}`;

  const statCards = [
    {
      label: "Total Courses",
      value: courses.length,
      icon: FiBookOpen,
      iconStyle: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    },
    {
      label: "Total Students",
      value: totalStudents.toLocaleString("en-IN"),
      icon: FiUsers,
      iconStyle: "border-indigo-400/20 bg-indigo-500/10 text-indigo-300",
    },
    {
      label: "Total Income",
      value: formatCurrency(totalAmount),
      icon: FiTrendingUp,
      iconStyle: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    },
  ];

  return (
    <div className="relative isolate min-h-screen w-full space-y-8 overflow-hidden p-3 font-sans text-zinc-100 sm:p-5 lg:p-7">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/[0.09] blur-[140px]" />
        <div className="absolute -left-40 top-[40%] h-[400px] w-[400px] rounded-full bg-indigo-600/[0.07] blur-[150px]" />
      </div>

      {/* Welcome header */}
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Instructor Workspace
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Welcome back{user?.firstName ? "," : ""}
            {user?.firstName && (
              <span className="text-violet-300"> {user.firstName}</span>
            )}
            <span className="text-violet-300">.</span>
          </h1>

          <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Your courses, your community, your impact. Here's how your learning
            space is growing.
          </p>
        </div>

        <Link
          to="/dashboard/addCourse"
          className="group inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition-all duration-200 hover:bg-violet-400 active:scale-[0.98]"
        >
          <FiPlus size={17} />
          Create Course
          <FiArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </header>

      {loading ? (
        <div className="grid min-h-[420px] place-items-center rounded-2xl border border-white/[0.07] bg-[#111114]/80">
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-violet-400/15" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400" />
              <FiBarChart2 size={21} className="text-violet-300" />
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-zinc-200">
                Preparing your dashboard
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Fetching your course analytics...
              </p>
            </div>
          </div>
        </div>
      ) : courses.length > 0 ? (
        <div className="space-y-8">
          {/* Statistics cards */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#141419] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/[0.04] blur-3xl transition-colors duration-300 group-hover:bg-violet-500/[0.09]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-zinc-400">
                        {stat.label}
                      </p>

                      <p
                        className={`break-words font-semibold tracking-tight text-white ${
                          index === 2
                            ? "text-2xl sm:text-3xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${stat.iconStyle}`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="relative mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span className="text-xs text-zinc-500">
                      Overall performance
                    </span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Analytics and overview */}
          <section className="grid min-w-0 grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-4 sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <FiBarChart2 size={19} />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white">
                    Performance Overview
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500">
                    Enrollment and earnings analytics
                  </p>
                </div>
              </div>

              {totalAmount > 0 || totalStudents > 0 ? (
                <InstructorAnalysis courses={instructorData} />
              ) : (
                <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.09] bg-white/[0.015] px-5 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
                    <FiBarChart2 size={21} />
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-200">
                    Analytics will appear here
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500">
                    Once students enroll in your courses, you'll be able to see
                    your performance data here.
                  </p>
                </div>
              )}
            </div>

            {/* Quick overview */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.07] blur-[70px]" />

              <div className="relative">
                <h2 className="text-base font-semibold text-white">
                  At a glance
                </h2>
                <p className="mt-1 text-xs text-zinc-500">
                  Your teaching snapshot
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
                      <FiBookOpen size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-zinc-500">Courses created</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {courses.length}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/[0.07] text-indigo-300">
                      <FiUsers size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-zinc-500">
                        Students enrolled
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {totalStudents.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-500/[0.07] text-emerald-300">
                      <FiDollarSign size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-zinc-500">Total income</p>
                      <p className="mt-1 break-words text-lg font-semibold text-white">
                        {formatCurrency(totalAmount)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/[0.07] pt-5">
                  <Link
                    to="/dashboard/my-courses"
                    className="group flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-violet-400/20 hover:bg-violet-500/[0.06] hover:text-white"
                  >
                    Manage your courses
                    <FiArrowRight
                      size={16}
                      className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Recent courses */}
          <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90">
            <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Your Courses
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  A quick look at your latest courses.
                </p>
              </div>

              <Link
                to="/dashboard/my-courses"
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
              >
                View all courses
                <FiArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-3">
              {courses.slice(0, 3).map((course) => (
                <div
                  key={course._id}
                  className="group overflow-hidden rounded-xl border border-white/[0.07] bg-[#0c0c0f] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-[#101014]"
                >
                  <div className="relative overflow-hidden bg-zinc-900">
                    <img
                      src={course.thumbnail}
                      alt={course.courseName}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="text-xs font-semibold text-white">
                        {formatCurrency(course.price)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-1 text-sm font-semibold text-zinc-100 transition-colors group-hover:text-violet-300">
                      {course.courseName}
                    </h3>

                    <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-zinc-500">
                      {course.courseDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                        <FiUsers size={13} />
                        {course.studentsEnrolled?.length || 0} students
                      </span>

                      <Link
                        to={`/dashboard/edit-course/${course._id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 transition-colors hover:text-violet-200"
                      >
                        Manage
                        <FiArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 px-5 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
            <FiBookOpen size={28} />
          </div>

          <h2 className="relative mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Your teaching journey starts here
          </h2>

          <p className="relative mt-3 max-w-md text-sm leading-6 text-zinc-500">
            You haven't created any courses yet. Build your first course and
            start sharing your knowledge with learners.
          </p>

          <Link
            to="/dashboard/addCourse"
            className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-400 active:scale-[0.98]"
          >
            <FiPlus size={17} />
            Create your first course
            <FiArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Instructor;

