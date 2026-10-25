// // import React from 'react'
// // import { useSelector } from 'react-redux'
// // import { useNavigate } from 'react-router-dom'
// // import IconBtn from '../../common/IconBtn'
// // import { LiaEdit } from "react-icons/lia";

// // const MyProfile = () => {
// //   const {user} = useSelector((state) => state.profile)
// //   const navigate = useNavigate();
// //   return (
// //    <div className=''>
    
// //       <h1 className="mb-14 text-3xl font-medium text-richblack-5">
// //         My Profile
// //         </h1>
   
// //     {/* section1 */}
// //     <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
// //       <div className="flex items-center gap-x-4">
// //          <img 
// //           src={user?.image}
// //          alt={`profile-${user?.firstName}`}
// //          className='aspect-square w-[78px] rounded-full object-cover'
// //          />
// //          <div  className="space-y-1" >
// //           <p className="text-lg font-semibold text-richblack-5">
// //             {user?.firstName + " " + user?.lastName}
// //             </p>
// //           <p  className="text-sm text-richblack-300">
// //             {user?.email}
// //             </p>
// //          </div>
// //       </div>
// //       <IconBtn 
// //         text="Edit"
// //         children={<LiaEdit/>}
// //         onclick={()=>{
// //           navigate("/dashboard/settings")
// //         }}
// //         />
// //     </div>
   
// //     {/* section-2 */}
// //     <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
// //       <div className="flex w-full items-center justify-between">
// //         <p className="text-lg font-semibold text-richblack-5">About</p>
// //         <IconBtn 
// //         text="Edit"
// //         children={<LiaEdit/>}
// //         onclick={()=>{
// //           navigate("/dashboard/settings")
// //         }}
// //         />
// //        </div>
// //        <p
// //           className={`${
// //             user?.additionalDetails?.about
// //               ? "text-richblack-5"
// //               : "text-richblack-400"
// //           } text-sm font-medium`}
// //         >
// //           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
// //         </p>
// //        </div>

// //     {/* section-3 */}
// //     <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
// //     <div className="flex w-full items-center justify-between">
// //     <p className="text-lg font-semibold text-richblack-5">
// //             Personal Details
// //           </p>
// //       <IconBtn 
// //         text="Edit"
// //         children={<LiaEdit/>}
// //         onclick={()=>{
// //           navigate("/dashboard/settings")
// //         }}
// //         />
// //      </div>

// //      <div  className="flex max-w-[500px] justify-between">
// //        <div className="flex flex-col gap-y-5">
// //         <div>
// //          <p  className="mb-2 text-sm text-richblack-600">First Name</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
// //        </div>
// //        <div>
// //          <p className="mb-2 text-sm text-richblack-600">Email</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.email}</p>
// //        </div>
// //        <div>
// //          <p className="mb-2 text-sm text-richblack-600">Gender</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
// //        </div>
// //        <div className="flex flex-col gap-y-5">
// //          <p className="mb-2 text-sm text-richblack-600">Last Name</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.lastName}</p>
// //        </div>
// //        <div>
// //          <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
// //        </div>
// //        <div>
// //          <p className="mb-2 text-sm text-richblack-600">Date of Birth</p>
// //          <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
// //        </div>
// //      </div>
// // </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default MyProfile


// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import IconBtn from '../../common/IconBtn'
// import { LiaEdit } from "react-icons/lia"

// const MyProfile = () => {
//   const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate()

//   return (
//     <div className="w-full space-y-6 p-2 sm:p-4">
//       {/* Page Title */}
//       <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         My Profile
//       </h1>

//       {/* Section 1: Header / Avatar Card */}
//       <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         <div className="flex items-center gap-x-5">
//           <div className="relative shrink-0">
//             <img
//               src={user?.image}
//               alt={`profile-${user?.firstName}`}
//               className="aspect-square w-[78px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
//             />
//           </div>
//           <div className="space-y-1">
//             <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
//               {user?.firstName + " " + user?.lastName}
//             </p>
//             <p className="text-xs sm:text-sm font-medium text-cyan-300/70">
//               {user?.email}
//             </p>
//           </div>
//         </div>

//         <IconBtn
//           text="Edit"
//           onclick={() => {
//             navigate("/dashboard/settings")
//           }}
//         >
//           <LiaEdit className="text-lg text-slate-950" />
//         </IconBtn>
//       </div>

//       {/* Section 2: About Bio Card */}
//       <div className="relative flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         <div className="flex w-full items-center justify-between border-b border-slate-800/80 pb-4">
//           <p className="text-lg font-bold text-white tracking-wide">About</p>
//           <IconBtn
//             text="Edit"
//             onclick={() => {
//               navigate("/dashboard/settings")
//             }}
//           >
//             <LiaEdit className="text-lg text-slate-950" />
//           </IconBtn>
//         </div>

//         <p
//           className={`${
//             user?.additionalDetails?.about
//               ? "text-slate-200"
//               : "text-slate-500 italic"
//           } text-sm font-medium leading-relaxed`}
//         >
//           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//         </p>
//       </div>

//       {/* Section 3: Personal Details Card */}
//       <div className="relative flex flex-col gap-y-6 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//         <div className="flex w-full items-center justify-between border-b border-slate-800/80 pb-4">
//           <p className="text-lg font-bold text-white tracking-wide">
//             Personal Details
//           </p>
//           <IconBtn
//             text="Edit"
//             onclick={() => {
//               navigate("/dashboard/settings")
//             }}
//           >
//             <LiaEdit className="text-lg text-slate-950" />
//           </IconBtn>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">First Name</p>
//             <p className="text-sm font-semibold text-slate-100">{user?.firstName}</p>
//           </div>

//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last Name</p>
//             <p className="text-sm font-semibold text-slate-100">{user?.lastName}</p>
//           </div>

//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
//             <p className="text-sm font-semibold text-slate-100">{user?.email}</p>
//           </div>

//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone Number</p>
//             <p className="text-sm font-semibold text-slate-100">
//               {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
//             </p>
//           </div>

//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Gender</p>
//             <p className="text-sm font-semibold text-slate-100">
//               {user?.additionalDetails?.gender ?? "Add Gender"}
//             </p>
//           </div>

//           <div className="space-y-1">
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Date of Birth</p>
//             <p className="text-sm font-semibold text-slate-100">
//               {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MyProfile




import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { LiaEdit } from "react-icons/lia";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiUsers,
  FiInfo,
} from "react-icons/fi";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/dashboard/settings");
  };

  const details = [
    {
      label: "First Name",
      value: user?.firstName,
      icon: FiUser,
      fallback: "Add First Name",
    },
    {
      label: "Last Name",
      value: user?.lastName,
      icon: FiUser,
      fallback: "Add Last Name",
    },
    {
      label: "Email Address",
      value: user?.email,
      icon: FiMail,
      fallback: "Add Email",
    },
    {
      label: "Phone Number",
      value: user?.additionalDetails?.contactNumber,
      icon: FiPhone,
      fallback: "Add Contact Number",
    },
    {
      label: "Gender",
      value: user?.additionalDetails?.gender,
      icon: FiUsers,
      fallback: "Add Gender",
    },
    {
      label: "Date of Birth",
      value: user?.additionalDetails?.dateOfBirth,
      icon: FiCalendar,
      fallback: "Add Date of Birth",
    },
  ];

  const DetailItem = ({ label, value, icon: Icon, fallback }) => (
    <div className="group flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4 transition-all duration-200 hover:border-violet-400/20 hover:bg-violet-500/[0.03]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-400 transition-colors group-hover:border-violet-400/20 group-hover:text-violet-300">
        <Icon size={17} />
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </p>
        <p
          className={`mt-1.5 break-words text-sm font-medium ${
            value ? "text-zinc-200" : "text-zinc-500"
          }`}
        >
          {value || fallback}
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative isolate min-h-screen w-full space-y-7 overflow-hidden p-3 font-sans text-zinc-100 sm:p-5 lg:p-7">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/[0.08] blur-[140px]" />
        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-indigo-600/[0.07] blur-[150px]" />
      </div>

      {/* Page heading */}
      <header className="space-y-3 border-b border-white/[0.08] pb-6">
        <div className="flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Account Overview
          </span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          My Profile<span className="text-violet-300">.</span>
        </h1>

        <p className="max-w-xl text-sm leading-6 text-zinc-400">
          Manage your personal information and keep your account details up to
          date.
        </p>
      </header>

      {/* Profile header card */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={`profile-${user?.firstName || "user"}`}
                  className="h-[76px] w-[76px] rounded-2xl border border-violet-400/20 bg-[#09090b] object-cover shadow-lg shadow-violet-950/20 sm:h-[88px] sm:w-[88px]"
                />
              ) : (
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300 sm:h-[88px] sm:w-[88px]">
                  <FiUser size={32} />
                </div>
              )}

              <span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full border-[3px] border-[#111114] bg-emerald-400" />
            </div>

            <div className="min-w-0 space-y-2">
              <p className="break-words text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {[user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
                  "Your Profile"}
              </p>

              <div className="flex min-w-0 items-center gap-2 text-sm text-zinc-400">
                <FiMail className="shrink-0 text-violet-300" size={14} />
                <span className="break-all">{user?.email || "No email added"}</span>
              </div>

              <p className="text-xs text-zinc-500">
                Personal account
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <IconBtn text="Edit Profile" onclick={handleEdit}>
              <LiaEdit className="text-lg text-slate-950" />
            </IconBtn>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-7">
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

        <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
              <FiInfo size={18} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-white">About</h2>
              <p className="mt-0.5 text-xs text-zinc-500">
                A little about you
              </p>
            </div>
          </div>

          <IconBtn text="Edit" onclick={handleEdit}>
            <LiaEdit className="text-lg text-slate-950" />
          </IconBtn>
        </div>

        <p
          className={`mt-5 whitespace-pre-wrap text-sm leading-7 ${
            user?.additionalDetails?.about
              ? "text-zinc-300"
              : "italic text-zinc-500"
          }`}
        >
          {user?.additionalDetails?.about || "Write something about yourself."}
        </p>
      </section>

      {/* Personal details section */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-7">
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

        <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-white">
              Personal Details
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Your basic account information
            </p>
          </div>

          <IconBtn text="Edit Details" onclick={handleEdit}>
            <LiaEdit className="text-lg text-slate-950" />
          </IconBtn>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {details.map((detail) => (
            <DetailItem
              key={detail.label}
              label={detail.label}
              value={detail.value}
              icon={detail.icon}
              fallback={detail.fallback}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
