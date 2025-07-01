import React from "react";
import Instructorimg from "../../assets/images/Instructor.png"
import Cbutton from "../core/Button";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Instructor = ()=>{
    return(
        <div className=" mt-11 mb-32">
            <div className="flex flex-row gap-20 items-center">
                 <div className="w-[50%] shadow-[20px_20px_rgba(255,255,255)]">
                  <img src={Instructorimg} alt="" 
                  className="shadow-white"/>
           </div>
           <div className="w-[50%] flex flex-col gap-10">
             <div className="text-4xl font-semibold">
                 Become an <span className="text-blue-400"> Instructor</span>
             </div>

            <p className="font-medium text-[16px] w-[90%] text-richblack-300">
             Instructor from around the world teach millions of students on edutrail. we provide
             the tools and skills to teach what you love.</p>
             
             <div className="w-fit">
             <Cbutton active={true} linkto={"/signup"}>
             <div className="flex flex-row items-center gap-2">
             Start Learning Today
             <FaArrowAltCircleRight/>
             </div>
             </Cbutton>
             </div>
             
           </div>

            </div>
        </div>
    )
}

export default Instructor