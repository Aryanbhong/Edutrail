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
    <div className="flex flex-col gap-5">
      {contactDetails.map((ele, i) => {
        const Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-950/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-950/40 text-cyan-300">
                {Icon && <Icon size={18} />}
              </div>
              <h3 className="text-base font-bold text-white">
                {ele?.heading}
              </h3>
            </div>
            <p className="text-xs text-slate-400 pl-12">{ele?.description}</p>
            <p className="text-xs font-semibold text-cyan-300 pl-12">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails
