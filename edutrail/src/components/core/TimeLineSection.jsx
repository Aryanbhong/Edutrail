// import React from "react";
// import Logo1 from "../../assets/images/logo1.png";
// import Logo2 from "../../assets/images/logo2.png";
// import Logo3 from "../../assets/images/logo3.png";
// import Logo4 from "../../assets/images/logo4.png";
// import timelineImg from "../../assets/images/TimelineImage.png";

// const timeLine = [
//     {
//         Logo:Logo1,
//         heading:"Leadership",
//         Description:"Fully committed to the success company"
//     },
//     {
//         Logo:Logo2,
//         heading:"Responsibility",
//         Description: "Students will always be our top priority"
//     },
//     {
//         Logo:Logo3,
//         heading:"Flexibility",
//         Description: "The ability to switch is an important skills",
//     },
//     {
//         Logo:Logo4,
//         heading:"Solve the problem",
//         Description: "Code your way to a solution",
//     },
// ]
// const TimeLineSection = ()=>{
//     return(
//         <div>

//             <div className="flex flex-row gap-15 items-center">
              
//               <div className="w-[45%] flex flex-col gap-5">
//                 {
//                     timeLine.map((element , index)=>{
//                         return(
//                             <div className="flex flex-row gap-6" key={index}>
//                                 <div className="w-[50px] h-[50px] bg-white flex items-center">
//                                    <img src={element.Logo}/>
//                                 </div>

//                                 <div>
//                                     <h2 className="font-semibold text-[18px]">{element.heading}</h2>
//                                     <p className="text-base">{element.Description}</p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//               </div>

//             <div className="relative shadow-blue-200">

//               <img src={timelineImg} alt="timelineimg" className="shadow-white object-cover h-fit"/>

//               <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-6
//               left-[50%] translate-x-[-50%] translate-y-[-50%]">
//                 <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
//                     <p className="text-3xl font-bold">10</p>
//                     <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
//                 </div>

//                 <div className="flex gap-5 items-center px-7">
//                 <p className="text-3xl font-bold">250</p>
//                 <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
//                 </div>
//               </div>
//             </div>

//             </div>
//         </div>
//     )
// }

// export default TimeLineSection


// import React from "react";
// import Logo1 from "../../assets/images/logo1.png";
// import Logo2 from "../../assets/images/logo2.png";
// import Logo3 from "../../assets/images/logo3.png";
// import Logo4 from "../../assets/images/logo4.png";
// import timelineImg from "../../assets/images/TimelineImage.png";

// const timeLine = [
//   {
//     Logo: Logo1,
//     heading: "Leadership",
//     Description: "Fully committed to the success of our mission.",
//   },
//   {
//     Logo: Logo2,
//     heading: "Responsibility",
//     Description: "Students will always be our top priority.",
//   },
//   {
//     Logo: Logo3,
//     heading: "Flexibility",
//     Description: "Adaptability is the key to modern learning.",
//   },
//   {
//     Logo: Logo4,
//     heading: "Problem Solving",
//     Description: "Empowering you to code your way to solutions.",
//   },
// ];

// const TimeLineSection = () => {
//   return (
//     <div className="bg-richblack-900 py-14">
//       <div className="flex flex-col lg:flex-row items-center gap-12 w-11/12 max-w-maxContent mx-auto">
//         {/* Left Timeline Points */}
//         <div className="w-full lg:w-1/2 space-y-8">
//           {timeLine.map((item, index) => (
//             <div className="flex items-start gap-5" key={index}>
//               <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
//                 <img src={item.Logo} alt={item.heading} className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-richblack-5 mb-1">
//                   {item.heading}
//                 </h3>
//                 <p className="text-richblack-300 text-sm leading-relaxed">
//                   {item.Description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Image + Stats */}
//         <div className="relative w-full lg:w-1/2">
//           <img
//             src={timelineImg}
//             alt="timeline"
//             className="w-full rounded-lg shadow-lg"
//           />
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-caribbeangreen-700 px-10 py-6 flex flex-col md:flex-row gap-6 items-center justify-center rounded-xl text-white shadow-xl">
//             <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-caribbeangreen-300 px-6">
//               <p className="text-3xl font-bold">10+</p>
//               <p className="text-caribbeangreen-300 text-sm mt-1">
//                 Years of Experience
//               </p>
//             </div>
//             <div className="flex flex-col items-center px-6">
//               <p className="text-3xl font-bold">250+</p>
//               <p className="text-caribbeangreen-300 text-sm mt-1">
//                 Courses Created
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeLineSection;
import React from "react";
import Logo1 from "../../assets/images/logo1.png";
import Logo2 from "../../assets/images/logo2.png";
import Logo3 from "../../assets/images/logo3.png";
import Logo4 from "../../assets/images/logo4.png";
import timelineImg from "../../assets/images/TimelineImage.png";

const timeLine = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success of our mission.",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority.",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "Adaptability is the key to modern learning.",
  },
  {
    Logo: Logo4,
    heading: "Problem Solving",
    Description: "Empowering you to code your way to solutions.",
  },
];

const TimeLineSection = () => {
  return (
    <div className="bg-richblack-900 py-14">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-11/12 max-w-maxContent mx-auto">
        {/* Left Timeline Points */}
        <div className="w-full lg:w-1/2 space-y-8">
          {timeLine.map((item, index) => (
            <div className="flex items-start gap-5" key={index}>
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <img src={item.Logo} alt={item.heading} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-richblack-5 mb-1">
                  {item.heading}
                </h3>
                <p className="text-richblack-300 text-sm leading-relaxed">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image + Stats */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={timelineImg}
            alt="timeline"
            className="w-full rounded-lg shadow-lg"
          />
          
          </div>
        </div>
      </div>
   
  );
};

export default TimeLineSection;
