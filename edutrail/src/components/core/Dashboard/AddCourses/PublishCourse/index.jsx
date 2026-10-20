// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux';
// import IconBtn from '../../../../common/IconBtn';
// import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
// import { COURSE_STATUS } from '../../../../../utils/Permanents';
// import { editCourseDetails } from '../../../../../services/opreations/courseDetails';
// import { useNavigate } from 'react-router-dom';

// const PublishCourse = () => {

//   const { register, handleSubmit, setValue, getValues } = useForm();

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { token } = useSelector((state) => state.auth)
//   const { course } = useSelector((state) => state.course)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (course?.status === COURSE_STATUS.DRAFT) {
//       setValue("public", true)
//     }
//   }, [])

//   const goBack = () => {
//     dispatch(setStep(2))
//   }

//   const goToCourses = () => {
//     dispatch(resetCourseState())
//     navigate("/dashboard/my-courses")
//   }

//   const handleCoursePublish = async () => {
//     // check if form has been updated or not
//     if (
//       (course?.status === COURSE_STATUS.PUBLISHED &&
//         getValues("public") === true) ||
//       (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
//     ) {
//       // form has not been updated
//       // no need to make api call
//       goToCourses()
//       return
//     }
//     const formData = new FormData();
//     formData.append("courseId", course._id)
//     const courseStatus = getValues("public")
//       ? COURSE_STATUS.PUBLISHED
//       : COURSE_STATUS.DRAFT
//     formData.append("status", courseStatus)
//     setLoading(true)
//     const result = await editCourseDetails(formData, token)
//     if (result) {
//       goToCourses()
//     }
//     setLoading(false)
//   }

//   const onSubmit = (data) => {
//     // console.log(data)
//     handleCoursePublish()
//   }

//   return (
//     <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
//       <p className="text-2xl font-semibold text-richblack-5">
//         Publish Settings
//       </p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Checkbox */}
//         <div className="my-6 mb-8">
//           <label htmlFor="Public" className="inline-flex items-center text-lg">
//             <input
//               type="chechbox"
//               id="Public"
//               {...register("public")}
//               className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
//             />
//             <span className="ml-2 text-richblack-400">
//               Make this course as public
//             </span>
//           </label>
//         </div>

//         {/* Next Prev Button */}
//         <div className="ml-auto flex max-w-max items-center gap-x-4">
//           <button
//             disabled={loading}
//             type="button"
//             onClick={goBack}
//             className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
//           >
//             Back
//           </button>
//           <IconBtn disabled={loading} text="Save Changes" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PublishCourse


import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../../../common/IconBtn'
import { resetCourseState, setStep } from '../../../../../slices/courseSlice'
import { COURSE_STATUS } from '../../../../../utils/Permanents'
import { editCourseDetails } from '../../../../../services/opreations/courseDetails'
import { useNavigate } from 'react-router-dom'

const PublishCourse = () => {
  const { register, handleSubmit, setValue, getValues } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true)
    }
  }, [course?.status, setValue])

  const goBack = () => {
    dispatch(setStep(2))
  }

  const goToCourses = () => {
    dispatch(resetCourseState())
    navigate("/dashboard/my-courses")
  }

  const handleCoursePublish = async () => {
    // Check if form has been updated
    if (
      (course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true) ||
      (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      goToCourses()
      return
    }

    const formData = new FormData()
    formData.append("courseId", course._id)
    const courseStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT
    formData.append("status", courseStatus)

    setLoading(true)
    const result = await editCourseDetails(formData, token)
    if (result) {
      goToCourses()
    }
    setLoading(false)
  }

  const onSubmit = () => {
    handleCoursePublish()
  }

  return (
    <div className="relative space-y-8 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      {/* Heading */}
      <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        Publish Settings
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox Section */}
        <div className="my-6 mb-8 rounded-2xl border border-slate-800/80 bg-[#030712]/60 p-5 backdrop-blur-md">
          <label htmlFor="public" className="inline-flex cursor-pointer items-center gap-x-3 select-none">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="h-5 w-5 rounded-md border-cyan-500/40 bg-[#030712] text-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-0 accent-cyan-400 cursor-pointer"
            />
            <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-200 hover:text-cyan-300 transition-colors">
              Make this course public
            </span>
          </label>
        </div>

        {/* Action Controls */}
        <div className="ml-auto flex max-w-max items-center gap-x-3 pt-2">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95 disabled:opacity-50"
          >
            Back
          </button>
          <IconBtn disabled={loading} text="Save Changes" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default PublishCourse

