import React from "react"
import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName] || Icons.VscCircleFilled || Icons.VscCircle || (() => null)
  const location = useLocation()
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const isActive = matchRoute(link.path)

  return (
    <NavLink
      to={link.path}
      className={`relative px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-cyan-950/80 via-cyan-900/40 to-transparent text-cyan-300 shadow-[inset_0_0_15px_rgba(0,240,255,0.15)]"
          : "bg-transparent text-slate-400 hover:bg-cyan-950/20 hover:text-slate-200"
      }`}
    >
      {/* Neon Active Indicator Bar */}
      <span
        className={`absolute left-0 top-0 h-full w-[3px] bg-cyan-400 shadow-[0_0_12px_#00f0ff] transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex items-center gap-x-3">
        <Icon
          className={`text-lg transition-all duration-300 ${
            isActive
              ? "text-cyan-400 drop-shadow-[0_0_8px_#00f0ff]"
              : "text-slate-400 group-hover:text-slate-200"
          }`}
        />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}
