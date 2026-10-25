// // import React, { useEffect, useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { useNavigate } from 'react-router-dom'
// // import { fetchInstructorCourses } from '../../../services/opreations/courseDetails'
// // import IconBtn from '../../common/IconBtn'
// // import { FaPlus } from "react-icons/fa6";
// // import CoursesTable from './InstructorCourses/CoursesTable'

// // const MyCourses = () => {

// //   const {token} = useSelector((state) => state.auth)
// //   const navigate = useNavigate();
// //   const [courses, setCourses] = useState([]);

// //   useEffect(()=>{
// //     const fetchCourses = async()=>{
// //         const result = await fetchInstructorCourses(token);
// //         if(result){
// //           console.log("resullt aa gaya ", result);
// //             setCourses(result);
// //         }
// //     }
// //     fetchCourses();
// //   },[])

// //   return (
// //     <div>
// //       <div className="mb-14 flex items-center justify-between">
// //         <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
// //         <IconBtn 
// //         text="Add Course"
// //         onclick={()=> navigate("/dashboard/add-course")}
// //         children={<FaPlus/>}
// //         />
// //       </div>
      
// //       {courses && <CoursesTable  courses={courses} setCourses={setCourses} />}

// //     </div>
// //   )
// // }

// // export default MyCourses


// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { fetchInstructorCourses } from '../../../services/opreations/courseDetails'
// import IconBtn from '../../common/IconBtn'
// import { FaPlus } from "react-icons/fa6"
// import CoursesTable from './InstructorCourses/CoursesTable'

// const MyCourses = () => {
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const [courses, setCourses] = useState([])

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const result = await fetchInstructorCourses(token)
//       if (result) {
//         setCourses(result)
//       }
//     }
//     fetchCourses()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <div className="w-full space-y-6 p-2 sm:p-4">
//       {/* Header & Add Button */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
//         <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//           My Courses
//         </h1>
//         <IconBtn
//           text="Add Course"
//           onclick={() => navigate("/dashboard/add-course")}
//         >
//           <FaPlus className="text-sm drop-shadow-[0_0_6px_#00f0ff]" />
//         </IconBtn>
//       </div>

//       {/* Courses Table Container */}
//       {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
//     </div>
//   )
// }

// export default MyCourses


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiBookOpen, FiPlus, FiArrowUpRight } from "react-icons/fi";

import { fetchInstructorCourses } from "../../../services/opreations/courseDetails";
import IconBtn from "../../common/IconBtn";
import CoursesTable from "./InstructorCourses/CoursesTable";

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);

      try {
        const result = await fetchInstructorCourses(token);

        if (result) {
          setCourses(result);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative isolate min-h-screen w-full space-y-7 overflow-hidden p-3 font-sans text-zinc-100 sm:p-5 lg:p-7">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/[0.08] blur-[140px]" />
        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-indigo-600/[0.07] blur-[150px]" />
      </div>

      {/* Page header */}
      <header className="flex flex-col gap-5 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Instructor Workspace
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My Courses<span className="text-violet-300">.</span>
          </h1>

          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            Organize your learning content, update course details, and keep
            everything in one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <FiBookOpen size={16} className="text-violet-300" />
            <span className="text-sm text-zinc-400">
              <span className="font-semibold text-white">
                {courses.length}
              </span>{" "}
              {courses.length === 1 ? "course" : "courses"}
            </span>
          </div>

          <IconBtn
            text="Add Course"
            onclick={() => navigate("/dashboard/add-course")}
          >
            <FiPlus className="text-sm" />
          </IconBtn>
        </div>
      </header>

      {/* Section heading */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            All Courses
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Manage your published and draft courses.
          </p>
        </div>

        {!loading && courses.length > 0 && (
          <span className="text-xs text-zinc-500">
            Showing {courses.length}{" "}
            {courses.length === 1 ? "course" : "courses"}
          </span>
        )}
      </div>

      {/* Course content */}
      {loading ? (
        <div className="grid min-h-[320px] place-items-center rounded-2xl border border-white/[0.08] bg-[#111114]/80">
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-violet-400/15" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400" />
              <FiBookOpen size={18} className="text-violet-300" />
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-zinc-200">
                Loading your courses
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Getting everything ready...
              </p>
            </div>
          </div>
        </div>
      ) : courses.length > 0 ? (
        <div className="relative">
          <CoursesTable courses={courses} setCourses={setCourses} />
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 px-5 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
            <FiBookOpen size={27} />
          </div>

          <h2 className="relative mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Your courses start here
          </h2>

          <p className="relative mt-3 max-w-md text-sm leading-6 text-zinc-500">
            You haven't created any courses yet. Create your first course and
            start building something valuable for your learners.
          </p>

          <button
            type="button"
            onClick={() => navigate("/dashboard/add-course")}
            className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-400 active:scale-[0.98]"
          >
            <FiPlus size={17} />
            Create your first course
            <FiArrowUpRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCourses;

