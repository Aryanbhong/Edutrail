// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { FreeMode, Pagination } from 'swiper/modules'
// import Course_Card from './Course_Card'

// const CourseSlider = ({ Courses }) => {
//   return (
//     <>
//       {Courses?.length > 0 ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={Courses.length > 3}
//           modules={[FreeMode, Pagination]}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="max-h-[32rem] pb-12"
//         >
//           {Courses?.map((course, index) => (
//             <SwiperSlide key={index}>
//               <Course_Card course={course} Height="h-[220px]" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <div className="flex h-32 w-full items-center justify-center rounded-3xl border border-white/[0.08] bg-[#0B132B]/60 backdrop-blur-xl">
//           <p className="text-base font-bold text-slate-300 tracking-wide">
//             No courses found in this category.
//           </p>
//         </div>
//       )}
//     </>
//   )
// }

// export default CourseSlider




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  return (
    <div className="w-full font-sans">
      {Courses?.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={Courses.length > 3}
          modules={[FreeMode, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="course-slider !overflow-hidden !pb-14"
        >
          {Courses.map((course, index) => (
            <SwiperSlide key={course?._id || index} className="!h-auto">
              <Course_Card course={course} Height="h-[220px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="relative flex min-h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] px-6 py-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          {/* Subtle ambient glow */}
          <div className="pointer-events-none absolute -top-20 h-40 w-40 rounded-full bg-violet-600/[0.10] blur-[80px]" />

          <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6 text-violet-300"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 5.5v15M8 7h8M8 11h6"
              />
            </svg>
          </div>

          <h3 className="relative text-base font-semibold text-zinc-200">
            No courses found
          </h3>

          <p className="relative mt-2 max-w-sm text-sm leading-6 text-zinc-500">
            No courses found in this category. Check back later for new
            learning opportunities.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseSlider;
