// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { markLectureAsComplete } from '../../../services/opreations/courseDetails';
// import { updateCompletedLectures } from '../../../slices/viewCourseSlice';
// import ReactPlayer from "react-player"
// import {playIcon} from "react-player"
// import IconBtn from '../../common/IconBtn';

// const videoDetails = () => {
//   const {courseId, sectionId, subSectionId} = useParams();
//   const  navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const playerRef = useRef(null);
//   const {token} = useSelector((state) => state.auth);
//   const {courseSectionData, courseEntireData, completedLectures} = useSelector((state)=> state.viewCourse);
  
//   const [videoData, setVideoData] = useState([]);
//   const [videoEnded, setVideoEnded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(()=>{
    
//     const setVideoSpecificDetails = async()=>{
//       if(!courseSectionData?.length){
//         return;
//       }
//       if(!courseId && !sectionId && !subSectionId){
//         navigate("/dashboard/enrolled-courses");
//       }
//       else{
//         //lets asume ki all three data present hai 

//         const filteredData = courseSectionData?.filter(
//           (course) => course._id == sectionId
//         )
//        console.log(" filtered data", filteredData)
//         const filteredVideoData = filteredData?.[0]?.subSection.filter(
//           (data) => data._id === subSectionId
//         )

//         setVideoData(filteredVideoData[0]);
//         setVideoEnded(false);
//       }
//     }
//     setVideoSpecificDetails();
//   },[courseSectionData, courseEntireData, location.pathname])
  
//   console.log("courseSectionData",courseSectionData)
//   console.log("courseEntiredata ",courseEntireData)

//   const handleVideoEnd = () => {
//     console.log('Video has ended');
//     setVideoEnded(true);  // Set the state to true when video ends
//     console.log(" video ended ki value kya set hui hai ", videoEnded)
//   };
  
//   const isFirstVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )

//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     if (currentSectionIndx === 0 && currentSubSectionIndx === 0) {
//       return true
//     } else {
//       return false
//     }
//   }

//   // go to the next video
//   const goToNextVideo = () => {
//     // console.log(courseSectionData)

//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )

//     const noOfSubsections =
//       courseSectionData[currentSectionIndx].subSection.length

//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     // console.log("no of subsections", noOfSubsections)

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

//   // check if the lecture is the last video of the course
//   const isLastVideo = () => {
//     const currentSectionIndx = courseSectionData.findIndex(
//       (data) => data._id === sectionId
//     )

//     const noOfSubsections =
//       courseSectionData[currentSectionIndx].subSection.length

//     const currentSubSectionIndx = courseSectionData[
//       currentSectionIndx
//     ].subSection.findIndex((data) => data._id === subSectionId)

//     if (
//       currentSectionIndx === courseSectionData.length - 1 &&
//       currentSubSectionIndx === noOfSubsections - 1
//     ) {
//       return true
//     } else {
//       return false
//     }
//   }

//   // go to the previous video
//   const goToPrevVideo = () => {
//     // console.log(courseSectionData)

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
//     <div className="flex flex-col gap-5 text-white">
//       {!videoData ? (
//         <img
//           // src={previewSource}
//           alt="Preview"
//           className="h-full w-full rounded-md object-cover"
//         />
//       ) : (
//         <div>
          
//           <ReactPlayer
//           ref={playerRef}
//           width="100%"  
//           height="auto"
//           playing={true} 
//           controls={true} 
//           onEnded={handleVideoEnd} 
//           url={videoData?.videoUrl} 
//           style={{ maxWidth:'100%'}}  
//         >

//           <playIcon position="center" />
//           </ReactPlayer>
//          <div>
//          { videoEnded && (
//             <div
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
//               }}
//               className="full absolute inset-0 z-[100] grid h-full place-content-center font-inter"
//             >
//               {!completedLectures?.includes(subSectionId) && (
//                 <IconBtn
//                   disabled={loading}
//                   onclick={() => handleLectureCompletion()}
//                   text={!loading ? "Mark As Completed" : "Loading..."}
//                   customClasses="text-xl max-w-max px-4 mx-auto"
//                 />
//               )}
//               <IconBtn
//                 disabled={loading}
//                 onclick={() => {
//                   if (playerRef?.current) {
//                     // set the current time of the video to 0
//                     playerRef?.current?.seek(0)
//                     setVideoEnded(false)
//                   }
//                 }}
//                 text="Rewatch"
//                 customClasses="text-xl max-w-max px-4 mx-auto mt-2"
//               />
//               <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
//                 {!isFirstVideo() && (
//                   <button
//                     disabled={loading}
//                     onClick={goToPrevVideo}
//                     className="blackButton"
//                   >
//                     Prev
//                   </button>
//                 )}
//                 {!isLastVideo() && (
//                   <button
//                     disabled={loading}
//                     onClick={goToNextVideo}
//                     className="blackButton"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}
//          </div>
//         </div>
      
//       )}

//       <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
//       <p className="pt-2 pb-6">{videoData?.description}</p>
//     </div>
//   )
// }

// export default videoDetails


import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { markLectureAsComplete } from '../../../services/opreations/courseDetails'
import { updateCompletedLectures } from '../../../slices/viewCourseSlice'
import ReactPlayer from "react-player"
import IconBtn from '../../common/IconBtn'

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const playerRef = useRef(null)
  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } = useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState(null)
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const setVideoSpecificDetails = async () => {
      if (!courseSectionData?.length) return
      if (!courseId && !sectionId && !subSectionId) {
        navigate("/dashboard/enrolled-courses")
      } else {
        const filteredData = courseSectionData?.filter(
          (course) => course._id === sectionId
        )
        const filteredVideoData = filteredData?.[0]?.subSection.filter(
          (data) => data._id === subSectionId
        )

        setVideoData(filteredVideoData?.[0])
        setVideoEnded(false)
      }
    }
    setVideoSpecificDetails()
  }, [courseSectionData, courseEntireData, location.pathname, courseId, sectionId, subSectionId, navigate])

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  const isFirstVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )
    if (currentSectionIndx === -1) return false
    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    return currentSectionIndx === 0 && currentSubSectionIndx === 0
  }

  const goToNextVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )
    const noOfSubsections = courseSectionData[currentSectionIndx].subSection.length
    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    if (currentSubSectionIndx !== noOfSubsections - 1) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx + 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      )
    } else {
      const nextSectionId = courseSectionData[currentSectionIndx + 1]._id
      const nextSubSectionId =
        courseSectionData[currentSectionIndx + 1].subSection[0]._id
      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      )
    }
  }

  const isLastVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )
    if (currentSectionIndx === -1) return false
    const noOfSubsections = courseSectionData[currentSectionIndx].subSection.length
    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    return (
      currentSectionIndx === courseSectionData.length - 1 &&
      currentSubSectionIndx === noOfSubsections - 1
    )
  }

  const goToPrevVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )
    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    if (currentSubSectionIndx !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx - 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      )
    } else {
      const prevSectionId = courseSectionData[currentSectionIndx - 1]._id
      const prevSubSectionLength =
        courseSectionData[currentSectionIndx - 1].subSection.length
      const prevSubSectionId =
        courseSectionData[currentSectionIndx - 1].subSection[
          prevSubSectionLength - 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      )
    }
  }

  const handleLectureCompletion = async () => {
    setLoading(true)
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    )
    if (res) {
      dispatch(updateCompletedLectures(subSectionId))
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-6 text-slate-100 p-4 sm:p-6 w-full">
      {!videoData ? (
        <div className="flex h-[450px] w-full items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 backdrop-blur-xl">
          <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0B132B]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)]">
          {/* Ambient Top Glow Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] z-10" />

          <div className="relative aspect-video w-full overflow-hidden">
            <ReactPlayer
              ref={playerRef}
              width="100%"
              height="100%"
              playing={true}
              controls={true}
              onEnded={handleVideoEnd}
              url={videoData?.videoUrl}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />

            {videoEnded && (
              <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent backdrop-blur-md p-6 text-center">
                {!completedLectures?.includes(subSectionId) && (
                  <IconBtn
                    disabled={loading}
                    onclick={handleLectureCompletion}
                    text={!loading ? "Mark As Completed" : "Loading..."}
                    customClasses="text-sm sm:text-base px-6 py-3 mb-3 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  />
                )}

                <button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    if (playerRef?.current) {
                      playerRef.current.seekTo(0)
                      setVideoEnded(false)
                    }
                  }}
                  className="cursor-pointer rounded-xl border border-cyan-500/40 bg-cyan-950/60 px-6 py-2.5 text-xs sm:text-sm font-bold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:bg-cyan-900/80 hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-6"
                >
                  Rewatch
                </button>

                <div className="flex min-w-[250px] justify-center gap-x-4">
                  {!isFirstVideo() && (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={goToPrevVideo}
                      className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300"
                    >
                      Prev Lecture
                    </button>
                  )}
                  {!isLastVideo() && (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={goToNextVideo}
                      className="cursor-pointer rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
                    >
                      Next Lecture
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video Details Header & Description */}
      <div className="space-y-2 border-b border-slate-800/80 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
          {videoData?.title}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
          {videoData?.description}
        </p>
      </div>
    </div>
  )
}

export default VideoDetails
