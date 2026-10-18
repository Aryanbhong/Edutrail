// import React from "react";
// import Instructorimg from "../../assets/images/Instructor.png"
// import Cbutton from "../core/Button";
// import { FaArrowAltCircleRight } from "react-icons/fa";


// const Instructor = ()=>{
//     return(
//         <div className=" mt-11 mb-32">
//             <div className="flex flex-row gap-20 items-center">
//                  <div className="w-[50%] shadow-[20px_20px_rgba(255,255,255)]">
//                   <img src={Instructorimg} alt="" 
//                   className="shadow-white"/>
//            </div>
//            <div className="w-[50%] flex flex-col gap-10">
//              <div className="text-4xl font-semibold">
//                  Become an <span className="text-blue-400"> Instructor</span>
//              </div>

//             <p className="font-medium text-[16px] w-[90%] text-richblack-300">
//              Instructor from around the world teach millions of students on edutrail. we provide
//              the tools and skills to teach what you love.</p>
             
//              <div className="w-fit">
//              <Cbutton active={true} linkto={"/signup"}>
//              <div className="flex flex-row items-center gap-2">
//              Start Learning Today
//              <FaArrowAltCircleRight/>
//              </div>
//              </Cbutton>
//              </div>
             
//            </div>

//             </div>
//         </div>
//     )
// }

// export default Instructor


import React from "react"
import Instructorimg from "../../assets/images/Instructor.png"
import Cbutton from "../core/Button"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Instructor = () => {
  return (
    <div className="mt-16 mb-32 w-full">
      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-center rounded-3xl border border-cyan-500/30 bg-[#0B132B]/80 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

        {/* Left Section: Image with Neon Frame */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
            <img
              src={Instructorimg}
              alt="Instructor"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Section: Content & CTA */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            Become an <span className="text-cyan-400">Instructor</span>
          </h2>

          <p className="font-medium text-sm sm:text-base w-full lg:w-[90%] text-slate-300 leading-relaxed">
            Instructors from around the world teach millions of students on EduTrail. We provide
            the tools and skills to teach what you love.
          </p>

          <div className="w-fit pt-2">
            <Cbutton active={true} linkto={"/signup"}>
              <div className="flex flex-row items-center gap-2">
                Start Teaching Today
                <FaArrowAltCircleRight className="text-base drop-shadow-[0_0_6px_#00f0ff]" />
              </div>
            </Cbutton>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Instructor;


