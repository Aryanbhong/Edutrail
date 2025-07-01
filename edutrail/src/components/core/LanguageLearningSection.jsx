import React from "react";
import progress from "../../assets/images/Know_your_progress.png";
import lessons from "../../assets/images/Plan_your_lessons.png";
import compare from "../../assets/images/compare.png";
import CButton from "../core/Button";



const LanguageLearning=()=>{
    return(
        <div className="mt-[130px] mb-32 ">
          <div className="flex flex-col gap-5 items-center">
              
              <div className="text-4xl font-semibold text-center">
                Your Swiss Knife for <span className="text-blue-400"> learning any language</span>
              </div>

              <div className="text-center text-richblack-500 mx-auto text-base w-[70%] font-medium">
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                progress tracking custom schedule and more.
              </div>

           <div className="flex flex-row items-center justify-center mt-5">
            <img
             src={progress}
             alt="know your progress"
             className="object-contain -mr-32"
            />
             <img
             src={compare}
             alt="know your progress"
             className="object-contain"
            />
             <img
             src={lessons}
             alt="know your progress"
             className="object-contain -ml-36"
            />
           </div>

           <div className="w-fit mb-9">
            <CButton active={true} linkto={"/signup"}>
             <div>Learn More</div>
            </CButton>
           </div>
          

          </div>
      </div>
    )
}
export default LanguageLearning