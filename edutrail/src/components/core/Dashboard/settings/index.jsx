// // import ChangeProfilePicture from "./ProfilePictureSetting"
// // import DeleteAccount from "./DeleteSetting"
// // import EditProfile from "./EditProfile"
// // import UpdatePassword from "./UpdatePassword"

// // export default function Settings() {
// //   return (
// //     <>
// //       <h1 className="mb-14 text-3xl font-medium text-richblack-5">
// //         Edit Profile
// //       </h1>
// //       {/* Change Profile Picture */}
// //       <ChangeProfilePicture />
// //       {/* Profile */}
// //       <EditProfile />
// //       {/* Password */}
// //       <UpdatePassword />
// //       {/* Delete Account */}
// //       <DeleteAccount />
// //     </>
// //   )
// // }

// import ChangeProfilePicture from "./ProfilePictureSetting"
// import DeleteAccount from "./DeleteSetting"
// import EditProfile from "./EditProfile"
// import UpdatePassword from "./UpdatePassword"

// export default function Settings() {
//   return (
//     <div className="w-full space-y-6 p-2 sm:p-4">
//       {/* Page Title */}
//       <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         Edit Settings
//       </h1>

//       {/* Change Profile Picture Module */}
//       <ChangeProfilePicture />

//       {/* Profile Details Module */}
//       <EditProfile />

//       {/* Password Update Module */}
//       <UpdatePassword />

//       {/* Danger Zone: Delete Account */}
//       <DeleteAccount />
//     </div>
//   )
// }



import ChangeProfilePicture from "./ProfilePictureSetting"
import DeleteAccount from "./DeleteSetting"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <div className="w-full space-y-6 p-2 sm:p-4 font-sans">
      {/* Page Title */}
      <h1 className="mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Edit Settings
      </h1>

      {/* Change Profile Picture Module */}
      <ChangeProfilePicture />

      {/* Profile Details Module */}
      <EditProfile />

      {/* Password Update Module */}
      <UpdatePassword />

      {/* Danger Zone: Delete Account */}
      <DeleteAccount />
    </div>
  )
}
