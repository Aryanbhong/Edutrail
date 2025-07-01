import React, { useEffect, useState } from 'react'
import { buyCourse } from '../services/opreations/featuresStudentApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCourseDetails } from '../services/opreations/courseDetails';
import GetAvgRating from '../utils/ratingAvg';
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
import Error from "../pages/Error"
import ConfirmationModal from '../components/common/ConfirmationModal';
import RatingStars from '../components/common/starRating';
import { MdFormatAlignRight } from 'react-icons/md';
import formattedDate from '../utils/dateFormatter';
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import Footer from '../components/common/footer';
import courseBuyingSubSection from '../components/core/Course/courseBuyingSubSection';
import CourseBuyingCard from '../components/core/Course/CourseBuyingCard';
import ViewCourse from './ViewCourse';
const CourseDetails = () => {

  const {user} = useSelector((state)=> state.profile);
  const {token} = useSelector((state)=> state.auth);
  const {loading}= useSelector((state) => state.profile);
  const{paymentLoading} = useSelector((state) => state.course);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const {courseId} = useParams();
  const [confirmationModal, setConfirmationModal] = useState(null);

  const [courseDetails, setCourseDetails] =useState(null);
   
  useEffect(()=>{
    const getfFullCourseData = async()=>{
      try{
        const result = await fetchCourseDetails(courseId);
        setCourseDetails(result);
        console.log(" coursedetails fetched ", result);
      }
      catch(error){
         console.log("Could not fetch course details");
      }
    }
    getfFullCourseData();
  },[courseId]);

  const [ avgReviewCount, setAverageReviewCount] = useState(0);

   
  useEffect(()=>{
    const count = GetAvgRating(courseDetails?.data?.CourseDetails?.ratingAndReviews);
    setAverageReviewCount(count);
  },[courseDetails])
  

  const [ totalNoOfLectures, setTotalNoOfLectures]= useState(0);
  useEffect(()=>{
    let lectures= 0;
    courseDetails?.data?.courseContent?.forEach((sec) =>
    lectures+= sec.subSection.length || 0
    )
    setTotalNoOfLectures(lectures);
  })
 //TO update 
      const handleBuyCourse=()=>{
      console.log(" hello ji");
        if(token){
            buyCourse(token, [courseId], user, navigate, dispatch);
        return;
        }
        setConfirmationModal({
          text1:"you are not Logged in",
          text2:"Please login to purchase the course",
          btn1Text:"Login",
          btn2Text:"Cancel",
          btn1Handler:()=> navigate("/login"),
          btn2Handler:()=>setConfirmationModal(null),
        })
    }
    const [ isActive, setIsActive] = useState([]);
    const handleActive=(id)=>{
      setIsActive(
        !isActive.includes(id)
        ? isActive.concat(id)
        : isActive.filter((e)=> e != id)
      )
    }
    console.log(" madoldata ka data", confirmationModal)

     if(loading || !courseDetails){
      return(
        <div>
          Loading...
        </div>
      )
     }

      if(!courseDetails?.success){
        return(
          <div>
            <Error/>
          </div>
        )
      }

      const{
        _id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
       instructor,
       studentsEnrolled,
        createdAt,
      } = courseDetails.data;
     
  return (
    <>
        <div className={`relative w-full bg-richblack-800`}>
          {/* Hero Section */}
          <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
            <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
              <div className="relative block max-h-[30rem] lg:hidden">
                <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                <img
                  src={thumbnail}
                  alt="course thumbnail"
                  className="aspect-auto w-full"
                />
              </div>
              <div
                className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
              >
                <div>
                  <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                    {courseName}
                  </p>
                </div>
                <p className={`text-richblack-200`}>{courseDescription}</p>
                <div className="text-md flex flex-wrap items-center gap-2">
                  <span className="text-yellow-25">{avgReviewCount}</span>
                  <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                  <span>{`(${ratingAndReviews.length} reviews)`}</span>
                  <span>{`${studentsEnrolled} students enrolled`}</span>
                </div>
                <div>
                  <p className="">
                    Created By {`${instructor.firstName} ${instructor.lastName}`}
                  </p>
                </div>
                <div className="flex flex-wrap gap-5 text-lg">
                  <p className="flex items-center gap-2">
                    {" "}
                    <BiInfoCircle /> Created at {formattedDate(createdAt)}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <HiOutlineGlobeAlt /> English
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
                <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                  Rs. {price}
                </p>
                <button className="yellowButton" onClick={handleBuyCourse}>
                  Buy Now
                </button>
                <button className="blackButton">Add to Cart</button>
              </div>
            </div>
            {/* Courses Card */}
            <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
              <CourseDetailsCard
                course={courseDetails?.data}
                setConfirmationModal={setConfirmationModal}
                handleBuyCourse={handleBuyCourse}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
          <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
            {/* What will you learn section */}
            <div className="my-8 border border-richblack-600 p-8">
              <p className="text-3xl font-semibold">What you'll learn</p>
              <div className="mt-5">
                {/* <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown> */}
                {whatYouWillLearn}
              </div>
            </div>
  
            {/* Course Content Section */}
            <div className="max-w-[830px] ">
              <div className="flex flex-col gap-3">
                <p className="text-[28px] font-semibold">Course Content</p>
                <div className="flex flex-wrap justify-between gap-2">
                  <div className="flex gap-2">
                    <span>
                      {courseContent.length} {`section(s)`}
                    </span>
                    <span>
                      {totalNoOfLectures} {`lecture(s)`}
                    </span>
                    <span>{courseDetails?.data?.courseContent[0]?.subSection[0]?.timeDuration}s total length</span>
                  </div>
                  <div>
                    <button
                      className="text-yellow-25"
                      onClick={() => setIsActive([])}
                    >
                      Collapse all sections
                    </button>
                  </div>
                </div>
              </div>
  
              {/* Course Details Accordion */}
              <div className="py-4">
                {courseContent?.map((course, index) => (
                  <CourseBuyingCard
                    course={course}
                    key={index}
                    isActive={isActive}
                    handleActive={handleActive}
                  />
                ))}
              </div>
  
              {/* Author Details */}
              <div className="mb-12 py-4">
                <p className="text-[28px] font-semibold">Author</p>
                <div className="flex items-center gap-4 py-4">
                  <img
                    src={
                      instructor.image
                        ? instructor.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                    }
                    alt="Author"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
                </div>
                <p className="text-richblack-50">
                  {instructor?.additionalDetails?.about}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
      </>
  )
}

export default CourseDetails
