// import React from "react"
// import * as Icons from "react-icons/vsc"
// import { useDispatch } from "react-redux"
// import { NavLink, matchPath, useLocation } from "react-router-dom"

// export default function SidebarLink({ link, iconName }) {
//   const Icon = Icons[iconName] || Icons.VscCircleFilled || Icons.VscCircle || (() => null)
//   const location = useLocation()
//   const dispatch = useDispatch()

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   const isActive = matchRoute(link.path)

//   return (
//     <NavLink
//       to={link.path}
//       className={`relative px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
//         isActive
//           ? "bg-gradient-to-r from-cyan-950/80 via-cyan-900/40 to-transparent text-cyan-300 shadow-[inset_0_0_15px_rgba(0,240,255,0.15)]"
//           : "bg-transparent text-slate-400 hover:bg-cyan-950/20 hover:text-slate-200"
//       }`}
//     >
//       {/* Neon Active Indicator Bar */}
//       <span
//         className={`absolute left-0 top-0 h-full w-[3px] bg-cyan-400 shadow-[0_0_12px_#00f0ff] transition-opacity duration-300 ${
//           isActive ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       <div className="flex items-center gap-x-3">
//         <Icon
//           className={`text-lg transition-all duration-300 ${
//             isActive
//               ? "text-cyan-400 drop-shadow-[0_0_8px_#00f0ff]"
//               : "text-slate-400 group-hover:text-slate-200"
//           }`}
//         />
//         <span>{link.name}</span>
//       </div>
//     </NavLink>
//   )
// }



import React from "react";
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";

export default function SidebarLink({ link, iconName }) {
  const Icon =
    Icons[iconName] ||
    Icons.VscCircleFilled ||
    Icons.VscCircle ||
    (() => null);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route, end: true }, location.pathname);
  };

  const isActive = Boolean(matchRoute(link.path));

  return (
    <NavLink
      to={link.path}
      className={`group relative mx-3 flex items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 ${
        isActive
          ? "border-violet-400/15 bg-violet-500/[0.10] text-white"
          : "border-transparent bg-transparent text-zinc-400 hover:border-white/[0.06] hover:bg-white/[0.035] hover:text-zinc-100"
      }`}
    >
      {/* Active indicator */}
      <span
        className={`absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-violet-400 transition-all duration-200 ${
          isActive
            ? "opacity-100 shadow-[0_0_12px_rgba(167,139,250,0.45)]"
            : "opacity-0"
        }`}
      />

      {/* Icon container */}
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-violet-400/[0.12] text-violet-300"
            : "bg-white/[0.025] text-zinc-500 group-hover:bg-white/[0.05] group-hover:text-zinc-200"
        }`}
      >
        <Icon size={18} />
      </span>

      {/* Link label */}
      <span className="min-w-0 flex-1 truncate">{link.name}</span>

      {/* Active status indicator */}
      {isActive && (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(167,139,250,0.45)]" />
      )}
    </NavLink>
  );
}
