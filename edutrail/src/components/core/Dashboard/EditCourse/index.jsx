import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import RenderSteps from '../AddCourses/RenderSteps';
import { getFullDetailsOfCourse } from '../../../../services/opreations/courseDetails';
import { setCourse, setEditCourse, setPaymentLoading } from '../../../../slices/courseSlice';
import { SiNextbilliondotai } from 'react-icons/si';

const EditCourse = () => {

    const dispatch = useDispatch();
    const {courseId} = useParams();
    const {course} = useSelector((state) => state.course);
    const [loading,setLoading] = useState(false);
    const {token} = useSelector((state) => state.auth);

   useEffect(()=>{
    const populateCourseDetails = async()=>{
        setLoading(true);
        const result = await getFullDetailsOfCourse(courseId, token);
        if(result?.courseDetails){
            dispatch(setEditCourse(true));
            dispatch(setCourse(result?.courseDetails));
        }
        setLoading(false);
    }
    populateCourseDetails();
   },[])

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Course
        </h1>
      <div className="mx-auto max-w-[600px]">
        {
            course ? (<RenderSteps/>): 
            (
            <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
              Course Not Found
            </p>
          )
        }
      </div>
    </div>
  )
}

export default EditCourse
