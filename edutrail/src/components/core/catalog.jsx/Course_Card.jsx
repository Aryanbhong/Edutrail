import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/starRating'
import { Link } from 'react-router-dom'
import GetAvgRating from "../../../utils/ratingAvg"

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

  useEffect(() => {
    const count = GetAvgRating(course?.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])

  return (
    <Link to={`/courses/${course?._id}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-3xl">
      <div className="flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B132B]/75 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:-translate-y-1">
        
        {/* Thumbnail Image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900">
          <img
            src={course?.thumbnail}
            alt={course?.courseName || "course thumbnail"}
            className={`${Height || "h-[200px]"} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
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
