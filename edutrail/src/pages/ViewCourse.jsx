import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/opreations/courseDetails';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
import CourseReviewModal from '../components/core/ViewCourse/CourseReviewModal';
import VideoDetailsSidebar from '../components/core/ViewCourse/VideoDetailsSidebar';
const ViewCourse = () => {

    const [reviewModal, setReviewModal] = useState(false);
    const {courseId} = useParams();
    const {token} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

    useEffect(()=>{
        const setCourseSpecificDetails= async()=>{
            // const courseDetails = getFullDetailsOfCourse(courseId, token);
             const result = await getFullDetailsOfCourse(courseId, token);
             
            console.log("coursedetails ka result", result?.courseDetails)
            dispatch(setCourseSectionData(result?.courseDetails?.courseContent));
            dispatch(setEntireCourseData(result?.courseDetails));
            dispatch(setCompletedLectures(result?.courseDetails?.completedVideos));
            let lectures =0;
            result?.courseDetails?.courseContent?.forEach((sec)=>{
                lectures += sec.subSection.length
            })
            dispatch(setTotalNoOfLectures(lectures));
  
        }
        setCourseSpecificDetails();
    },[])
  
  return (
   <>
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <VideoDetailsSidebar setReviewModal={setReviewModal}/>
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-6">
        <Outlet/>
        </div>
        
      </div>
    </div>
    {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
    {/* <CourseReviewModal setReviewModal={setReviewModal}/> */}
   </>
  )
}

export default ViewCourse
