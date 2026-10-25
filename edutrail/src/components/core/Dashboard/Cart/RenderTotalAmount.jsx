// import React from 'react'
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import IconBtn from "../../../common/IconBtn"
// import { buyCourse } from "../../../../services/opreations/featuresStudentApi"

// export default function RenderTotalAmount() {
//   const { total, cart } = useSelector((state) => state.cart)
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleBuyCourse = () => {
//     const courses = cart.map((course) => course._id)
//     buyCourse(token, courses, user, navigate, dispatch)
//   }

//   return (
//     <div className="relative min-w-[280px] w-full lg:w-auto rounded-3xl border border-white/[0.08] bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

//       <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
//         Total Amount:
//       </p>

//       <p className="mb-6 text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
//         ₹ {total}
//       </p>

//       <IconBtn
//         text="Buy Now"
//         onclick={handleBuyCourse}
//         customClasses="w-full justify-center text-center font-bold"
//       />
//     </div>
//   )
// }


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiShield, FiArrowRight } from "react-icons/fi";

import IconBtn from "../../../common/IconBtn";
import { buyCourse } from "../../../../services/opreations/featuresStudentApi";

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    buyCourse(token, courses, user, navigate, dispatch);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/95 p-5 font-sans shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6">
      {/* Top accent */}
      <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/[0.08] blur-[70px]" />

      {/* Heading */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
          <FiShoppingBag className="text-lg" />
        </div>

        <div>
          <h2 className="text-base font-semibold tracking-tight text-white">
            Order Summary
          </h2>
          <p className="mt-0.5 text-xs text-zinc-500">
            Review your purchase
          </p>
        </div>
      </div>

      {/* Course count */}
      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
        <span className="text-sm text-zinc-400">Courses</span>
        <span className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300">
          {cart.length} {cart.length === 1 ? "course" : "courses"}
        </span>
      </div>

      {/* Total */}
      <div className="relative py-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
          Total Amount
        </p>

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ₹{Number(total || 0).toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-zinc-500">INR</span>
        </div>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Your selected courses, together in one place.
        </p>
      </div>

      {/* Purchase button */}
      <div className="relative [&_button]:w-full [&_button]:justify-center">
        <IconBtn
          text="Buy Now"
          onclick={handleBuyCourse}
          customClasses="w-full justify-center text-center font-semibold"
        />
      </div>

      {/* Trust note */}
      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
        <FiShield className="mt-0.5 shrink-0 text-sm text-violet-300" />

        <div>
          <p className="text-xs font-medium text-zinc-300">
            Ready to start learning?
          </p>
          <p className="mt-1 text-[11px] leading-5 text-zinc-500">
            Continue to complete your course purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

