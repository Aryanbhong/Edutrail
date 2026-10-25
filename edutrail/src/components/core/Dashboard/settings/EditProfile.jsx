// // import { useForm } from "react-hook-form"
// // import { useDispatch, useSelector } from "react-redux"
// // import { useNavigate } from "react-router-dom"
// // import IconBtn from "../../../common/IconBtn"
// // import { updateProfile } from "../../../../services/opreations/SettingsApi"

// // const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

// // export default function EditProfile() {
// //   const { user } = useSelector((state) => state.profile)
// //   const { token } = useSelector((state) => state.auth)
// //   const navigate = useNavigate()
// //   const dispatch = useDispatch()

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm()

// //   const submitProfileForm = async (data) => {
// //     console.log("Form Data - ", data)
// //     try {
// //       dispatch(updateProfile(token, data))
// //     } catch (error) {
// //       console.log("ERROR MESSAGE - ", error.message)
// //     }
// //   }
// //   return (
// //     <>
// //       <form onSubmit={handleSubmit(submitProfileForm)}>
// //         {/* Profile Information */}
// //         <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
// //           <h2 className="text-lg font-semibold text-richblack-5">
// //             Profile Information
// //           </h2>
// //           <div className="flex flex-col gap-5 lg:flex-row">
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="firstName" className="lable-style">
// //                 First Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="firstName"
// //                 id="firstName"
// //                 placeholder="Enter first name"
// //                 className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("firstName", { required: true })}
// //                 defaultValue={user?.firstName}
// //               />
// //               {errors.firstName && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   Please enter your first name.
// //                 </span>
// //               )}
// //             </div>
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="lastName" className="lable-style">
// //                 Last Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="lastName"
// //                 id="lastName"
// //                 placeholder="Enter first name"
// //                 className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("lastName", { required: true })}
// //                 defaultValue={user?.lastName}
// //               />
// //               {errors.lastName && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   Please enter your last name.
// //                 </span>
// //               )}
// //             </div>
// //           </div>

// //           <div className="flex flex-col gap-5 lg:flex-row">
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="dateOfBirth" className="lable-style">
// //                 Date of Birth
// //               </label>
// //               <input
// //                 type="date"
// //                 name="dateOfBirth"
// //                 id="dateOfBirth"
// //                className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("dateOfBirth", {
// //                   required: {
// //                     value: true,
// //                     message: "Please enter your Date of Birth.",
// //                   },
// //                   max: {
// //                     value: new Date().toISOString().split("T")[0],
// //                     message: "Date of Birth cannot be in the future.",
// //                   },
// //                 })}
// //                 defaultValue={user?.additionalDetails?.dateOfBirth}
// //               />
// //               {errors.dateOfBirth && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   {errors.dateOfBirth.message}
// //                 </span>
// //               )}
// //             </div>
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="gender" className="lable-style">
// //                 Gender
// //               </label>
// //               <select
// //                 type="text"
// //                 name="gender"
// //                 id="gender"
// //                 className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("gender", { required: true })}
// //                 defaultValue={user?.additionalDetails?.gender}
// //               >
// //                 {genders.map((ele, i) => {
// //                   return (
// //                     <option key={i} value={ele}>
// //                       {ele}
// //                     </option>
// //                   )
// //                 })}
// //               </select>
// //               {errors.gender && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   Please enter your Date of Birth.
// //                 </span>
// //               )}
// //             </div>
// //           </div>

// //           <div className="flex flex-col gap-5 lg:flex-row">
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="contactNumber" className="lable-style">
// //                 Contact Number
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="contactNumber"
// //                 id="contactNumber"
// //                 placeholder="Enter Contact Number"
// //                className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("contactNumber", {
// //                   required: {
// //                     value: true,
// //                     message: "Please enter your Contact Number.",
// //                   },
// //                   maxLength: { value: 12, message: "Invalid Contact Number" },
// //                   minLength: { value: 10, message: "Invalid Contact Number" },
// //                 })}
// //                 defaultValue={user?.additionalDetails?.contactNumber}
// //               />
// //               {errors.contactNumber && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   {errors.contactNumber.message}
// //                 </span>
// //               )}
// //             </div>
// //             <div className="flex flex-col gap-2 lg:w-[48%]">
// //               <label htmlFor="about" className="lable-style">
// //                 About
// //               </label>
// //               <input
// //                 type="text"
// //                 name="about"
// //                 id="about"
// //                 placeholder="Enter Bio Details"
// //                className="form-style p-2 bg-richblack-600 text-white rounded-lg"
// //                 {...register("about", { required: true })}
// //                 defaultValue={user?.additionalDetails?.about}
// //               />
// //               {errors.about && (
// //                 <span className="-mt-1 text-[12px] text-yellow-100">
// //                   Please enter your About.
// //                 </span>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex justify-end gap-2">
// //           <button
// //             onClick={() => {
// //               navigate("/dashboard/my-profile")
// //             }}
// //             className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
// //           >
// //             Cancel
// //           </button>
// //           <IconBtn type="submit" text="Save" />
// //         </div>
// //       </form>
// //     </>
// //   )
// // }


// import { useForm } from "react-hook-form"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import IconBtn from "../../../common/IconBtn"
// import { updateProfile } from "../../../../services/opreations/SettingsApi"

// const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

// export default function EditProfile() {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const submitProfileForm = async (data) => {
//     try {
//       dispatch(updateProfile(token, data))
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(submitProfileForm)} className="w-full">
//       {/* Profile Information Panel */}
//       <div className="relative my-10 flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
        
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         <h2 className="text-lg sm:text-xl font-bold tracking-wide text-white border-b border-slate-800/80 pb-4">
//           Profile Information
//         </h2>

//         {/* Row 1: Names */}
//         <div className="flex flex-col gap-5 lg:flex-row">
//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="firstName" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               First Name <sup className="text-rose-400">*</sup>
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter first name"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//               {...register("firstName", { required: true })}
//               defaultValue={user?.firstName}
//             />
//             {errors.firstName && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 Please enter your first name.
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="lastName" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               Last Name <sup className="text-rose-400">*</sup>
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               placeholder="Enter last name"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//               {...register("lastName", { required: true })}
//               defaultValue={user?.lastName}
//             />
//             {errors.lastName && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 Please enter your last name.
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Row 2: DOB & Gender */}
//         <div className="flex flex-col gap-5 lg:flex-row">
//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="dateOfBirth" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               Date of Birth <sup className="text-rose-400">*</sup>
//             </label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               id="dateOfBirth"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
//               {...register("dateOfBirth", {
//                 required: {
//                   value: true,
//                   message: "Please enter your Date of Birth.",
//                 },
//                 max: {
//                   value: new Date().toISOString().split("T")[0],
//                   message: "Date of Birth cannot be in the future.",
//                 },
//               })}
//               defaultValue={user?.additionalDetails?.dateOfBirth}
//             />
//             {errors.dateOfBirth && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 {errors.dateOfBirth.message}
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="gender" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               Gender <sup className="text-rose-400">*</sup>
//             </label>
//             <select
//               name="gender"
//               id="gender"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
//               {...register("gender", { required: true })}
//               defaultValue={user?.additionalDetails?.gender}
//             >
//               {genders.map((ele, i) => (
//                 <option key={i} value={ele} className="bg-[#0B132B] text-slate-100">
//                   {ele}
//                 </option>
//               ))}
//             </select>
//             {errors.gender && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 Please select your gender.
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Row 3: Contact & About */}
//         <div className="flex flex-col gap-5 lg:flex-row">
//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="contactNumber" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               Contact Number <sup className="text-rose-400">*</sup>
//             </label>
//             <input
//               type="tel"
//               name="contactNumber"
//               id="contactNumber"
//               placeholder="Enter Contact Number"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//               {...register("contactNumber", {
//                 required: {
//                   value: true,
//                   message: "Please enter your Contact Number.",
//                 },
//                 maxLength: { value: 12, message: "Invalid Contact Number" },
//                 minLength: { value: 10, message: "Invalid Contact Number" },
//               })}
//               defaultValue={user?.additionalDetails?.contactNumber}
//             />
//             {errors.contactNumber && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 {errors.contactNumber.message}
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col gap-2 lg:w-[48%]">
//             <label htmlFor="about" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
//               About <sup className="text-rose-400">*</sup>
//             </label>
//             <input
//               type="text"
//               name="about"
//               id="about"
//               placeholder="Enter Bio Details"
//               className="w-full rounded-xl border border-slate-700/80 bg-[#030712]/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//               {...register("about", { required: true })}
//               defaultValue={user?.additionalDetails?.about}
//             />
//             {errors.about && (
//               <span className="text-xs font-semibold tracking-wide text-rose-400">
//                 Please enter your About bio.
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-end gap-x-3 pt-2">
//         <button
//           type="button"
//           onClick={() => {
//             navigate("/dashboard/my-profile")
//           }}
//           className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95"
//         >
//           Cancel
//         </button>
//         <IconBtn type="submit" text="Save" />
//       </div>
//     </form>
//   )
// }



import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import IconBtn from "../../../common/IconBtn"
import { updateProfile } from "../../../../services/opreations/SettingsApi"

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitProfileForm)} className="w-full font-sans">
      {/* Profile Information Panel */}
      <div className="relative my-10 flex flex-col gap-y-6 rounded-2xl border border-white/[0.08] bg-[#121216]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Top Hairline Accent Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white border-b border-white/[0.08] pb-4">
          Profile Information
        </h2>

        {/* Row 1: Names */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              First Name <sup className="text-white">*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
              {...register("firstName", { required: true })}
              defaultValue={user?.firstName}
            />
            {errors.firstName && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please enter your first name.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Last Name <sup className="text-white">*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
              {...register("lastName", { required: true })}
              defaultValue={user?.lastName}
            />
            {errors.lastName && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please enter your last name.
              </span>
            )}
          </div>
        </div>

        {/* Row 2: DOB & Gender */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="dateOfBirth" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Date of Birth <sup className="text-white">*</sup>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c] cursor-pointer"
              {...register("dateOfBirth", {
                required: {
                  value: true,
                  message: "Please enter your Date of Birth.",
                },
                max: {
                  value: new Date().toISOString().split("T")[0],
                  message: "Date of Birth cannot be in the future.",
                },
              })}
              defaultValue={user?.additionalDetails?.dateOfBirth}
            />
            {errors.dateOfBirth && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="gender" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Gender <sup className="text-white">*</sup>
            </label>
            <select
              name="gender"
              id="gender"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c] cursor-pointer"
              {...register("gender", { required: true })}
              defaultValue={user?.additionalDetails?.gender}
            >
              {genders.map((ele, i) => (
                <option key={i} value={ele} className="bg-[#0B0B0C] text-white">
                  {ele}
                </option>
              ))}
            </select>
            {errors.gender && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please select your gender.
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Contact & About */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="contactNumber" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Contact Number <sup className="text-white">*</sup>
            </label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              placeholder="Enter Contact Number"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
              {...register("contactNumber", {
                required: {
                  value: true,
                  message: "Please enter your Contact Number.",
                },
                maxLength: { value: 12, message: "Invalid Contact Number" },
                minLength: { value: 10, message: "Invalid Contact Number" },
              })}
              defaultValue={user?.additionalDetails?.contactNumber}
            />
            {errors.contactNumber && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                {errors.contactNumber.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="about" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              About <sup className="text-white">*</sup>
            </label>
            <input
              type="text"
              name="about"
              id="about"
              placeholder="Enter Bio Details"
              className="w-full rounded-xl border border-white/[0.08] bg-[#121216] px-4 py-3 text-sm text-white placeholder-[#9A9A9E] outline-none backdrop-blur-md transition-all duration-200 hover:border-white/20 focus:border-white/30 focus:bg-[#16161c]"
              {...register("about", { required: true })}
              defaultValue={user?.additionalDetails?.about}
            />
            {errors.about && (
              <span className="text-xs font-semibold tracking-wide text-rose-400">
                Please enter your About bio.
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
          className="cursor-pointer rounded-xl border border-white/[0.08] bg-[#0B0B0C] px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-[#16161c] hover:text-white active:scale-95"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Save" />
      </div>
    </form>
  )
}
