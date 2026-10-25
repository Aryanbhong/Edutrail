// import React from "react"
// import { HiUsers } from "react-icons/hi"
// import { ImTree } from "react-icons/im"

// const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
//   const isActive = currentCard === cardData?.heading

//   return (
//     <div
//       className={`w-full sm:w-[340px] lg:w-[30%] h-[300px] rounded-3xl cursor-pointer transform transition-all duration-300 ease-in-out backdrop-blur-xl flex flex-col justify-between overflow-hidden ${
//         isActive
//           ? "bg-gradient-to-br from-cyan-950/80 via-[#0B132B]/90 to-blue-950/70 border-2 border-cyan-400 text-slate-100 scale-[1.03] shadow-[0_0_35px_rgba(0,240,255,0.35)]"
//           : "bg-[#0B132B]/70 border border-white/[0.08] text-slate-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:scale-[1.01]"
//       }`}
//       onClick={() => setCurrentCard(cardData?.heading)}
//     >
//       {/* Top Section */}
//       <div className="h-[75%] border-b border-white/[0.06] p-6 flex flex-col gap-3">
//         <h2
//           className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
//             isActive ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" : "text-white"
//           }`}
//         >
//           {cardData?.heading}
//         </h2>
//         <p
//           className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
//             isActive ? "text-slate-200" : "text-slate-400"
//           }`}
//         >
//           {cardData?.description}
//         </p>
//       </div>

//       {/* Bottom Section */}
//       <div
//         className={`flex justify-between items-center px-6 py-4 text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#030612]/60 ${
//           isActive ? "text-cyan-300" : "text-slate-400"
//         }`}
//       >
//         {/* Level */}
//         <div className="flex items-center gap-2">
//           <HiUsers className="text-base text-cyan-400" />
//           <p>{cardData?.level}</p>
//         </div>

//         {/* Lesson Count */}
//         <div className="flex items-center gap-2">
//           <ImTree className="text-base text-cyan-400" />
//           <p>{cardData?.lessionNumber} Lessons</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseCard



import React from "react"
import { HiUsers } from "react-icons/hi"
import { ImTree } from "react-icons/im"

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading

  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => setCurrentCard(cardData?.heading)}
      className={`course-card group relative w-full sm:w-[340px] lg:w-[30%]
        h-[300px] rounded-2xl text-left cursor-pointer
        flex flex-col justify-between overflow-hidden font-sans
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-violet-400 focus-visible:ring-offset-2
        focus-visible:ring-offset-[#09090b]
        ${
          isActive
            ? "course-card-active text-white"
            : "text-[#9A9A9E]"
        }`}
    >
      <style>{`
        .course-card {
          background: #111114;
          border: 1px solid rgba(255,255,255,.09);
          transition:
            transform 550ms cubic-bezier(.22,1,.36,1),
            border-color 400ms ease,
            background-color 400ms ease,
            box-shadow 500ms ease;
        }

        .course-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            450px circle at var(--card-x, 50%) var(--card-y, 0%),
            rgba(167,139,250,.12),
            transparent 55%
          );
          transition: opacity 400ms ease;
        }

        .course-card:hover {
          transform: translateY(-6px);
          border-color: rgba(167,139,250,.4);
          box-shadow: 0 24px 55px rgba(0,0,0,.3);
        }

        .course-card:hover::before,
        .course-card-active::before {
          opacity: 1;
        }

        .course-card-active {
          background: #17171c;
          border-color: rgba(196,181,253,.55);
          box-shadow: 0 18px 45px rgba(0,0,0,.25);
        }

        .course-card-active:hover {
          box-shadow:
            0 24px 55px rgba(0,0,0,.35),
            0 0 28px rgba(139,92,246,.07);
        }

        .course-card-title {
          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            color 300ms ease;
        }

        .course-card:hover .course-card-title {
          transform: translateX(3px);
        }

        .course-card-description {
          transition: color 350ms ease;
        }

        .course-card-icon {
          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            color 300ms ease;
        }

        .course-card:hover .course-card-icon {
          transform: translateY(-2px) rotate(-6deg);
        }

        .course-card-footer {
          transition: background-color 400ms ease;
        }

        .course-card:hover .course-card-footer {
          background-color: #141418;
        }

        @media (prefers-reduced-motion: reduce) {
          .course-card,
          .course-card::before,
          .course-card-title,
          .course-card-description,
          .course-card-icon,
          .course-card-footer {
            transition: none !important;
          }

          .course-card:hover,
          .course-card:hover .course-card-title,
          .course-card:hover .course-card-icon {
            transform: none;
          }
        }
      `}</style>

      {/* Soft pointer-responsive glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          event.currentTarget.parentElement.style.setProperty(
            "--card-x",
            `${event.clientX - rect.left}px`
          )
          event.currentTarget.parentElement.style.setProperty(
            "--card-y",
            `${event.clientY - rect.top}px`
          )
        }}
      />

      {/* Course information */}
      <div className="relative z-10 flex h-[75%] flex-col gap-3
        border-b border-white/[0.07] p-6">
        <div className="flex items-start justify-between gap-3">
          <h2
            className={`course-card-title text-lg sm:text-xl
              font-bold tracking-tight ${
                isActive ? "text-white" : "text-zinc-200"
              }`}
          >
            {cardData?.heading}
          </h2>

          <span
            aria-hidden="true"
            className={`mt-1 h-2 w-2 shrink-0 rounded-full
              transition-all duration-300 ${
                isActive
                  ? "bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.65)]"
                  : "bg-white/20 group-hover:bg-violet-300/70"
              }`}
          />
        </div>

        <p
          className={`course-card-description text-xs sm:text-sm
            leading-relaxed ${
              isActive ? "text-zinc-300" : "text-[#9A9A9E]"
            }`}
        >
          {cardData?.description}
        </p>
      </div>

      {/* Course metadata */}
      <div
        className={`course-card-footer relative z-10 flex
          items-center justify-between gap-3 bg-[#0d0d10]
          px-6 py-4 text-xs sm:text-sm font-medium ${
            isActive ? "text-white" : "text-[#9A9A9E]"
          }`}
      >
        <div className="flex min-w-0 items-center gap-2">
          <HiUsers
            aria-hidden="true"
            className={`course-card-icon shrink-0 text-base ${
              isActive ? "text-violet-300" : "text-zinc-400"
            }`}
          />
          <span>{cardData?.level}</span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ImTree
            aria-hidden="true"
            className={`course-card-icon text-base ${
              isActive ? "text-violet-300" : "text-zinc-400"
            }`}
          />
          <span>{cardData?.lessionNumber} Lessons</span>
        </div>
      </div>
    </button>
  )
}

export default CourseCard

