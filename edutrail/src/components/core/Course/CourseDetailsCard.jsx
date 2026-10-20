// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { BsFillCaretRightFill } from "react-icons/bs"
// import { FaShareSquare } from "react-icons/fa"
// import { toast } from 'react-hot-toast';
// import copy from 'copy-to-clipboard';
// import { ACCOUNT_TYPE } from '../../../utils/Permanents';
// import { addToCart } from '../../../slices/cartSlice';

// const CourseDetailsCard = ({course, setConfirmationModal, handleBuyCourse}) => {
//     const {user} = useSelector((state)=> state.profile);
//     const {token} = useSelector((state)=> state.auth);
//     const navigate =useNavigate();
//     const dispatch= useDispatch();

//     const handleAddToCart=()=>{
//         if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
//           toast.error("You are an Instructor, you can't buy a course");
//           return;
//         }
//         if(token){
//           dispatch(addToCart(course));
//           return;
//         }
//         setConfirmationModal({
//           text1:"You are not logged in",
//           text2:"Please login to add to cart",
//           btn1text:"login",
//           btn2text:"cancel",
//           btn1Handler:()=>navigate("/login"),
//           btn2Handler:()=>setConfirmationModal(null),
//         })
//     }
//     const handleShare=()=>{
//         copy(window.location.href);
//         toast.success(" Link Copied To Clipboard")
//     }
//   return (
 
//   <>
//   <div
//     className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
//   >
//     {/* Course Image */}
//     <img
//       src={course?.thumbnail}
//       alt={course?.courseName}
//       className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
//     />

//     <div className="px-4">
//       <div className="space-x-3 pb-4 text-3xl font-semibold">
//         Rs. {course?.price}
//       </div>
//       <div className="flex flex-col gap-4">
//         <button
//           className="flex items-center text-richblack-900 bg-yellow-50 w-fit px-4 py-2 rounded-md"
//           onClick={
//            user && course?.studentEnrolled.includes(user?._id)
//               ? () => navigate("/dashboard/enrolled-courses")
//               : handleBuyCourse
//           }
//         >
//           {user && course?.studentEnrolled.includes(user?._id)
//             ? "Go To Course"
//             : "Buy Now"}
//         </button>
//         {(!user || !course?.studentEnrolled.includes(user?._id)) && (
//           <button onClick={handleAddToCart} className="flex items-center bg-richblack-900 w-fit text-yellow-50 px-4 py-2 rounded-md">
//             Add to Cart
//           </button>
//         )}
//       </div>
//       <div>
//         <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
//           30-Day Money-Back Guarantee
//         </p>
//       </div>

//       <div className={``}>
//         <p className={`my-2 text-xl font-semibold `}>
//           This Course Includes :
//         </p>
//         <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
//           {course?.instructions?.map((item, i) => {
//             return (
//               <p className={`flex gap-2`} key={i}>
//                 <BsFillCaretRightFill />
//                 <span>{item}</span>
//               </p>
//             )
//           })}
//         </div>
//       </div>
//       <div className="text-center">
//         <button
//           className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
//           onClick={handleShare}
//         >
//           <FaShareSquare size={15} /> Share
//         </button>
//       </div>
//     </div>
//   </div>
// </>
// )
// }

// export default CourseDetailsCard

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { toast } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import { ACCOUNT_TYPE } from '../../../utils/Permanents'
import { addToCart } from '../../../slices/cartSlice'

const CourseDetailsCard = ({ course, setConfirmationModal, handleBuyCourse }) => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor, you can't buy a course")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in",
      text2: "Please login to add to cart",
      btn1text: "Login",
      btn2text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link Copied To Clipboard")
  }

  const isEnrolled = user && course?.studentEnrolled?.includes(user?._id)

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl border border-cyan-500/30 bg-[#0B132B]/80 p-6 text-slate-100 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:border-cyan-500/50">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Course Thumbnail */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
        <img
          src={course?.thumbnail}
          alt={course?.courseName}
          className="max-h-[260px] min-h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="px-1">
        {/* Price Header */}
        <div className="pb-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          ₹ {course?.price}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="w-full justify-center flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] active:scale-95 cursor-pointer"
            onClick={isEnrolled ? () => navigate("/dashboard/enrolled-courses") : handleBuyCourse}
          >
            {isEnrolled ? "Go To Course" : "Buy Now"}
          </button>

          {!isEnrolled && (
            <button
              onClick={handleAddToCart}
              className="w-full justify-center flex items-center gap-x-2 rounded-xl border border-cyan-400/50 bg-cyan-950/40 px-5 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:bg-cyan-900/60 hover:text-white hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(0,240,255,0.3)] active:scale-95 cursor-pointer"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Guarantee Subtext */}
        <p className="pb-4 pt-5 text-center text-xs font-medium text-cyan-300/70 tracking-wide">
          30-Day Money-Back Guarantee
        </p>

        <div className="my-4 h-[1px] w-full bg-slate-800/80" />

        {/* Instructions List */}
        <div>
          <p className="mb-3 text-base font-bold text-white tracking-wide">
            This Course Includes:
          </p>
          <div className="flex flex-col gap-2.5 text-xs font-medium text-slate-300">
            {course?.instructions?.map((item, i) => (
              <div className="flex items-start gap-2.5" key={i}>
                <BsFillCaretRightFill className="mt-0.5 text-cyan-400 shrink-0 drop-shadow-[0_0_6px_#00f0ff]" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Share Button */}
        <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
          <button
            className="mx-auto inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={handleShare}
          >
            <FaShareSquare className="text-cyan-400 drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]" />
            Share Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsCard

