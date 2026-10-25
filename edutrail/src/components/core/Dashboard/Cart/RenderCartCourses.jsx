// import React from 'react'
// import ReactStars from 'react-rating-star-with-type'
// import { useDispatch, useSelector } from 'react-redux'
// import { RiDeleteBinLine } from "react-icons/ri"
// import { FaStar } from 'react-icons/fa6'
// import { removeFromCart } from '../../../../slices/cartSlice'

// const RenderCartCourses = () => {
//   const { cart } = useSelector((state) => state.cart)
//   const dispatch = useDispatch()

//   return (
//     <div className="flex flex-1 flex-col gap-y-4 w-full">
//       {cart.map((course) => (
//         <div
//           key={course._id}
//           className="relative flex w-full flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#0B132B]/75 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] overflow-hidden"
//         >
//           {/* Ambient Top Glow Accent Line */}
//           <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

//           {/* Left Column: Thumbnail & Metadata */}
//           <div className="flex flex-1 flex-col gap-4 xl:flex-row items-center xl:items-start">
//             <div className="relative overflow-hidden rounded-xl border border-white/[0.08] shrink-0 shadow-lg group">
//               <img
//                 src={course?.thumbnail}
//                 alt={course?.courseName}
//                 className="h-[140px] w-[210px] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-40" />
//             </div>

//             <div className="flex flex-col space-y-1.5 text-center xl:text-left">
//               <p className="text-base sm:text-lg font-bold text-white tracking-wide">
//                 {course?.courseName}
//               </p>
//               <p className="text-xs font-medium text-cyan-300/80">
//                 {course?.category?.name}
//               </p>
              
//               {/* Rating Section */}
//               <div className="flex items-center justify-center xl:justify-start gap-2 pt-1">
//                 <span className="text-xs font-bold text-amber-400">4.5</span>
//                 <ReactStars
//                   count={5}
//                   value={course?.ratingAndReviews?.length || 5}
//                   size={15}
//                   edit={false}
//                   activeColor="#f59e0b"
//                   emptyIcon={<FaStar className="text-slate-700" />}
//                   fullIcon={<FaStar className="text-amber-400" />}
//                 />
//                 <span className="text-xs font-medium text-slate-400">
//                   ({course?.ratingAndReviews?.length || 0} Ratings)
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Actions & Price */}
//           <div className="flex flex-col items-center xl:items-end justify-between space-y-4 w-full xl:w-auto">
//             <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//               ₹ {course?.price}
//             </p>

//             <button
//               onClick={() => dispatch(removeFromCart(course._id))}
//               className="flex items-center gap-x-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-semibold text-rose-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-900/60 hover:text-white hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] active:scale-95 cursor-pointer"
//             >
//               <RiDeleteBinLine className="text-sm" />
//               <span>Remove</span>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default RenderCartCourses



import React from "react";
import ReactStars from "react-rating-star-with-type";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { removeFromCart } from "../../../../slices/cartSlice";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col gap-4 font-sans">
      {cart.map((course) => {
        const reviews = course?.ratingAndReviews || [];
        const averageRating =
          reviews.length > 0
            ? reviews.reduce(
                (sum, review) => sum + Number(review?.rating || 0),
                0
              ) / reviews.length
            : 0;

        return (
          <article
            key={course._id}
            className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111114]/90 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-violet-400/20 hover:bg-[#141418] sm:p-5"
          >
            {/* Top accent */}
            <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              {/* Course thumbnail */}
              <div className="group/image relative mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090b] sm:mx-0 sm:w-[180px] sm:max-w-none md:w-[200px]">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName || "Course thumbnail"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2 py-1 text-[10px] font-medium text-zinc-200 backdrop-blur-md">
                  <FiBookOpen className="text-violet-300" />
                  Course
                </div>
              </div>

              {/* Course information */}
              <div className="flex min-w-0 flex-1 flex-col text-center sm:text-left">
                <p className="text-base font-semibold leading-6 tracking-tight text-white transition-colors group-hover:text-violet-100 sm:text-lg">
                  {course?.courseName}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {course?.category?.name || "Course"}
                </p>

                {/* Rating */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
                  <span className="text-sm font-semibold tabular-nums text-amber-400">
                    {averageRating > 0 ? averageRating.toFixed(1) : "New"}
                  </span>

                  {averageRating > 0 && (
                    <ReactStars
                      count={5}
                      value={averageRating}
                      size={15}
                      edit={false}
                      activeColor="#f59e0b"
                      emptyIcon={<FaStar className="text-zinc-800" />}
                      fullIcon={<FaStar className="text-amber-400" />}
                    />
                  )}

                  <span className="text-xs text-zinc-500">
                    ({reviews.length}{" "}
                    {reviews.length === 1 ? "rating" : "ratings"})
                  </span>
                </div>

                {/* Review summary */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500 sm:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    <FiUsers className="text-violet-300/70" />
                    {reviews.length > 0
                      ? `${reviews.length} student reviews`
                      : "Be the first to review"}
                  </span>
                </div>

                {/* Price on mobile */}
                <div className="mt-4 border-t border-white/[0.06] pt-4 sm:hidden">
                  <p className="text-xs text-zinc-500">Course price</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    ₹{course?.price}
                  </p>
                </div>
              </div>

              {/* Price and remove action */}
              <div className="flex w-full shrink-0 flex-col items-stretch gap-3 border-t border-white/[0.06] pt-4 sm:w-auto sm:items-end sm:border-0 sm:pt-0">
                <div className="hidden text-right sm:block">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Price
                  </p>
                  <p className="mt-1.5 text-2xl font-bold tracking-tight text-white">
                    ₹{course?.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(course._id))}
                  aria-label={`Remove ${course?.courseName || "course"} from cart`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-400/15 bg-rose-500/[0.04] px-4 py-2.5 text-xs font-medium text-rose-300 transition-all duration-200 hover:border-rose-400/30 hover:bg-rose-500/[0.10] hover:text-rose-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-rose-400/30"
                >
                  <RiDeleteBinLine className="text-base" />
                  Remove course
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default RenderCartCourses;

