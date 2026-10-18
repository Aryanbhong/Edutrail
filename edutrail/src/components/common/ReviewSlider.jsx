// import React, { useEffect, useState } from 'react'


// import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
// import ReactStars from "react-rating-stars-component"
// import { ratingsEndpoints } from '../../services/apis'
// import apiConnector from '../../services/apiConnector'


// const ReviewSlider = () => {
    
//     const [reviews, setReviews] = useState([]);
//     const trancateWords = 15;

//     useEffect( ()=>{
//         const fetchAllReviews = async()=>{
//           const response =  await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
//           console.log("Logging response in rating", response);
//         }
//         fetchAllReviews();
//     },[])
//   return (
//     <div>
//       <div>
//         <Swiper
//         slidesPerView={4}
//         spaceBetween={24}
//         loop={true}
//         freeMode={true}
//         autoplay={{
//             delay: 2500,
//         }}
//         modules={[FreeMode, Pagination, Autoplay]}
//         className='w-ful'
//         >
//             {
//                 reviews.map((review,  index)=>{
//                     <SwiperSlide>
//                         <img
//                       src={
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       } alt="profile pic"
//                       className='h-9 w-9 object-cover rounded-full'
//                       />
//                       <p>{review?.user?.firstName}</p>
//                       <p>{review?.course?.courseName}</p>
//                       <p>
//                         {review?.review}
//                       </p>
//                       <p>{review?.rating.toFixed(1)}</p>
//                       <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                       >

//                       </ReactStars>

//                     </SwiperSlide>
//                 })
//             }

//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider


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
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API);
        if (response?.data?.success) {
          setReviews(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchAllReviews();
  }, []);

  return (
    <div className="w-full py-8">
      <div className="h-[210px] max-w-maxContentTab lg:max-w-maxContent mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full py-4"
        >
          {reviews.map((review, index) => {
            const reviewWords = review?.review?.split(" ") || [];
            const isTruncated = reviewWords.length > truncateWords;
            const displayedReview = isTruncated
              ? reviewWords.slice(0, truncateWords).join(" ") + "..."
              : review?.review;

            return (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col justify-between h-[180px] rounded-2xl border border-cyan-500/20 bg-[#0B132B]/60 p-4 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                  
                  {/* Subtle Neon Top Glow Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all" />

                  {/* User Header Info */}
                  <div className="flex items-center gap-x-3">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="profile pic"
                      className="h-10 w-10 object-cover rounded-full border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <p className="text-sm font-semibold text-white tracking-wide truncate">
                        {`${review?.user?.firstName || ""} ${review?.user?.lastName || ""}`}
                      </p>
                      <p className="text-xs font-medium text-cyan-400/80 truncate">
                        {review?.course?.courseName}
                      </p>
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <p className="text-xs leading-relaxed text-slate-300/90 my-2 line-clamp-3">
                    {displayedReview}
                  </p>

                  {/* Rating Stars Footer */}
                  <div className="flex items-center gap-x-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-bold text-cyan-300 drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]">
                      {review?.rating ? review.rating.toFixed(1) : "5.0"}
                    </span>
                    <ReactStars
                      count={5}
                      value={review?.rating || 5}
                      size={16}
                      edit={false}
                      activeColor="#00f0ff"
                      emptyIcon={<FaStar className="text-slate-700" />}
                      fullIcon={<FaStar className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
