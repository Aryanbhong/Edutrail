import React, { useEffect, useState } from 'react'


import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import ReactStars from "react-rating-stars-component"
import { ratingsEndpoints } from '../../services/apis'
import apiConnector from '../../services/apiConnector'


const ReviewSlider = () => {
    
    const [reviews, setReviews] = useState([]);
    const trancateWords = 15;

    useEffect( ()=>{
        const fetchAllReviews = async()=>{
          const response =  await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
          console.log("Logging response in rating", response);
        }
        fetchAllReviews();
    },[])
  return (
    <div>
      <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={24}
        loop={true}
        freeMode={true}
        autoplay={{
            delay: 2500,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className='w-ful'
        >
            {
                reviews.map((review,  index)=>{
                    <SwiperSlide>
                        <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      } alt="profile pic"
                      className='h-9 w-9 object-cover rounded-full'
                      />
                      <p>{review?.user?.firstName}</p>
                      <p>{review?.course?.courseName}</p>
                      <p>
                        {review?.review}
                      </p>
                      <p>{review?.rating.toFixed(1)}</p>
                      <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                      >

                      </ReactStars>

                    </SwiperSlide>
                })
            }

        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
