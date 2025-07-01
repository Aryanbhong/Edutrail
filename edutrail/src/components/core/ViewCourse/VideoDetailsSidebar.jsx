import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BsChevronDown } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';

const VideoDetailsSidebar = ({setReviewModal}) => {

  //  const [activeStatus, setActiveStatus] = useState("");
  //  const [videobarActive, setVideoBarActive] = useState("");
  //  const navigate = useNavigate();
  //  const {sectionId , subSectionId} = useParams();
  //  const location = useLocation();
  
 
  //  const {
  //   courseSectionData,
  //   courseEntireData,
  //   totalNoOfLectures,
  //   completedLectures,
  //  } = useSelector(state => state.viewCourse)
  //  const print=()=>{
  //   courseSectionData.map((sec , i)=>console.log(" section ", sec?.sectionName) )
  //  }
  //  useEffect(()=>{
  //   const initiateActiveFlags =()=>{
  //       if(!courseSectionData?.length){
  //           return;
  //       }
  //       const currentSectionIndex = courseSectionData.findIndex(
  //           (data) => data._id === sectionId
  //       )
  //       const currentSubSectionIndex = courseEntireData?.[currentSectionIndex]?.subSection.findIndex(
  //           (data) => data._id === subSectionId
  //       )
  //       const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.
  //       [currentSubSectionIndex]?._id;
  //       // set Current section here
  //       setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
  //       // set current sub-section here
  //       setVideoBarActive(activeSubSectionId);
  //       print();
  //   }
  //   initiateActiveFlags();
  //  },[courseEntireData,courseSectionData, location.pathname])
  // return (
  //   <>
  //     <div>
  //        {/* for button and headings */}
  //       <div>
  //       {/* for buttons */}
  //          <div>
  //          <div
  //           onClick={()=>{
  //            navigate("/dashboard/enrolled-courses")
  //           }}
  //           >
  //             Back
  //           </div>
  //           {/* for heading or title */}
  //           <div>
  //              <IconBtn
  //                 text="Add Review"
  //                 onclick={()=> setReviewModal(true)}

  //              />
  //           </div>
  //          </div>
  //          {/* for heading or title */}

  //          <div>
  //            <p>{courseEntireData?.courseName}</p>
  //            <p>{completedLectures?.length}/{totalNoOfLectures}</p>
  //          </div>
  //       </div>


  //       {/* for section and subsection */}
  //       <div>
  //           {
  //               courseSectionData.map((section,index)=>{
  //                   <div
  //                   onClick={()=> setActiveStatus(section?._id)}
  //                   key={index}
  //                   >
                      
  //                     {/* section */}
  //                     <div>
  //                       <div>
  //                           {section?.sectionName}
  //                       </div>
  //                       {/* icon add krnna hai */}
  //                     </div>
  //                     {/* sub-section */}

  //                     <div>
  //                       {/* {
  //                           activeStatus === section?._id && (
  //                               <div>
  //                                   {
  //                                       section?.subSection.map((topic, index)=>{
  //                                           <div
  //                                           className={` flex gap-5 p-5 ${
  //                                               videobarActive === topic?._id
  //                                               ? "bg-yellow-200 text-richblack-900"
  //                                               :"bg-richblack-900 text-white"
  //                                           }`}
  //                                           key={index}
  //                                           onClick={()=>{
  //                                               navigate(`/view-course/${courseEntireData?._id}/section/${section?._id}/
  //                                                   sub-section/${topic?._id}`)
  //                                                   setVideoBarActive(topic?._id)
  //                                           } }
  //                                           >
  //                                               <input 
  //                                               type="checkbox"
  //                                               checked={completedLectures?.includes(topic?._id)}
  //                                               onChange={()=>{}}
  //                                                />
  //                                                <span>
  //                                                   {topic.title}
  //                                                </span>
  //                                           </div>
  //                                       })
  //                                   }
  //                               </div>
  //                           )
  //                       } */}
  //                       {activeStatus === section?._id && (
  //               <div className="transition-[height] duration-500 ease-in-out">
  //                 {section?.subSection.map((topic, i) => (
  //                   <div
  //                     className={`flex gap-3  px-5 py-2 ${
  //                       videobarActive === topic._id
  //                         ? "bg-yellow-200 font-semibold text-richblack-800"
  //                         : "hover:bg-richblack-900"
  //                     } `}
  //                     key={i}
  //                     onClick={() => {
  //                       navigate(
  //                         `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
  //                       )
  //                       setVideoBarActive(topic._id)
  //                     }}
  //                   >
  //                     <input
  //                       type="checkbox"
  //                       checked={completedLectures?.includes(topic?._id)}
  //                       onChange={() => {}}
  //                     />
  //                     {topic.title}
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //                     </div>
  //                   </div>
  //               })
  //           }
  //       </div>
  //     </div>
  //   </>
  // )


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
      if (!courseSectionData.length) return
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
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`)
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>
            <IconBtn
              text="Add Review"
              customClasses="ml-auto"
            onclick={()=> setReviewModal(true)}
            />
          </div>
          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-500">
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>
        </div>

        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((course, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(course?._id)}
              key={index}
            >
              {/* Section */}
              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {course?.sectionName}
                </div>
                <div className="flex items-center gap-3">
                  {/* <span className="text-[12px] font-medium">
                    Lession {course?.subSection.length}
                  </span> */}
                  <span
                    className={`${
                      activeStatus === course?.sectionName
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* Sub Sections */}
              {activeStatus === course?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {course.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videoBarActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
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
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default VideoDetailsSidebar
