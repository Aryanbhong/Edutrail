// // import { useEffect, useRef, useState } from "react"
// // import { FiUpload } from "react-icons/fi"
// // import { useDispatch, useSelector } from "react-redux"

// // // import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
// // import IconBtn from "../../../common/IconBtn"
// // import { updateDisplayPicture } from "../../../../services/opreations/SettingsApi"

// // export default function ChangeProfilePicture() {
// //   const { token } = useSelector((state) => state.auth)
// //   const { user } = useSelector((state) => state.profile)
// //   const dispatch = useDispatch()

// //   const [loading, setLoading] = useState(false)
// //   const [imageFile, setImageFile] = useState(null)
// //   const [previewSource, setPreviewSource] = useState(null)

// //   const fileInputRef = useRef(null)

// //   const handleClick = () => {
// //     fileInputRef.current.click()
// //   }

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0]
// //     // console.log(file)
// //     if (file) {
// //       setImageFile(file)
// //       previewFile(file)
// //     }
// //   }

// //   const previewFile = (file) => {
// //     const reader = new FileReader()
// //     reader.readAsDataURL(file)
// //     reader.onloadend = () => {
// //       setPreviewSource(reader.result)
// //     }
// //   }

// //   const handleFileUpload = () => {
// //     try {
// //       // console.log("uploading...")
// //       setLoading(true)
// //       const formData = new FormData()
// //       formData.append("displayPicture", imageFile)
// //       console.log("formdata", formData)
// //       dispatch(updateDisplayPicture(token, formData)).then(() => {
// //         setLoading(false)
// //       })
// //     } catch (error) {
// //       console.log("ERROR MESSAGE - ", error.message)
// //     }
// //   }

// //   useEffect(() => {
// //     if (imageFile) {
// //       previewFile(imageFile)
// //     }
// //   }, [imageFile])
// //   return (
// //     <>
// //       <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
// //         <div className="flex items-center gap-x-4">
// //           <img
// //             src={previewSource || user?.image}
// //             alt={`profile-${user?.firstName}`}
// //             className="aspect-square w-[78px] rounded-full object-cover"
// //           />
// //           <div className="space-y-2">
// //             <p>Change Profile Picture</p>
// //             <div className="flex flex-row gap-3">
// //               <input
// //                 type="file"
// //                 ref={fileInputRef}
// //                 onChange={handleFileChange}
// //                 className="hidden"
// //                 accept="image/png, image/gif, image/jpeg"
// //               />
// //               <button
// //                 onClick={handleClick}
// //                 disabled={loading}
// //                 className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
// //               >
// //                 Select
// //               </button>
// //               <IconBtn
// //                 text={loading ? "Uploading..." : "Upload"}
// //               onclick={handleFileUpload}
// //               >
// //                 {!loading && (
// //                   <FiUpload className="text-lg text-richblack-900" />
// //                 )}
// //               </IconBtn>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// import { useEffect, useRef, useState } from "react"
// import { FiUpload } from "react-icons/fi"
// import { useDispatch, useSelector } from "react-redux"

// import IconBtn from "../../../common/IconBtn"
// import { updateDisplayPicture } from "../../../../services/opreations/SettingsApi"

// export default function ChangeProfilePicture() {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()

//   const [loading, setLoading] = useState(false)
//   const [imageFile, setImageFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(null)

//   const fileInputRef = useRef(null)

//   const handleClick = () => {
//     fileInputRef.current.click()
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setImageFile(file)
//       previewFile(file)
//     }
//   }

//   const previewFile = (file) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSource(reader.result)
//     }
//   }

//   const handleFileUpload = () => {
//     try {
//       setLoading(true)
//       const formData = new FormData()
//       formData.append("displayPicture", imageFile)
//       dispatch(updateDisplayPicture(token, formData)).then(() => {
//         setLoading(false)
//       })
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (imageFile) {
//       previewFile(imageFile)
//     }
//   }, [imageFile])

//   return (
//     <div className="relative flex items-center justify-between rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       <div className="flex items-center gap-x-5">
//         {/* Avatar with Neon Glow Frame */}
//         <div className="relative shrink-0">
//           <img
//             src={previewSource || user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-[78px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
//           />
//         </div>

//         {/* Action Controls */}
//         <div className="space-y-2">
//           <p className="text-sm sm:text-base font-bold text-white tracking-wide">
//             Change Profile Picture
//           </p>

//           <div className="flex flex-wrap items-center gap-3">
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileChange}
//               className="hidden"
//               accept="image/png, image/gif, image/jpeg"
//             />

//             <button
//               onClick={handleClick}
//               disabled={loading}
//               type="button"
//               className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95 disabled:opacity-50"
//             >
//               Select
//             </button>

//             <IconBtn
//               text={loading ? "Uploading..." : "Upload"}
//               onclick={handleFileUpload}
//               disabled={loading}
//             >
//               {!loading && (
//                 <FiUpload className="text-lg text-slate-950" />
//               )}
//             </IconBtn>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import IconBtn from "../../../common/IconBtn"
import { updateDisplayPicture } from "../../../../services/opreations/SettingsApi"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileUpload = () => {
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", imageFile)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])

  return (
    <div className="relative flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#121216]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-sans">
      
      {/* Top Hairline Accent Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      <div className="flex items-center gap-x-5">
        {/* Avatar Frame */}
        <div className="relative shrink-0">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover border border-white/[0.08] bg-[#0B0B0C] shadow-md"
          />
        </div>

        {/* Action Controls */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base font-bold text-white tracking-tight">
            Change Profile Picture
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
            />

            <button
              onClick={handleClick}
              disabled={loading}
              type="button"
              className="cursor-pointer rounded-xl border border-white/[0.08] bg-[#0B0B0C] px-5 py-2 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-[#16161c] hover:text-white active:scale-95 disabled:opacity-50"
            >
              Select
            </button>

            <IconBtn
              text={loading ? "Uploading..." : "Upload"}
              onclick={handleFileUpload}
              disabled={loading}
            >
              {!loading && (
                <FiUpload className="text-lg text-slate-950" />
              )}
            </IconBtn>
          </div>
        </div>
      </div>
    </div>
  )
}
