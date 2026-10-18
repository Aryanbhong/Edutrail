// import React from "react";
// import CTButton from "../Button";

// const LearnData = [
//   {
//     order: -1,
//     heading: "Learning Made Simple for",
//     colorText: " Everyone, Everywhere",
//     description:
//       "EduTrail is designed to make learning straightforward and accessible. Whether you're a beginner or someone looking to brush up on concepts, we provide clear explanations and practical content that fits your schedule.",
//     BtnText: "Learn More",
//     BtnLink: "/",
//   },
//   {
//     order: 1,
//     heading: "Beginner-Friendly Curriculum",
//     description:
//       "Our courses are structured with simplicity in mind — easy to follow, jargon-free, and focused on helping you understand the 'why' behind what you learn.",
//   },
//   {
//     order: 2,
//     heading: "Concept-Focused Learning",
//     description:
//       "We focus on delivering strong foundational understanding. Our goal is to help you build real knowledge, not just memorize facts.",
//   },
//   {
//     order: 3,
//     heading: "Consistent Learning Support",
//     description:
//       "We may be small now, but we care deeply about our learners. If you're stuck or confused, we're here to listen and improve based on your feedback.",
//   },
//   {
//     order: 4,
//     heading: "Learn at Your Own Pace",
//     description:
//       "No deadlines. No pressure. Just learning when you want, how you want. EduTrail lets you grow on your own terms.",
//   },
//   {
//     order: 5,
//     heading: "Growing With You",
//     description:
//       "We're continuously adding new topics, improving content, and building features — all based on what you need most as a learner.",
//   },
// ];


// const GridLearning = () => {
//     return (
//       <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
//         {LearnData.map((card, i) => {
//           return (
//             <div
//               key={i}
//               className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
//                 card.order % 2 === 1
//                   ? "bg-richblack-700 h-[294px]"
//                   : card.order % 2 === 0
//                   ? "bg-richblack-800 h-[294px]"
//                   : "bg-transparent"
//               } ${card.order === 3 && "xl:col-start-2"}  `}
//             >
//               {card.order < 0 ? (
//                 <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
//                   <div className="text-4xl font-semibold ">
//                     {card.heading}
//                     <span className="text-blue-400">{card.colorText}</span>
//                   </div>
//                   <p className="text-richblack-300 font-medium">
//                     {card.description}
//                   </p>
  
//                   <div className="w-fit mt-2">
//                     <CTButton active={true} linkto={card.BtnLink}>
//                       {card.BtnText}
//                     </CTButton>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="p-8 flex flex-col gap-8">
//                   <h1 className="text-richblack-5 text-lg">{card.heading}</h1>
  
//                   <p className="text-richblack-300 font-medium">
//                     {card.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
  
//   export default GridLearning;

import React from "react";
import CTButton from "../Button";

const LearnData = [
  {
    order: -1,
    heading: "Learning Made Simple for",
    colorText: " Everyone, Everywhere",
    description:
      "EduTrail is designed to make learning straightforward and accessible. Whether you're a beginner or someone looking to brush up on concepts, we provide clear explanations and practical content that fits your schedule.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Beginner-Friendly Curriculum",
    description:
      "Our courses are structured with simplicity in mind — easy to follow, jargon-free, and focused on helping you understand the 'why' behind what you learn.",
  },
  {
    order: 2,
    heading: "Concept-Focused Learning",
    description:
      "We focus on delivering strong foundational understanding. Our goal is to help you build real knowledge, not just memorize facts.",
  },
  {
    order: 3,
    heading: "Consistent Learning Support",
    description:
      "We may be small now, but we care deeply about our learners. If you're stuck or confused, we're here to listen and improve based on your feedback.",
  },
  {
    order: 4,
    heading: "Learn at Your Own Pace",
    description:
      "No deadlines. No pressure. Just learning when you want, how you want. EduTrail lets you grow on your own terms.",
  },
  {
    order: 5,
    heading: "Growing With You",
    description:
      "We're continuously adding new topics, improving content, and building features — all based on what you need most as a learner.",
  },
];

const GridLearning = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12 gap-4 xl:gap-0">
      {LearnData.map((card, i) => {
        return (
          <div
            key={i}
            className={`relative transition-all duration-300 group ${
              i === 0 ? "xl:col-span-2 xl:h-[294px]" : ""
            } ${
              card.order % 2 === 1
                ? "bg-[#0B132B]/80 border border-cyan-500/20 backdrop-blur-xl h-[294px] rounded-2xl xl:rounded-none"
                : card.order % 2 === 0
                ? "bg-[#030712]/60 border border-cyan-500/10 backdrop-blur-xl h-[294px] rounded-2xl xl:rounded-none"
                : "bg-transparent"
            } ${
              card.order === 3 ? "xl:col-start-2" : ""
            } hover:z-10 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]`}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-4 pb-10 xl:pb-0 pr-4">
                <div className="text-3xl sm:text-4xl font-bold tracking-wide text-white leading-tight">
                  {card.heading}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                    {card.colorText}
                  </span>
                </div>
                <p className="text-slate-300/90 font-medium text-sm leading-relaxed">
                  {card.description}
                </p>

                <div className="w-fit mt-3">
                  <CTButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-6 h-full justify-between">
                {/* Subtle Glow Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400 transition-all" />

                <h1 className="text-white text-lg font-bold tracking-wide group-hover:text-cyan-300 transition-colors">
                  {card.heading}
                </h1>

                <p className="text-cyan-200/70 font-medium text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GridLearning;
