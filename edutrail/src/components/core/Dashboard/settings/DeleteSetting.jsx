// import { FiTrash2 } from "react-icons/fi"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { deleteProfile } from "../../../../services/opreations/SettingsApi"


// export default function DeleteAccount() {
//   const { token } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   async function handleDeleteAccount() {
//     try {
//       dispatch(deleteProfile(token, navigate))
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//     }
//   }

//   return (
//     <>
//       <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
//         <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
//           <FiTrash2 className="text-3xl text-pink-200" />
//         </div>
//         <div className="flex flex-col space-y-2">
//           <h2 className="text-lg font-semibold text-richblack-5">
//             Delete Account
//           </h2>
//           <div className="w-3/5 text-pink-25">
//             <p>Would you like to delete account?</p>
//             <p>
//               This account may contain Paid Courses. Deleting your account is
//               permanent and will remove all the contain associated with it.
//             </p>
//           </div>
//           <button
//             type="button"
//             className="w-fit cursor-pointer italic text-pink-300"
//             onClick={handleDeleteAccount}
//           >
//             I want to delete my account.
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }


import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteProfile } from "../../../../services/opreations/SettingsApi"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <div className="relative my-10 flex flex-col sm:flex-row gap-5 rounded-3xl border border-rose-500/30 bg-[#12070e]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(244,63,94,0.15)] overflow-hidden">
      
      {/* Ambient Top Warning Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_12px_#f43f5e]" />

      {/* Trash Icon Badge */}
      <div className="flex aspect-square h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-500/40 bg-rose-950/70 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
        <FiTrash2 className="text-2xl drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
      </div>

      {/* Warning Content */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-extrabold tracking-wide text-rose-200">
          Delete Account
        </h2>
        
        <div className="space-y-1 text-xs sm:text-sm font-medium leading-relaxed text-rose-100/80 max-w-2xl">
          <p className="font-bold text-rose-200">Would you like to delete your account?</p>
          <p>
            This account may contain enrolled Paid Courses. Deleting your account is
            permanent and will permanently remove all associated progress and data.
          </p>
        </div>

        {/* Delete Trigger Button */}
        <button
          type="button"
          className="mt-2 w-fit cursor-pointer rounded-xl border border-rose-500/40 bg-rose-950/60 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-rose-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-900/80 hover:text-white hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] active:scale-95"
          onClick={handleDeleteAccount}
        >
          I want to delete my account
        </button>
      </div>
    </div>
  )
}
