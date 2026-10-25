// // import React from 'react'
// // import { useEffect } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { useSelector } from 'react-redux';
// // import RatingStars from '../../common/starRating';
// // import IconBtn from '../../common/IconBtn';
// // import { createRating } from '../../../services/opreations/courseDetails';

// // const CourseReviewModal = ({setReviewModal}) => {
// //   const {user} = useSelector((state)=> state.profile);
// //   const {token} = useSelector((state)=> state.auth);
// //   const {courseEntireData} = useSelector((state)=> state.viewCourse);

// //   const {
// //     register,
// //     handleSubmit,
// //     setValue,
// //     formState: {errors},
// //   } = useForm();

// //   useEffect(()=>{
// //     setValue("courseExperience","");
// //     setValue("courseRating",0);
// //   },[])
 
// //   const ratingChanged= (newRating) =>{
// //     setValue("courseRating",newRating);

// //   }
// //   const onSubmit =async(data) => {
// //     await createRating(
// //       {
// //           courseId:courseEntireData._id,
// //           rating:data.courseRating,
// //           review:data.courseExperience,
// //       },
// //       token
// //     );
// //     setReviewModal(false);
// //   }

// //   return (
// //     <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
// //       <div  className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
// //         {/* modal header */}
// //         <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
// //           <p className="text-xl font-semibold text-richblack-5">Add Review</p>
        
// //         </div>
// //          {/* Modal Body */}
// //         <div className="p-6">

// //           <div className="flex items-center justify-center gap-x-4">
// //             <img src={user?.image} 
// //             alt="user Image"
// //             className='aspect-square w-[50px] rounded-full object-cover'
// //              />
// //              <div className=''>
// //               <p className="font-semibold text-richblack-5">{user?.firstName}{user?.lastName}</p>
// //               <p  className="text-sm text-richblack-5">Posting Publicly</p>
// //              </div>
// //           </div>
        
// //         <form 
// //         onSubmit={handleSubmit(onSubmit)}
// //         className='mt-6 flex flex-col items-center'
// //         >
// //             <RatingStars
// //               count={5}
// //               onChange={ratingChanged}
// //               size={24}
// //               activeColor="#ffd700"
// //             />

// //             <div  className="flex w-11/12 flex-col space-y-2">
// //               <label htmlFor="courseExperience"
// //               className="text-sm text-richblack-5"
// //               >
// //                 Add Your Experience <sup className="text-pink-200">*</sup>
// //               </label>
// //               <textarea
// //               id='courseExperience'
// //               placeholder='Add Your Experience here'
// //               {...register("courseExperience",{required:true})}
// //               className="form-style resize-x-none min-h-[130px] w-full"
// //               />
// //               {
// //                 errors.courseExperience && (
// //                   <span className="ml-2 text-xs tracking-wide text-pink-200">
// //                     Please add your experience
// //                   </span>
// //                 )
// //               }
// //             </div>
// //              {/* cancel and save button */}
// //              <div className="mt-6 flex w-11/12 justify-end gap-x-2">
// //               <button
// //               onClick={()=> setReviewModal(false)}
// //               className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
// //               >
// //                 Cancel
// //               </button>
// //               <IconBtn
// //                  text="save" 
// //               />
// //              </div>

// //         </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CourseReviewModal

// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import { useSelector } from 'react-redux'
// import RatingStars from '../../common/starRating'
// import IconBtn from '../../common/IconBtn'
// import { createRating } from '../../../services/opreations/courseDetails'

// const CourseReviewModal = ({ setReviewModal }) => {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const { courseEntireData } = useSelector((state) => state.viewCourse)

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm()

//   useEffect(() => {
//     setValue("courseExperience", "")
//     setValue("courseRating", 0)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const ratingChanged = (newRating) => {
//     setValue("courseRating", newRating)
//   }

//   const onSubmit = async (data) => {
//     await createRating(
//       {
//         courseId: courseEntireData?._id,
//         rating: data.courseRating,
//         review: data.courseExperience,
//       },
//       token
//     )
//     setReviewModal(false)
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-[#030712]/80 backdrop-blur-md p-4">
//       <div className="relative my-10 w-full max-w-[650px] rounded-3xl border border-cyan-500/30 bg-[#0B132B]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">
        
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         {/* Modal Header */}
//         <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#030712]/70 px-6 py-4">
//           <p className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
//             Add Review
//           </p>
//         </div>

//         {/* Modal Body */}
//         <div className="p-6 sm:p-8">
//           {/* User Info Block */}
//           <div className="flex items-center justify-center gap-x-4">
//             <img
//               src={user?.image}
//               alt="user"
//               className="aspect-square w-[54px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
//             />
//             <div className="flex flex-col">
//               <p className="text-base font-bold text-white tracking-wide">
//                 {user?.firstName} {user?.lastName}
//               </p>
//               <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/70">
//                 Posting Publicly
//               </p>
//             </div>
//           </div>

//           {/* Review Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="mt-6 flex flex-col items-center"
//           >
//             <div className="py-2">
//               <RatingStars
//                 count={5}
//                 onChange={ratingChanged}
//                 size={26}
//                 activeColor="#00f0ff"
//               />
//             </div>

//             <div className="mt-4 flex w-full flex-col space-y-2">
//               <label
//                 htmlFor="courseExperience"
//                 className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase"
//               >
//                 Add Your Experience <sup className="text-rose-400">*</sup>
//               </label>
//               <textarea
//                 id="courseExperience"
//                 placeholder="Add your experience here..."
//                 {...register("courseExperience", { required: true })}
//                 className="w-full resize-none min-h-[140px] rounded-2xl border border-slate-700/80 bg-[#030712]/70 p-4 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//               />
//               {errors.courseExperience && (
//                 <span className="text-xs font-semibold tracking-wide text-rose-400">
//                   Please add your experience
//                 </span>
//               )}
//             </div>

//             {/* Cancel and Save Buttons */}
//             <div className="mt-8 flex w-full justify-end gap-x-3">
//               <button
//                 type="button"
//                 onClick={() => setReviewModal(false)}
//                 className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
//               >
//                 Cancel
//               </button>
//               <IconBtn type="submit" text="Save" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseReviewModal



import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { FiStar, FiMessageSquare, FiUser, FiX } from "react-icons/fi";
import RatingStars from "../../common/starRating";
import IconBtn from "../../common/IconBtn";
import { createRating } from "../../../services/opreations/courseDetails";

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { courseEntireData } = useSelector((state) => state.viewCourse);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      courseExperience: "",
      courseRating: 0,
    },
  });

  const courseRating = watch("courseRating");

  useEffect(() => {
    setValue("courseExperience", "");
    setValue("courseRating", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData?._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    );

    setReviewModal(false);
  };

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-y-auto bg-black/75 p-4 font-sans backdrop-blur-md">
      <div className="relative my-auto w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101014] shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
        {/* Ambient accent */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-600/[0.10] blur-[100px]" />
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.09] text-violet-300">
              <FiMessageSquare size={18} />
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Share Your Review
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Help other learners choose their next course.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setReviewModal(false)}
            aria-label="Close review modal"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-zinc-400 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="relative p-5 sm:p-7">
          {/* User information */}
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            {user?.image ? (
              <img
                src={user.image}
                alt={`${user?.firstName || "User"}'s profile`}
                className="h-12 w-12 shrink-0 rounded-xl border border-white/[0.08] object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
                <FiUser size={20} />
              </div>
            )}

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-zinc-100">
                {[user?.firstName, user?.lastName]
                  .filter(Boolean)
                  .join(" ") || "Learner"}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Your review will be shared publicly.
              </p>
            </div>

            <span className="ml-auto shrink-0 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-2.5 py-1 text-[10px] font-medium text-violet-300">
              Learner
            </span>
          </div>

          {/* Review form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 space-y-6"
          >
            {/* Rating */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] px-4 py-5 text-center sm:px-6">
              <div className="flex items-center justify-center gap-2">
                <FiStar className="text-violet-300" size={16} />
                <p className="text-sm font-semibold text-zinc-200">
                  How would you rate this course?
                </p>
              </div>

              <div className="mt-4 flex justify-center">
                <RatingStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor="#a78bfa"
                />
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                {Number(courseRating) > 0
                  ? `You've selected ${courseRating} out of 5 stars`
                  : "Select a star rating"}
              </p>

              <input
                type="hidden"
                {...register("courseRating", {
                  validate: (value) =>
                    Number(value) > 0 || "Please select a rating",
                })}
              />

              {errors.courseRating && (
                <p className="mt-2 text-xs font-medium text-rose-400">
                  {errors.courseRating.message}
                </p>
              )}
            </div>

            {/* Written review */}
            <div className="space-y-2.5">
              <label
                htmlFor="courseExperience"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300"
              >
                Your Experience
                <span className="text-violet-300">*</span>
              </label>

              <textarea
                id="courseExperience"
                placeholder="What did you enjoy? What did you learn? Share your experience..."
                rows={5}
                {...register("courseExperience", {
                  required: "Please share your experience",
                })}
                className={`min-h-[140px] w-full resize-y rounded-xl border bg-[#0b0b0e] p-4 text-sm leading-6 text-zinc-200 outline-none transition-all duration-200 placeholder:text-zinc-600 focus:bg-[#0e0e12] focus:ring-2 focus:ring-violet-400/10 ${
                  errors.courseExperience
                    ? "border-rose-400/50 focus:border-rose-400/70"
                    : "border-white/[0.08] hover:border-white/[0.14] focus:border-violet-400/40"
                }`}
              />

              <div className="flex items-start justify-between gap-3">
                {errors.courseExperience ? (
                  <p className="text-xs font-medium text-rose-400">
                    {errors.courseExperience.message}
                  </p>
                ) : (
                  <p className="text-xs text-zinc-500">
                    Keep your feedback helpful and respectful.
                  </p>
                )}

                <span className="shrink-0 text-[10px] text-zinc-600">
                  Required
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setReviewModal(false)}
                className="rounded-xl border border-white/[0.09] bg-white/[0.02] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.05] hover:text-white active:scale-[0.98]"
              >
                Cancel
              </button>

              <div
                className={`[&_button]:w-full [&_button]:justify-center sm:[&_button]:w-auto ${
                  isSubmitting ? "pointer-events-none opacity-60" : ""
                }`}
              >
                <IconBtn
                  type="submit"
                  text={isSubmitting ? "Submitting..." : "Submit Review"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewModal;

