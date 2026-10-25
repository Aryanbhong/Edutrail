// import React from "react"
// import Instructorimg from "../../assets/images/Instructor.png"
// import Cbutton from "../core/Button"
// import { FaArrowAltCircleRight } from "react-icons/fa"

// const Instructor = () => {
//   return (
//     <div className="w-full">
//       <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
//         {/* Left Section: Image with Glass Frame */}
//         <div className="w-full lg:w-[48%] flex justify-center">
//           <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
//             <img
//               src={Instructorimg}
//               alt="Instructor"
//               className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* Right Section: Content & CTA */}
//         <div className="w-full lg:w-[52%] flex flex-col gap-5">
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//             Become an <span className="text-cyan-400">Instructor</span>
//           </h2>

//           <p className="font-medium text-sm sm:text-base text-slate-300 leading-relaxed">
//             Instructors from around the world teach aspiring developers on EduTrail. We provide
//             the platform, live feedback tools, and audience to monetize your engineering expertise.
//           </p>

//           <div className="w-fit pt-2">
//             <Cbutton active={true} linkto="/signup">
//               <div className="flex flex-row items-center gap-2">
//                 <span>Start Teaching Today</span>
//                 <FaArrowAltCircleRight className="text-base" />
//               </div>
//             </Cbutton>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Instructor



import React, { useEffect, useRef, useState } from "react"
import Instructorimg from "../../assets/images/Instructor.png"
import Cbutton from "../core/Button"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Instructor = () => {
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
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    event.currentTarget.style.setProperty(
      "--glow-x",
      `${event.clientX - rect.left}px`
    )
    event.currentTarget.style.setProperty(
      "--glow-y",
      `${event.clientY - rect.top}px`
    )
  }

  return (
    <section
      ref={sectionRef}
      className={`instructor-section w-full font-sans ${
        visible ? "instructor-visible" : ""
      }`}
    >
      <style>{`
        .instructor-section {
          --instructor-ease: cubic-bezier(.22,1,.36,1);
        }

        .instructor-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 850ms var(--instructor-ease),
            transform 850ms var(--instructor-ease);
        }

        .instructor-visible .instructor-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .instructor-visible .instructor-copy {
          transition-delay: 140ms;
        }

        .instructor-visible .instructor-description {
          transition-delay: 240ms;
        }

        .instructor-visible .instructor-cta {
          transition-delay: 340ms;
        }

        .instructor-image-frame {
          position: relative;
          isolation: isolate;
          background: #121216;
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 20px 50px rgba(0,0,0,.35);
          transition:
            transform 700ms var(--instructor-ease),
            border-color 400ms ease,
            box-shadow 500ms ease;
        }

        .instructor-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            280px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(196,181,253,.16),
            transparent 70%
          );
          transition: opacity 350ms ease;
        }

        .instructor-image-frame:hover {
          transform: translateY(-5px);
          border-color: rgba(196,181,253,.35);
          box-shadow: 0 28px 65px rgba(0,0,0,.4);
        }

        .instructor-image-frame:hover::after {
          opacity: 1;
        }

        .instructor-image {
          transform: scale(1.01);
          transition: transform 1100ms var(--instructor-ease);
        }

        .instructor-image-frame:hover .instructor-image {
          transform: scale(1.055);
        }

        .instructor-heading-accent {
          display: inline-block;
          transition:
            color 400ms ease,
            transform 500ms var(--instructor-ease);
        }

        .instructor-section:hover .instructor-heading-accent {
          color: #c4b5fd;
          transform: translateX(2px);
        }

        .instructor-arrow {
          transition: transform 400ms var(--instructor-ease);
        }

        .instructor-cta:hover .instructor-arrow {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .instructor-reveal,
          .instructor-image-frame,
          .instructor-image-frame::after,
          .instructor-image,
          .instructor-heading-accent,
          .instructor-arrow {
            transition: none !important;
          }

          .instructor-reveal {
            opacity: 1;
            transform: none;
          }

          .instructor-image-frame:hover,
          .instructor-image-frame:hover .instructor-image {
            transform: none;
          }
        }
      `}</style>

      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Instructor image */}
        <div
          className="instructor-reveal w-full lg:w-[48%] flex justify-center"
        >
          <div
            onPointerMove={handlePointerMove}
            className="instructor-image-frame relative w-full max-w-[540px]
              rounded-2xl overflow-hidden"
          >
            <img
              src={Instructorimg}
              alt="Instructor"
              loading="lazy"
              className="instructor-image block w-full h-auto object-cover"
            />

            {/* Bottom image gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-[2] h-20
                pointer-events-none bg-gradient-to-t
                from-black/20 to-transparent"
            />
          </div>
        </div>

        {/* Text and CTA */}
        <div className="w-full lg:w-[52%] flex flex-col items-start gap-5">
          <h2
            className="instructor-reveal instructor-copy text-3xl
              sm:text-4xl lg:text-5xl font-bold tracking-tight
              leading-tight text-white"
          >
            Become an{" "}
            <span className="instructor-heading-accent font-normal text-zinc-400">
              Instructor
            </span>
          </h2>

          <p
            className="instructor-reveal instructor-description max-w-xl
              font-normal text-sm sm:text-base text-[#9A9A9E]
              leading-relaxed"
          >
            Instructors from around the world teach aspiring developers on
            EduTrail. We provide the platform, live feedback tools, and
            audience to monetize your engineering expertise.
          </p>

          <div className="instructor-reveal instructor-cta w-fit pt-2">
            <Cbutton active={true} linkto="/signup">
              <span className="flex flex-row items-center gap-2">
                <span>Start Teaching Today</span>
                <FaArrowAltCircleRight className="instructor-arrow text-base" />
              </span>
            </Cbutton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructor

