// import React from "react"

// export default function IconBtn({
//   text,
//   onclick,
//   children,
//   disabled,
//   outline = false,
//   customClasses = "",
//   type = "button",
// }) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onclick}
//       type={type}
//       className={`relative inline-flex items-center justify-center gap-x-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
//         outline
//           ? "border border-cyan-400/50 bg-cyan-950/30 text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:border-cyan-300 hover:bg-cyan-900/50 hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
//           : "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 font-bold shadow-[0_0_18px_rgba(0,240,255,0.4)] hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(0,240,255,0.7)]"
//       } ${customClasses}`}
//     >
//       {children ? (
//         <>
//           <span className="flex items-center gap-x-1.5">{text}</span>
//           {children}
//         </>
//       ) : (
//         text
//       )}
//     </button>
//   )
// }



import React from "react"

export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses = "",
  type = "button",
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`group relative inline-flex cursor-pointer items-center justify-center gap-x-2 overflow-hidden rounded-xl px-5 py-2.5 font-sans text-sm font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] ${
        outline
          ? "border border-white/[0.10] bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.07] hover:text-white"
          : "border border-transparent bg-white text-[#09090b] shadow-sm hover:-translate-y-0.5 hover:bg-violet-100 hover:shadow-[0_8px_24px_rgba(139,92,246,0.12)]"
      } ${customClasses}`}
    >
      {/* Subtle highlight for the primary button */}
      {!outline && (
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      {children ? (
        <>
          <span className="relative flex items-center gap-x-1.5">
            {text}
          </span>

          <span className="relative inline-flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-0.5">
            {children}
          </span>
        </>
      ) : (
        <span className="relative">{text}</span>
      )}
    </button>
  )
}

