// import React, { useEffect, useState } from 'react'
// import RatingStars from '../../common/starRating';
// import { Link } from 'react-router-dom';

// const Course_Card = ({course , Height}) => {

//   const [avgReviewCount, setAvgReviewCount] = useState(0);
 
//   return (
//   <>
//   <Link to={`/courses/${course._id}`}>
//     <div className="">
//       <div className="rounded-lg">
//         <img
//           src={course?.thumbnail}
//           alt="course thumnail"
//           className={`${Height} w-full rounded-xl object-cover `}
//         />
//       </div>
//       <div className="flex flex-col gap-2 px-1 py-3">
//         <p className="text-xl text-richblack-5">{course?.courseName}</p>
//         <p className="text-sm text-richblack-50">
//           {course?.instructor?.firstName} {course?.instructor?.lastName}
//         </p>
//         <div className="flex items-center gap-2">
//           <span className="text-yellow-5">{avgReviewCount || 0}</span>
//           <RatingStars Review_Count={avgReviewCount} />
//           <span className="text-richblack-400">
//             {course?.ratingAndReviews?.length} Ratings
//           </span>
//         </div>
//         <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
//       </div>
//     </div>
//   </Link>
// </>
//   )
// }

// export default Course_Card


import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/starRating'
import { Link } from 'react-router-dom'
import GetAvgRating from '../../../utils/avgRating'

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

  useEffect(() => {
    const count = GetAvgRating(course?.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])

  return (
    <Link to={`/courses/${course?._id}`}>
      <div className="group flex flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:-translate-y-1">
        
        {/* Thumbnail Image */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30">
          <img
            src={course?.thumbnail}
            alt="course thumbnail"
            className={`${Height || "h-[220px]"} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
          />
        </div>

        {/* Course Meta Content */}
        <div className="flex flex-col gap-2 pt-4 px-1">
          <p className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
            {course?.courseName}
          </p>

          <p className="text-xs sm:text-sm font-medium text-slate-400">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>

          {/* Rating Block */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-cyan-400">
              {avgReviewCount || 0}
            </span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-xs text-slate-500">
              ({course?.ratingAndReviews?.length || 0} Ratings)
            </span>
          </div>

          {/* Price */}
          <p className="mt-1 text-base sm:text-lg font-extrabold text-cyan-300 tracking-wide">
            Rs. {course?.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Course_Card
