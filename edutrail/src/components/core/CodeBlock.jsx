import React from "react"
import CButton from "./Button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

const CodeBlock = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColor }) => {
  return (
    <div className={`flex ${position} my-12 justify-between gap-10 flex-wrap items-center`}>
      {/* Left Section: Text & Buttons */}
      <div className="w-full lg:w-[48%] flex flex-col gap-6">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
          {heading}
        </div>
        <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <CButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center justify-center">
              <span>{ctabtn1.btnText}</span>
              <FaArrowAltCircleRight className="text-base" />
            </div>
          </CButton>

          <CButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <span>{ctabtn2.btnText}</span>
          </CButton>
        </div>
      </div>

      {/* Right Section: Code Terminal Block */}
      <div className="relative w-full lg:w-[500px] rounded-3xl border border-white/[0.1] bg-[#0B132B]/90 backdrop-blur-xl shadow-2xl overflow-hidden mt-6 lg:mt-0">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] z-10" />

        <div className="flex text-xs sm:text-sm">
          {/* Line Numbers */}
          <div className="w-[12%] text-right py-5 px-3 text-cyan-400/50 bg-[#030612]/90 border-r border-white/[0.06] font-mono select-none">
            {Array.from({ length: 12 }, (_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>

          {/* Animated Code */}
          <div className={`w-[88%] py-5 px-5 font-mono text-xs sm:text-sm ${codeColor || "text-cyan-300"} whitespace-pre-line leading-relaxed`}>
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
