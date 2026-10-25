// import React, { useEffect, useState } from 'react'
// import RatingStars from '../../common/starRating'
// import { Link } from 'react-router-dom'
// import GetAvgRating from "../../../utils/ratingAvg"

// const Course_Card = ({ course, Height }) => {
//   const [avgReviewCount, setAvgReviewCount] = useState(0)

//   useEffect(() => {
//     const count = GetAvgRating(course?.ratingAndReviews)
//     setAvgReviewCount(count)
//   }, [course])

//   return (
//     <Link to={`/courses/${course?._id}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-3xl">
//       <div className="flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B132B]/75 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:-translate-y-1">
        
//         {/* Thumbnail Image */}
//         <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900">
//           <img
//             src={course?.thumbnail}
//             alt={course?.courseName || "course thumbnail"}
//             className={`${Height || "h-[200px]"} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
//           />
//         </div>

//         {/* Course Meta Content */}
//         <div className="flex flex-col gap-2 pt-4 px-1">
//           <p className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
//             {course?.courseName}
//           </p>

//           <p className="text-xs sm:text-sm font-medium text-slate-400">
//             {course?.instructor?.firstName} {course?.instructor?.lastName}
//           </p>

//           {/* Rating Block */}
//           <div className="flex items-center gap-2">
//             <span className="text-xs font-bold text-cyan-400">
//               {avgReviewCount || 0}
//             </span>
//             <RatingStars Review_Count={avgReviewCount} />
//             <span className="text-xs text-slate-500">
//               ({course?.ratingAndReviews?.length || 0} Ratings)
//             </span>
//           </div>

//           {/* Price */}
//           <p className="mt-1 text-base sm:text-lg font-extrabold text-cyan-300 tracking-wide">
//             Rs. {course?.price}
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Course_Card


import React, { useEffect, useState } from "react";
import RatingStars from "../../common/starRating";
import { Link } from "react-router-dom";
import GetAvgRating from "../../../utils/ratingAvg";

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course?.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <Link
      to={`/courses/${course?._id}`}
      className="group block rounded-2xl font-sans outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#15151b] hover:shadow-[0_12px_35px_rgba(109,40,217,0.10)] sm:p-4">
        {/* Subtle top accent */}
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Course Thumbnail */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#09090b]">
          <img
            src={course?.thumbnail}
            alt={course?.courseName || "Course thumbnail"}
            loading="lazy"
            className={`${Height || "h-[200px]"} w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
        </div>

        {/* Course Details */}
        <div className="flex flex-1 flex-col gap-2.5 px-1 pt-4">
          <h3 className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-6 text-zinc-100 transition-colors duration-300 group-hover:text-violet-200 sm:text-lg">
            {course?.courseName}
          </h3>

          <p className="truncate text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
            <span className="text-sm font-semibold tabular-nums text-amber-300">
              {avgReviewCount || 0}
            </span>

            <div className="flex items-center">
              <RatingStars Review_Count={avgReviewCount} />
            </div>

            <span className="text-xs text-zinc-500">
              ({course?.ratingAndReviews?.length || 0} Ratings)
            </span>
          </div>

          {/* Price */}
          <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-3.5">
            <div>
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                Course price
              </p>
              <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
                <span className="mr-1 text-sm font-medium text-violet-300">
                  Rs.
                </span>
                {course?.price}
              </p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-violet-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;

