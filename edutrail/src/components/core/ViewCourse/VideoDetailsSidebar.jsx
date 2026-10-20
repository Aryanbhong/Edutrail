// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { BsChevronDown } from "react-icons/bs"
// import { IoIosArrowBack } from "react-icons/io"
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import IconBtn from '../../common/IconBtn';

// const VideoDetailsSidebar = ({setReviewModal}) => {

//   //  const [activeStatus, setActiveStatus] = useState("");
//   //  const [videobarActive, setVideoBarActive] = useState("");
//   //  const navigate = useNavigate();
//   //  const {sectionId , subSectionId} = useParams();
//   //  const location = useLocation();
  
 
//   //  const {
//   //   courseSectionData,
//   //   courseEntireData,
//   //   totalNoOfLectures,
//   //   completedLectures,
//   //  } = useSelector(state => state.viewCourse)
//   //  const print=()=>{
//   //   courseSectionData.map((sec , i)=>console.log(" section ", sec?.sectionName) )
//   //  }
//   //  useEffect(()=>{
//   //   const initiateActiveFlags =()=>{
//   //       if(!courseSectionData?.length){
//   //           return;
//   //       }
//   //       const currentSectionIndex = courseSectionData.findIndex(
//   //           (data) => data._id === sectionId
//   //       )
//   //       const currentSubSectionIndex = courseEntireData?.[currentSectionIndex]?.subSection.findIndex(
//   //           (data) => data._id === subSectionId
//   //       )
//   //       const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.
//   //       [currentSubSectionIndex]?._id;
//   //       // set Current section here
//   //       setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
//   //       // set current sub-section here
//   //       setVideoBarActive(activeSubSectionId);
//   //       print();
//   //   }
//   //   initiateActiveFlags();
//   //  },[courseEntireData,courseSectionData, location.pathname])
//   // return (
//   //   <>
//   //     <div>
//   //        {/* for button and headings */}
//   //       <div>
//   //       {/* for buttons */}
//   //          <div>
//   //          <div
//   //           onClick={()=>{
//   //            navigate("/dashboard/enrolled-courses")
//   //           }}
//   //           >
//   //             Back
//   //           </div>
//   //           {/* for heading or title */}
//   //           <div>
//   //              <IconBtn
//   //                 text="Add Review"
//   //                 onclick={()=> setReviewModal(true)}

//   //              />
//   //           </div>
//   //          </div>
//   //          {/* for heading or title */}

//   //          <div>
//   //            <p>{courseEntireData?.courseName}</p>
//   //            <p>{completedLectures?.length}/{totalNoOfLectures}</p>
//   //          </div>
//   //       </div>


//   //       {/* for section and subsection */}
//   //       <div>
//   //           {
//   //               courseSectionData.map((section,index)=>{
//   //                   <div
//   //                   onClick={()=> setActiveStatus(section?._id)}
//   //                   key={index}
//   //                   >
                      
//   //                     {/* section */}
//   //                     <div>
//   //                       <div>
//   //                           {section?.sectionName}
//   //                       </div>
//   //                       {/* icon add krnna hai */}
//   //                     </div>
//   //                     {/* sub-section */}

//   //                     <div>
//   //                       {/* {
//   //                           activeStatus === section?._id && (
//   //                               <div>
//   //                                   {
//   //                                       section?.subSection.map((topic, index)=>{
//   //                                           <div
//   //                                           className={` flex gap-5 p-5 ${
//   //                                               videobarActive === topic?._id
//   //                                               ? "bg-yellow-200 text-richblack-900"
//   //                                               :"bg-richblack-900 text-white"
//   //                                           }`}
//   //                                           key={index}
//   //                                           onClick={()=>{
//   //                                               navigate(`/view-course/${courseEntireData?._id}/section/${section?._id}/
//   //                                                   sub-section/${topic?._id}`)
//   //                                                   setVideoBarActive(topic?._id)
//   //                                           } }
//   //                                           >
//   //                                               <input 
//   //                                               type="checkbox"
//   //                                               checked={completedLectures?.includes(topic?._id)}
//   //                                               onChange={()=>{}}
//   //                                                />
//   //                                                <span>
//   //                                                   {topic.title}
//   //                                                </span>
//   //                                           </div>
//   //                                       })
//   //                                   }
//   //                               </div>
//   //                           )
//   //                       } */}
//   //                       {activeStatus === section?._id && (
//   //               <div className="transition-[height] duration-500 ease-in-out">
//   //                 {section?.subSection.map((topic, i) => (
//   //                   <div
//   //                     className={`flex gap-3  px-5 py-2 ${
//   //                       videobarActive === topic._id
//   //                         ? "bg-yellow-200 font-semibold text-richblack-800"
//   //                         : "hover:bg-richblack-900"
//   //                     } `}
//   //                     key={i}
//   //                     onClick={() => {
//   //                       navigate(
//   //                         `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
//   //                       )
//   //                       setVideoBarActive(topic._id)
//   //                     }}
//   //                   >
//   //                     <input
//   //                       type="checkbox"
//   //                       checked={completedLectures?.includes(topic?._id)}
//   //                       onChange={() => {}}
//   //                     />
//   //                     {topic.title}
//   //                   </div>
//   //                 ))}
//   //               </div>
//   //             )}
//   //                     </div>
//   //                   </div>
//   //               })
//   //           }
//   //       </div>
//   //     </div>
//   //   </>
//   // )


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
//       if (!courseSectionData.length) return
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
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
//           <div className="flex w-full items-center justify-between ">
//             <div
//               onClick={() => {
//                 navigate(`/dashboard/enrolled-courses`)
//               }}
//               className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
//               title="back"
//             >
//               <IoIosArrowBack size={30} />
//             </div>
//             <IconBtn
//               text="Add Review"
//               customClasses="ml-auto"
//             onclick={()=> setReviewModal(true)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <p>{courseEntireData?.courseName}</p>
//             <p className="text-sm font-semibold text-richblack-500">
//               {completedLectures?.length} / {totalNoOfLectures}
//             </p>
//           </div>
//         </div>

//         <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
//           {courseSectionData.map((course, index) => (
//             <div
//               className="mt-2 cursor-pointer text-sm text-richblack-5"
//               onClick={() => setActiveStatus(course?._id)}
//               key={index}
//             >
//               {/* Section */}
//               <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
//                 <div className="w-[70%] font-semibold">
//                   {course?.sectionName}
//                 </div>
//                 <div className="flex items-center gap-3">
//                   {/* <span className="text-[12px] font-medium">
//                     Lession {course?.subSection.length}
//                   </span> */}
//                   <span
//                     className={`${
//                       activeStatus === course?.sectionName
//                         ? "rotate-0"
//                         : "rotate-180"
//                     } transition-all duration-500`}
//                   >
//                     <BsChevronDown />
//                   </span>
//                 </div>
//               </div>

//               {/* Sub Sections */}
//               {activeStatus === course?._id && (
//                 <div className="transition-[height] duration-500 ease-in-out">
//                   {course.subSection.map((topic, i) => (
//                     <div
//                       className={`flex gap-3  px-5 py-2 ${
//                         videoBarActive === topic._id
//                           ? "bg-yellow-200 font-semibold text-richblack-800"
//                           : "hover:bg-richblack-900"
//                       } `}
//                       key={i}
//                       onClick={() => {
//                         navigate(
//                           `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                         )
//                         setVideoBarActive(topic._id)
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={completedLectures?.includes(topic?._id)}
//                         onChange={() => {}}
//                       />
//                       {topic.title}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default VideoDetailsSidebar


import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BsChevronDown } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'

const VideoDetailsSidebar = ({ setReviewModal }) => {
  const [activeStatus, setActiveStatus] = useState("")
  const [videoBarActive, setVideoBarActive] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { sectionId, subSectionId } = useParams()
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse)

  useEffect(() => {
    ;(() => {
      if (!courseSectionData?.length) return
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      )
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId)
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
      setVideoBarActive(activeSubSectionId)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSectionData, courseEntireData, location.pathname])

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r border-cyan-500/20 bg-[#0B132B]/90 backdrop-blur-xl shadow-[5px_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Ambient Right Glow Edge */}
      <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

      {/* Sidebar Header & Controls */}
      <div className="mx-5 flex flex-col items-start justify-between gap-4 border-b border-cyan-500/20 py-5 text-slate-100">
        <div className="flex w-full items-center justify-between">
          <div
            onClick={() => {
              navigate(`/dashboard/enrolled-courses`)
            }}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
            title="Back to Enrolled Courses"
          >
            <IoIosArrowBack size={22} />
          </div>
          <IconBtn
            text="Add Review"
            customClasses="ml-auto"
            onclick={() => setReviewModal(true)}
          />
        </div>

        <div className="flex flex-col space-y-1">
          <p className="text-base font-bold text-white tracking-wide line-clamp-1">
            {courseEntireData?.courseName}
          </p>
          <p className="text-xs font-semibold tracking-wider text-cyan-300">
            {completedLectures?.length || 0} / {totalNoOfLectures || 0} Lectures Completed
          </p>
        </div>
      </div>

      {/* Course Sections & Subsections Container */}
      <div className="h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
        {courseSectionData?.map((course, index) => (
          <div
            className="mt-2 text-sm text-slate-200"
            key={index}
          >
            {/* Section Header */}
            <div
              className="flex cursor-pointer flex-row items-center justify-between border-b border-cyan-500/10 bg-[#030712]/70 px-5 py-4 backdrop-blur-md transition-colors hover:bg-cyan-950/20"
              onClick={() => setActiveStatus(course?._id)}
            >
              <div className="w-[75%] font-bold tracking-wide text-slate-100 line-clamp-1">
                {course?.sectionName}
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`${
                    activeStatus === course?._id ? "rotate-0" : "rotate-180"
                  } transition-transform duration-300 text-cyan-400`}
                >
                  <BsChevronDown size={14} />
                </span>
              </div>
            </div>

            {/* Subsections List */}
            {activeStatus === course?._id && (
              <div className="flex flex-col bg-[#030712]/40 backdrop-blur-sm">
                {course.subSection.map((topic, i) => (
                  <div
                    className={`flex items-center gap-3 px-6 py-3 cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 ${
                      videoBarActive === topic._id
                        ? "bg-cyan-950/70 border-l-2 border-cyan-400 font-bold text-cyan-300 shadow-[inset_0_0_15px_rgba(0,240,255,0.15)]"
                        : "text-slate-300 hover:bg-cyan-950/20 hover:text-white"
                    }`}
                    key={i}
                    onClick={() => {
                      navigate(
                        `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                      )
                      setVideoBarActive(topic._id)
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedLectures?.includes(topic?._id)}
                      onChange={() => {}}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400 focus:ring-0 accent-cyan-400 cursor-pointer"
                    />
                    <span className="line-clamp-1">{topic.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoDetailsSidebar
