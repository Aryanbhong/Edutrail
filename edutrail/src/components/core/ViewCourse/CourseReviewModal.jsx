// import React from 'react'
// import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
// import RatingStars from '../../common/starRating';
// import IconBtn from '../../common/IconBtn';
// import { createRating } from '../../../services/opreations/courseDetails';

// const CourseReviewModal = ({setReviewModal}) => {
//   const {user} = useSelector((state)=> state.profile);
//   const {token} = useSelector((state)=> state.auth);
//   const {courseEntireData} = useSelector((state)=> state.viewCourse);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: {errors},
//   } = useForm();

//   useEffect(()=>{
//     setValue("courseExperience","");
//     setValue("courseRating",0);
//   },[])
 
//   const ratingChanged= (newRating) =>{
//     setValue("courseRating",newRating);

//   }
//   const onSubmit =async(data) => {
//     await createRating(
//       {
//           courseId:courseEntireData._id,
//           rating:data.courseRating,
//           review:data.courseExperience,
//       },
//       token
//     );
//     setReviewModal(false);
//   }

//   return (
//     <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
//       <div  className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
//         {/* modal header */}
//         <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
//           <p className="text-xl font-semibold text-richblack-5">Add Review</p>
        
//         </div>
//          {/* Modal Body */}
//         <div className="p-6">

//           <div className="flex items-center justify-center gap-x-4">
//             <img src={user?.image} 
//             alt="user Image"
//             className='aspect-square w-[50px] rounded-full object-cover'
//              />
//              <div className=''>
//               <p className="font-semibold text-richblack-5">{user?.firstName}{user?.lastName}</p>
//               <p  className="text-sm text-richblack-5">Posting Publicly</p>
//              </div>
//           </div>
        
//         <form 
//         onSubmit={handleSubmit(onSubmit)}
//         className='mt-6 flex flex-col items-center'
//         >
//             <RatingStars
//               count={5}
//               onChange={ratingChanged}
//               size={24}
//               activeColor="#ffd700"
//             />

//             <div  className="flex w-11/12 flex-col space-y-2">
//               <label htmlFor="courseExperience"
//               className="text-sm text-richblack-5"
//               >
//                 Add Your Experience <sup className="text-pink-200">*</sup>
//               </label>
//               <textarea
//               id='courseExperience'
//               placeholder='Add Your Experience here'
//               {...register("courseExperience",{required:true})}
//               className="form-style resize-x-none min-h-[130px] w-full"
//               />
//               {
//                 errors.courseExperience && (
//                   <span className="ml-2 text-xs tracking-wide text-pink-200">
//                     Please add your experience
//                   </span>
//                 )
//               }
//             </div>
//              {/* cancel and save button */}
//              <div className="mt-6 flex w-11/12 justify-end gap-x-2">
//               <button
//               onClick={()=> setReviewModal(false)}
//               className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
//               >
//                 Cancel
//               </button>
//               <IconBtn
//                  text="save" 
//               />
//              </div>

//         </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseReviewModal

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import RatingStars from '../../common/starRating'
import IconBtn from '../../common/IconBtn'
import { createRating } from '../../../services/opreations/courseDetails'

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { courseEntireData } = useSelector((state) => state.viewCourse)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue("courseExperience", "")
    setValue("courseRating", 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating)
  }

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData?._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    )
    setReviewModal(false)
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-[#030712]/80 backdrop-blur-md p-4">
      <div className="relative my-10 w-full max-w-[650px] rounded-3xl border border-cyan-500/30 bg-[#0B132B]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#030712]/70 px-6 py-4">
          <p className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
            Add Review
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* User Info Block */}
          <div className="flex items-center justify-center gap-x-4">
            <img
              src={user?.image}
              alt="user"
              className="aspect-square w-[54px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
            <div className="flex flex-col">
              <p className="text-base font-bold text-white tracking-wide">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/70">
                Posting Publicly
              </p>
            </div>
          </div>

          {/* Review Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center"
          >
            <div className="py-2">
              <RatingStars
                count={5}
                onChange={ratingChanged}
                size={26}
                activeColor="#00f0ff"
              />
            </div>

            <div className="mt-4 flex w-full flex-col space-y-2">
              <label
                htmlFor="courseExperience"
                className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase"
              >
                Add Your Experience <sup className="text-rose-400">*</sup>
              </label>
              <textarea
                id="courseExperience"
                placeholder="Add your experience here..."
                {...register("courseExperience", { required: true })}
                className="w-full resize-none min-h-[140px] rounded-2xl border border-slate-700/80 bg-[#030712]/70 p-4 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              />
              {errors.courseExperience && (
                <span className="text-xs font-semibold tracking-wide text-rose-400">
                  Please add your experience
                </span>
              )}
            </div>

            {/* Cancel and Save Buttons */}
            <div className="mt-8 flex w-full justify-end gap-x-3">
              <button
                type="button"
                onClick={() => setReviewModal(false)}
                className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
              >
                Cancel
              </button>
              <IconBtn type="submit" text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CourseReviewModal
