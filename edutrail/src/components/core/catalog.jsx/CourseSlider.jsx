// import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { FreeMode, Pagination } from 'swiper/modules'
// import Course_Card from './Course_Card'
// const CourseSlider = ({Courses}) => {
//   // const courseLength = Courses.length;
//   console.log("courses ki length", Courses)
//   return (
//     <>
//     {
//         Courses? (
//           <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           modules={[FreeMode, Pagination]}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="max-h-[30rem]"
//           >
//            {
//             Courses?.map((course, index) =>(
//                 <SwiperSlide key={index}>
//                   <Course_Card course = {course} Height={"h-[250px"}/>
//                 </SwiperSlide>

//             ))
//            }
//           </Swiper>
//         ):(
//               <p  className="text-xl text-richblack-5">No COURSES found</p>
//         )
//         }
  
//     </>
//   )
// }

// export default CourseSlider

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from 'swiper/modules'
import Course_Card from './Course_Card'

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[32rem] pb-12"
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <Course_Card course={course} Height="h-[250px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex h-32 w-full items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 backdrop-blur-xl">
          <p className="text-base font-bold text-slate-300 tracking-wide">
            No courses found in this category.
          </p>
        </div>
      )}
    </>
  )
}

export default CourseSlider
