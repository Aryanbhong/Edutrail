// import React, { useState } from "react";
// import { VscSignOut } from "react-icons/vsc";
// import { sidebarLinks } from "../../../data/dashboard";
// import {logout} from "../../../services/opreations/authApis"
// import { useDispatch, useSelector } from "react-redux";
// import SidebarLink from "./SidebarLink";
// import { useNavigate } from "react-router-dom";
// import ConfirmationModal from "../../common/ConfirmationModal";
 
// const Sidebar =() =>{
//     const {user, loading:profileLoading} = useSelector((state) => state.profile);
//     const {loading: authLoading} = useSelector((state)=>state.auth)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [confirmationModal, setConfirmationModal] = useState(null);
    
//     if(profileLoading|| authLoading){
//         return (
//             <div className="mt-10">
//                 Loading...
//             </div>
//         )
//     }
//     return(
  

//     <div>
//       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
//         <div className="flex flex-col">
//           {sidebarLinks.map((link) => {
//             if (link.type && user?.accountType !== link.type) return null
//             return (
//               <SidebarLink key={link.id} link={link} iconName={link.icon} />
//             )
//           })}
//         </div>
//         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
//         <div className="flex flex-col">
//           <SidebarLink
//             link={{ name: "Settings", path: "/dashboard/settings" }}
//             iconName="VscSettingsGear"
//           />
//           <button
//             onClick={() =>
//               setConfirmationModal({
//                 text1: "Are you sure?",
//                 text2: "You will be logged out of your account.",
//                 btn1Text: "Logout",
//                 btn2Text: "Cancel",
//                 btn1Handler: () => dispatch(logout(navigate)),
//                 btn2Handler: () => setConfirmationModal(null),
//               })
//             }
//             className="px-8 py-2 text-sm font-medium text-richblack-300"
//           >
//             <div className="flex items-center gap-x-2">
//               <VscSignOut className="text-lg" />
//               <span>Logout</span>
//             </div>
//           </button>
//         </div>
//       </div>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </div>
//     )
// }

// export default  Sidebar


import React, { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { sidebarLinks } from "../../../data/dashboard"
import { logout } from "../../../services/opreations/authApis"
import { useDispatch, useSelector } from "react-redux"
import SidebarLink from "./SidebarLink"
import { useNavigate } from "react-router-dom"
import ConfirmationModal from "../../common/ConfirmationModal"

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [confirmationModal, setConfirmationModal] = useState(null)

  if (profileLoading || authLoading) {
    return (
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] items-center justify-center border-r border-cyan-500/20 bg-[#0B132B]/90 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
          <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r border-cyan-500/20 bg-[#0B132B]/90 py-10 backdrop-blur-xl shadow-[5px_0_30px_rgba(0,0,0,0.6)]">
        
        {/* Ambient Right Glow Edge */}
        <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

        {/* Dynamic Sidebar Links */}
        <div className="flex flex-col gap-y-1">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>

        {/* Neon Divider Line */}
        <div className="mx-auto my-6 h-[1px] w-10/12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        {/* Static Settings & Logout Links */}
        <div className="flex flex-col gap-y-1">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="group relative px-8 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 cursor-pointer"
          >
            <div className="flex items-center gap-x-3">
              <VscSignOut className="text-lg text-slate-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#00f0ff] transition-all" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default Sidebar
