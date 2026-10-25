// import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate, useParams } from "react-router-dom"
// import { fetchCourseDetails } from "../services/opreations/courseDetails"
// import { buyCourse } from "../services/opreations/featuresStudentApi"
// import GetAvgRating from "../utils/ratingAvg"
// import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
// import Error from "../pages/Error"
// import ConfirmationModal from "../components/common/ConfirmationModal"
// import RatingStars from "../components/common/starRating"
// import formattedDate from "../utils/dateFormatter"
// import { BiInfoCircle } from "react-icons/bi"
// import { HiOutlineGlobeAlt } from "react-icons/hi"
// import {
//   FaArrowLeft,
//   FaBookOpen,
//   FaCheckCircle,
//   FaChevronDown,
//   FaGraduationCap,
//   FaPlayCircle,
//   FaRegClock,
//   FaShieldAlt,
//   FaStar,
//   FaUsers,
// } from "react-icons/fa"
// import Footer from "../components/common/footer"
// import CourseBuyingCard from "../components/core/Course/CourseBuyingCard"

// const parseDuration = (duration) => {
//   if (duration === undefined || duration === null || duration === "") {
//     return 0
//   }

//   const value = String(duration).trim()

//   if (value.includes(":")) {
//     const parts = value.split(":").map(Number)
//     if (parts.some(Number.isNaN)) return 0
//     return parts.reduce((total, part) => total * 60 + part, 0)
//   }

//   const seconds = Number(value)
//   return Number.isFinite(seconds) ? seconds : 0
// }

// const formatDuration = (totalSeconds) => {
//   if (!totalSeconds) return "Duration varies"
//   const hours = Math.floor(totalSeconds / 3600)
//   const minutes = Math.floor((totalSeconds % 3600) / 60)

//   if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`
//   if (hours > 0) return `${hours}h`
//   if (minutes > 0) return `${minutes} min`

//   return `${totalSeconds}s`
// }

// const CourseDetails = () => {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)

//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { courseId } = useParams()

//   const [confirmationModal, setConfirmationModal] = useState(null)
//   const [courseDetails, setCourseDetails] = useState(null)
//   const [pageLoading, setPageLoading] = useState(true)
//   const [fetchError, setFetchError] = useState(false)
//   const [isActive, setIsActive] = useState([])

//   useEffect(() => {
//     let cancelled = false

//     const getFullCourseData = async () => {
//       setPageLoading(true)
//       setFetchError(false)
//       setCourseDetails(null)

//       try {
//         const result = await fetchCourseDetails(courseId)

//         if (!cancelled) {
//           setCourseDetails(result)
//           setFetchError(!result?.success)
//         }
//       } catch (error) {
//         console.error("Could not fetch course details:", error)

//         if (!cancelled) {
//           setFetchError(true)
//         }
//       } finally {
//         if (!cancelled) {
//           setPageLoading(false)
//         }
//       }
//     }

//     getFullCourseData()

//     return () => {
//       cancelled = true
//     }
//   }, [courseId])

//   const courseData =
//     courseDetails?.data?.CourseDetails ||
//     courseDetails?.data?.courseDetails ||
//     courseDetails?.data

//   const ratingAndReviews = courseData?.ratingAndReviews ?? []
//   const avgReviewCount = GetAvgRating(ratingAndReviews)

//   const courseContent = courseData?.courseContent ?? []

//   const totalNoOfLectures = courseContent.reduce(
//     (total, section) => total + (section?.subSection?.length || 0),
//     0
//   )

//   const totalDurationSeconds = courseContent.reduce((total, section) => {
//     const sectionDuration = (section?.subSection ?? []).reduce(
//       (subTotal, subSec) => subTotal + parseDuration(subSec?.timeDuration),
//       0
//     )
//     return total + sectionDuration
//   }, 0)

//   const totalDuration = formatDuration(totalDurationSeconds)

//   const handleActive = (id) => {
//     setIsActive((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     )
//   }

//   const expandAllSections = () => {
//     setIsActive(courseContent.map((section) => section._id))
//   }

//   const handleBuyCourse = () => {
//     if (token) {
//       buyCourse(token, [courseId], user, navigate, dispatch)
//       return
//     }

//     setConfirmationModal({
//       text1: "You are not logged in",
//       text2: "Please sign in to purchase this course and start learning.",
//       btn1Text: "Sign In",
//       btn2Text: "Cancel",
//       btn1Handler: () => navigate("/login"),
//       btn2Handler: () => setConfirmationModal(null),
//     })
//   }

//   const {
//     courseName = "Course Overview",
//     courseDescription = "",
//     thumbnail = "",
//     price = 0,
//     whatYouWillLearn = "",
//     instructor,
//     createdAt,
//     studentsEnrolled: studentsEnrolledRaw = [],
//   } = courseData || {}

//   const studentsEnrolled = Array.isArray(studentsEnrolledRaw)
//     ? studentsEnrolledRaw.length
//     : Number(studentsEnrolledRaw || 0)

//   if (pageLoading) {
//     return (
//       <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-[#050816] px-4 text-center text-white">
//         <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-950/40">
//           <FaGraduationCap className="text-4xl text-cyan-300" />
//           <div className="absolute inset-0 animate-ping rounded-3xl border border-cyan-400/20" />
//         </div>

//         <h2 className="text-xl font-semibold">Preparing your classroom</h2>
//         <p className="mt-2 text-sm text-slate-400">
//           Loading course details...
//         </p>

//         <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
//           <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
//         </div>
//       </div>
//     )
//   }

//   if (fetchError || !courseDetails?.success || !courseData) {
//     return <Error />
//   }

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
//       {/* Ambient background */}
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
//         <div className="absolute right-0 top-96 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
//         <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/[0.08] blur-[120px]" />
//       </div>

//       {/* Course hero */}
//       <section className="relative border-b border-white/[0.08] bg-gradient-to-br from-[#090f24] via-[#070b1a] to-[#050816]">
//         <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
//           <Link
//             to="/catalog/all"
//             className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
//           >
//             <FaArrowLeft />
//             Back to catalog
//           </Link>

//           <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
//             {/* Main course information */}
//             <div className="min-w-0">
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
//                 <FaGraduationCap className="text-sm" />
//                 Featured Course
//               </div>

//               <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                 {courseName}
//               </h1>

//               <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">
//                 {courseDescription}
//               </p>

//               {/* Rating and enrollment */}
//               <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
//                 <div className="flex items-center gap-2">
//                   <span className="font-bold text-amber-300">
//                     {Number(avgReviewCount || 0).toFixed(1)}
//                   </span>
//                   <RatingStars
//                     Review_Count={avgReviewCount}
//                     Star_Size={20}
//                   />
//                   <span className="text-slate-400">
//                     ({ratingAndReviews.length} reviews)
//                   </span>
//                 </div>

//                 <span className="hidden h-4 w-px bg-white/15 sm:block" />

//                 <span className="flex items-center gap-2 text-slate-300">
//                   <FaUsers className="text-cyan-300" />
//                   {studentsEnrolled} students enrolled
//                 </span>
//               </div>

//               {/* Instructor */}
//               <div className="mt-7 flex items-center gap-3">
//                 <img
//                   src={
//                     instructor?.image ||
//                     `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
//                       `${instructor?.firstName || ""} ${instructor?.lastName || ""}`
//                     )}`
//                   }
//                   alt="Course instructor"
//                   className="h-12 w-12 rounded-full border border-cyan-300/30 bg-slate-800 object-cover"
//                 />

//                 <div>
//                   <p className="text-xs text-slate-400">Created by</p>
//                   <p className="mt-1 font-semibold text-white">
//                     {instructor?.firstName} {instructor?.lastName}
//                   </p>
//                 </div>
//               </div>

//               {/* Course metadata */}
//               <div className="mt-7 flex flex-wrap gap-3">
//                 <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs sm:text-sm text-slate-300 backdrop-blur-xl">
//                   <BiInfoCircle className="text-base text-cyan-300" />
//                   <span>Created {formattedDate(createdAt)}</span>
//                 </div>

//                 <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs sm:text-sm text-slate-300 backdrop-blur-xl">
//                   <HiOutlineGlobeAlt className="text-base text-cyan-300" />
//                   <span>English</span>
//                 </div>
//               </div>

//               {/* Mobile course preview */}
//               <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-xl lg:hidden">
//                 {thumbnail ? (
//                   <img
//                     src={thumbnail}
//                     alt={courseName}
//                     className="aspect-video w-full rounded-xl object-cover"
//                   />
//                 ) : (
//                   <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-slate-950">
//                     <FaGraduationCap className="text-5xl text-cyan-300" />
//                   </div>
//                 )}

//                 <div className="pt-4">
//                   <p className="text-xs text-slate-400 uppercase tracking-wider">Course Price</p>
//                   <p className="mt-1 text-3xl font-extrabold text-cyan-300">
//                     ₹{price}
//                   </p>

//                   <button
//                     onClick={handleBuyCourse}
//                     className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition duration-300 hover:scale-[1.02] cursor-pointer"
//                   >
//                     Enroll Now
//                   </button>

//                   <p className="mt-2 text-center text-xs text-slate-400">
//                     Full lifetime access • Self-paced
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop purchase card */}
//             <div className="hidden lg:block">
//               <div className="overflow-hidden rounded-3xl border border-cyan-400/25 bg-[#0b1224]/85 shadow-2xl backdrop-blur-2xl">
//                 {thumbnail && (
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={thumbnail}
//                       alt={courseName}
//                       className="aspect-video w-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224] via-transparent to-transparent" />
//                     <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
//                       <FaPlayCircle className="text-cyan-300" />
//                       Course preview
//                     </div>
//                   </div>
//                 )}

//                 <div className="p-6">
//                   <div className="mb-4 flex items-end justify-between gap-3">
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">One-time enrollment</p>
//                       <p className="mt-1 text-3xl font-extrabold text-cyan-300">
//                         ₹{price}
//                       </p>
//                     </div>
//                     <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1 text-xs font-medium text-emerald-300">
//                       Lifetime Access
//                     </span>
//                   </div>

//                   <CourseDetailsCard
//                     course={courseData}
//                     setConfirmationModal={setConfirmationModal}
//                     handleBuyCourse={handleBuyCourse}
//                   />

//                   <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-xs sm:text-sm text-slate-300">
//                     <div className="flex items-center gap-3">
//                       <FaShieldAlt className="text-cyan-300" />
//                       Secure payment via Razorpay
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <FaRegClock className="text-cyan-300" />
//                       Learn at your own pace
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <FaBookOpen className="text-cyan-300" />
//                       {totalNoOfLectures} lectures included
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main content */}
//       <main className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
//         <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
//           <div className="min-w-0 space-y-8">
//             {/* Learning outcomes */}
//             <section className="rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
//               <div className="mb-6 flex items-center gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
//                   <FaGraduationCap className="text-2xl" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
//                     Curriculum Objectives
//                   </p>
//                   <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
//                     What You'll Learn
//                   </h2>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-white/[0.06] bg-[#050816]/60 p-5 text-sm sm:text-base leading-relaxed text-slate-300">
//                 {whatYouWillLearn || (
//                   <p>Comprehensive learning outcomes and skill competencies covered in this trail.</p>
//                 )}
//               </div>
//             </section>

//             {/* Curriculum */}
//             <section className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 shadow-xl backdrop-blur-xl">
//               <div className="border-b border-white/10 p-6 sm:p-8">
//                 <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
//                       Course Syllabus
//                     </p>
//                     <h2 className="mt-1 text-2xl sm:text-3xl font-bold">
//                       Curriculum Sections
//                     </h2>
//                   </div>

//                   <div className="flex flex-wrap gap-2 text-xs">
//                     <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
//                       <p className="text-base font-bold text-cyan-300">
//                         {courseContent.length}
//                       </p>
//                       <p className="text-[11px] text-slate-400">Sections</p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
//                       <p className="text-base font-bold text-cyan-300">
//                         {totalNoOfLectures}
//                       </p>
//                       <p className="text-[11px] text-slate-400">Lectures</p>
//                     </div>
//                     <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
//                       <p className="text-base font-bold text-cyan-300">
//                         {totalDuration}
//                       </p>
//                       <p className="text-[11px] text-slate-400">Duration</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <button
//                     onClick={expandAllSections}
//                     className="rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 transition hover:bg-cyan-900/60 cursor-pointer"
//                   >
//                     Expand all sections
//                   </button>
//                   <button
//                     onClick={() => setIsActive([])}
//                     className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] cursor-pointer"
//                   >
//                     Collapse all sections
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-3 p-4 sm:p-6">
//                 {courseContent.length > 0 ? (
//                   courseContent.map((course, index) => (
//                     <div
//                       key={course._id || index}
//                       className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-cyan-400/30"
//                     >
//                       <CourseBuyingCard
//                         course={course}
//                         isActive={isActive}
//                         handleActive={handleActive}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="rounded-2xl border border-dashed border-white/10 px-5 py-12 text-center">
//                     <FaBookOpen className="mx-auto text-3xl text-slate-500" />
//                     <p className="mt-4 font-medium text-slate-300">
//                       Curriculum coming soon
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Instructor profile */}
//             <section className="rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-8 backdrop-blur-xl">
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
//                 Author
//               </p>
//               <h2 className="mt-1 text-2xl sm:text-3xl font-bold">
//                 Meet Your Instructor
//               </h2>

//               <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
//                 <div className="relative h-20 w-20 shrink-0">
//                   <img
//                     src={
//                       instructor?.image ||
//                       `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
//                         `${instructor?.firstName || ""} ${instructor?.lastName || ""}`
//                       )}`
//                     }
//                     alt="Instructor"
//                     className="h-20 w-20 rounded-2xl border border-cyan-400/30 bg-slate-800 object-cover shadow-[0_0_15px_rgba(0,240,255,0.2)]"
//                   />
//                   <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0b1224] bg-cyan-400 text-xs text-slate-950 font-bold">
//                     <FaCheckCircle />
//                   </span>
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-xl font-bold text-white">
//                     {instructor?.firstName} {instructor?.lastName}
//                   </h3>

//                   <div className="mt-1 flex items-center gap-2 text-xs text-amber-300">
//                     <FaStar />
//                     <span>Verified Educator</span>
//                   </div>

//                   <p className="mt-3 text-sm leading-relaxed text-slate-300">
//                     {instructor?.additionalDetails?.about ||
//                       "Dedicated educator with practical industry experience guiding students through deep technology mastery."}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Quick information sidebar */}
//           <aside className="hidden lg:block">
//             <div className="sticky top-24 space-y-4">
//               <div className="rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 backdrop-blur-xl shadow-xl">
//                 <h3 className="text-base font-bold text-white">Course Summary</h3>

//                 <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
//                   {[
//                     {
//                       icon: FaBookOpen,
//                       label: "Course sections",
//                       value: courseContent.length,
//                     },
//                     {
//                       icon: FaPlayCircle,
//                       label: "Total lectures",
//                       value: totalNoOfLectures,
//                     },
//                     {
//                       icon: FaRegClock,
//                       label: "Course duration",
//                       value: totalDuration,
//                     },
//                     {
//                       icon: FaUsers,
//                       label: "Learners enrolled",
//                       value: studentsEnrolled,
//                     },
//                     {
//                       icon: FaStar,
//                       label: "Average rating",
//                       value: `${Number(avgReviewCount || 0).toFixed(1)} / 5`,
//                     },
//                   ].map(({ icon: Icon, label, value }) => (
//                     <div
//                       key={label}
//                       className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
//                     >
//                       <div className="flex items-center gap-2.5 text-slate-400">
//                         <Icon className="text-cyan-400" />
//                         <span>{label}</span>
//                       </div>
//                       <span className="font-semibold text-slate-200">
//                         {value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-950/30 to-[#0b1224] p-5 shadow-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
//                     <FaShieldAlt className="text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-white">Ready to elevate your trail?</h4>
//                     <p className="text-xs text-slate-400">
//                       Join hundreds of active learners.
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleBuyCourse}
//                   className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition duration-300 hover:scale-[1.02] cursor-pointer"
//                 >
//                   Enroll Now
//                   <FaChevronDown className="-rotate-90 text-xs" />
//                 </button>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       <Footer />

//       {confirmationModal && (
//         <ConfirmationModal modalData={confirmationModal} />
//       )}
//     </div>
//   )
// }

// export default CourseDetails



import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { fetchCourseDetails } from "../services/opreations/courseDetails"
import { buyCourse } from "../services/opreations/featuresStudentApi"
import GetAvgRating from "../utils/ratingAvg"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import Error from "../pages/Error"
import ConfirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/starRating"
import formattedDate from "../utils/dateFormatter"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import {
  FaArrowLeft,
  FaBookOpen,
  FaCheckCircle,
  FaChevronRight,
  FaGraduationCap,
  FaPlayCircle,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa"
import Footer from "../components/common/footer"
import CourseBuyingCard from "../components/core/Course/CourseBuyingCard"

const parseDuration = (duration) => {
  if (duration === undefined || duration === null || duration === "") {
    return 0
  }

  const value = String(duration).trim()

  if (value.includes(":")) {
    const parts = value.split(":").map(Number)
    if (parts.some(Number.isNaN)) return 0

    return parts.reduce((total, part) => total * 60 + part, 0)
  }

  const seconds = Number(value)
  return Number.isFinite(seconds) && seconds >= 0 ? seconds : 0
}

const formatDuration = (totalSeconds) => {
  if (!totalSeconds) return "Duration varies"

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)

  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`
  if (hours > 0) return `${hours}h`
  if (minutes > 0) return `${minutes} min`

  return `${totalSeconds}s`
}

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { courseId } = useParams()

  const [confirmationModal, setConfirmationModal] = useState(null)
  const [courseDetails, setCourseDetails] = useState(null)
  const [pageLoading, setPageLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)
  const [isActive, setIsActive] = useState([])

  useEffect(() => {
    let cancelled = false

    const getFullCourseData = async () => {
      setPageLoading(true)
      setFetchError(false)
      setCourseDetails(null)
      setIsActive([])

      try {
        const result = await fetchCourseDetails(courseId)

        if (!cancelled) {
          setCourseDetails(result)
          setFetchError(!result?.success)
        }
      } catch (error) {
        console.error("Could not fetch course details:", error)

        if (!cancelled) {
          setFetchError(true)
        }
      } finally {
        if (!cancelled) {
          setPageLoading(false)
        }
      }
    }

    getFullCourseData()

    return () => {
      cancelled = true
    }
  }, [courseId])

  const courseData =
    courseDetails?.data?.CourseDetails ||
    courseDetails?.data?.courseDetails ||
    courseDetails?.data

  const ratingAndReviews = courseData?.ratingAndReviews ?? []
  const avgReviewCount = GetAvgRating(ratingAndReviews)
  const courseContent = courseData?.courseContent ?? []

  const totalNoOfLectures = courseContent.reduce(
    (total, section) => total + (section?.subSection?.length || 0),
    0
  )

  const totalDurationSeconds = courseContent.reduce((total, section) => {
    const sectionDuration = (section?.subSection ?? []).reduce(
      (subTotal, subSec) => subTotal + parseDuration(subSec?.timeDuration),
      0
    )

    return total + sectionDuration
  }, 0)

  const totalDuration = formatDuration(totalDurationSeconds)

  const handleActive = (id) => {
    setIsActive((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const expandAllSections = () => {
    setIsActive(courseContent.map((section) => section._id))
  }

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch)
      return
    }

    setConfirmationModal({
      text1: "You are not logged in",
      text2: "Please sign in to purchase this course and start learning.",
      btn1Text: "Sign In",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  const {
    courseName = "Course Overview",
    courseDescription = "",
    thumbnail = "",
    price = 0,
    whatYouWillLearn = "",
    instructor,
    createdAt,
    studentsEnrolled: studentsEnrolledRaw = [],
  } = courseData || {}

  const studentsEnrolled = Array.isArray(studentsEnrolledRaw)
    ? studentsEnrolledRaw.length
    : Number(studentsEnrolledRaw || 0)

  const panelClass =
    "rounded-2xl border border-white/[0.08] bg-[#111114] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"

  const smallLabelClass =
    "text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs"

  const instructorName =
    `${instructor?.firstName || ""} ${instructor?.lastName || ""}`.trim()

  const instructorImage =
    instructor?.image ||
    `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
      instructorName || "EduTrail Instructor"
    )}`

  if (pageLoading) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#09090b] px-4 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12),transparent_60%)]" />

        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
          <FaGraduationCap className="text-4xl" />
          <div className="absolute inset-0 animate-ping rounded-3xl border border-violet-400/20" />
        </div>

        <h2 className="text-xl font-semibold tracking-tight">
          Preparing your classroom
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Loading course details...
        </p>

        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-violet-400" />
        </div>
      </div>
    )
  }

  if (fetchError || !courseDetails?.success || !courseData) {
    return <Error />
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090b] font-sans text-white">
      {/* Hero */}
      <section className="relative isolate border-b border-white/[0.07] bg-[#0b0b0f]">
        <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[100px]" />

        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Link
            to="/catalog/all"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400 transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.06] hover:text-white"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to catalog
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                <FaGraduationCap />
                Featured Course
              </div>

              <h1 className="max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {courseName}
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                {courseDescription}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-amber-300">
                    {Number(avgReviewCount || 0).toFixed(1)}
                  </span>

                  <RatingStars
                    Review_Count={avgReviewCount}
                    Star_Size={20}
                  />

                  <span className="text-zinc-500">
                    ({ratingAndReviews.length} reviews)
                  </span>
                </div>

                <span className="hidden h-5 w-px bg-white/10 sm:block" />

                <span className="flex items-center gap-2 text-zinc-400">
                  <FaUsers className="text-violet-300" />
                  {studentsEnrolled} students enrolled
                </span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <img
                  src={instructorImage}
                  alt={instructorName || "Course instructor"}
                  className="h-12 w-12 rounded-2xl border border-white/10 bg-[#17171c] object-cover ring-4 ring-white/[0.03]"
                />

                <div>
                  <p className="text-xs text-zinc-500">Created by</p>
                  <p className="mt-1 font-semibold text-zinc-100">
                    {instructorName || "EduTrail Instructor"}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-zinc-300 transition hover:border-white/20 sm:text-sm">
                  <BiInfoCircle className="text-base text-violet-300" />
                  <span>Created {formattedDate(createdAt)}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-zinc-300 transition hover:border-white/20 sm:text-sm">
                  <HiOutlineGlobeAlt className="text-base text-violet-300" />
                  <span>English</span>
                </div>
              </div>

              {/* Mobile purchase card */}
              <div className={`${panelClass} mt-8 overflow-hidden p-3 lg:hidden`}>
                <div className="relative overflow-hidden rounded-xl bg-[#09090b]">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={courseName}
                      className="aspect-video w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center">
                      <FaGraduationCap className="text-5xl text-zinc-600" />
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <FaPlayCircle className="text-violet-300" />
                    Course preview
                  </span>
                </div>

                <div className="p-4">
                  <p className={smallLabelClass}>One-time enrollment</p>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-white">
                    ₹{price}
                  </p>

                  <button
                    onClick={handleBuyCourse}
                    className="mt-5 w-full rounded-xl bg-violet-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:bg-violet-400 active:scale-[0.98]"
                  >
                    Enroll Now
                  </button>

                  <p className="mt-3 text-center text-xs text-zinc-500">
                    Full lifetime access · Self-paced
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop purchase card */}
            <div className="hidden lg:block">
              <div className={`${panelClass} sticky top-24 overflow-hidden`}>
                <div className="relative overflow-hidden bg-[#09090b]">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={courseName}
                      className="aspect-video w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center">
                      <FaGraduationCap className="text-6xl text-zinc-700" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <FaPlayCircle className="text-violet-300" />
                    Course preview
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-5">
                    <p className={smallLabelClass}>One-time enrollment</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white">
                      ₹{price}
                    </p>
                  </div>

                  <CourseDetailsCard
                    course={courseData}
                    setConfirmationModal={setConfirmationModal}
                    handleBuyCourse={handleBuyCourse}
                  />

                  <div className="mt-6 space-y-4 border-t border-white/[0.08] pt-5 text-sm text-zinc-400">
                    <div className="flex items-center gap-3">
                      <FaShieldAlt className="text-violet-300" />
                      Secure payment gateway
                    </div>

                    <div className="flex items-center gap-3">
                      <FaRegClock className="text-violet-300" />
                      Learn at your own pace
                    </div>

                    <div className="flex items-center gap-3">
                      <FaBookOpen className="text-violet-300" />
                      {totalNoOfLectures} lectures included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course content */}
      <main className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-8">
            {/* Learning outcomes */}
            <section className={`${panelClass} p-5 sm:p-8`}>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
                  <FaGraduationCap className="text-xl" />
                </div>

                <div>
                  <p className={smallLabelClass}>Curriculum objectives</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    What You'll Learn
                  </h2>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#09090b] p-5 text-sm leading-7 text-zinc-400 sm:p-6 sm:text-base">
                {whatYouWillLearn || (
                  <p>
                    Learning outcomes for this course will be available here.
                  </p>
                )}
              </div>
            </section>

            {/* Curriculum */}
            <section className={`${panelClass} overflow-hidden`}>
              <div className="border-b border-white/[0.08] p-5 sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className={smallLabelClass}>Course syllabus</p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Curriculum Sections
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      Explore the sections and lessons included in this course.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: courseContent.length, label: "Sections" },
                      { value: totalNoOfLectures, label: "Lectures" },
                      { value: totalDuration, label: "Duration" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="min-w-0 rounded-xl border border-white/[0.08] bg-[#09090b] px-3 py-3 text-center"
                      >
                        <p className="break-words text-sm font-bold text-white sm:text-lg">
                          {item.value}
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={expandAllSections}
                    className="rounded-xl border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2.5 text-xs font-semibold text-violet-200 transition duration-300 hover:border-violet-400/40 hover:bg-violet-400/[0.14] sm:text-sm"
                  >
                    Expand all sections
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsActive([])}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-zinc-400 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-sm"
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>

              <div className="space-y-3 p-4 sm:p-6">
                {courseContent.length > 0 ? (
                  courseContent.map((course, index) => (
                    <div
                      key={course._id || index}
                      className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#09090b] transition duration-300 hover:border-violet-400/25 hover:bg-[#0c0c11]"
                    >
                      <CourseBuyingCard
                        course={course}
                        isActive={isActive}
                        handleActive={handleActive}
                      />
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl border border-dashed border-white/10 px-5 py-14 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
                      <FaBookOpen className="text-2xl text-zinc-500" />
                    </div>

                    <p className="mt-4 font-semibold text-zinc-300">
                      Curriculum coming soon
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">
                      Course lessons will appear here when available.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Instructor */}
            <section className={`${panelClass} p-5 sm:p-8`}>
              <p className={smallLabelClass}>Your instructor</p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Meet Your Instructor
              </h2>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-20 w-20 shrink-0">
                  <img
                    src={instructorImage}
                    alt={instructorName || "Instructor"}
                    className="h-20 w-20 rounded-2xl border border-white/10 bg-[#09090b] object-cover"
                  />

                  <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#111114] bg-violet-400 text-xs text-[#09090b]">
                    <FaCheckCircle />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-xl font-bold text-white">
                    {instructorName || "EduTrail Instructor"}
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-amber-400/[0.06] px-3 py-1.5 text-xs font-medium text-amber-300">
                    <FaStar />
                    Course Instructor
                  </div>

                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-400">
                    {instructor?.additionalDetails?.about ||
                      "Learn from your course instructor and build your knowledge step by step."}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Course summary sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className={`${panelClass} p-6`}>
                <p className={smallLabelClass}>At a glance</p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  Course Summary
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: FaBookOpen,
                      label: "Course sections",
                      value: courseContent.length,
                    },
                    {
                      icon: FaPlayCircle,
                      label: "Total lectures",
                      value: totalNoOfLectures,
                    },
                    {
                      icon: FaRegClock,
                      label: "Course duration",
                      value: totalDuration,
                    },
                    {
                      icon: FaUsers,
                      label: "Learners enrolled",
                      value: studentsEnrolled,
                    },
                    {
                      icon: FaStar,
                      label: "Average rating",
                      value: `${Number(avgReviewCount || 0).toFixed(1)} / 5`,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <Icon className="shrink-0 text-violet-300" />
                        <span>{label}</span>
                      </div>

                      <span className="text-right text-sm font-semibold text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${panelClass} p-5`}>
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
                    <FaShieldAlt className="text-lg" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Ready to start learning?
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Take the next step in your learning journey.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBuyCourse}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:bg-violet-400 active:scale-[0.98]"
                >
                  Enroll Now
                  <FaChevronRight className="text-xs" />
                </button>

                <p className="mt-3 text-center text-xs text-zinc-500">
                  Learn at your own pace
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </div>
  )
}

export default CourseDetails

