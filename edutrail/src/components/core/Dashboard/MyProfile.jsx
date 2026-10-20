// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import IconBtn from '../../common/IconBtn'
// import { LiaEdit } from "react-icons/lia";

// const MyProfile = () => {
//   const {user} = useSelector((state) => state.profile)
//   const navigate = useNavigate();
//   return (
//    <div className=''>
    
//       <h1 className="mb-14 text-3xl font-medium text-richblack-5">
//         My Profile
//         </h1>
   
//     {/* section1 */}
//     <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//       <div className="flex items-center gap-x-4">
//          <img 
//           src={user?.image}
//          alt={`profile-${user?.firstName}`}
//          className='aspect-square w-[78px] rounded-full object-cover'
//          />
//          <div  className="space-y-1" >
//           <p className="text-lg font-semibold text-richblack-5">
//             {user?.firstName + " " + user?.lastName}
//             </p>
//           <p  className="text-sm text-richblack-300">
//             {user?.email}
//             </p>
//          </div>
//       </div>
//       <IconBtn 
//         text="Edit"
//         children={<LiaEdit/>}
//         onclick={()=>{
//           navigate("/dashboard/settings")
//         }}
//         />
//     </div>
   
//     {/* section-2 */}
//     <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//       <div className="flex w-full items-center justify-between">
//         <p className="text-lg font-semibold text-richblack-5">About</p>
//         <IconBtn 
//         text="Edit"
//         children={<LiaEdit/>}
//         onclick={()=>{
//           navigate("/dashboard/settings")
//         }}
//         />
//        </div>
//        <p
//           className={`${
//             user?.additionalDetails?.about
//               ? "text-richblack-5"
//               : "text-richblack-400"
//           } text-sm font-medium`}
//         >
//           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//         </p>
//        </div>

//     {/* section-3 */}
//     <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//     <div className="flex w-full items-center justify-between">
//     <p className="text-lg font-semibold text-richblack-5">
//             Personal Details
//           </p>
//       <IconBtn 
//         text="Edit"
//         children={<LiaEdit/>}
//         onclick={()=>{
//           navigate("/dashboard/settings")
//         }}
//         />
//      </div>

//      <div  className="flex max-w-[500px] justify-between">
//        <div className="flex flex-col gap-y-5">
//         <div>
//          <p  className="mb-2 text-sm text-richblack-600">First Name</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
//        </div>
//        <div>
//          <p className="mb-2 text-sm text-richblack-600">Email</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.email}</p>
//        </div>
//        <div>
//          <p className="mb-2 text-sm text-richblack-600">Gender</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
//        </div>
//        <div className="flex flex-col gap-y-5">
//          <p className="mb-2 text-sm text-richblack-600">Last Name</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.lastName}</p>
//        </div>
//        <div>
//          <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
//        </div>
//        <div>
//          <p className="mb-2 text-sm text-richblack-600">Date of Birth</p>
//          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
//        </div>
//      </div>
// </div>
//     </div>
//     </div>
//   )
// }

// export default MyProfile


import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { LiaEdit } from "react-icons/lia"

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Page Title */}
      <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        My Profile
      </h1>

      {/* Section 1: Header / Avatar Card */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <div className="flex items-center gap-x-5">
          <div className="relative shrink-0">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            />
          </div>
          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-xs sm:text-sm font-medium text-cyan-300/70">
              {user?.email}
            </p>
          </div>
        </div>

        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <LiaEdit className="text-lg text-slate-950" />
        </IconBtn>
      </div>

      {/* Section 2: About Bio Card */}
      <div className="relative flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <div className="flex w-full items-center justify-between border-b border-slate-800/80 pb-4">
          <p className="text-lg font-bold text-white tracking-wide">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <LiaEdit className="text-lg text-slate-950" />
          </IconBtn>
        </div>

        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-slate-200"
              : "text-slate-500 italic"
          } text-sm font-medium leading-relaxed`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Section 3: Personal Details Card */}
      <div className="relative flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        <div className="flex w-full items-center justify-between border-b border-slate-800/80 pb-4">
          <p className="text-lg font-bold text-white tracking-wide">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <LiaEdit className="text-lg text-slate-950" />
          </IconBtn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">First Name</p>
            <p className="text-sm font-semibold text-slate-100">{user?.firstName}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last Name</p>
            <p className="text-sm font-semibold text-slate-100">{user?.lastName}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
            <p className="text-sm font-semibold text-slate-100">{user?.email}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone Number</p>
            <p className="text-sm font-semibold text-slate-100">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Gender</p>
            <p className="text-sm font-semibold text-slate-100">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Date of Birth</p>
            <p className="text-sm font-semibold text-slate-100">
              {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
