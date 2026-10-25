// // import React, { useState } from "react";
// // import { VscSignOut } from "react-icons/vsc";
// // import { sidebarLinks } from "../../../data/dashboard";
// // import {logout} from "../../../services/opreations/authApis"
// // import { useDispatch, useSelector } from "react-redux";
// // import SidebarLink from "./SidebarLink";
// // import { useNavigate } from "react-router-dom";
// // import ConfirmationModal from "../../common/ConfirmationModal";
 
// // const Sidebar =() =>{
// //     const {user, loading:profileLoading} = useSelector((state) => state.profile);
// //     const {loading: authLoading} = useSelector((state)=>state.auth)
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const [confirmationModal, setConfirmationModal] = useState(null);
    
// //     if(profileLoading|| authLoading){
// //         return (
// //             <div className="mt-10">
// //                 Loading...
// //             </div>
// //         )
// //     }
// //     return(
  

// //     <div>
// //       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
// //         <div className="flex flex-col">
// //           {sidebarLinks.map((link) => {
// //             if (link.type && user?.accountType !== link.type) return null
// //             return (
// //               <SidebarLink key={link.id} link={link} iconName={link.icon} />
// //             )
// //           })}
// //         </div>
// //         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
// //         <div className="flex flex-col">
// //           <SidebarLink
// //             link={{ name: "Settings", path: "/dashboard/settings" }}
// //             iconName="VscSettingsGear"
// //           />
// //           <button
// //             onClick={() =>
// //               setConfirmationModal({
// //                 text1: "Are you sure?",
// //                 text2: "You will be logged out of your account.",
// //                 btn1Text: "Logout",
// //                 btn2Text: "Cancel",
// //                 btn1Handler: () => dispatch(logout(navigate)),
// //                 btn2Handler: () => setConfirmationModal(null),
// //               })
// //             }
// //             className="px-8 py-2 text-sm font-medium text-richblack-300"
// //           >
// //             <div className="flex items-center gap-x-2">
// //               <VscSignOut className="text-lg" />
// //               <span>Logout</span>
// //             </div>
// //           </button>
// //         </div>
// //       </div>
// //       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
// //     </div>
// //     )
// // }

// // export default  Sidebar


// import React, { useState } from "react"
// import { VscSignOut } from "react-icons/vsc"
// import { sidebarLinks } from "../../../data/dashboard"
// import { logout } from "../../../services/opreations/authApis"
// import { useDispatch, useSelector } from "react-redux"
// import SidebarLink from "./SidebarLink"
// import { useNavigate } from "react-router-dom"
// import ConfirmationModal from "../../common/ConfirmationModal"

// const Sidebar = () => {
//   const { user, loading: profileLoading } = useSelector((state) => state.profile)
//   const { loading: authLoading } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [confirmationModal, setConfirmationModal] = useState(null)

//   if (profileLoading || authLoading) {
//     return (
//       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] items-center justify-center border-r border-cyan-500/20 bg-[#0B132B]/90 backdrop-blur-xl">
//         <div className="flex flex-col items-center gap-3">
//           <div className="h-10 w-10 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
//           <p className="text-xs font-semibold tracking-wider text-cyan-300 animate-pulse">
//             Loading...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="relative flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r border-cyan-500/20 bg-[#0B132B]/90 py-10 backdrop-blur-xl shadow-[5px_0_30px_rgba(0,0,0,0.6)]">
        
//         {/* Ambient Right Glow Edge */}
//         <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

//         {/* Dynamic Sidebar Links */}
//         <div className="flex flex-col gap-y-1">
//           {sidebarLinks.map((link) => {
//             if (link.type && user?.accountType !== link.type) return null
//             return (
//               <SidebarLink key={link.id} link={link} iconName={link.icon} />
//             )
//           })}
//         </div>

//         {/* Neon Divider Line */}
//         <div className="mx-auto my-6 h-[1px] w-10/12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

//         {/* Static Settings & Logout Links */}
//         <div className="flex flex-col gap-y-1">
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
//             className="group relative px-8 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 cursor-pointer"
//           >
//             <div className="flex items-center gap-x-3">
//               <VscSignOut className="text-lg text-slate-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#00f0ff] transition-all" />
//               <span>Logout</span>
//             </div>
//           </button>
//         </div>
//       </div>

//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

// export default Sidebar




import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { FiLogOut, FiSettings, FiShield } from "react-icons/fi";
import { sidebarLinks } from "../../../data/dashboard";
import { logout } from "../../../services/opreations/authApis";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return (
      <aside className="flex h-[calc(100vh-3.5rem)] min-w-[220px] items-center justify-center border-r border-white/[0.08] bg-[#0c0c0f] font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-violet-400/15" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400" />
            <FiShield className="text-violet-300" size={17} />
          </div>

          <div className="text-center">
            <p className="text-xs font-medium text-zinc-300">
              Loading workspace
            </p>
            <p className="mt-1 text-[11px] text-zinc-500">
              Please wait...
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <>
      <aside className="relative flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col overflow-y-auto border-r border-white/[0.07] bg-[#0c0c0f] py-6 font-sans">
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute left-0 top-10 h-48 w-full bg-violet-600/[0.04] blur-[70px]" />

        {/* Sidebar heading */}
        <div className="relative mb-6 px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Workspace
          </p>
          <p className="mt-1.5 text-xs text-zinc-600">
            Manage your learning
          </p>
        </div>

        {/* Dynamic navigation */}
        <nav className="relative flex flex-col gap-y-1">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) {
              return null;
            }

            return (
              <SidebarLink
                key={link.id}
                link={link}
                iconName={link.icon}
              />
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-5 my-6 h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

        {/* Account actions */}
        <div className="relative px-6 pb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Account
          </p>
        </div>

        <div className="relative flex flex-col gap-y-1">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button
            type="button"
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
            className="group relative mx-3 flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-red-400/10 hover:bg-red-500/[0.06] hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-zinc-500 transition-colors group-hover:bg-red-500/10 group-hover:text-red-300">
              <VscSignOut size={19} />
            </span>

            <span>Logout</span>

            <FiLogOut
              size={14}
              className="ml-auto opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70"
            />
          </button>
        </div>

        {/* Bottom account card */}
        <div className="relative mt-auto px-4 pt-8">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <div className="flex items-center gap-3">
              {user?.image ? (
                <img
                  src={user.image}
                  alt=""
                  className="h-9 w-9 shrink-0 rounded-xl border border-white/[0.08] object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-sm font-semibold text-violet-300">
                  {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-zinc-200">
                  {[user?.firstName, user?.lastName]
                    .filter(Boolean)
                    .join(" ") || "Your Account"}
                </p>
                <p className="mt-1 truncate text-[10px] capitalize text-zinc-500">
                  {user?.accountType || "Student"}
                </p>
              </div>

              <FiSettings size={15} className="shrink-0 text-zinc-600" />
            </div>
          </div>
        </div>
      </aside>

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  );
};

export default Sidebar;
