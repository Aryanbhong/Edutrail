import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import ReactStars from "react-rating-stars-component"
import { FaStar } from "react-icons/fa"

import { ratingsEndpoints } from '../../services/apis'
import apiConnector from '../../services/apiConnector'

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    let isMounted = true
    const fetchAllReviews = async () => {
      try {
        const response = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
        if (isMounted && response?.data?.success) {
          setReviews(response?.data?.data)
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    }
    fetchAllReviews()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="w-full py-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={reviews.length > 4}
          freeMode={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full py-2"
        >
          {reviews.map((review, index) => {
            const reviewWords = review?.review?.split(" ") || []
            const isTruncated = reviewWords.length > truncateWords
            const displayedReview = isTruncated
              ? reviewWords.slice(0, truncateWords).join(" ") + "..."
              : review?.review

            return (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col justify-between h-[190px] rounded-2xl border border-white/[0.08] bg-[#0B132B]/75 p-5 backdrop-blur-xl shadow-xl hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 group">
                  {/* Subtle Neon Top Glow Accent */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400 transition-all" />

                  {/* User Header Info */}
                  <div className="flex items-center gap-x-3">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="profile pic"
                      className="h-9 w-9 object-cover rounded-full border border-cyan-400/30"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <p className="text-sm font-semibold text-white tracking-wide truncate">
                        {`${review?.user?.firstName || ""} ${review?.user?.lastName || ""}`}
                      </p>
                      <p className="text-[11px] font-medium text-cyan-300/80 truncate">
                        {review?.course?.courseName}
                      </p>
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <p className="text-xs leading-relaxed text-slate-300 my-2 line-clamp-3">
                    {displayedReview}
                  </p>

                  {/* Rating Stars Footer */}
                  <div className="flex items-center gap-x-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-xs font-bold text-amber-300">
                      {review?.rating ? review.rating.toFixed(1) : "5.0"}
                    </span>
                    <ReactStars
                      count={5}
                      value={review?.rating || 5}
                      size={14}
                      edit={false}
                      activeColor="#00f0ff"
                      emptyIcon={<FaStar className="text-slate-700" />}
                      fullIcon={<FaStar className="text-cyan-400" />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
