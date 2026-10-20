import React from "react"
import Instructorimg from "../../assets/images/Instructor.png"
import Cbutton from "../core/Button"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Instructor = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left Section: Image with Glass Frame */}
        <div className="w-full lg:w-[48%] flex justify-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
            <img
              src={Instructorimg}
              alt="Instructor"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Section: Content & CTA */}
        <div className="w-full lg:w-[52%] flex flex-col gap-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            Become an <span className="text-cyan-400">Instructor</span>
          </h2>

          <p className="font-medium text-sm sm:text-base text-slate-300 leading-relaxed">
            Instructors from around the world teach aspiring developers on EduTrail. We provide
            the platform, live feedback tools, and audience to monetize your engineering expertise.
          </p>

          <div className="w-fit pt-2">
            <Cbutton active={true} linkto="/signup">
              <div className="flex flex-row items-center gap-2">
                <span>Start Teaching Today</span>
                <FaArrowAltCircleRight className="text-base" />
              </div>
            </Cbutton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor
