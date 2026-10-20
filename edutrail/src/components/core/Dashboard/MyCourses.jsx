// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { fetchInstructorCourses } from '../../../services/opreations/courseDetails'
// import IconBtn from '../../common/IconBtn'
// import { FaPlus } from "react-icons/fa6";
// import CoursesTable from './InstructorCourses/CoursesTable'

// const MyCourses = () => {

//   const {token} = useSelector((state) => state.auth)
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);

//   useEffect(()=>{
//     const fetchCourses = async()=>{
//         const result = await fetchInstructorCourses(token);
//         if(result){
//           console.log("resullt aa gaya ", result);
//             setCourses(result);
//         }
//     }
//     fetchCourses();
//   },[])

//   return (
//     <div>
//       <div className="mb-14 flex items-center justify-between">
//         <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
//         <IconBtn 
//         text="Add Course"
//         onclick={()=> navigate("/dashboard/add-course")}
//         children={<FaPlus/>}
//         />
//       </div>
      
//       {courses && <CoursesTable  courses={courses} setCourses={setCourses} />}

//     </div>
//   )
// }

// export default MyCourses


import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchInstructorCourses } from '../../../services/opreations/courseDetails'
import IconBtn from '../../common/IconBtn'
import { FaPlus } from "react-icons/fa6"
import CoursesTable from './InstructorCourses/CoursesTable'

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          My Courses
        </h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <FaPlus className="text-sm drop-shadow-[0_0_6px_#00f0ff]" />
        </IconBtn>
      </div>

      {/* Courses Table Container */}
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses
