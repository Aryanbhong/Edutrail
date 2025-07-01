import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from 'swiper/modules'
import Course_Card from './Course_Card'
const CourseSlider = ({Courses}) => {
  // const courseLength = Courses.length;
  console.log("courses ki length", Courses)
  return (
    <>
    {
        Courses? (
          <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
          >
           {
            Courses?.map((course, index) =>(
                <SwiperSlide key={index}>
                  <Course_Card course = {course} Height={"h-[250px"}/>
                </SwiperSlide>

            ))
           }
          </Swiper>
        ):(
              <p  className="text-xl text-richblack-5">No COURSES found</p>
        )
        }
  
    </>
  )
}

export default CourseSlider
