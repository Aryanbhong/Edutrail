// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Outlet, useParams } from 'react-router-dom';
// import { getFullDetailsOfCourse } from '../services/opreations/courseDetails';
// import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
// import CourseReviewModal from '../components/core/ViewCourse/CourseReviewModal';
// import VideoDetailsSidebar from '../components/core/ViewCourse/VideoDetailsSidebar';
// const ViewCourse = () => {

//     const [reviewModal, setReviewModal] = useState(false);
//     const {courseId} = useParams();
//     const {token} = useSelector((state)=> state.auth);
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         const setCourseSpecificDetails= async()=>{
//             // const courseDetails = getFullDetailsOfCourse(courseId, token);
//              const result = await getFullDetailsOfCourse(courseId, token);
             
//             console.log("coursedetails ka result", result?.courseDetails)
//             dispatch(setCourseSectionData(result?.courseDetails?.courseContent));
//             dispatch(setEntireCourseData(result?.courseDetails));
//             dispatch(setCompletedLectures(result?.courseDetails?.completedVideos));
//             let lectures =0;
//             result?.courseDetails?.courseContent?.forEach((sec)=>{
//                 lectures += sec.subSection.length
//             })
//             dispatch(setTotalNoOfLectures(lectures));
  
//         }
//         setCourseSpecificDetails();
//     },[])
  
//   return (
//    <>
//     <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//       <VideoDetailsSidebar setReviewModal={setReviewModal}/>
//       <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
//         <div className="mx-6">
//         <Outlet/>
//         </div>
        
//       </div>
//     </div>
//     {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
//     {/* <CourseReviewModal setReviewModal={setReviewModal}/> */}
//    </>
//   )
// }

// export default ViewCourse



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { FaGraduationCap, FaPlayCircle } from "react-icons/fa";

import { getFullDetailsOfCourse } from "../services/opreations/courseDetails";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";

const ViewCourse = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let cancelled = false;

    const setCourseSpecificDetails = async () => {
      setLoading(true);
      setLoadError(false);

      try {
        const result = await getFullDetailsOfCourse(courseId, token);

        if (cancelled) return;

        const courseDetails = result?.courseDetails;

        if (!courseDetails) {
          setLoadError(true);
          return;
        }

        const courseContent = courseDetails.courseContent || [];
        const completedVideos = courseDetails.completedVideos || [];

        const totalLectures = courseContent.reduce(
          (total, section) =>
            total + (section?.subSection?.length || 0),
          0
        );

        dispatch(setCourseSectionData(courseContent));
        dispatch(setEntireCourseData(courseDetails));
        dispatch(setCompletedLectures(completedVideos));
        dispatch(setTotalNoOfLectures(totalLectures));
      } catch (error) {
        console.error("Unable to load course content:", error);

        if (!cancelled) {
          setLoadError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    if (courseId && token) {
      setCourseSpecificDetails();
    } else {
      setLoading(false);
      setLoadError(true);
    }

    return () => {
      cancelled = true;
    };
  }, [courseId, token, dispatch]);

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] overflow-hidden bg-[#070B18] text-white">
      {/* Ambient neon background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/[0.06] blur-[120px]" />
      </div>

      {/* Course navigation sidebar */}
      <div className="relative z-20 shrink-0">
        <VideoDetailsSidebar setReviewModal={setReviewModal} />
      </div>

      {/* Main video and lesson workspace */}
      <main className="relative z-10 h-[calc(100vh-3.5rem)] min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1500px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
          {/* Loading state */}
          {loading && (
            <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 text-center backdrop-blur-xl">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08]">
                <FaGraduationCap className="text-3xl text-cyan-300" />
                <span className="absolute inset-0 animate-ping rounded-2xl border border-cyan-300/20" />
              </div>

              <h2 className="mt-6 text-xl font-bold">
                Preparing your classroom
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Loading your lessons and tracking your progress...
              </p>

              <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
              </div>
            </div>
          )}

          {/* Error state */}
          {!loading && loadError && (
            <div className="flex min-h-[45vh] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 text-center backdrop-blur-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
                <FaPlayCircle className="text-3xl text-cyan-300" />
              </div>

              <h2 className="mt-5 text-xl font-bold">
                Couldn't load this classroom
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                We couldn't retrieve the course content. Check your connection
                and try refreshing the page.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)]"
              >
                Reload classroom
              </button>
            </div>
          )}

          {/* Existing lesson routes */}
          {!loading && !loadError && (
            <div className="min-w-0">
              <Outlet />
            </div>
          )}
        </div>
      </main>

      {/* Course review modal */}
      {reviewModal && (
        <CourseReviewModal setReviewModal={setReviewModal} />
      )}
    </div>
  );
};

export default ViewCourse;

