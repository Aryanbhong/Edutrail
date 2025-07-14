// // import React from "react";

// // // Importing React Icons
// // import { HiUsers } from "react-icons/hi";
// // import { ImTree } from "react-icons/im";

// // const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
// //   return (
// //     <div
// //       className={`w-[360px] lg:w-[30%] ${
// //         currentCard === cardData?.heading
// //           ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
// //           : "bg-richblack-800"
// //       }  text-richblack-25 h-[300px] box-border cursor-pointer`}
// //       onClick={() => setCurrentCard(cardData?.heading)}
// //     >
// //       <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
// //         <div
// //           className={` ${
// //             currentCard === cardData?.heading && "text-richblack-800"
// //           } font-semibold text-[20px]`}
// //         >
// //           {cardData?.heading}
// //         </div>

// //         <div className="text-richblack-400">{cardData?.description}</div>
// //       </div>

// //       <div
// //         className={`flex justify-between ${
// //           currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
// //         } px-6 py-3 font-medium`}
// //       >
// //         {/* Level */}
// //         <div className="flex items-center gap-2 text-[16px]">
// //           <HiUsers />
// //           <p>{cardData?.level}</p>
// //         </div>

// //         {/* Flow Chart */}
// //         <div className="flex items-center gap-2 text-[16px]">
// //           <ImTree />
// //           <p>{cardData?.lessionNumber} Lession</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseCard;
import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`w-[360px] lg:w-[30%] h-[300px] rounded-xl cursor-pointer transform 
        transition-all duration-300 ease-in-out
        ${isActive
          ? "bg-gradient-to-tr from-yellow-100 to-white text-richblack-900 scale-[1.02] shadow-[0_0_30px_0_rgba(255,220,100,0.5)]"
          : "bg-[#161616] text-white hover:shadow-[0_0_20px_0_rgba(0,200,255,0.3)] hover:scale-[1.01]"
        }`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top Section */}
      <div className="h-[80%] border-b border-dashed border-gray-700 p-6 flex flex-col gap-3 transition-colors duration-300">
        <h2
          className={`text-xl font-semibold 
          ${isActive ? "text-richblack-900" : "text-blue-300"}`}
        >
          {cardData?.heading}
        </h2>
        <p className={`text-sm leading-relaxed ${isActive ? "text-richblack-700" : "text-gray-400"}`}>
          {cardData?.description}
        </p>
      </div>

      {/* Bottom Section */}
      <div
        className={`flex justify-between px-6 py-3 text-sm font-medium transition-colors duration-300 
        ${isActive ? "text-blue-800" : "text-gray-400"}`}
      >
        {/* Level */}
        <div className="flex items-center gap-2">
          <HiUsers className="text-lg" />
          <p>{cardData?.level}</p>
        </div>

        {/* Lesson Count */}
        <div className="flex items-center gap-2">
          <ImTree className="text-lg" />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
