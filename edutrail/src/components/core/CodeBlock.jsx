// import React from "react"
// import CButton from "./Button"
// import { FaArrowAltCircleRight } from "react-icons/fa"
// import { TypeAnimation } from "react-type-animation"

// const CodeBlock = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColor }) => {
//   return (
//     <div className={`flex ${position} my-12 justify-between gap-10 flex-wrap items-center`}>
//       {/* Left Section: Text & Buttons */}
//       <div className="w-full lg:w-[48%] flex flex-col gap-6">
//         <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
//           {heading}
//         </div>
//         <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
//           {subheading}
//         </p>

//         <div className="flex flex-wrap gap-4 mt-2">
//           <CButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
//             <div className="flex gap-2 items-center justify-center">
//               <span>{ctabtn1.btnText}</span>
//               <FaArrowAltCircleRight className="text-base" />
//             </div>
//           </CButton>

//           <CButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
//             <span>{ctabtn2.btnText}</span>
//           </CButton>
//         </div>
//       </div>

//       {/* Right Section: Code Terminal Block */}
//       <div className="relative w-full lg:w-[500px] rounded-3xl border border-white/[0.1] bg-[#0B132B]/90 backdrop-blur-xl shadow-2xl overflow-hidden mt-6 lg:mt-0">
//         {/* Ambient Top Glow Line */}
//         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] z-10" />

//         <div className="flex text-xs sm:text-sm">
//           {/* Line Numbers */}
//           <div className="w-[12%] text-right py-5 px-3 text-cyan-400/50 bg-[#030612]/90 border-r border-white/[0.06] font-mono select-none">
//             {Array.from({ length: 12 }, (_, i) => (
//               <p key={i}>{i + 1}</p>
//             ))}
//           </div>

//           {/* Animated Code */}
//           <div className={`w-[88%] py-5 px-5 font-mono text-xs sm:text-sm ${codeColor || "text-cyan-300"} whitespace-pre-line leading-relaxed`}>
//             <TypeAnimation
//               sequence={[codeblock, 2000, ""]}
//               repeat={Infinity}
//               cursor={true}
//               style={{
//                 whiteSpace: "pre-line",
//                 display: "block",
//               }}
//               omitDeletionAnimation={true}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CodeBlock



import React, { useEffect, useRef, useState } from "react"
import CButton from "./Button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

const CodeBlock = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`group/codeblock relative flex ${position} my-16
        justify-between gap-10 flex-wrap items-center font-sans
        ${visible ? "cb-visible" : "cb-hidden"}`}
    >
      {/* Local animations */}
      <style>{`
        .cb-hidden .cb-reveal {
          opacity: 0;
          transform: translateY(24px);
        }

        .cb-visible .cb-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .cb-reveal {
          transition:
            opacity 800ms cubic-bezier(.22,1,.36,1),
            transform 800ms cubic-bezier(.22,1,.36,1);
        }

        .cb-terminal {
          animation: cb-float 7s ease-in-out infinite;
          transform: translateZ(0);
        }

        .cb-visible .cb-terminal {
          animation:
            cb-terminal-enter 900ms cubic-bezier(.22,1,.36,1) both,
            cb-float 7s 900ms ease-in-out infinite;
        }

        .cb-terminal::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from var(--cb-angle, 0deg),
            transparent 0deg,
            transparent 240deg,
            rgba(167,139,250,.75) 300deg,
            rgba(255,255,255,.22) 330deg,
            transparent 360deg
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: .65;
          animation: cb-border-spin 8s linear infinite;
        }

        .cb-terminal:hover {
          border-color: rgba(167,139,250,.32);
          box-shadow: 0 28px 80px rgba(0,0,0,.55),
            0 0 36px rgba(139,92,246,.08);
        }

        .cb-terminal {
          transition:
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .cb-line {
          opacity: .5;
          transition: opacity 250ms ease, color 250ms ease;
        }

        .cb-terminal:hover .cb-line {
          opacity: .85;
          color: rgba(196,181,253,.75);
        }

        .cb-code {
          text-shadow: 0 0 22px rgba(167,139,250,.07);
        }

        @keyframes cb-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes cb-terminal-enter {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.975);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cb-border-spin {
          to { --cb-angle: 360deg; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cb-reveal,
          .cb-terminal,
          .cb-terminal::before,
          .cb-line {
            animation: none !important;
            transition: none !important;
          }

          .cb-hidden .cb-reveal {
            opacity: 1;
            transform: none;
          }

          .cb-terminal {
            opacity: 1;
            filter: none;
            transform: none;
          }
        }
      `}</style>

      {/* Left: Heading, description and actions */}
      <div className="w-full lg:w-[48%] flex flex-col items-start gap-6">
        <div
          className="cb-reveal text-2xl sm:text-3xl lg:text-4xl
            font-bold tracking-tight leading-tight text-white"
          style={{ transitionDelay: "100ms" }}
        >
          {heading}
        </div>

        <p
          className="cb-reveal text-[#9A9A9E] font-normal text-sm
            sm:text-base leading-relaxed max-w-xl"
          style={{ transitionDelay: "220ms" }}
        >
          {subheading}
        </p>

        <div
          className="cb-reveal flex flex-wrap gap-4 mt-2"
          style={{ transitionDelay: "340ms" }}
        >
          <CButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <span className="flex gap-2 items-center justify-center">
              <span>{ctabtn1.btnText}</span>
              <FaArrowAltCircleRight
                className="text-base transition-transform duration-300
                  group-hover/codeblock:translate-x-0.5"
              />
            </span>
          </CButton>

          <CButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <span>{ctabtn2.btnText}</span>
          </CButton>
        </div>
      </div>

      {/* Right: Animated code terminal */}
      <div
        className="cb-reveal cb-terminal relative w-full lg:w-[500px]
          rounded-2xl border border-white/[0.09] bg-[#101013]/95
          backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          overflow-hidden mt-4 lg:mt-0"
        style={{
          transitionDelay: "180ms",
          "--cb-angle": "0deg",
        }}
      >
        {/* Terminal header */}
        <div className="relative flex items-center justify-between
          px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
          </div>

          <span className="text-[10px] sm:text-xs tracking-[0.18em]
            uppercase text-white/30">
            code preview
          </span>

          <span className="w-10" />
        </div>

        {/* Thin top highlight */}
        <div className="absolute top-0 left-1/4 right-1/4
          h-px bg-gradient-to-r from-transparent via-violet-300/50
          to-transparent pointer-events-none" />

        <div className="flex text-xs sm:text-sm">
          {/* Line numbers */}
          <div className="w-[12%] shrink-0 text-right py-5 px-3
            text-white/30 bg-[#0a0a0d]/90 border-r
            border-white/[0.06] font-mono select-none">
            {Array.from({ length: 12 }, (_, i) => (
              <p className="cb-line leading-relaxed" key={i}>
                {String(i + 1).padStart(2, "0")}
              </p>
            ))}
          </div>

          {/* Typing code */}
          <div
            className={`cb-code min-w-0 w-[88%] py-5 px-4 sm:px-5
              font-mono text-xs sm:text-sm
              ${codeColor || "text-[#b4b4bd]"}
              whitespace-pre-line leading-relaxed overflow-hidden`}
          >
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
                overflowWrap: "anywhere",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="pointer-events-none absolute bottom-0 left-0
          right-0 h-12 bg-gradient-to-t from-violet-500/[0.035]
          to-transparent" />
      </div>
    </div>
  )
}

export default CodeBlock
