export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border border-blue-300 bg-transparent" : "bg-blue-300"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }


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
//       className={`flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition-all duration-200
//         ${
//           outline
//             ? "bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/20"
//             : "bg-blue-400 text-white hover:bg-blue-500"
//         }
//         disabled:opacity-50 disabled:cursor-not-allowed
//         ${customClasses}`}
//     >
//       {children ? (
//         <>
//           <span>{text}</span>
//           {children}
//         </>
//       ) : (
//         text
//       )}
//     </button>
//   );
// }
