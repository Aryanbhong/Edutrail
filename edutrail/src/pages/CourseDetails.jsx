// import React, { useEffect, useState } from 'react'
// import { buyCourse } from '../services/opreations/featuresStudentApi'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom';
// import { fetchCourseDetails } from '../services/opreations/courseDetails';
// import GetAvgRating from '../utils/ratingAvg';
// import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
// import Error from "../pages/Error"
// import ConfirmationModal from '../components/common/ConfirmationModal';
// import RatingStars from '../components/common/starRating';
// import { MdFormatAlignRight } from 'react-icons/md';
// import formattedDate from '../utils/dateFormatter';
// import { BiInfoCircle } from "react-icons/bi"
// import { HiOutlineGlobeAlt } from "react-icons/hi"
// import Footer from '../components/common/footer';
// import CourseBuyingSubSection from '../components/core/Course/CourseBuyingSubSection';
// import CourseBuyingCard from '../components/core/Course/CourseBuyingCard';
// import ViewCourse from './ViewCourse';
// const CourseDetails = () => {

//   const {user} = useSelector((state)=> state.profile);
//   const {token} = useSelector((state)=> state.auth);
//   const {loading}= useSelector((state) => state.profile);
//   const{ paymentLoading } = useSelector((state) => state.course);
//   const navigate = useNavigate();
//   const dispatch = useDispatch()
  
//   const {courseId} = useParams();
//   const [confirmationModal, setConfirmationModal] = useState(null);

//   const [courseDetails, setCourseDetails] =useState(null);
   
//   useEffect(()=>{
//     const getfFullCourseData = async()=>{
//       try{
//         const result = await fetchCourseDetails(courseId);
//         setCourseDetails(result);
//         console.log(" coursedetails fetched ", result);
//       }
//       catch(error){
//          console.log("Could not fetch course details");
//       }
//     }
//     getfFullCourseData();
//   },[courseId]);

//   const [ avgReviewCount, setAverageReviewCount] = useState(0);

   
//   useEffect(()=>{
//     const count = GetAvgRating(courseDetails?.data?.CourseDetails?.ratingAndReviews);
//     setAverageReviewCount(count);
//   },[courseDetails])
  

//   const [ totalNoOfLectures, setTotalNoOfLectures]= useState(0);


  
//   useEffect(()=>{
//     let lectures= 0;
//     courseDetails?.data?.courseContent?.forEach((sec) =>
//     lectures+= sec.subSection.length || 0
//     )
//     setTotalNoOfLectures(lectures);
//   })
//  //TO update 
//       const handleBuyCourse=()=>{
//       console.log(" hello ji");
//         if(token){
//             buyCourse(token, [courseId], user, navigate, dispatch);
//         return;
//         }
//         setConfirmationModal({
//           text1:"you are not Logged in",
//           text2:"Please login to purchase the course",
//           btn1Text:"Login",
//           btn2Text:"Cancel",
//           btn1Handler:()=> navigate("/login"),
//           btn2Handler:()=>setConfirmationModal(null),
//         })
//     }
//     const [ isActive, setIsActive] = useState([]);
//     const handleActive=(id)=>{
//       setIsActive(
//         !isActive.includes(id)
//         ? isActive.concat(id)
//         : isActive.filter((e)=> e != id)
//       )
//     }
//     console.log(" madoldata ka data", confirmationModal)

//      if(loading || !courseDetails){
//       return(
//         <div>
//           Loading...
//         </div>
//       )
//      }

//       if(!courseDetails?.success){
//         return(
//           <div>
//             <Error/>
//           </div>
//         )
//       }

//       const{
//         _id,
//         courseName,
//         courseDescription,
//         thumbnail,
//         price,
//         whatYouWillLearn,
//         courseContent,
//         ratingAndReviews,
//        instructor,
//        studentsEnrolled,
//         createdAt,
//       } = courseDetails.data;
     
//   return (
//     <>
//         <div className={`relative w-full bg-richblack-800`}>
//           {/* Hero Section */}
//           <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
//             <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
//               <div className="relative block max-h-[30rem] lg:hidden">
//                 <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
//                 <img
//                   src={thumbnail}
//                   alt="course thumbnail"
//                   className="aspect-auto w-full"
//                 />
//               </div>
//               <div
//                 className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
//               >
//                 <div>
//                   <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
//                     {courseName}
//                   </p>
//                 </div>
//                 <p className={`text-richblack-200`}>{courseDescription}</p>
//                 <div className="text-md flex flex-wrap items-center gap-2">
//                   <span className="text-yellow-25">{avgReviewCount}</span>
//                   <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
//                   <span>{`(${ratingAndReviews.length} reviews)`}</span>
//                   <span>{`${studentsEnrolled} students enrolled`}</span>
//                 </div>
//                 <div>
//                   <p className="">
//                     Created By {`${instructor.firstName} ${instructor.lastName}`}
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap gap-5 text-lg">
//                   <p className="flex items-center gap-2">
//                     {" "}
//                     <BiInfoCircle /> Created at {formattedDate(createdAt)}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     {" "}
//                     <HiOutlineGlobeAlt /> English
//                   </p>
//                 </div>
//               </div>
//               <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
//                 <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
//                   Rs. {price}
//                 </p>
//                 <button className="yellowButton" onClick={handleBuyCourse}>
//                   Buy Now
//                 </button>
//                 <button className="blackButton">Add to Cart</button>
//               </div>
//             </div>
//             {/* Courses Card */}
//             <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
//               <CourseDetailsCard
//                 course={courseDetails?.data}
//                 setConfirmationModal={setConfirmationModal}
//                 handleBuyCourse={handleBuyCourse}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
//           <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
//             {/* What will you learn section */}
//             <div className="my-8 border border-richblack-600 p-8">
//               <p className="text-3xl font-semibold">What you'll learn</p>
//               <div className="mt-5">
//                 {/* <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown> */}
//                 {whatYouWillLearn}
//               </div>
//             </div>
  
//             {/* Course Content Section */}
//             <div className="max-w-[830px] ">
//               <div className="flex flex-col gap-3">
//                 <p className="text-[28px] font-semibold">Course Content</p>
//                 <div className="flex flex-wrap justify-between gap-2">
//                   <div className="flex gap-2">
//                     <span>
//                       {courseContent.length} {`section(s)`}
//                     </span>
//                     <span>
//                       {totalNoOfLectures} {`lecture(s)`}
//                     </span>
//                     <span>{courseDetails?.data?.courseContent[0]?.subSection[0]?.timeDuration}s total length</span>
//                   </div>
//                   <div>
//                     <button
//                       className="text-yellow-25"
//                       onClick={() => setIsActive([])}
//                     >
//                       Collapse all sections
//                     </button>
//                   </div>
//                 </div>
//               </div>
  
//               {/* Course Details Accordion */}
//               <div className="py-4">
//                 {courseContent?.map((course, index) => (
//                   <CourseBuyingCard
//                     course={course}
//                     key={index}
//                     isActive={isActive}
//                     handleActive={handleActive}
//                   />
//                 ))}
//               </div>
  
//               {/* Author Details */}
//               <div className="mb-12 py-4">
//                 <p className="text-[28px] font-semibold">Author</p>
//                 <div className="flex items-center gap-4 py-4">
//                   <img
//                     src={
//                       instructor.image
//                         ? instructor.image
//                         : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
//                     }
//                     alt="Author"
//                     className="h-14 w-14 rounded-full object-cover"
//                   />
//                   <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
//                 </div>
//                 <p className="text-richblack-50">
//                   {instructor?.additionalDetails?.about}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//       </>
//   )
// }

// export default CourseDetails



import React, { useEffect, useMemo, useState } from "react";
import { buyCourse } from "../services/opreations/featuresStudentApi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services/opreations/courseDetails";
import GetAvgRating from "../utils/ratingAvg";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";
import Error from "../pages/Error";
import ConfirmationModal from "../components/common/ConfirmationModal";
import RatingStars from "../components/common/starRating";
import formattedDate from "../utils/dateFormatter";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import {
  FaArrowLeft,
  FaBookOpen,
  FaCheckCircle,
  FaChevronDown,
  FaGraduationCap,
  FaPlayCircle,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import Footer from "../components/common/footer";
import CourseBuyingCard from "../components/core/Course/CourseBuyingCard";

const parseDuration = (duration) => {
  if (duration === undefined || duration === null || duration === "") {
    return 0;
  }

  const value = String(duration).trim();

  if (value.includes(":")) {
    const parts = value.split(":").map(Number);

    if (parts.some(Number.isNaN)) return 0;

    return parts.reduce((total, part) => total * 60 + part, 0);
  }

  const seconds = Number(value);
  return Number.isFinite(seconds) ? seconds : 0;
};

const formatDuration = (totalSeconds) => {
  if (!totalSeconds) return "Duration varies";

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes} min`;

  return `${totalSeconds}s`;
};

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const [confirmationModal, setConfirmationModal] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const getFullCourseData = async () => {
      setPageLoading(true);
      setFetchError(false);
      setCourseDetails(null);

      try {
        const result = await fetchCourseDetails(courseId);

        if (!cancelled) {
          setCourseDetails(result);
          setFetchError(!result?.success);
        }
      } catch (error) {
        console.error("Could not fetch course details:", error);

        if (!cancelled) {
          setFetchError(true);
        }
      } finally {
        if (!cancelled) {
          setPageLoading(false);
        }
      }
    };

    if (courseId) getFullCourseData();

    return () => {
      cancelled = true;
    };
  }, [courseId]);

  const courseData = courseDetails?.data;

  const courseName = courseData?.courseName;
  const courseDescription = courseData?.courseDescription;
  const thumbnail = courseData?.thumbnail;
  const price = courseData?.price;
  const whatYouWillLearn = courseData?.whatYouWillLearn;
  const courseContent = courseData?.courseContent || [];
  const ratingAndReviews =
    courseData?.ratingAndReviews ||
    courseData?.CourseDetails?.ratingAndReviews ||
    [];
  const instructor = courseData?.instructor;
  const studentsEnrolled = courseData?.studentsEnrolled || 0;
  const createdAt = courseData?.createdAt;

  const avgReviewCount = useMemo(() => {
    return GetAvgRating(ratingAndReviews);
  }, [ratingAndReviews]);

  const totalNoOfLectures = useMemo(() => {
    return courseContent.reduce(
      (total, section) => total + (section?.subSection?.length || 0),
      0
    );
  }, [courseContent]);

  const totalDuration = useMemo(() => {
    const seconds = courseContent.reduce((total, section) => {
      const sectionDuration = (section?.subSection || []).reduce(
        (sum, subsection) => sum + parseDuration(subsection?.timeDuration),
        0
      );

      return total + sectionDuration;
    }, 0);

    return formatDuration(seconds);
  }, [courseContent]);

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }

    setConfirmationModal({
      text1: "You're not logged in",
      text2: "Please log in to purchase this course.",
      btn1Text: "Log In",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  const handleActive = (id) => {
    setIsActive((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const expandAllSections = () => {
    setIsActive(courseContent.map((section) => section._id));
  };

  if (pageLoading || loading || !courseDetails) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070B18] px-4 text-white">
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-blue-500/10 shadow-[0_0_50px_rgba(34,211,238,0.12)]">
          <FaGraduationCap className="text-4xl text-cyan-300" />
          <div className="absolute inset-0 animate-ping rounded-3xl border border-cyan-400/20" />
        </div>

        <h2 className="text-xl font-semibold">Preparing your classroom</h2>
        <p className="mt-2 text-sm text-slate-400">
          Loading your course details...
        </p>

        <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </div>
      </div>
    );
  }

  if (fetchError || !courseDetails?.success || !courseData) {
    return <Error />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#070B18] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute right-0 top-96 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/[0.08] blur-[120px]" />
      </div>

      {/* Course hero */}
      <section className="relative border-b border-white/[0.08] bg-gradient-to-br from-[#0B1530] via-[#0A1022] to-[#070B18]">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <Link
            to="/catalog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <FaArrowLeft />
            Back to catalog
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            {/* Main course information */}
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                <FaGraduationCap className="text-sm" />
                Your next skill starts here
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {courseName}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {courseDescription}
              </p>

              {/* Rating and enrollment */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-300">
                    {Number(avgReviewCount || 0).toFixed(1)}
                  </span>
                  <RatingStars
                    Review_Count={avgReviewCount}
                    Star_Size={20}
                  />
                  <span className="text-slate-400">
                    ({ratingAndReviews.length} reviews)
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/15 sm:block" />

                <span className="flex items-center gap-2 text-slate-300">
                  <FaUsers className="text-cyan-300" />
                  {studentsEnrolled} students enrolled
                </span>
              </div>

              {/* Instructor */}
              <div className="mt-7 flex items-center gap-3">
                <img
                  src={
                    instructor?.image ||
                    `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
                      `${instructor?.firstName || ""} ${instructor?.lastName || ""}`
                    )}`
                  }
                  alt="Course instructor"
                  className="h-12 w-12 rounded-full border border-cyan-300/30 bg-slate-800 object-cover"
                />

                <div>
                  <p className="text-xs text-slate-400">Created by</p>
                  <p className="mt-1 font-semibold text-white">
                    {instructor?.firstName} {instructor?.lastName}
                  </p>
                </div>
              </div>

              {/* Course metadata */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
                  <BiInfoCircle className="text-lg text-cyan-300" />
                  <span>Created {formattedDate(createdAt)}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
                  <HiOutlineGlobeAlt className="text-lg text-cyan-300" />
                  English
                </div>
              </div>

              {/* Mobile course preview */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:hidden">
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={courseName}
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-slate-950">
                    <FaGraduationCap className="text-5xl text-cyan-300" />
                  </div>
                )}

                <div className="p-4">
                  <p className="text-sm text-slate-400">Course price</p>
                  <p className="mt-1 text-3xl font-bold text-white">
                    ₹{price}
                  </p>

                  <button
                    onClick={handleBuyCourse}
                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 font-bold text-white shadow-[0_8px_30px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(34,211,238,0.3)]"
                  >
                    Enroll Now
                  </button>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Start learning at your own pace
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop purchase card */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#101A31]/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                {thumbnail && (
                  <div className="relative overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={courseName}
                      className="aspect-video w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101A31] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                      <FaPlayCircle className="text-cyan-300" />
                      Course preview
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="mb-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-400">One-time purchase</p>
                      <p className="mt-1 text-3xl font-bold text-white">
                        ₹{price}
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-300">
                      Learn anytime
                    </span>
                  </div>

                  <CourseDetailsCard
                    course={courseData}
                    setConfirmationModal={setConfirmationModal}
                    handleBuyCourse={handleBuyCourse}
                  />

                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                      <FaShieldAlt className="text-cyan-300" />
                      Secure course enrollment
                    </div>
                    <div className="flex items-center gap-3">
                      <FaRegClock className="text-cyan-300" />
                      Learn at your own pace
                    </div>
                    <div className="flex items-center gap-3">
                      <FaBookOpen className="text-cyan-300" />
                      {totalNoOfLectures} lectures included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-8">
            {/* Learning outcomes */}
            <section className="rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-[#101B34]/90 to-[#0C1427]/90 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10">
                  <FaGraduationCap className="text-xl text-cyan-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Your outcomes
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                    What you'll learn
                  </h2>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-black/10 p-5 text-sm leading-7 text-slate-300 sm:p-6 sm:text-base">
                {whatYouWillLearn || (
                  <p>Learning outcomes will be available soon.</p>
                )}
              </div>
            </section>

            {/* Curriculum */}
            <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1529]/80 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl">
              <div className="border-b border-white/10 p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Inside the course
                    </p>
                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Course curriculum
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      Explore the sections and lectures included.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                      <p className="text-lg font-bold text-cyan-300">
                        {courseContent.length}
                      </p>
                      <p className="text-xs text-slate-400">Sections</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                      <p className="text-lg font-bold text-cyan-300">
                        {totalNoOfLectures}
                      </p>
                      <p className="text-xs text-slate-400">Lectures</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                      <p className="text-lg font-bold text-cyan-300">
                        {totalDuration}
                      </p>
                      <p className="text-xs text-slate-400">Duration</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={expandAllSections}
                    className="rounded-lg border border-cyan-300/20 bg-cyan-400/[0.07] px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/[0.14]"
                  >
                    Expand all sections
                  </button>
                  <button
                    onClick={() => setIsActive([])}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08]"
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
                      className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] transition-colors hover:border-cyan-300/20"
                    >
                      <CourseBuyingCard
                        course={course}
                        isActive={isActive}
                        handleActive={handleActive}
                      />
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl border border-dashed border-white/10 px-5 py-12 text-center">
                    <FaBookOpen className="mx-auto text-3xl text-slate-500" />
                    <p className="mt-4 font-medium text-slate-300">
                      Curriculum coming soon
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      The instructor hasn't added any sections yet.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Instructor profile */}
            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#101A31]/90 to-[#0B1224]/90 p-6 backdrop-blur-xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Meet your instructor
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Learn from the author
              </h2>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-20 w-20 shrink-0">
                  <img
                    src={
                      instructor?.image ||
                      `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
                        `${instructor?.firstName || ""} ${instructor?.lastName || ""}`
                      )}`
                    }
                    alt="Instructor"
                    className="h-20 w-20 rounded-2xl border border-cyan-300/20 bg-slate-800 object-cover"
                  />
                  <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#101A31] bg-cyan-400 text-xs text-slate-950">
                    <FaCheckCircle />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold">
                    {instructor?.firstName} {instructor?.lastName}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <FaStar className="text-amber-300" />
                    Course instructor
                  </div>

                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-300 sm:text-base">
                    {instructor?.additionalDetails?.about ||
                      "Instructor information will be updated soon."}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Quick information sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#101A31]/75 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-bold">Course at a glance</h3>

                <div className="mt-5 space-y-4">
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
                      className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <Icon className="text-cyan-300" />
                        {label}
                      </div>
                      <span className="text-right text-sm font-semibold text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-blue-500/10 to-cyan-400/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10">
                    <FaShieldAlt className="text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ready to level up?</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Your next learning journey awaits.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleBuyCourse}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)]"
                >
                  Enroll Now
                  <FaChevronDown className="-rotate-90" />
                </button>
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
  );
};

export default CourseDetails;

