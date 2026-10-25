// import React from "react"
// import * as Icon1 from "react-icons/bi"
// import * as Icon3 from "react-icons/hi2"
// import * as Icon2 from "react-icons/io5"

// const contactDetails = [
//   {
//     icon: "HiChatBubbleLeftRight",
//     heading: "Chat With Us",
//     description: "Our dedicated support team is here to assist.",
//     details: "support@edutrail.dev",
//   },
//   {
//     icon: "BiWorld",
//     heading: "Global Platform",
//     description: "Connect from anywhere across the globe.",
//     details: "EduTrail Learning Network",
//   },
//   {
//     icon: "IoCall",
//     heading: "Direct Line",
//     description: "Monday - Friday from 9am to 6pm IST.",
//     details: "+91 (0) 800-EDUTRAIL",
//   },
// ]

// const ContactDetails = () => {
//   return (
//     <div className="flex flex-col gap-5">
//       {contactDetails.map((ele, i) => {
//         const Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
//         return (
//           <div
//             key={i}
//             className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-950/20"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-950/40 text-cyan-300">
//                 {Icon && <Icon size={18} />}
//               </div>
//               <h3 className="text-base font-bold text-white">
//                 {ele?.heading}
//               </h3>
//             </div>
//             <p className="text-xs text-slate-400 pl-12">{ele?.description}</p>
//             <p className="text-xs font-semibold text-cyan-300 pl-12">{ele?.details}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default ContactDetails


import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat With Us",
    description: "Our dedicated support team is here to assist.",
    details: "support@edutrail.dev",
  },
  {
    icon: "BiWorld",
    heading: "Global Platform",
    description: "Connect from anywhere across the globe.",
    details: "EduTrail Learning Network",
  },
  {
    icon: "IoCall",
    heading: "Direct Line",
    description: "Monday - Friday from 9am to 6pm IST.",
    details: "+91 (0) 800-EDUTRAIL",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-4 font-sans sm:gap-5">
      {contactDetails.map((ele) => {
        const Icon =
          Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]

        return (
          <div
            key={ele.heading}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#15141b] hover:shadow-[0_12px_35px_rgba(109,40,217,0.10)] sm:p-6"
          >
            {/* Subtle accent glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-violet-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-violet-500/[0.12]" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/[0.14] group-hover:text-violet-200">
                {Icon && <Icon size={20} />}
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-sm font-semibold tracking-wide text-zinc-100 transition-colors duration-300 group-hover:text-violet-200 sm:text-base">
                  {ele.heading}
                </h3>

                <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                  {ele.description}
                </p>

                <p className="mt-3 break-words text-xs font-medium leading-5 text-zinc-200 sm:text-sm">
                  {ele.details}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400/50 via-indigo-400/20 to-transparent transition-transform duration-300 group-hover:scale-x-100 sm:left-6 sm:right-6" />
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails

