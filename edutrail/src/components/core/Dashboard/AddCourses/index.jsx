import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import RenderSteps from './RenderSteps';

const AddCourse = () => {
  return (
    <>
      <div  className="flex w-full items-start gap-x-6 overflow-x-hidden">
        <div className="flex flex-1 flex-col">
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
              Add Course
              </h1>
            <div className="flex-1">
                <RenderSteps/>
            </div>
        </div>
        <div>
           <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
           <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          
            <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                <li>Set the Course Price options or make it free.</li>
                <li>Standard size for the course thumbnail is 1024*576</li>
                <li>Video section controls the course overview video.</li>
                <li>Course Builder is where you create & organize a course.</li>
                <li>Add topics to the course builder section to create lessons, quizzes ans assignments.</li>
                <li>information from the Additional Data section shows up on the course single page.</li>
                <li>Make Announcements to notify any important.</li>
                <li>Notes to all enrolled students at once.</li>
            </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddCourse

