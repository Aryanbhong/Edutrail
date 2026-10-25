// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Table,Thead,Tbody, Tr ,Th, Td} from 'react-super-responsive-table';
// // import formatDate from "../../../../utils/dateFormatter"
// // import { COURSE_STATUS } from '../../../../utils/Permanents';
// // import ConfirmationModal from '../../../common/ConfirmationModal';
// // import { deleteCourse, fetchInstructorCourses } from '../../../../services/opreations/courseDetails';
// // import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// // import { FaCheck } from "react-icons/fa"
// // import { FiEdit2 } from "react-icons/fi"
// // import { HiClock } from "react-icons/hi"
// // import { RiDeleteBin6Line } from "react-icons/ri"
// // import { useNavigate } from 'react-router-dom';

// // const CoursesTable = ({courses, setCourses}) => {
// //     console.log(" courses aa gaye ...", courses);
// //     const dispatch = useDispatch();
// //     const {token } = useSelector((state)=> state.auth);
// //     const [ loading, setLoading] = useState(false);
// //     const [confirmationModal, setConfirmationModal] = useState(null);
// //     const navigate = useNavigate();
// //     const handleCourseDelete= async(courseId)=>{
// //     setLoading(true);

// //     await deleteCourse({courseId:courseId}, token);
// //     const result = await fetchInstructorCourses(token);
// //     if(result){
// //         setCourses(result);
// //     }
// //     setConfirmationModal(null);
// //     setLoading(false);
    
// //     }
// //   return (
// //     <>
// //     <Table className="rounded-xl border border-richblack-800 ">
// //       <Thead>
// //         <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
// //           <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
// //             Courses
// //           </Th>
// //           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
// //             Duration
// //           </Th>
// //           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
// //             Price
// //           </Th>
// //           <Th className="text-left text-sm font-medium uppercase text-richblack-100">
// //             Actions
// //           </Th>
// //         </Tr>
// //       </Thead>
// //       <Tbody>
// //         {courses?.length === 0 ? (
// //           <Tr>
// //             <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
// //               No courses found
// //               {/* TODO: Need to change this state */}
// //             </Td>
// //           </Tr>
// //         ) : (
// //           courses?.map((course) => (
// //             <Tr
// //               key={course._id}
// //               className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
// //             >
// //               <Td className="flex flex-1 gap-x-4">
// //                 <img
// //                   src={course?.thumbnail}
// //                   alt={course?.courseName}
// //                   className="h-[148px] w-[220px] rounded-lg object-cover"
// //                 />
// //                 <div className="flex flex-col justify-between">
// //                   <p className="text-lg font-semibold text-richblack-5">
// //                     {course.courseName}
// //                   </p>
// //                   <p className="text-xs text-richblack-300">
// //                     {/* {course.courseDescription.split(" ").length >
                    
// //                       ? course.courseDescription
// //                           .split(" ")
// //                           .slice(0, 100)
// //                           .join(" ") + "..."
// //                       : course.courseDescription} */}
// //                       {
// //                         <p>{course.courseDescription}</p>
// //                       }
// //                   </p>
// //                   <p className="text-[12px] text-white">
// //                     Created: {formatDate(course.createdAt)}
// //                   </p>
// //                   {course.status === COURSE_STATUS.DRAFT ? (
// //                     <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
// //                       <HiClock size={14} />
// //                       Drafted
// //                     </p>
// //                   ) : (
// //                     <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
// //                       <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
// //                         <FaCheck size={8} />
// //                       </div>
// //                       Published
// //                     </p>
// //                   )}
// //                 </div>
// //               </Td>
// //               <Td className="text-sm font-medium text-richblack-100">
// //                 2hr 30min
// //               </Td>
// //               <Td className="text-sm font-medium text-richblack-100">
// //                 ₹{course.price}
// //               </Td>
// //               <Td className="text-sm font-medium text-richblack-100 ">
// //                 <button
// //                   disabled={loading}
// //                   onClick={() => {
// //                     navigate(`/dashboard/edit-course/${course._id}`)
// //                   }}
// //                   title="Edit"
// //                   className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
// //                 >
// //                   <FiEdit2 size={20} />
// //                 </button>
// //                 <button
// //                   disabled={loading}
// //                   onClick={() => {
// //                     setConfirmationModal({
// //                       text1: "Do you want to delete this course?",
// //                       text2:
// //                         "All the data related to this course will be deleted",
// //                       btn1Text: !loading ? "Delete" : "Loading...  ",
// //                       btn2Text: "Cancel",
// //                       btn1Handler: !loading
// //                         ? () => handleCourseDelete(course._id)
// //                         : () => {},
// //                       btn2Handler: !loading
// //                         ? () => setConfirmationModal(null)
// //                         : () => {},
// //                     })
// //                   }}
// //                   title="Delete"
// //                   className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
// //                 >
// //                   <RiDeleteBin6Line size={20} />
// //                 </button>
// //               </Td>
// //             </Tr>
// //           ))
// //         )}
// //       </Tbody>
// //     </Table>
// //     {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
// //   </>
// //   )
// // }

// // export default CoursesTable


// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
// import formatDate from "../../../../utils/dateFormatter"
// import { COURSE_STATUS } from '../../../../utils/Permanents'
// import ConfirmationModal from '../../../common/ConfirmationModal'
// import { deleteCourse, fetchInstructorCourses } from '../../../../services/opreations/courseDetails'
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// import { FaCheck } from "react-icons/fa"
// import { FiEdit2 } from "react-icons/fi"
// import { HiClock } from "react-icons/hi"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import { useNavigate } from 'react-router-dom'

// const CoursesTable = ({ courses, setCourses }) => {
//   const dispatch = useDispatch()
//   const { token } = useSelector((state) => state.auth)
//   const [loading, setLoading] = useState(false)
//   const [confirmationModal, setConfirmationModal] = useState(null)
//   const navigate = useNavigate()

//   const handleCourseDelete = async (courseId) => {
//     setLoading(true)
//     await deleteCourse({ courseId: courseId }, token)
//     const result = await fetchInstructorCourses(token)
//     if (result) {
//       setCourses(result)
//     }
//     setConfirmationModal(null)
//     setLoading(false)
//   }

//   return (
//     <>
//       <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)]">
        
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         <Table className="w-full text-left">
//           <Thead>
//             <Tr className="flex gap-x-10 border-b border-cyan-500/20 bg-[#030712]/70 px-6 py-4">
//               <Th className="flex-1 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 Courses
//               </Th>
//               <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 Duration
//               </Th>
//               <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 Price
//               </Th>
//               <Th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
//                 Actions
//               </Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {courses?.length === 0 ? (
//               <Tr>
//                 <Td className="py-12 text-center text-xl font-bold text-slate-300">
//                   No courses found
//                 </Td>
//               </Tr>
//             ) : (
//               courses?.map((course) => (
//                 <Tr
//                   key={course._id}
//                   className="flex gap-x-10 border-b border-slate-800/80 px-6 py-6 transition-all duration-300 hover:bg-cyan-950/20"
//                 >
//                   <Td className="flex flex-1 gap-x-5">
//                     <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
//                       <img
//                         src={course?.thumbnail}
//                         alt={course?.courseName}
//                         className="h-[148px] w-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-40" />
//                     </div>

//                     <div className="flex flex-col justify-between py-1">
//                       <p className="text-base sm:text-lg font-bold text-white tracking-wide">
//                         {course.courseName}
//                       </p>
                      
//                       <p className="text-xs font-medium text-slate-400 line-clamp-2">
//                         {course.courseDescription}
//                       </p>

//                       <p className="text-[11px] font-medium text-slate-500">
//                         Created: {formatDate(course.createdAt)}
//                       </p>

//                       {course.status === COURSE_STATUS.DRAFT ? (
//                         <p className="flex w-fit items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-950/60 px-3 py-1 text-[11px] font-semibold text-amber-300">
//                           <HiClock size={13} className="drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
//                           <span>Drafted</span>
//                         </p>
//                       ) : (
//                         <p className="flex w-fit items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-[11px] font-semibold text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
//                           <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
//                             <FaCheck size={7} className="font-black" />
//                           </span>
//                           <span>Published</span>
//                         </p>
//                       )}
//                     </div>
//                   </Td>

//                   <Td className="flex items-center text-xs sm:text-sm font-semibold text-slate-300">
//                     2hr 30min
//                   </Td>

//                   <Td className="flex items-center text-base sm:text-lg font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
//                     ₹{course.price}
//                   </Td>

//                   <Td className="flex items-center gap-x-2 text-sm font-medium text-slate-300">
//                     <button
//                       disabled={loading}
//                       onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
//                       title="Edit"
//                       className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 hover:drop-shadow-[0_0_6px_#00f0ff] transition-all duration-200 cursor-pointer"
//                     >
//                       <FiEdit2 size={18} />
//                     </button>

//                     <button
//                       disabled={loading}
//                       onClick={() => {
//                         setConfirmationModal({
//                           text1: "Do you want to delete this course?",
//                           text2: "All the data related to this course will be deleted",
//                           btn1Text: !loading ? "Delete" : "Loading...",
//                           btn2Text: "Cancel",
//                           btn1Handler: !loading
//                             ? () => handleCourseDelete(course._id)
//                             : () => {},
//                           btn2Handler: !loading
//                             ? () => setConfirmationModal(null)
//                             : () => {},
//                         })
//                       }}
//                       title="Delete"
//                       className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 hover:drop-shadow-[0_0_6px_rgba(244,63,94,0.6)] transition-all duration-200 cursor-pointer"
//                     >
//                       <RiDeleteBin6Line size={18} />
//                     </button>
//                   </Td>
//                 </Tr>
//               ))
//             )}
//           </Tbody>
//         </Table>
//       </div>

//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

// export default CoursesTable




import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
import formatDate from "../../../../utils/dateFormatter";
import { COURSE_STATUS } from "../../../../utils/Permanents";
import ConfirmationModal from "../../../common/ConfirmationModal";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/opreations/courseDetails";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FaCheck } from "react-icons/fa";
import { FiEdit2, FiBookOpen, FiClock, FiDollarSign } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CoursesTable = ({ courses, setCourses }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();

  const handleCourseDelete = async (courseId) => {
    setLoading(true);

    try {
      await deleteCourse({ courseId }, token);

      const result = await fetchInstructorCourses(token);

      if (result) {
        setCourses(result);
      }

      setConfirmationModal(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/95 font-sans shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Subtle ambient accent */}
        <div className="pointer-events-none absolute -right-20 -top-28 -z-0 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />

        {/* Header */}
        <div className="relative flex flex-col gap-3 border-b border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <FiBookOpen size={17} />
              </div>

              <h2 className="text-lg font-semibold tracking-tight text-white">
                Your Courses
              </h2>
            </div>

            <p className="mt-2 text-sm text-zinc-500">
              Manage, edit, and track your courses.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="text-sm font-medium text-zinc-300">
              {courses?.length || 0}{" "}
              {(courses?.length || 0) === 1 ? "course" : "courses"}
            </span>
          </div>
        </div>

        {courses?.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-5 py-16 text-center sm:py-20">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
              <FiBookOpen size={27} />
            </div>

            <h3 className="text-lg font-semibold text-white">
              No courses found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
              Your courses will appear here once you create one. Start building
              your first learning experience.
            </p>
          </div>
        ) : (
          <div className="relative overflow-x-auto">
            <Table className="w-full text-left">
              <Thead>
                <Tr className="border-b border-white/[0.07] bg-white/[0.02]">
                  <Th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:px-6">
                    Course
                  </Th>

                  <Th className="whitespace-nowrap px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Duration
                  </Th>

                  <Th className="whitespace-nowrap px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Price
                  </Th>

                  <Th className="whitespace-nowrap px-5 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:px-6">
                    Actions
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {courses?.map((course) => (
                  <Tr
                    key={course._id}
                    className="border-b border-white/[0.06] transition-colors duration-200 last:border-b-0 hover:bg-violet-500/[0.025]"
                  >
                    {/* Course details */}
                    <Td className="min-w-[320px] px-5 py-5 sm:px-6">
                      <div className="flex min-w-0 items-start gap-4">
                        <div className="group relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090b] sm:h-24 sm:w-36">
                          <img
                            src={course?.thumbnail}
                            alt={course?.courseName || "Course thumbnail"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        <div className="flex min-w-0 flex-col gap-2">
                          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-zinc-100 transition-colors duration-200 hover:text-violet-300 sm:text-base">
                            {course.courseName}
                          </h3>

                          <p className="line-clamp-2 max-w-md text-xs leading-5 text-zinc-500 sm:text-sm">
                            {course.courseDescription}
                          </p>

                          <p className="text-xs text-zinc-600">
                            Created {formatDate(course.createdAt)}
                          </p>

                          {course.status === COURSE_STATUS.DRAFT ? (
                            <span className="flex w-fit items-center gap-1.5 rounded-full border border-amber-400/15 bg-amber-400/[0.07] px-2.5 py-1 text-[11px] font-medium text-amber-300">
                              <FiClock size={12} />
                              Draft
                            </span>
                          ) : (
                            <span className="flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400/15">
                                <FaCheck size={7} />
                              </span>
                              Published
                            </span>
                          )}
                        </div>
                      </div>
                    </Td>

                    {/* Duration */}
                    <Td className="whitespace-nowrap px-4 py-5">
                      <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
                        <FiClock size={14} className="text-zinc-600" />
                        2hr 30min
                      </span>
                    </Td>

                    {/* Price */}
                    <Td className="whitespace-nowrap px-4 py-5">
                      <div className="flex items-center gap-1 text-base font-semibold tracking-tight text-zinc-100">
                        <span className="text-violet-300">₹</span>
                        {course.price}
                      </div>
                    </Td>

                    {/* Actions */}
                    <Td className="px-5 py-5 sm:px-6">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={loading}
                          onClick={() =>
                            navigate(`/dashboard/edit-course/${course._id}`)
                          }
                          title="Edit course"
                          aria-label={`Edit ${course.courseName}`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] text-zinc-400 transition-all duration-200 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-300 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        <button
                          type="button"
                          disabled={loading}
                          onClick={() => {
                            setConfirmationModal({
                              text1: "Do you want to delete this course?",
                              text2:
                                "All the data related to this course will be deleted",
                              btn1Text: !loading ? "Delete" : "Loading...",
                              btn2Text: "Cancel",
                              btn1Handler: !loading
                                ? () => handleCourseDelete(course._id)
                                : () => {},
                              btn2Handler: !loading
                                ? () => setConfirmationModal(null)
                                : () => {},
                            });
                          }}
                          title="Delete course"
                          aria-label={`Delete ${course.courseName}`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] text-zinc-400 transition-all duration-200 hover:border-rose-400/20 hover:bg-rose-500/10 hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <RiDeleteBin6Line size={17} />
                        </button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        )}

        {/* Bottom accent */}
        <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      </div>

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  );
};

export default CoursesTable;
