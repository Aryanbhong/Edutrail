// import { useRef, useState } from "react"
// import { AiOutlineCaretDown } from "react-icons/ai"
// import { VscDashboard, VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import useOnClickOutside from "../../../Hooks/useOnClickOutside"
// import { logout } from "../../../services/opreations/authApis"

// const ProfileDropdown=()=> {
//   const { user } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [open, setOpen] = useState(false)
//   const ref = useRef(null)

//   useOnClickOutside(ref, () => setOpen(false))

//   if (!user) return null

//   return (
//     <button className="relative" onClick={() => setOpen(true)}>
//       <div className="flex items-center gap-x-1">
//         <img
//           src={user?.image}
//           alt={`profile-${user?.firstName}`}
//           className="aspect-square w-[30px] rounded-full object-cover"
//         />
//         <AiOutlineCaretDown className="text-sm text-richblack-100" />
//       </div>
//       {open && (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
//           ref={ref}
//         >
//           <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
//             <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
//               <VscDashboard className="text-lg" />
//               Dashboard
//             </div>
//           </Link>
//           <div
//             onClick={() => {
//               dispatch(logout(navigate))
//               setOpen(false)
//             }}
//             className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
//           >
//             <VscSignOut className="text-lg" />
//             Logout
//           </div>
//         </div>
//       )}
//     </button>
//   )
// }

// export default ProfileDropdown

import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../Hooks/useOnClickOutside"
import { logout } from "../../../services/opreations/authApis"

const ProfileDropdown = () => {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <div className="relative" ref={ref}>
      {/* Trigger Button */}
      <button 
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-x-2 p-1 rounded-full border border-cyan-500/30 bg-slate-900/60 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] focus:outline-none"
      >
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[32px] rounded-full object-cover border border-cyan-400/60 shadow-[0_0_8px_rgba(0,240,255,0.3)]"
        />
        <AiOutlineCaretDown className={`text-sm text-cyan-400 transition-transform duration-300 pr-1 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Neon Glass Dropdown Menu */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[125%] right-0 z-[1000] w-48 rounded-2xl border border-cyan-500/30 bg-[#0B132B]/90 p-1.5 shadow-[0_0_30px_rgba(0,240,255,0.2)] backdrop-blur-xl animate-fadeIn"
        >
          {/* Subtle Inner Top Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_8px_#00f0ff]" />

          {/* User Info Header */}
          <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
            <p className="text-xs font-bold text-white truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[11px] text-cyan-300/70 truncate">{user?.email}</p>
          </div>

          {/* Menu Items */}
          <Link 
            to="/dashboard/my-profile" 
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-x-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition-all duration-200 hover:bg-cyan-950/50 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
          >
            <VscDashboard className="text-base text-cyan-400" />
            Dashboard
          </Link>

          <button
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-400 transition-all duration-200 hover:bg-rose-950/30 hover:text-rose-300 hover:shadow-[0_0_10px_rgba(244,63,94,0.2)] cursor-pointer"
          >
            <VscSignOut className="text-base text-rose-400" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown
