// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Table,Thead,Tbody, Tr ,Th, Td} from 'react-super-responsive-table';
// import formatDate from "../../../../utils/dateFormatter"
// import { COURSE_STATUS } from '../../../../utils/Permanents';
// import ConfirmationModal from '../../../common/ConfirmationModal';
// import { deleteCourse, fetchInstructorCourses } from '../../../../services/opreations/courseDetails';
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// import { FaCheck } from "react-icons/fa"
// import { FiEdit2 } from "react-icons/fi"
// import { HiClock } from "react-icons/hi"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import { useNavigate } from 'react-router-dom';

// const CoursesTable = ({courses, setCourses}) => {
//     console.log(" courses aa gaye ...", courses);
//     const dispatch = useDispatch();
//     const {token } = useSelector((state)=> state.auth);
//     const [ loading, setLoading] = useState(false);
//     const [confirmationModal, setConfirmationModal] = useState(null);
//     const navigate = useNavigate();
//     const handleCourseDelete= async(courseId)=>{
//     setLoading(true);

//     await deleteCourse({courseId:courseId}, token);
//     const result = await fetchInstructorCourses(token);
//     if(result){
//         setCourses(result);
//     }
//     setConfirmationModal(null);
//     setLoading(false);
    
//     }
//   return (
//     <>
//     <Table className="rounded-xl border border-richblack-800 ">
//       <Thead>
//         <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
//           <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
//             Courses
//           </Th>
//           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//             Duration
//           </Th>
//           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//             Price
//           </Th>
//           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//             Actions
//           </Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {courses?.length === 0 ? (
//           <Tr>
//             <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
//               No courses found
//               {/* TODO: Need to change this state */}
//             </Td>
//           </Tr>
//         ) : (
//           courses?.map((course) => (
//             <Tr
//               key={course._id}
//               className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
//             >
//               <Td className="flex flex-1 gap-x-4">
//                 <img
//                   src={course?.thumbnail}
//                   alt={course?.courseName}
//                   className="h-[148px] w-[220px] rounded-lg object-cover"
//                 />
//                 <div className="flex flex-col justify-between">
//                   <p className="text-lg font-semibold text-richblack-5">
//                     {course.courseName}
//                   </p>
//                   <p className="text-xs text-richblack-300">
//                     {/* {course.courseDescription.split(" ").length >
                    
//                       ? course.courseDescription
//                           .split(" ")
//                           .slice(0, 100)
//                           .join(" ") + "..."
//                       : course.courseDescription} */}
//                       {
//                         <p>{course.courseDescription}</p>
//                       }
//                   </p>
//                   <p className="text-[12px] text-white">
//                     Created: {formatDate(course.createdAt)}
//                   </p>
//                   {course.status === COURSE_STATUS.DRAFT ? (
//                     <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
//                       <HiClock size={14} />
//                       Drafted
//                     </p>
//                   ) : (
//                     <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
//                       <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
//                         <FaCheck size={8} />
//                       </div>
//                       Published
//                     </p>
//                   )}
//                 </div>
//               </Td>
//               <Td className="text-sm font-medium text-richblack-100">
//                 2hr 30min
//               </Td>
//               <Td className="text-sm font-medium text-richblack-100">
//                 ₹{course.price}
//               </Td>
//               <Td className="text-sm font-medium text-richblack-100 ">
//                 <button
//                   disabled={loading}
//                   onClick={() => {
//                     navigate(`/dashboard/edit-course/${course._id}`)
//                   }}
//                   title="Edit"
//                   className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
//                 >
//                   <FiEdit2 size={20} />
//                 </button>
//                 <button
//                   disabled={loading}
//                   onClick={() => {
//                     setConfirmationModal({
//                       text1: "Do you want to delete this course?",
//                       text2:
//                         "All the data related to this course will be deleted",
//                       btn1Text: !loading ? "Delete" : "Loading...  ",
//                       btn2Text: "Cancel",
//                       btn1Handler: !loading
//                         ? () => handleCourseDelete(course._id)
//                         : () => {},
//                       btn2Handler: !loading
//                         ? () => setConfirmationModal(null)
//                         : () => {},
//                     })
//                   }}
//                   title="Delete"
//                   className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
//                 >
//                   <RiDeleteBin6Line size={20} />
//                 </button>
//               </Td>
//             </Tr>
//           ))
//         )}
//       </Tbody>
//     </Table>
//     {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//   </>
//   )
// }

// export default CoursesTable


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import formatDate from "../../../../utils/dateFormatter"
import { COURSE_STATUS } from '../../../../utils/Permanents'
import ConfirmationModal from '../../../common/ConfirmationModal'
import { deleteCourse, fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

const CoursesTable = ({ courses, setCourses }) => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const navigate = useNavigate()

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)]">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <Table className="w-full text-left">
          <Thead>
            <Tr className="flex gap-x-10 border-b border-cyan-500/20 bg-[#030712]/70 px-6 py-4">
              <Th className="flex-1 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                Courses
              </Th>
              <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                Duration
              </Th>
              <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                Price
              </Th>
              <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses?.length === 0 ? (
              <Tr>
                <Td className="py-12 text-center text-xl font-bold text-slate-300">
                  No courses found
                </Td>
              </Tr>
            ) : (
              courses?.map((course) => (
                <Tr
                  key={course._id}
                  className="flex gap-x-10 border-b border-slate-800/80 px-6 py-6 transition-all duration-300 hover:bg-cyan-950/20"
                >
                  <Td className="flex flex-1 gap-x-5">
                    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
                      <img
                        src={course?.thumbnail}
                        alt={course?.courseName}
                        className="h-[148px] w-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-40" />
                    </div>

                    <div className="flex flex-col justify-between py-1">
                      <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                        {course.courseName}
                      </p>
                      
                      <p className="text-xs font-medium text-slate-400 line-clamp-2">
                        {course.courseDescription}
                      </p>

                      <p className="text-[11px] font-medium text-slate-500">
                        Created: {formatDate(course.createdAt)}
                      </p>

                      {course.status === COURSE_STATUS.DRAFT ? (
                        <p className="flex w-fit items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-950/60 px-3 py-1 text-[11px] font-semibold text-amber-300">
                          <HiClock size={13} className="drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
                          <span>Drafted</span>
                        </p>
                      ) : (
                        <p className="flex w-fit items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-[11px] font-semibold text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                            <FaCheck size={7} className="font-black" />
                          </span>
                          <span>Published</span>
                        </p>
                      )}
                    </div>
                  </Td>

                  <Td className="flex items-center text-xs sm:text-sm font-semibold text-slate-300">
                    2hr 30min
                  </Td>

                  <Td className="flex items-center text-base sm:text-lg font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                    ₹{course.price}
                  </Td>

                  <Td className="flex items-center gap-x-2 text-sm font-medium text-slate-300">
                    <button
                      disabled={loading}
                      onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                      title="Edit"
                      className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 hover:drop-shadow-[0_0_6px_#00f0ff] transition-all duration-200 cursor-pointer"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    <button
                      disabled={loading}
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Do you want to delete this course?",
                          text2: "All the data related to this course will be deleted",
                          btn1Text: !loading ? "Delete" : "Loading...",
                          btn2Text: "Cancel",
                          btn1Handler: !loading
                            ? () => handleCourseDelete(course._id)
                            : () => {},
                          btn2Handler: !loading
                            ? () => setConfirmationModal(null)
                            : () => {},
                        })
                      }}
                      title="Delete"
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 hover:drop-shadow-[0_0_6px_rgba(244,63,94,0.6)] transition-all duration-200 cursor-pointer"
                    >
                      <RiDeleteBin6Line size={18} />
                    </button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default CoursesTable
