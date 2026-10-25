// // import React, { useEffect, useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { useDispatch, useSelector } from 'react-redux';
// // import IconBtn from '../../../../common/IconBtn';
// // import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
// // import { COURSE_STATUS } from '../../../../../utils/Permanents';
// // import { editCourseDetails } from '../../../../../services/opreations/courseDetails';
// // import { useNavigate } from 'react-router-dom';

// // const PublishCourse = () => {

// //   const { register, handleSubmit, setValue, getValues } = useForm();

// //   const dispatch = useDispatch()
// //   const navigate = useNavigate()
// //   const { token } = useSelector((state) => state.auth)
// //   const { course } = useSelector((state) => state.course)
// //   const [loading, setLoading] = useState(false)

// //   useEffect(() => {
// //     if (course?.status === COURSE_STATUS.DRAFT) {
// //       setValue("public", true)
// //     }
// //   }, [])

// //   const goBack = () => {
// //     dispatch(setStep(2))
// //   }

// //   const goToCourses = () => {
// //     dispatch(resetCourseState())
// //     navigate("/dashboard/my-courses")
// //   }

// //   const handleCoursePublish = async () => {
// //     // check if form has been updated or not
// //     if (
// //       (course?.status === COURSE_STATUS.PUBLISHED &&
// //         getValues("public") === true) ||
// //       (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
// //     ) {
// //       // form has not been updated
// //       // no need to make api call
// //       goToCourses()
// //       return
// //     }
// //     const formData = new FormData();
// //     formData.append("courseId", course._id)
// //     const courseStatus = getValues("public")
// //       ? COURSE_STATUS.PUBLISHED
// //       : COURSE_STATUS.DRAFT
// //     formData.append("status", courseStatus)
// //     setLoading(true)
// //     const result = await editCourseDetails(formData, token)
// //     if (result) {
// //       goToCourses()
// //     }
// //     setLoading(false)
// //   }

// //   const onSubmit = (data) => {
// //     // console.log(data)
// //     handleCoursePublish()
// //   }

// //   return (
// //     <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
// //       <p className="text-2xl font-semibold text-richblack-5">
// //         Publish Settings
// //       </p>
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         {/* Checkbox */}
// //         <div className="my-6 mb-8">
// //           <label htmlFor="Public" className="inline-flex items-center text-lg">
// //             <input
// //               type="chechbox"
// //               id="Public"
// //               {...register("public")}
// //               className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
// //             />
// //             <span className="ml-2 text-richblack-400">
// //               Make this course as public
// //             </span>
// //           </label>
// //         </div>

// //         {/* Next Prev Button */}
// //         <div className="ml-auto flex max-w-max items-center gap-x-4">
// //           <button
// //             disabled={loading}
// //             type="button"
// //             onClick={goBack}
// //             className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
// //           >
// //             Back
// //           </button>
// //           <IconBtn disabled={loading} text="Save Changes" />
// //         </div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default PublishCourse


// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import IconBtn from '../../../../common/IconBtn'
// import { resetCourseState, setStep } from '../../../../../slices/courseSlice'
// import { COURSE_STATUS } from '../../../../../utils/Permanents'
// import { editCourseDetails } from '../../../../../services/opreations/courseDetails'
// import { useNavigate } from 'react-router-dom'

// const PublishCourse = () => {
//   const { register, handleSubmit, setValue, getValues } = useForm()

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { token } = useSelector((state) => state.auth)
//   const { course } = useSelector((state) => state.course)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (course?.status === COURSE_STATUS.PUBLISHED) {
//       setValue("public", true)
//     }
//   }, [course?.status, setValue])

//   const goBack = () => {
//     dispatch(setStep(2))
//   }

//   const goToCourses = () => {
//     dispatch(resetCourseState())
//     navigate("/dashboard/my-courses")
//   }

//   const handleCoursePublish = async () => {
//     // Check if form has been updated
//     if (
//       (course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true) ||
//       (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
//     ) {
//       goToCourses()
//       return
//     }

//     const formData = new FormData()
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

//   const onSubmit = () => {
//     handleCoursePublish()
//   }

//   return (
//     <div className="relative space-y-8 rounded-3xl border border-cyan-500/20 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       {/* Heading */}
//       <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         Publish Settings
//       </p>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Checkbox Section */}
//         <div className="my-6 mb-8 rounded-2xl border border-slate-800/80 bg-[#030712]/60 p-5 backdrop-blur-md">
//           <label htmlFor="public" className="inline-flex cursor-pointer items-center gap-x-3 select-none">
//             <input
//               type="checkbox"
//               id="public"
//               {...register("public")}
//               className="h-5 w-5 rounded-md border-cyan-500/40 bg-[#030712] text-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-0 accent-cyan-400 cursor-pointer"
//             />
//             <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-200 hover:text-cyan-300 transition-colors">
//               Make this course public
//             </span>
//           </label>
//         </div>

//         {/* Action Controls */}
//         <div className="ml-auto flex max-w-max items-center gap-x-3 pt-2">
//           <button
//             disabled={loading}
//             type="button"
//             onClick={goBack}
//             className="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 active:scale-95 disabled:opacity-50"
//           >
//             Back
//           </button>
//           <IconBtn disabled={loading} text="Save Changes" type="submit" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PublishCourse



import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../../common/IconBtn";
import {
  resetCourseState,
  setStep,
} from "../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../utils/Permanents";
import { editCourseDetails } from "../../../../../services/opreations/courseDetails";
import { useNavigate } from "react-router-dom";

const PublishCourse = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true);
    } else {
      setValue("public", false);
    }
  }, [course?.status, setValue]);

  const goBack = () => {
    dispatch(setStep(2));
  };

  const goToCourses = () => {
    dispatch(resetCourseState());
    navigate("/dashboard/my-courses");
  };

  const handleCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (course?.status === COURSE_STATUS.DRAFT &&
        getValues("public") === false)
    ) {
      goToCourses();
      return;
    }

    const formData = new FormData();
    formData.append("courseId", course._id);

    const courseStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT;

    formData.append("status", courseStatus);

    setLoading(true);

    try {
      const result = await editCourseDetails(formData, token);

      if (result) {
        goToCourses();
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = () => {
    handleCoursePublish();
  };

  const isCurrentlyPublished = course?.status === COURSE_STATUS.PUBLISHED;

  return (
    <div className="relative isolate space-y-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-5 font-sans text-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:p-7 lg:p-8">
      {/* Subtle top accent */}
      <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      {/* Heading */}
      <div>
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Final step
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Publish Settings
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
          Choose whether your course should be publicly available to students.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Publish Settings Card */}
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5">
          <label
            htmlFor="public"
            className="flex cursor-pointer items-start gap-4"
          >
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0L7 9m5-5 5 5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                />
              </svg>
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-zinc-100 sm:text-base">
                Make this course public
              </span>

              <span className="mt-1.5 block text-xs leading-5 text-zinc-500 sm:text-sm">
                Allow students to discover and enroll in your course when it
                is published.
              </span>

              <span
                className={`mt-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                  isCurrentlyPublished
                    ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300"
                    : "border-amber-400/15 bg-amber-400/[0.06] text-amber-300"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isCurrentlyPublished ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {isCurrentlyPublished ? "Currently published" : "Draft"}
              </span>
            </span>

            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-white/20 bg-[#0c0c0f] accent-violet-500 focus:ring-2 focus:ring-violet-400/30 focus:ring-offset-2 focus:ring-offset-[#111114]"
            />
          </label>
        </div>

        {/* Navigation */}
        <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:justify-between">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.02] px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Back
          </button>

          <IconBtn
            disabled={loading}
            text={loading ? "Saving..." : "Save Changes"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default PublishCourse;


