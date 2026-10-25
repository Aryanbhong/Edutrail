// // import React from 'react'
// // import { useState } from 'react';
// // import { useEffect } from 'react';
// // import { useRef } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useLocation, useNavigate, useParams } from 'react-router-dom'
// // import { markLectureAsComplete } from '../../../services/opreations/courseDetails';
// // import { updateCompletedLectures } from '../../../slices/viewCourseSlice';
// // import ReactPlayer from "react-player"
// // import {playIcon} from "react-player"
// // import IconBtn from '../../common/IconBtn';

// // const videoDetails = () => {
// //   const {courseId, sectionId, subSectionId} = useParams();
// //   const  navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const location = useLocation();
// //   const playerRef = useRef(null);
// //   const {token} = useSelector((state) => state.auth);
// //   const {courseSectionData, courseEntireData, completedLectures} = useSelector((state)=> state.viewCourse);
  
// //   const [videoData, setVideoData] = useState([]);
// //   const [videoEnded, setVideoEnded] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(()=>{
    
// //     const setVideoSpecificDetails = async()=>{
// //       if(!courseSectionData?.length){
// //         return;
// //       }
// //       if(!courseId && !sectionId && !subSectionId){
// //         navigate("/dashboard/enrolled-courses");
// //       }
// //       else{
// //         //lets asume ki all three data present hai 

// //         const filteredData = courseSectionData?.filter(
// //           (course) => course._id == sectionId
// //         )
// //        console.log(" filtered data", filteredData)
// //         const filteredVideoData = filteredData?.[0]?.subSection.filter(
// //           (data) => data._id === subSectionId
// //         )

// //         setVideoData(filteredVideoData[0]);
// //         setVideoEnded(false);
// //       }
// //     }
// //     setVideoSpecificDetails();
// //   },[courseSectionData, courseEntireData, location.pathname])
  
// //   console.log("courseSectionData",courseSectionData)
// //   console.log("courseEntiredata ",courseEntireData)

// //   const handleVideoEnd = () => {
// //     console.log('Video has ended');
// //     setVideoEnded(true);  // Set the state to true when video ends
// //     console.log(" video ended ki value kya set hui hai ", videoEnded)
// //   };
  
// //   const isFirstVideo = () => {
// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     )

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId)

// //     if (currentSectionIndx === 0 && currentSubSectionIndx === 0) {
// //       return true
// //     } else {
// //       return false
// //     }
// //   }

// //   // go to the next video
// //   const goToNextVideo = () => {
// //     // console.log(courseSectionData)

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     )

// //     const noOfSubsections =
// //       courseSectionData[currentSectionIndx].subSection.length

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId)

// //     // console.log("no of subsections", noOfSubsections)

// //     if (currentSubSectionIndx !== noOfSubsections - 1) {
// //       const nextSubSectionId =
// //         courseSectionData[currentSectionIndx].subSection[
// //           currentSubSectionIndx + 1
// //         ]._id
// //       navigate(
// //         `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
// //       )
// //     } else {
// //       const nextSectionId = courseSectionData[currentSectionIndx + 1]._id
// //       const nextSubSectionId =
// //         courseSectionData[currentSectionIndx + 1].subSection[0]._id
// //       navigate(
// //         `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
// //       )
// //     }
// //   }

// //   // check if the lecture is the last video of the course
// //   const isLastVideo = () => {
// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     )

// //     const noOfSubsections =
// //       courseSectionData[currentSectionIndx].subSection.length

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId)

// //     if (
// //       currentSectionIndx === courseSectionData.length - 1 &&
// //       currentSubSectionIndx === noOfSubsections - 1
// //     ) {
// //       return true
// //     } else {
// //       return false
// //     }
// //   }

// //   // go to the previous video
// //   const goToPrevVideo = () => {
// //     // console.log(courseSectionData)

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     )

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId)

// //     if (currentSubSectionIndx !== 0) {
// //       const prevSubSectionId =
// //         courseSectionData[currentSectionIndx].subSection[
// //           currentSubSectionIndx - 1
// //         ]._id
// //       navigate(
// //         `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
// //       )
// //     } else {
// //       const prevSectionId = courseSectionData[currentSectionIndx - 1]._id
// //       const prevSubSectionLength =
// //         courseSectionData[currentSectionIndx - 1].subSection.length
// //       const prevSubSectionId =
// //         courseSectionData[currentSectionIndx - 1].subSection[
// //           prevSubSectionLength - 1
// //         ]._id
// //       navigate(
// //         `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
// //       )
// //     }
// //   }

// //   const handleLectureCompletion = async () => {
// //     setLoading(true)
// //     const res = await markLectureAsComplete(
// //       { courseId: courseId, subsectionId: subSectionId },
// //       token
// //     )
// //     if (res) {
// //       dispatch(updateCompletedLectures(subSectionId))
// //     }
// //     setLoading(false)
// //   }

// //   return (
// //     <div className="flex flex-col gap-5 text-white">
// //       {!videoData ? (
// //         <img
// //           // src={previewSource}
// //           alt="Preview"
// //           className="h-full w-full rounded-md object-cover"
// //         />
// //       ) : (
// //         <div>
          
// //           <ReactPlayer
// //           ref={playerRef}
// //           width="100%"  
// //           height="auto"
// //           playing={true} 
// //           controls={true} 
// //           onEnded={handleVideoEnd} 
// //           url={videoData?.videoUrl} 
// //           style={{ maxWidth:'100%'}}  
// //         >

// //           <playIcon position="center" />
// //           </ReactPlayer>
// //          <div>
// //          { videoEnded && (
// //             <div
// //               style={{
// //                 backgroundImage:
// //                   "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
// //               }}
// //               className="full absolute inset-0 z-[100] grid h-full place-content-center font-inter"
// //             >
// //               {!completedLectures?.includes(subSectionId) && (
// //                 <IconBtn
// //                   disabled={loading}
// //                   onclick={() => handleLectureCompletion()}
// //                   text={!loading ? "Mark As Completed" : "Loading..."}
// //                   customClasses="text-xl max-w-max px-4 mx-auto"
// //                 />
// //               )}
// //               <IconBtn
// //                 disabled={loading}
// //                 onclick={() => {
// //                   if (playerRef?.current) {
// //                     // set the current time of the video to 0
// //                     playerRef?.current?.seek(0)
// //                     setVideoEnded(false)
// //                   }
// //                 }}
// //                 text="Rewatch"
// //                 customClasses="text-xl max-w-max px-4 mx-auto mt-2"
// //               />
// //               <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
// //                 {!isFirstVideo() && (
// //                   <button
// //                     disabled={loading}
// //                     onClick={goToPrevVideo}
// //                     className="blackButton"
// //                   >
// //                     Prev
// //                   </button>
// //                 )}
// //                 {!isLastVideo() && (
// //                   <button
// //                     disabled={loading}
// //                     onClick={goToNextVideo}
// //                     className="blackButton"
// //                   >
// //                     Next
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //          </div>
// //         </div>
      
// //       )}

// //       <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
// //       <p className="pt-2 pb-6">{videoData?.description}</p>
// //     </div>
// //   )
// // }

// // export default videoDetails


// import React, { useState, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { markLectureAsComplete } from '../../../services/opreations/courseDetails'
// import { updateCompletedLectures } from '../../../slices/viewCourseSlice'
// import ReactPlayer from "react-player"
// import IconBtn from '../../common/IconBtn'

// const VideoDetails = () => {
//   const { courseId, sectionId, subSectionId } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const location = useLocation()
//   const playerRef = useRef(null)
//   const { token } = useSelector((state) => state.auth)
//   const { courseSectionData, courseEntireData, completedLectures } = useSelector((state) => state.viewCourse)

//   const [videoData, setVideoData] = useState(null)
//   const [videoEnded, setVideoEnded] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const setVideoSpecificDetails = async () => {
//       if (!courseSectionData?.length) return
//       if (!courseId && !sectionId && !subSectionId) {
//         navigate("/dashboard/enrolled-courses")
//       } else {
//         const filteredData = courseSectionData?.filter(
//           (course) => course._id === sectionId
//         )
//         const filteredVideoData = filteredData?.[0]?.subSection.filter(
//           (data) => data._id === subSectionId
//         )

//         setVideoData(filteredVideoData?.[0])
//         setVideoEnded(false)
//       }
//     }
//     setVideoSpecificDetails()
//   }, [courseSectionData, courseEntireData, location.pathname, courseId, sectionId, subSectionId, navigate])

//   const handleVideoEnd = () => {
//     setVideoEnded(true)
//   }

//   const isFirstVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )
//     if (currentSectionIndx === -1) return false
//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     return currentSectionIndx === 0 && currentSubSectionIndx === 0
//   }

//   const goToNextVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )
//     const noOfSubsections = courseSectionData[currentSectionIndx].subSection.length
//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     if (currentSubSectionIndx !== noOfSubsections - 1) {
//       const nextSubSectionId =
//         courseSectionData[currentSectionIndx].subSection[
//           currentSubSectionIndx + 1
//         ]._id
//       navigate(
//         `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
//       )
//     } else {
//       const nextSectionId = courseSectionData[currentSectionIndx + 1]._id
//       const nextSubSectionId =
//         courseSectionData[currentSectionIndx + 1].subSection[0]._id
//       navigate(
//         `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
//       )
//     }
//   }

//   const isLastVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )
//     if (currentSectionIndx === -1) return false
//     const noOfSubsections = courseSectionData[currentSectionIndx].subSection.length
//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     return (
//       currentSectionIndx === courseSectionData.length - 1 &&
//       currentSubSectionIndx === noOfSubsections - 1
//     )
//   }

//   const goToPrevVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )
//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     if (currentSubSectionIndx !== 0) {
//       const prevSubSectionId =
//         courseSectionData[currentSectionIndx].subSection[
//           currentSubSectionIndx - 1
//         ]._id
//       navigate(
//         `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
//       )
//     } else {
//       const prevSectionId = courseSectionData[currentSectionIndx - 1]._id
//       const prevSubSectionLength =
//         courseSectionData[currentSectionIndx - 1].subSection.length
//       const prevSubSectionId =
//         courseSectionData[currentSectionIndx - 1].subSection[
//           prevSubSectionLength - 1
//         ]._id
//       navigate(
//         `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
//       )
//     }
//   }

//   const handleLectureCompletion = async () => {
//     setLoading(true)
//     const res = await markLectureAsComplete(
//       { courseId: courseId, subsectionId: subSectionId },
//       token
//     )
//     if (res) {
//       dispatch(updateCompletedLectures(subSectionId))
//     }
//     setLoading(false)
//   }

//   return (
//     <div className="flex flex-col gap-6 text-slate-100 p-4 sm:p-6 w-full">
//       {!videoData ? (
//         <div className="flex h-[450px] w-full items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 backdrop-blur-xl">
//           <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
//         </div>
//       ) : (
//         <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0B132B]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)]">
//           {/* Ambient Top Glow Line */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] z-10" />

//           <div className="relative aspect-video w-full overflow-hidden">
//             <ReactPlayer
//               ref={playerRef}
//               width="100%"
//               height="100%"
//               playing={true}
//               controls={true}
//               onEnded={handleVideoEnd}
//               url={videoData?.videoUrl}
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             />

//             {videoEnded && (
//               <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent backdrop-blur-md p-6 text-center">
//                 {!completedLectures?.includes(subSectionId) && (
//                   <IconBtn
//                     disabled={loading}
//                     onclick={handleLectureCompletion}
//                     text={!loading ? "Mark As Completed" : "Loading..."}
//                     customClasses="text-sm sm:text-base px-6 py-3 mb-3 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
//                   />
//                 )}

//                 <button
//                   type="button"
//                   disabled={loading}
//                   onClick={() => {
//                     if (playerRef?.current) {
//                       playerRef.current.seekTo(0)
//                       setVideoEnded(false)
//                     }
//                   }}
//                   className="cursor-pointer rounded-xl border border-cyan-500/40 bg-cyan-950/60 px-6 py-2.5 text-xs sm:text-sm font-bold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:bg-cyan-900/80 hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-6"
//                 >
//                   Rewatch
//                 </button>

//                 <div className="flex min-w-[250px] justify-center gap-x-4">
//                   {!isFirstVideo() && (
//                     <button
//                       type="button"
//                       disabled={loading}
//                       onClick={goToPrevVideo}
//                       className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300"
//                     >
//                       Prev Lecture
//                     </button>
//                   )}
//                   {!isLastVideo() && (
//                     <button
//                       type="button"
//                       disabled={loading}
//                       onClick={goToNextVideo}
//                       className="cursor-pointer rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
//                     >
//                       Next Lecture
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Video Details Header & Description */}
//       <div className="space-y-2 border-b border-slate-800/80 pb-6">
//         <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
//           {videoData?.title}
//         </h1>
//         <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
//           {videoData?.description}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default VideoDetails




import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FiBookOpen,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiPlay,
  FiRotateCcw,
  FiVideo,
} from "react-icons/fi";

import { markLectureAsComplete } from "../../../services/opreations/courseDetails";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice";
import ReactPlayer from "react-player";
import IconBtn from "../../common/IconBtn";

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const playerRef = useRef(null);

  const { token } = useSelector((state) => state.auth);
  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  const [videoData, setVideoData] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!courseId || !sectionId || !subSectionId) {
      navigate("/dashboard/enrolled-courses");
      return;
    }

    if (!courseSectionData?.length) return;

    const currentSection = courseSectionData.find(
      (section) => section._id === sectionId
    );

    const currentVideo = currentSection?.subSection?.find(
      (subSection) => subSection._id === subSectionId
    );

    setVideoData(currentVideo || null);
    setVideoEnded(false);
  }, [
    courseSectionData,
    courseEntireData,
    location.pathname,
    courseId,
    sectionId,
    subSectionId,
    navigate,
  ]);

  const sections = courseSectionData || [];

  const currentSectionIndex = sections.findIndex(
    (section) => section._id === sectionId
  );

  const currentSection = sections[currentSectionIndex];
  const currentSubSections = currentSection?.subSection || [];

  const currentVideoIndex = currentSubSections.findIndex(
    (subSection) => subSection._id === subSectionId
  );

  const isFirstVideo =
    currentSectionIndex === 0 && currentVideoIndex === 0;

  const isLastVideo =
    currentSectionIndex === sections.length - 1 &&
    currentVideoIndex === currentSubSections.length - 1;

  const getAdjacentLecture = (direction) => {
    if (currentSectionIndex < 0 || currentVideoIndex < 0) return null;

    // Find the next or previous lecture within the current section.
    const nextVideoIndex = currentVideoIndex + direction;

    if (
      nextVideoIndex >= 0 &&
      nextVideoIndex < currentSubSections.length
    ) {
      return {
        sectionId,
        subSectionId: currentSubSections[nextVideoIndex]._id,
      };
    }

    // Move between sections, skipping sections without lectures.
    let sectionIndex = currentSectionIndex + direction;

    while (sectionIndex >= 0 && sectionIndex < sections.length) {
      const section = sections[sectionIndex];
      const subSections = section?.subSection || [];

      if (subSections.length > 0) {
        const targetVideo =
          direction > 0
            ? subSections[0]
            : subSections[subSections.length - 1];

        return {
          sectionId: section._id,
          subSectionId: targetVideo._id,
        };
      }

      sectionIndex += direction;
    }

    return null;
  };

  const goToNextVideo = () => {
    const nextLecture = getAdjacentLecture(1);

    if (!nextLecture) return;

    navigate(
      `/view-course/${courseId}/section/${nextLecture.sectionId}/sub-section/${nextLecture.subSectionId}`
    );
  };

  const goToPrevVideo = () => {
    const previousLecture = getAdjacentLecture(-1);

    if (!previousLecture) return;

    navigate(
      `/view-course/${courseId}/section/${previousLecture.sectionId}/sub-section/${previousLecture.subSectionId}`
    );
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleLectureCompletion = async () => {
    if (loading || completedLectures?.includes(subSectionId)) return;

    setLoading(true);

    try {
      const res = await markLectureAsComplete(
        {
          courseId,
          subsectionId: subSectionId,
        },
        token
      );

      if (res) {
        dispatch(updateCompletedLectures(subSectionId));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRewatch = () => {
    playerRef.current?.seekTo(0);
    setVideoEnded(false);
  };

  const isCompleted = completedLectures?.includes(subSectionId);
  const nextLecture = getAdjacentLecture(1);
  const previousLecture = getAdjacentLecture(-1);

  return (
    <div className="relative isolate flex w-full flex-col gap-6 overflow-hidden p-3 font-sans text-zinc-100 sm:p-5 lg:p-7">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[140px]" />
        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-indigo-600/[0.06] blur-[150px]" />
      </div>

      {/* Course context */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
            <FiBookOpen size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Learning Workspace
            </p>
            <p className="mt-1 truncate text-sm font-medium text-zinc-300">
              {courseEntireData?.courseName || "Course Lecture"}
            </p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300">
            <FiCheckCircle size={14} />
            Lecture completed
          </span>
        )}
      </div>

      {/* Video player */}
      {!videoData ? (
        <div className="grid aspect-video w-full place-items-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-violet-400/15" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400" />
              <FiVideo size={18} className="text-violet-300" />
            </div>
            <p className="text-sm text-zinc-400">Loading lecture...</p>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0a0c] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="absolute left-1/4 right-1/4 top-0 z-10 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="relative aspect-video w-full overflow-hidden">
            <ReactPlayer
              key={subSectionId}
              ref={playerRef}
              width="100%"
              height="100%"
              playing
              controls
              onEnded={handleVideoEnd}
              url={videoData?.videoUrl}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />

            {/* Video ended overlay */}
            {videoEnded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center overflow-y-auto bg-[#09090b]/95 p-4 text-center backdrop-blur-md sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.10] text-violet-300">
                  {isCompleted ? (
                    <FiCheckCircle size={25} />
                  ) : (
                    <FiPlay size={25} />
                  )}
                </div>

                <h2 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                  {isCompleted ? "Lecture completed!" : "Lecture finished"}
                </h2>

                <p className="mt-2 max-w-sm text-xs leading-5 text-zinc-400 sm:text-sm">
                  {isCompleted
                    ? "Great work. You can revisit this lecture or continue learning."
                    : "Nice work! Mark this lecture as completed or continue to the next one."}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {!isCompleted && (
                    <IconBtn
                      disabled={loading}
                      onclick={handleLectureCompletion}
                      text={loading ? "Saving..." : "Mark as Completed"}
                      customClasses="px-4 py-2.5 text-sm"
                    />
                  )}

                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleRewatch}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-violet-400/25 hover:bg-violet-500/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <FiRotateCcw size={15} />
                    Rewatch
                  </button>
                </div>

                {(previousLecture || nextLecture) && (
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {previousLecture && (
                      <button
                        type="button"
                        disabled={loading}
                        onClick={goToPrevVideo}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/[0.05] hover:text-white disabled:opacity-50 sm:text-sm"
                      >
                        <FiChevronLeft size={16} />
                        Previous Lecture
                      </button>
                    )}

                    {nextLecture && (
                      <button
                        type="button"
                        disabled={loading}
                        onClick={goToNextVideo}
                        className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-violet-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                      >
                        Next Lecture
                        <FiChevronRight size={16} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lecture information */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 sm:p-7">
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

        <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-300">
                Current Lecture
              </span>

              {isCompleted && (
                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                  Completed
                </span>
              )}
            </div>

            <h1 className="break-words text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
              {videoData?.title || "Lecture"}
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-xs text-zinc-400">
            <FiClock size={14} className="text-violet-300" />
            <span>Video lesson</span>
          </div>
        </div>

        <div className="pt-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
            About this lecture
          </h2>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-zinc-400">
            {videoData?.description || "No description available for this lecture."}
          </p>
        </div>

        {/* Bottom navigation */}
        {!videoEnded && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
            <button
              type="button"
              disabled={!previousLecture}
              onClick={goToPrevVideo}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-white/15 hover:bg-white/[0.04] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiChevronLeft size={16} />
              Previous
            </button>

            <button
              type="button"
              disabled={!nextLecture}
              onClick={goToNextVideo}
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/15 bg-violet-500/[0.06] px-4 py-2.5 text-sm font-medium text-violet-200 transition-all hover:border-violet-400/30 hover:bg-violet-500/[0.12] disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next Lecture
              <FiChevronRight size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default VideoDetails;
