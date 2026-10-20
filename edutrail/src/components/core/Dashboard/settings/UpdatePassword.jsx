// import React, { useState } from "react"
// import { useForm } from "react-hook-form"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import IconBtn from "../../../common/IconBtn"
// import { changePassword } from "../../../../services/opreations/SettingsApi"

// const UpdatePassword=() =>{
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()

//   const [showOldPassword, setShowOldPassword] = useState(false)
//   const [showNewPassword, setShowNewPassword] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const submitPasswordForm = async (data) => {
//     console.log("password Data - ", data)
//     try {
//       await changePassword(token, data)
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit(submitPasswordForm)}>
//         <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] text-black border-richblack-700 bg-richblack-800 p-8 px-12">
//           <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
//           <div className="flex flex-col gap-5 lg:flex-row">
//             <div className="relative flex flex-col gap-2 text-white lg:w-[48%]">
//               <label htmlFor="oldPassword" className="lable-style">
//                 Current Password
//               </label>
//               <input
//                 type={showOldPassword ? "text" : "password"}
//                 name="oldPassword"
//                 id="oldPassword"
//                 placeholder="Enter Current Password"
//                 className="form-style p-2 bg-richblack-600 text-white rounded-lg"
//                 {...register("oldPassword", { required: true })}
//               />
//               <span
//                 onClick={() => setShowOldPassword((prev) => !prev)}
//                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//               >
//                 {showOldPassword ? (
//                   <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                 ) : (
//                   <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                 )}
//               </span>
//               {errors.oldPassword && (
//                 <span className="-mt-1 text-[12px] text-yellow-100">
//                   Please enter your Current Password.
//                 </span>
//               )}
//             </div>
//             <div className="relative flex flex-col gap-2 text-white lg:w-[48%]">
//               <label htmlFor="newPassword" className="lable-style">
//                 New Password
//               </label>
//               <input
//                 type={showNewPassword ? "text" : "password"}
//                 name="newPassword"
//                 id="newPassword"
//                 placeholder="Enter New Password"
//               className="form-style p-2 bg-richblack-600 text-white rounded-lg"
//                 {...register("newPassword", { required: true })}
//               />
//               <span
//                 onClick={() => setShowNewPassword((prev) => !prev)}
//                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//               >
//                 {showNewPassword ? (
//                   <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                 ) : (
//                   <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                 )}
//               </span>
//               {errors.newPassword && (
//                 <span className="-mt-1 text-[12px] text-yellow-100">
//                   Please enter your New Password.
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end gap-2">
//           <button
//             onClick={() => {
//               navigate("/dashboard/my-profile")
//             }}
//             className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
//           >
//             Cancel
//           </button>
//           <IconBtn type="submit" text="Update" />
//         </div>
//       </form>
//     </>
//   )
// }

// export default UpdatePassword

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from "../../../common/IconBtn"
import { changePassword } from "../../../../services/opreations/SettingsApi"

const UpdatePassword = () => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitPasswordForm = async (data) => {
    try {
      await changePassword(token, data)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitPasswordForm)} className="w-full">
      {/* Password Panel Container */}
      <div className="relative my-10 flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <h2 className="text-lg sm:text-xl font-bold tracking-wide text-white border-b border-slate-800/80 pb-4">
          Password Settings
        </h2>

        {/* Inputs Layout */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Current Password Field */}
          <div className="relative flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="oldPassword" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
              Current Password <sup className="text-rose-400">*</sup>
            </label>
            <div className="relative w-full">
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] pr-12"
                {...register("oldPassword", { required: true })}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={20} />
                ) : (
                  <AiOutlineEye fontSize={20} />
                )}
              </span>
            </div>
            {errors.oldPassword && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please enter your Current Password.
              </span>
            )}
          </div>

          {/* New Password Field */}
          <div className="relative flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="newPassword" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
              New Password <sup className="text-rose-400">*</sup>
            </label>
            <div className="relative w-full">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] pr-12"
                {...register("newPassword", { required: true })}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={20} />
                ) : (
                  <AiOutlineEye fontSize={20} />
                )}
              </span>
            </div>
            {errors.newPassword && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please enter your New Password.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-x-3 pt-2">
        <button
          type="button"
          onClick={() => {
            navigate("/dashboard/my-profile")
          }}
          className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Update" />
      </div>
    </form>
  )
}

export default UpdatePassword
