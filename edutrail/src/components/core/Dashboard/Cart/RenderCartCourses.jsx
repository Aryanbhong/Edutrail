// import React from 'react'
// import ReactStars from 'react-rating-star-with-type'
// import { useDispatch, useSelector } from 'react-redux'
// import { GiNinjaStar } from "react-icons/gi";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { removeFromCart } from '../../../../slices/cartSlice';
// import { FaStar } from 'react-icons/fa6';

// const RenderCartCourses = () => {
//   const { cart } = useSelector((state) => state.cart)
//   const dispatch = useDispatch()
//   return (
//     <div className="flex flex-1 flex-col">
//       {cart.map((course, indx) => (
//         <div
//           key={course._id}
//           className={`flex w-full flex-wrap items-start justify-between gap-6 ${
//             indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
//           } ${indx !== 0 && "mt-6"} `}
//         >
//           <div className="flex flex-1 flex-col gap-4 xl:flex-row">
//             <img
//               src={course?.thumbnail}
//               alt={course?.courseName}
//               className="h-[148px] w-[220px] rounded-lg object-cover"
//             />
//             <div className="flex flex-col space-y-1">
//               <p className="text-lg font-medium text-richblack-5">
//                 {course?.courseName}
//               </p>
//               <p className="text-sm text-richblack-300">
//                 {course?.category?.name}
//               </p>
//               <div className="flex items-center gap-2">
//                 <span className="text-yellow-5">4.5</span>
//                 <ReactStars
//                   count={5}
//                   value={course?.ratingAndReviews?.length}
//                   size={20}
//                   edit={false}
//                   activeColor="#ffd700"
//                   emptyIcon={<FaStar />}
//                   fullIcon={<FaStar />}
//                 />
//                 <span className="text-richblack-400">
//                   {course?.ratingAndReviews?.length} Ratings
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-end space-y-2">
//             <button
//               onClick={() => dispatch(removeFromCart(course._id))}
//               className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-[12px] text-pink-200"
//             >
//               <RiDeleteBinLine/>
//               <span>Remove</span>
//             </button>
//             <p className="mb-6 text-3xl font-medium text-yellow-100">
//               ₹ {course?.price}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default RenderCartCourses


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
    <div className="flex flex-1 flex-col gap-y-4">
      {cart.map((course) => (
        <div
          key={course._id}
          className="relative flex w-full flex-wrap items-center justify-between gap-6 rounded-2xl border border-cyan-500/20 bg-[#0B132B]/80 p-5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] overflow-hidden"
        >
          {/* Ambient Top Glow Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {/* Left Column: Thumbnail & Metadata */}
          <div className="flex flex-1 flex-col gap-4 xl:flex-row items-center xl:items-start">
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
              <img
                src={course?.thumbnail}
                alt={course?.courseName}
                className="h-[148px] w-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-40" />
            </div>

            <div className="flex flex-col space-y-1.5 text-center xl:text-left">
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                {course?.courseName}
              </p>
              <p className="text-xs font-medium text-cyan-300/70">
                {course?.category?.name}
              </p>
              
              {/* Rating Section */}
              <div className="flex items-center justify-center xl:justify-start gap-2 pt-1">
                <span className="text-xs font-bold text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]">4.5</span>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length || 5}
                  size={16}
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
            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
              ₹ {course?.price}
            </p>

            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-semibold text-rose-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-900/60 hover:text-white hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] active:scale-95 cursor-pointer"
            >
              <RiDeleteBinLine className="text-sm drop-shadow-[0_0_4px_rgba(244,63,94,0.6)]" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderCartCourses
