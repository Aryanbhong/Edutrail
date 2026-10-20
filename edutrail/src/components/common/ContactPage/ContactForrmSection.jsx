import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
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
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    try {
      setLoading(true)
      const response = await apiConnector(
        "Post",
        contactusEndpoints.CONTACT_US_API,
        data
      )
      toast.success("Message sent successfully!")
      setLoading(false)
    } catch (error) {
      console.error("Error sending contact form:", error.message)
      toast.error("Could not send message. Please try again.")
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-[#060a17]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-cyan-400 focus:bg-[#080e22] focus:ring-2 focus:ring-cyan-400/20"

  const labelStyle =
    "text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1 block"

  return (
    <form
      className="flex flex-col gap-5 text-white"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-1 sm:w-1/2">
          <label htmlFor="firstname" className={labelStyle}>
            First Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            className={inputStyle}
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-xs text-rose-400 mt-1">
              Please enter your first name.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 sm:w-1/2">
          <label htmlFor="lastname" className={labelStyle}>
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            className={inputStyle}
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelStyle}>
          Email Address <span className="text-cyan-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
          className={inputStyle}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-rose-400 mt-1">
            Please enter your email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phonenumber" className={labelStyle}>
          Phone Number <span className="text-cyan-400">*</span>
        </label>

        <div className="flex gap-3">
          <div className="w-[105px] shrink-0">
            <select
              name="countrycode"
              id="countrycode"
              className={`${inputStyle} px-2 cursor-pointer`}
              {...register("countrycode", { required: true })}
            >
              {countrycode.map((ele, i) => (
                <option key={i} value={ele.code} className="bg-[#0b1224] text-white">
                  {ele.code} ({ele.country})
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className={inputStyle}
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your phone number.",
                },
                maxLength: { value: 14, message: "Invalid phone number" },
                minLength: { value: 8, message: "Invalid phone number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="text-xs text-rose-400 mt-1">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className={labelStyle}>
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="How can we assist you on your learning journey?"
          className={inputStyle}
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-xs text-rose-400 mt-1">
            Please enter your message.
          </span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95 disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        {loading ? "Transmitting Message..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactUsForm
