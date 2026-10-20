import React from 'react'
import ReactStars from 'react-rating-star-with-type'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBinLine } from "react-icons/ri"
import { FaStar } from 'react-icons/fa6'
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-1 flex-col gap-y-4 w-full">
      {cart.map((course) => (
        <div
          key={course._id}
          className="relative flex w-full flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#0B132B]/75 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] overflow-hidden"
        >
          {/* Ambient Top Glow Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {/* Left Column: Thumbnail & Metadata */}
          <div className="flex flex-1 flex-col gap-4 xl:flex-row items-center xl:items-start">
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] shrink-0 shadow-lg group">
              <img
                src={course?.thumbnail}
                alt={course?.courseName}
                className="h-[140px] w-[210px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-40" />
            </div>

            <div className="flex flex-col space-y-1.5 text-center xl:text-left">
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                {course?.courseName}
              </p>
              <p className="text-xs font-medium text-cyan-300/80">
                {course?.category?.name}
              </p>
              
              {/* Rating Section */}
              <div className="flex items-center justify-center xl:justify-start gap-2 pt-1">
                <span className="text-xs font-bold text-amber-400">4.5</span>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length || 5}
                  size={15}
                  edit={false}
                  activeColor="#f59e0b"
                  emptyIcon={<FaStar className="text-slate-700" />}
                  fullIcon={<FaStar className="text-amber-400" />}
                />
                <span className="text-xs font-medium text-slate-400">
                  ({course?.ratingAndReviews?.length || 0} Ratings)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Price */}
          <div className="flex flex-col items-center xl:items-end justify-between space-y-4 w-full xl:w-auto">
            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
              ₹ {course?.price}
            </p>

            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-semibold text-rose-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-900/60 hover:text-white hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] active:scale-95 cursor-pointer"
            >
              <RiDeleteBinLine className="text-sm" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderCartCourses
