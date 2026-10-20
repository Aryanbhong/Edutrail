import React, { useState } from "react"
import { HomePageExplore } from "../../data/homepage-explore"
import CourseCard from "./CourseCard"

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
]

const Explore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0])
  const [courses, setCourses] = useState(HomePageExplore[0].courses)
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  )

  const setMyCards = (value) => {
    setCurrentTab(value)
    const result = HomePageExplore.filter((course) => course.tag === value)
    setCourses(result[0].courses)
    setCurrentCard(result[0].courses[0].heading)
  }

  return (
    <div className="relative w-full pb-10">
      {/* Explore More Section Header */}
      <div className="text-center my-6 space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          Unlock the <span className="text-cyan-400">Power of Code</span>
        </h2>
        <p className="text-xs sm:text-sm font-medium text-slate-300">
          Learn to build full-scale applications you can deploy and showcase.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-2 my-6 mx-auto w-fit rounded-2xl sm:rounded-full border border-white/[0.08] bg-[#050816]/80 p-1.5 backdrop-blur-xl">
        {tabsName.map((ele, index) => {
          const isActive = currentTab === ele
          return (
            <button
              key={index}
              type="button"
              className={`text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-xl sm:rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]"
              }`}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </button>
          )
        })}
      </div>

      {/* Cards Group */}
      <div className="flex flex-wrap justify-center gap-6 w-full pt-4">
        {courses.map((ele, index) => (
          <CourseCard
            key={index}
            cardData={ele}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  )
}

export default Explore
