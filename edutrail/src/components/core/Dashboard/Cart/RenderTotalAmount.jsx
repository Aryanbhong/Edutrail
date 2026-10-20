import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from "../../../common/IconBtn"
import { buyCourse } from "../../../../services/opreations/featuresStudentApi"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
  }

  return (
    <div className="relative min-w-[280px] w-full lg:w-auto rounded-3xl border border-white/[0.08] bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Total Amount:
      </p>

      <p className="mb-6 text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
        ₹ {total}
      </p>

      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center text-center font-bold"
      />
    </div>
  )
}
