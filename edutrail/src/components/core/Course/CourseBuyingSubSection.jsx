// // // import React from 'react'

// // // import { HiOutlineVideoCamera } from "react-icons/hi"


// // // const CourseBuyingSubSection = ({ subSec }) => {
// // //     return (
// // //         <div>
// // //           <div className="flex justify-between py-2">
// // //             <div className={`flex items-center gap-2`}>
// // //               <span>
// // //                 <HiOutlineVideoCamera />
// // //               </span>
// // //               <p>{subSec?.title}</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )
// // // }

// // // export default CourseBuyingSubSection;


// // import React from 'react'
// // import { HiOutlineVideoCamera } from "react-icons/hi"

// // const CourseBuyingSubSection = ({ subSec }) => {
// //   return (
// //     <div className="group relative flex items-center justify-between rounded-xl border border-cyan-500/10 bg-[#0B132B]/40 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] my-1">
// //       {/* Left Active Accent Bar */}
// //       <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-transparent group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff] transition-all duration-300 rounded-r-full" />

// //       <div className="flex items-center gap-x-3">
// //         {/* Glowing Camera Icon Badge */}
// //         <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_12px_#00f0ff] transition-all duration-300">
// //           <HiOutlineVideoCamera className="text-base" />
// //         </div>

// //         {/* Title */}
// //         <p className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-cyan-200 transition-colors duration-200 tracking-wide">
// //           {subSec?.title}
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CourseBuyingSubSection;



// import React from "react";
// import { HiOutlineVideoCamera } from "react-icons/hi";

// const CourseBuyingSubSection = ({ subSec }) => {
//   return (
//     <div className="group relative my-1 flex items-center justify-between overflow-hidden rounded-xl border border-white/[0.06] bg-[#111114]/80 px-3 py-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-[#17151d] sm:px-4">
//       {/* Hover Accent */}
//       <div className="absolute bottom-2 left-0 top-2 w-[2px] rounded-r-full bg-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       <div className="flex min-w-0 items-center gap-3">
//         {/* Video Icon */}
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08] group-hover:text-violet-300">
//           <HiOutlineVideoCamera className="text-lg" />
//         </div>

//         {/* Lecture Title */}
//         <p className="line-clamp-2 text-xs font-medium leading-5 tracking-tight text-zinc-400 transition-colors duration-300 group-hover:text-zinc-100 sm:text-sm">
//           {subSec?.title}
//         </p>
//       </div>

//       {/* Lecture Indicator */}
//       <span className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-violet-400" />
//     </div>
//   );
// };

// export default CourseBuyingSubSection;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { toast } from "react-hot-toast";
import copy from "copy-to-clipboard";
import { ACCOUNT_TYPE } from "../../../utils/Permanents";
import { addToCart } from "../../../slices/cartSlice";

const CourseDetailsCard = ({
  course,
  setConfirmationModal,
  handleBuyCourse,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor, you can't buy a course");
      return;
    }

    if (token) {
      dispatch(addToCart(course));
      return;
    }

    setConfirmationModal({
      text1: "You are not logged in",
      text2: "Please login to add to cart",
      btn1text: "Login",
      btn2text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link Copied To Clipboard");
  };

  const isEnrolled =
    user && course?.studentEnrolled?.includes(user?._id);

  return (
    <div className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-4 font-sans text-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-violet-400/20 sm:p-5 lg:p-6">
      {/* Top Accent */}
      <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      {/* Course Thumbnail */}
      <div className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#09090b]">
        <img
          src={course?.thumbnail}
          alt={course?.courseName || "Course thumbnail"}
          className="max-h-[260px] min-h-[180px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="px-1">
        {/* Price */}
        <div className="border-b border-white/[0.07] pb-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
            Course price
          </p>

          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ₹{course?.price}
            </span>

            <span className="text-xs text-zinc-500">
              One-time payment
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(139,92,246,0.15)] transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_6px_25px_rgba(139,92,246,0.22)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114]"
            onClick={
              isEnrolled
                ? () => navigate("/dashboard/enrolled-courses")
                : handleBuyCourse
            }
          >
            {isEnrolled ? "Go To Course" : "Buy Now"}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </button>

          {!isEnrolled && (
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:text-violet-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              Add to Cart
            </button>
          )}
        </div>

        {/* Guarantee */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4 shrink-0 text-violet-300"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3 5 6v5c0 4.4 3 7.8 7 10 4-2.2 7-5.6 7-10V6l-7-3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12 2 2 4-4"
            />
          </svg>

          <p className="text-xs text-zinc-500">
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Course Inclusions */}
        <div className="my-6 h-px bg-white/[0.07]" />

        <div>
          <div className="mb-4">
            <h3 className="text-base font-semibold tracking-tight text-zinc-100">
              This Course Includes
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Here's what you'll get with this course.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {course?.instructions?.map((item, index) => (
              <div
                className="group/item flex items-start gap-3"
                key={index}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
                  <BsFillCaretRightFill className="text-[10px]" />
                </span>

                <span className="text-sm leading-6 text-zinc-400 transition-colors duration-200 group-hover/item:text-zinc-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Share Course */}
        <div className="mt-6 border-t border-white/[0.07] pt-4">
          <button
            type="button"
            className="mx-auto flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-zinc-500 transition-colors duration-300 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            onClick={handleShare}
          >
            <FaShareSquare className="text-sm" />
            Share Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;

