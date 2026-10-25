// import React, { useEffect, useState } from "react"
// import { useForm } from "react-hook-form"
// import apiConnector from "../../../services/apiConnector"
// import { contactusEndpoints } from "../../../services/apis"
// import countrycode from "../../../data/countryCode"
// import { toast } from "react-hot-toast"

// const ContactUsForm = () => {
//   const [loading, setLoading] = useState(false)
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm()

//   const submitContactForm = async (data) => {
//     try {
//       setLoading(true)
//       const response = await apiConnector(
//         "Post",
//         contactusEndpoints.CONTACT_US_API,
//         data
//       )
//       toast.success("Message sent successfully!")
//       setLoading(false)
//     } catch (error) {
//       console.error("Error sending contact form:", error.message)
//       toast.error("Could not send message. Please try again.")
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (isSubmitSuccessful) {
//       reset({
//         email: "",
//         firstname: "",
//         lastname: "",
//         message: "",
//         phoneNo: "",
//       })
//     }
//   }, [reset, isSubmitSuccessful])

//   const inputStyle =
//     "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"

//   const labelStyle =
//     "text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1 block"

//   return (
//     <form
//       className="flex flex-col gap-5 text-white"
//       onSubmit={handleSubmit(submitContactForm)}
//     >
//       <div className="flex flex-col gap-4 sm:flex-row">
//         <div className="flex flex-col gap-1 sm:w-1/2">
//           <label htmlFor="firstname" className={labelStyle}>
//             First Name <span className="text-cyan-400">*</span>
//           </label>
//           <input
//             type="text"
//             name="firstname"
//             id="firstname"
//             placeholder="John"
//             className={inputStyle}
//             {...register("firstname", { required: true })}
//           />
//           {errors.firstname && (
//             <span className="text-xs text-rose-400 mt-1">
//               Please enter your first name.
//             </span>
//           )}
//         </div>

//         <div className="flex flex-col gap-1 sm:w-1/2">
//           <label htmlFor="lastname" className={labelStyle}>
//             Last Name
//           </label>
//           <input
//             type="text"
//             name="lastname"
//             id="lastname"
//             placeholder="Doe"
//             className={inputStyle}
//             {...register("lastname")}
//           />
//         </div>
//       </div>

//       <div className="flex flex-col gap-1">
//         <label htmlFor="email" className={labelStyle}>
//           Email Address <span className="text-cyan-400">*</span>
//         </label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="you@example.com"
//           className={inputStyle}
//           {...register("email", { required: true })}
//         />
//         {errors.email && (
//           <span className="text-xs text-rose-400 mt-1">
//             Please enter your email address.
//           </span>
//         )}
//       </div>

//       <div className="flex flex-col gap-1">
//         <label htmlFor="phonenumber" className={labelStyle}>
//           Phone Number <span className="text-cyan-400">*</span>
//         </label>

//         <div className="flex gap-3">
//           <div className="w-[105px] shrink-0">
//             <select
//               name="countrycode"
//               id="countrycode"
//               className={`${inputStyle} px-2 cursor-pointer`}
//               {...register("countrycode", { required: true })}
//             >
//               {countrycode.map((ele, i) => (
//                 <option key={i} value={ele.code} className="bg-[#0b1224] text-white">
//                   {ele.code} ({ele.country})
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex-1">
//             <input
//               type="tel"
//               name="phonenumber"
//               id="phonenumber"
//               placeholder="12345 67890"
//               className={inputStyle}
//               {...register("phoneNo", {
//                 required: {
//                   value: true,
//                   message: "Please enter your phone number.",
//                 },
//                 maxLength: { value: 14, message: "Invalid phone number" },
//                 minLength: { value: 8, message: "Invalid phone number" },
//               })}
//             />
//           </div>
//         </div>
//         {errors.phoneNo && (
//           <span className="text-xs text-rose-400 mt-1">
//             {errors.phoneNo.message}
//           </span>
//         )}
//       </div>

//       <div className="flex flex-col gap-1">
//         <label htmlFor="message" className={labelStyle}>
//           Message <span className="text-cyan-400">*</span>
//         </label>
//         <textarea
//           name="message"
//           id="message"
//           cols="30"
//           rows="5"
//           placeholder="How can we assist you on your learning journey?"
//           className={inputStyle}
//           {...register("message", { required: true })}
//         />
//         {errors.message && (
//           <span className="text-xs text-rose-400 mt-1">
//             Please enter your message.
//           </span>
//         )}
//       </div>

//       <button
//         disabled={loading}
//         type="submit"
//         className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95 disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
//       >
//         {loading ? "Transmitting Message..." : "Send Message"}
//       </button>
//     </form>
//   )
// }

// export default ContactUsForm



import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaPaperPlane, FaSpinner } from "react-icons/fa"
import apiConnector from "../../../services/apiConnector"
import { contactusEndpoints } from "../../../services/apis"
import countrycode from "../../../data/countryCode"
import { toast } from "react-hot-toast"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      countrycode: countrycode[0]?.code || "",
      phoneNo: "",
      message: "",
    },
  })

  const submitContactForm = async (data) => {
    try {
      setLoading(true)

      await apiConnector(
        "Post",
        contactusEndpoints.CONTACT_US_API,
        data
      )

      toast.success("Message sent successfully!")

 
      reset({
        firstname: "",
        lastname: "",
        email: "",
        countrycode: countrycode[0]?.code || "",
        phoneNo: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending contact form:", error.message)
      toast.error("Could not send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle =
    "w-full rounded-xl border border-white/[0.09] bg-[#111114] px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-300 hover:border-white/[0.16] focus:border-violet-400/50 focus:bg-[#15141b] focus:ring-2 focus:ring-violet-500/10"

  const labelStyle =
    "mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-zinc-400"

  const requiredMark = <span className="ml-1 text-violet-300">*</span>

  return (
    <form
      className="flex flex-col gap-5 font-sans text-zinc-100 sm:gap-6"
      onSubmit={handleSubmit(submitContactForm)}
    >
   
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstname" className={labelStyle}>
            First Name {requiredMark}
          </label>

          <input
            type="text"
            id="firstname"
            autoComplete="given-name"
            placeholder="John"
            aria-invalid={!!errors.firstname}
            className={`${inputStyle} ${
              errors.firstname
                ? "border-rose-400/50 focus:border-rose-400/70"
                : ""
            }`}
            {...register("firstname", {
              required: "Please enter your first name.",
            })}
          />

          {errors.firstname && (
            <p className="mt-2 text-xs text-rose-400">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className={labelStyle}>
            Last Name
          </label>

          <input
            type="text"
            id="lastname"
            autoComplete="family-name"
            placeholder="Doe"
            className={inputStyle}
            {...register("lastname")}
          />
        </div>
      </div>

   
      <div>
        <label htmlFor="email" className={labelStyle}>
          Email Address {requiredMark}
        </label>

        <input
          type="email"
          id="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={`${inputStyle} ${
            errors.email
              ? "border-rose-400/50 focus:border-rose-400/70"
              : ""
          }`}
          {...register("email", {
            required: "Please enter your email address.",
          })}
        />

        {errors.email && (
          <p className="mt-2 text-xs text-rose-400">
            {errors.email.message}
          </p>
        )}
      </div>


      <div>
        <label htmlFor="phonenumber" className={labelStyle}>
          Phone Number {requiredMark}
        </label>

        <div className="flex gap-3">
          <div className="w-[125px] shrink-0 sm:w-[145px]">
            <select
              id="countrycode"
              aria-label="Country calling code"
              className={`${inputStyle} cursor-pointer px-2.5`}
              {...register("countrycode", {
                required: "Please select a country code.",
              })}
            >
              {countrycode.map((ele) => (
                <option
                  key={`${ele.code}-${ele.country}`}
                  value={ele.code}
                  className="bg-[#111114] text-zinc-100"
                >
                  {ele.code} ({ele.country})
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 flex-1">
            <input
              type="tel"
              id="phonenumber"
              autoComplete="tel-national"
              placeholder="12345 67890"
              aria-invalid={!!errors.phoneNo}
              className={`${inputStyle} ${
                errors.phoneNo
                  ? "border-rose-400/50 focus:border-rose-400/70"
                  : ""
              }`}
              {...register("phoneNo", {
                required: "Please enter your phone number.",
                maxLength: {
                  value: 14,
                  message: "Invalid phone number.",
                },
                minLength: {
                  value: 8,
                  message: "Invalid phone number.",
                },
              })}
            />
          </div>
        </div>

        {errors.countrycode && (
          <p className="mt-2 text-xs text-rose-400">
            {errors.countrycode.message}
          </p>
        )}

        {errors.phoneNo && (
          <p className="mt-2 text-xs text-rose-400">
            {errors.phoneNo.message}
          </p>
        )}
      </div>

   
      <div>
        <label htmlFor="message" className={labelStyle}>
          Message {requiredMark}
        </label>

        <textarea
          id="message"
          rows={5}
          placeholder="How can we assist you on your learning journey?"
          aria-invalid={!!errors.message}
          className={`${inputStyle} min-h-[140px] resize-y leading-6 ${
            errors.message
              ? "border-rose-400/50 focus:border-rose-400/70"
              : ""
          }`}
          {...register("message", {
            required: "Please enter your message.",
          })}
        />

        {errors.message && (
          <p className="mt-2 text-xs text-rose-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="group relative mt-1 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-violet-300/20 bg-violet-500/[0.13] px-5 py-3.5 text-sm font-semibold text-violet-100 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <FaSpinner size={15} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <FaPaperPlane
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="-mt-2 text-center text-xs text-zinc-600">
        We’ll get back to you as soon as possible.
      </p>
    </form>
  )
}

export default ContactUsForm
