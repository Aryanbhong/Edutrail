// // import React, { useEffect, useState } from 'react'
// // import { useSelector } from 'react-redux';
// // import { BsChevronDown } from "react-icons/bs"
// // import { IoIosArrowBack } from "react-icons/io"
// // import { useLocation, useNavigate, useParams } from 'react-router-dom';
// // import IconBtn from '../../common/IconBtn';

// // const VideoDetailsSidebar = ({setReviewModal}) => {

// //   //  const [activeStatus, setActiveStatus] = useState("");
// //   //  const [videobarActive, setVideoBarActive] = useState("");
// //   //  const navigate = useNavigate();
// //   //  const {sectionId , subSectionId} = useParams();
// //   //  const location = useLocation();
  
 
// //   //  const {
// //   //   courseSectionData,
// //   //   courseEntireData,
// //   //   totalNoOfLectures,
// //   //   completedLectures,
// //   //  } = useSelector(state => state.viewCourse)
// //   //  const print=()=>{
// //   //   courseSectionData.map((sec , i)=>console.log(" section ", sec?.sectionName) )
// //   //  }
// //   //  useEffect(()=>{
// //   //   const initiateActiveFlags =()=>{
// //   //       if(!courseSectionData?.length){
// //   //           return;
// //   //       }
// //   //       const currentSectionIndex = courseSectionData.findIndex(
// //   //           (data) => data._id === sectionId
// //   //       )
// //   //       const currentSubSectionIndex = courseEntireData?.[currentSectionIndex]?.subSection.findIndex(
// //   //           (data) => data._id === subSectionId
// //   //       )
// //   //       const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.
// //   //       [currentSubSectionIndex]?._id;
// //   //       // set Current section here
// //   //       setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
// //   //       // set current sub-section here
// //   //       setVideoBarActive(activeSubSectionId);
// //   //       print();
// //   //   }
// //   //   initiateActiveFlags();
// //   //  },[courseEntireData,courseSectionData, location.pathname])
// //   // return (
// //   //   <>
// //   //     <div>
// //   //        {/* for button and headings */}
// //   //       <div>
// //   //       {/* for buttons */}
// //   //          <div>
// //   //          <div
// //   //           onClick={()=>{
// //   //            navigate("/dashboard/enrolled-courses")
// //   //           }}
// //   //           >
// //   //             Back
// //   //           </div>
// //   //           {/* for heading or title */}
// //   //           <div>
// //   //              <IconBtn
// //   //                 text="Add Review"
// //   //                 onclick={()=> setReviewModal(true)}

// //   //              />
// //   //           </div>
// //   //          </div>
// //   //          {/* for heading or title */}

// //   //          <div>
// //   //            <p>{courseEntireData?.courseName}</p>
// //   //            <p>{completedLectures?.length}/{totalNoOfLectures}</p>
// //   //          </div>
// //   //       </div>


// //   //       {/* for section and subsection */}
// //   //       <div>
// //   //           {
// //   //               courseSectionData.map((section,index)=>{
// //   //                   <div
// //   //                   onClick={()=> setActiveStatus(section?._id)}
// //   //                   key={index}
// //   //                   >
                      
// //   //                     {/* section */}
// //   //                     <div>
// //   //                       <div>
// //   //                           {section?.sectionName}
// //   //                       </div>
// //   //                       {/* icon add krnna hai */}
// //   //                     </div>
// //   //                     {/* sub-section */}

// //   //                     <div>
// //   //                       {/* {
// //   //                           activeStatus === section?._id && (
// //   //                               <div>
// //   //                                   {
// //   //                                       section?.subSection.map((topic, index)=>{
// //   //                                           <div
// //   //                                           className={` flex gap-5 p-5 ${
// //   //                                               videobarActive === topic?._id
// //   //                                               ? "bg-yellow-200 text-richblack-900"
// //   //                                               :"bg-richblack-900 text-white"
// //   //                                           }`}
// //   //                                           key={index}
// //   //                                           onClick={()=>{
// //   //                                               navigate(`/view-course/${courseEntireData?._id}/section/${section?._id}/
// //   //                                                   sub-section/${topic?._id}`)
// //   //                                                   setVideoBarActive(topic?._id)
// //   //                                           } }
// //   //                                           >
// //   //                                               <input 
// //   //                                               type="checkbox"
// //   //                                               checked={completedLectures?.includes(topic?._id)}
// //   //                                               onChange={()=>{}}
// //   //                                                />
// //   //                                                <span>
// //   //                                                   {topic.title}
// //   //                                                </span>
// //   //                                           </div>
// //   //                                       })
// //   //                                   }
// //   //                               </div>
// //   //                           )
// //   //                       } */}
// //   //                       {activeStatus === section?._id && (
// //   //               <div className="transition-[height] duration-500 ease-in-out">
// //   //                 {section?.subSection.map((topic, i) => (
// //   //                   <div
// //   //                     className={`flex gap-3  px-5 py-2 ${
// //   //                       videobarActive === topic._id
// //   //                         ? "bg-yellow-200 font-semibold text-richblack-800"
// //   //                         : "hover:bg-richblack-900"
// //   //                     } `}
// //   //                     key={i}
// //   //                     onClick={() => {
// //   //                       navigate(
// //   //                         `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
// //   //                       )
// //   //                       setVideoBarActive(topic._id)
// //   //                     }}
// //   //                   >
// //   //                     <input
// //   //                       type="checkbox"
// //   //                       checked={completedLectures?.includes(topic?._id)}
// //   //                       onChange={() => {}}
// //   //                     />
// //   //                     {topic.title}
// //   //                   </div>
// //   //                 ))}
// //   //               </div>
// //   //             )}
// //   //                     </div>
// //   //                   </div>
// //   //               })
// //   //           }
// //   //       </div>
// //   //     </div>
// //   //   </>
// //   // )


// //   const [activeStatus, setActiveStatus] = useState("")
// //   const [videoBarActive, setVideoBarActive] = useState("")
// //   const navigate = useNavigate()
// //   const location = useLocation()
// //   const { sectionId, subSectionId } = useParams()
// //   const {
// //     courseSectionData,
// //     courseEntireData,
// //     totalNoOfLectures,
// //     completedLectures,
// //   } = useSelector((state) => state.viewCourse)

// //   useEffect(() => {
// //     ;(() => {
// //       if (!courseSectionData.length) return
// //       const currentSectionIndx = courseSectionData.findIndex(
// //         (data) => data._id === sectionId
// //       )
// //       const currentSubSectionIndx = courseSectionData?.[
// //         currentSectionIndx
// //       ]?.subSection.findIndex((data) => data._id === subSectionId)
// //       const activeSubSectionId =
// //         courseSectionData[currentSectionIndx]?.subSection?.[
// //           currentSubSectionIndx
// //         ]?._id
// //       setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
// //       setVideoBarActive(activeSubSectionId)
// //     })()
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [courseSectionData, courseEntireData, location.pathname])

// //   return (
// //     <>
// //       <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
// //         <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
// //           <div className="flex w-full items-center justify-between ">
// //             <div
// //               onClick={() => {
// //                 navigate(`/dashboard/enrolled-courses`)
// //               }}
// //               className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
// //               title="back"
// //             >
// //               <IoIosArrowBack size={30} />
// //             </div>
// //             <IconBtn
// //               text="Add Review"
// //               customClasses="ml-auto"
// //             onclick={()=> setReviewModal(true)}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <p>{courseEntireData?.courseName}</p>
// //             <p className="text-sm font-semibold text-richblack-500">
// //               {completedLectures?.length} / {totalNoOfLectures}
// //             </p>
// //           </div>
// //         </div>

// //         <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
// //           {courseSectionData.map((course, index) => (
// //             <div
// //               className="mt-2 cursor-pointer text-sm text-richblack-5"
// //               onClick={() => setActiveStatus(course?._id)}
// //               key={index}
// //             >
// //               {/* Section */}
// //               <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
// //                 <div className="w-[70%] font-semibold">
// //                   {course?.sectionName}
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   {/* <span className="text-[12px] font-medium">
// //                     Lession {course?.subSection.length}
// //                   </span> */}
// //                   <span
// //                     className={`${
// //                       activeStatus === course?.sectionName
// //                         ? "rotate-0"
// //                         : "rotate-180"
// //                     } transition-all duration-500`}
// //                   >
// //                     <BsChevronDown />
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Sub Sections */}
// //               {activeStatus === course?._id && (
// //                 <div className="transition-[height] duration-500 ease-in-out">
// //                   {course.subSection.map((topic, i) => (
// //                     <div
// //                       className={`flex gap-3  px-5 py-2 ${
// //                         videoBarActive === topic._id
// //                           ? "bg-yellow-200 font-semibold text-richblack-800"
// //                           : "hover:bg-richblack-900"
// //                       } `}
// //                       key={i}
// //                       onClick={() => {
// //                         navigate(
// //                           `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
// //                         )
// //                         setVideoBarActive(topic._id)
// //                       }}
// //                     >
// //                       <input
// //                         type="checkbox"
// //                         checked={completedLectures?.includes(topic?._id)}
// //                         onChange={() => {}}
// //                       />
// //                       {topic.title}
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default VideoDetailsSidebar


// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { BsChevronDown } from "react-icons/bs"
// import { IoIosArrowBack } from "react-icons/io"
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import IconBtn from '../../common/IconBtn'

// const VideoDetailsSidebar = ({ setReviewModal }) => {
//   const [activeStatus, setActiveStatus] = useState("")
//   const [videoBarActive, setVideoBarActive] = useState("")
//   const navigate = useNavigate()
//   const location = useLocation()
//   const { sectionId, subSectionId } = useParams()
//   const {
//     courseSectionData,
//     courseEntireData,
//     totalNoOfLectures,
//     completedLectures,
//   } = useSelector((state) => state.viewCourse)

//   useEffect(() => {
//     ;(() => {
//       if (!courseSectionData?.length) return
//       const currentSectionIndx = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//       )
//       const currentSubSectionIndx = courseSectionData?.[
//         currentSectionIndx
//       ]?.subSection.findIndex((data) => data._id === subSectionId)
//       const activeSubSectionId =
//         courseSectionData[currentSectionIndx]?.subSection?.[
//           currentSubSectionIndx
//         ]?._id
//       setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
//       setVideoBarActive(activeSubSectionId)
//     })()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [courseSectionData, courseEntireData, location.pathname])

//   return (
//     <div className="relative flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r border-cyan-500/20 bg-[#0B132B]/90 backdrop-blur-xl shadow-[5px_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
      
//       {/* Ambient Right Glow Edge */}
//       <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

//       {/* Sidebar Header & Controls */}
//       <div className="mx-5 flex flex-col items-start justify-between gap-4 border-b border-cyan-500/20 py-5 text-slate-100">
//         <div className="flex w-full items-center justify-between">
//           <div
//             onClick={() => {
//               navigate(`/dashboard/enrolled-courses`)
//             }}
//             className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
//             title="Back to Enrolled Courses"
//           >
//             <IoIosArrowBack size={22} />
//           </div>
//           <IconBtn
//             text="Add Review"
//             customClasses="ml-auto"
//             onclick={() => setReviewModal(true)}
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <p className="text-base font-bold text-white tracking-wide line-clamp-1">
//             {courseEntireData?.courseName}
//           </p>
//           <p className="text-xs font-semibold tracking-wider text-cyan-300">
//             {completedLectures?.length || 0} / {totalNoOfLectures || 0} Lectures Completed
//           </p>
//         </div>
//       </div>

//       {/* Course Sections & Subsections Container */}
//       <div className="h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
//         {courseSectionData?.map((course, index) => (
//           <div
//             className="mt-2 text-sm text-slate-200"
//             key={index}
//           >
//             {/* Section Header */}
//             <div
//               className="flex cursor-pointer flex-row items-center justify-between border-b border-cyan-500/10 bg-[#030712]/70 px-5 py-4 backdrop-blur-md transition-colors hover:bg-cyan-950/20"
//               onClick={() => setActiveStatus(course?._id)}
//             >
//               <div className="w-[75%] font-bold tracking-wide text-slate-100 line-clamp-1">
//                 {course?.sectionName}
//               </div>
//               <div className="flex items-center gap-3">
//                 <span
//                   className={`${
//                     activeStatus === course?._id ? "rotate-0" : "rotate-180"
//                   } transition-transform duration-300 text-cyan-400`}
//                 >
//                   <BsChevronDown size={14} />
//                 </span>
//               </div>
//             </div>

//             {/* Subsections List */}
//             {activeStatus === course?._id && (
//               <div className="flex flex-col bg-[#030712]/40 backdrop-blur-sm">
//                 {course.subSection.map((topic, i) => (
//                   <div
//                     className={`flex items-center gap-3 px-6 py-3 cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 ${
//                       videoBarActive === topic._id
//                         ? "bg-cyan-950/70 border-l-2 border-cyan-400 font-bold text-cyan-300 shadow-[inset_0_0_15px_rgba(0,240,255,0.15)]"
//                         : "text-slate-300 hover:bg-cyan-950/20 hover:text-white"
//                     }`}
//                     key={i}
//                     onClick={() => {
//                       navigate(
//                         `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                       )
//                       setVideoBarActive(topic._id)
//                     }}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={completedLectures?.includes(topic?._id)}
//                       onChange={() => {}}
//                       className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400 focus:ring-0 accent-cyan-400 cursor-pointer"
//                     />
//                     <span className="line-clamp-1">{topic.title}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default VideoDetailsSidebar



import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BsChevronDown,
} from "react-icons/bs";
import {
  FiArrowLeft,
  FiBookOpen,
  FiCheckCircle,
  FiPlayCircle,
  FiStar,
} from "react-icons/fi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";

const VideoDetailsSidebar = ({ setReviewModal }) => {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();

  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  const sections = courseSectionData || [];
  const completedCount = completedLectures?.length || 0;
  const totalLectures = totalNoOfLectures || 0;
  const progress =
    totalLectures > 0
      ? Math.min((completedCount / totalLectures) * 100, 100)
      : 0;

  useEffect(() => {
    if (!sections.length) return;

    const currentSection = sections.find(
      (section) => section._id === sectionId
    );

    const currentLecture = currentSection?.subSection?.find(
      (lecture) => lecture._id === subSectionId
    );

    if (currentSection) {
      setActiveStatus(currentSection._id);
    }

    if (currentLecture) {
      setVideoBarActive(currentLecture._id);
    }
  }, [courseSectionData, sectionId, subSectionId, location.pathname]);

  return (
    <aside className="relative flex h-[calc(100vh-3.5rem)] w-full min-w-0 flex-col overflow-hidden border-r border-white/[0.07] bg-[#0c0c0f] font-sans text-zinc-100 sm:w-[300px] sm:min-w-[300px] lg:w-[320px] lg:min-w-[320px]">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-violet-600/[0.07] blur-[100px]" />

      {/* Header */}
      <div className="relative border-b border-white/[0.07] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard/enrolled-courses")}
            title="Back to enrolled courses"
            aria-label="Back to enrolled courses"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-400 transition-all duration-200 hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            <FiArrowLeft size={17} />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
              <FiBookOpen size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
                Learning
              </p>
              <p className="mt-0.5 truncate text-xs font-medium text-zinc-300">
                Course Content
              </p>
            </div>
          </div>

          <div className="shrink-0 [&_button]:!px-3 [&_button]:!py-2 [&_button]:!text-xs">
            <IconBtn
              text="Review"
              customClasses="shrink-0"
              onclick={() => setReviewModal(true)}
            >
              <FiStar size={14} />
            </IconBtn>
          </div>
        </div>

        {/* Course title */}
        <div className="mt-5">
          <h2 className="line-clamp-2 text-sm font-semibold leading-6 text-white sm:text-base">
            {courseEntireData?.courseName || "Your Course"}
          </h2>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-xs text-zinc-500">Course progress</span>
            <span className="text-xs font-semibold tabular-nums text-violet-300">
              {completedCount} / {totalLectures}
            </span>
          </div>

          <div
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
            role="progressbar"
            aria-label="Course completion progress"
            aria-valuemin={0}
            aria-valuemax={totalLectures}
            aria-valuenow={Math.min(completedCount, totalLectures)}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-[10px] text-zinc-500">
            {Math.round(progress)}% completed
          </p>
        </div>
      </div>

      {/* Sections and lectures */}
      <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {sections.length > 0 ? (
          <div className="space-y-2 p-3">
            {sections.map((course, index) => {
              const isExpanded = activeStatus === course?._id;
              const lectures = course?.subSection || [];
              const completedInSection = lectures.filter((lecture) =>
                completedLectures?.includes(lecture._id)
              ).length;

              return (
                <div
                  key={course._id || index}
                  className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                    isExpanded
                      ? "border-violet-400/15 bg-white/[0.025]"
                      : "border-white/[0.05] bg-transparent hover:border-white/[0.09] hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Section heading */}
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setActiveStatus(isExpanded ? "" : course?._id)
                    }
                    className="flex w-full items-center gap-3 px-3 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400/50"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-semibold ${
                        isExpanded
                          ? "border-violet-400/20 bg-violet-500/[0.10] text-violet-300"
                          : "border-white/[0.07] bg-white/[0.025] text-zinc-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-xs font-semibold sm:text-sm ${
                          isExpanded ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {course?.sectionName}
                      </span>
                      <span className="mt-1 block text-[10px] text-zinc-500">
                        {completedInSection}/{lectures.length} lectures
                      </span>
                    </span>

                    <BsChevronDown
                      size={13}
                      className={`shrink-0 text-zinc-500 transition-transform duration-200 ${
                        isExpanded
                          ? "rotate-180 text-violet-300"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Lecture list */}
                  {isExpanded && (
                    <div className="border-t border-white/[0.06] px-2 py-2">
                      {lectures.length > 0 ? (
                        <div className="space-y-1">
                          {lectures.map((topic, lectureIndex) => {
                            const isActive = videoBarActive === topic._id;
                            const isCompleted =
                              completedLectures?.includes(topic._id);

                            return (
                              <button
                                type="button"
                                key={topic._id || lectureIndex}
                                onClick={() => {
                                  setVideoBarActive(topic._id);
                                  navigate(
                                    `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                                  );
                                }}
                                aria-current={isActive ? "page" : undefined}
                                className={`group flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 ${
                                  isActive
                                    ? "border-violet-400/15 bg-violet-500/[0.09]"
                                    : "border-transparent hover:bg-white/[0.035]"
                                }`}
                              >
                                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
                                  {isCompleted ? (
                                    <FiCheckCircle
                                      size={16}
                                      className="text-emerald-400"
                                    />
                                  ) : isActive ? (
                                    <FiPlayCircle
                                      size={16}
                                      className="text-violet-300"
                                    />
                                  ) : (
                                    <FiPlayCircle
                                      size={16}
                                      className="text-zinc-600 transition-colors group-hover:text-zinc-300"
                                    />
                                  )}
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span
                                    className={`block break-words text-xs leading-5 ${
                                      isActive
                                        ? "font-semibold text-violet-200"
                                        : "font-medium text-zinc-400 group-hover:text-zinc-200"
                                    }`}
                                  >
                                    {topic.title}
                                  </span>

                                  <span className="mt-1 block text-[10px] text-zinc-600">
                                    Lecture {lectureIndex + 1}
                                    {isCompleted ? " · Completed" : ""}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="px-3 py-4 text-xs text-zinc-500">
                          No lectures in this section yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex h-full min-h-48 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-500">
              <FiBookOpen size={20} />
            </div>
            <p className="mt-4 text-sm font-medium text-zinc-300">
              Course content unavailable
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Sections and lectures will appear here when available.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative border-t border-white/[0.07] bg-[#0c0c0f] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FiCheckCircle size={14} className="text-emerald-400" />
            <span className="text-[11px] text-zinc-500">
              Keep up the great work
            </span>
          </div>

          <span className="text-[10px] font-medium tabular-nums text-zinc-600">
            {completedCount} done
          </span>
        </div>
      </div>
    </aside>
  );
};

export default VideoDetailsSidebar;

