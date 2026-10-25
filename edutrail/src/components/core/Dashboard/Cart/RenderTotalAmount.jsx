// // import React from 'react'
// // import { useDispatch, useSelector } from "react-redux"
// // import { useNavigate } from "react-router-dom"

// // import IconBtn from "../../../common/IconBtn"
// // import { buyCourse } from "../../../../services/opreations/featuresStudentApi"

// // export default function RenderTotalAmount() {
// //   const { total, cart } = useSelector((state) => state.cart)
// //   const { token } = useSelector((state) => state.auth)
// //   const { user } = useSelector((state) => state.profile)
// //   const navigate = useNavigate()
// //   const dispatch = useDispatch()

// //   const handleBuyCourse = () => {
// //     const courses = cart.map((course) => course._id)
// //     buyCourse(token, courses, user, navigate, dispatch)
// //   }

// //   return (
// //     <div className="relative min-w-[280px] w-full lg:w-auto rounded-3xl border border-white/[0.08] bg-[#0B132B]/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
// //       {/* Ambient Top Glow Line */}
// //       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

// //       <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
// //         Total Amount:
// //       </p>

// //       <p className="mb-6 text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
// //         ₹ {total}
// //       </p>

// //       <IconBtn
// //         text="Buy Now"
// //         onclick={handleBuyCourse}
// //         customClasses="w-full justify-center text-center font-bold"
// //       />
// //     </div>
// //   )
// // }


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FiShoppingBag, FiShield, FiArrowRight } from "react-icons/fi";

// import IconBtn from "../../../common/IconBtn";
// import { buyCourse } from "../../../../services/opreations/featuresStudentApi";

// export default function RenderTotalAmount() {
//   const { total, cart } = useSelector((state) => state.cart);
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleBuyCourse = () => {
//     const courses = cart.map((course) => course._id);
//     buyCourse(token, courses, user, navigate, dispatch);
//   };

//   return (
//     <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/95 p-5 font-sans shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6">
//       {/* Top accent */}
//       <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

//       {/* Subtle background glow */}
//       <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/[0.08] blur-[70px]" />

//       {/* Heading */}
//       <div className="relative mb-6 flex items-center gap-3">
//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
//           <FiShoppingBag className="text-lg" />
//         </div>

//         <div>
//           <h2 className="text-base font-semibold tracking-tight text-white">
//             Order Summary
//           </h2>
//           <p className="mt-0.5 text-xs text-zinc-500">
//             Review your purchase
//           </p>
//         </div>
//       </div>

//       {/* Course count */}
//       <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
//         <span className="text-sm text-zinc-400">Courses</span>
//         <span className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300">
//           {cart.length} {cart.length === 1 ? "course" : "courses"}
//         </span>
//       </div>

//       {/* Total */}
//       <div className="relative py-5">
//         <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
//           Total Amount
//         </p>

//         <div className="mt-2 flex flex-wrap items-baseline gap-2">
//           <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             ₹{Number(total || 0).toLocaleString("en-IN")}
//           </span>
//           <span className="text-xs text-zinc-500">INR</span>
//         </div>

//         <p className="mt-2 text-xs leading-5 text-zinc-500">
//           Your selected courses, together in one place.
//         </p>
//       </div>

//       {/* Purchase button */}
//       <div className="relative [&_button]:w-full [&_button]:justify-center">
//         <IconBtn
//           text="Buy Now"
//           onclick={handleBuyCourse}
//           customClasses="w-full justify-center text-center font-semibold"
//         />
//       </div>

//       {/* Trust note */}
//       <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
//         <FiShield className="mt-0.5 shrink-0 text-sm text-violet-300" />

//         <div>
//           <p className="text-xs font-medium text-zinc-300">
//             Ready to start learning?
//           </p>
//           <p className="mt-1 text-[11px] leading-5 text-zinc-500">
//             Continue to complete your course purchase.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiBookOpen, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-[#09090b] font-sans text-zinc-100">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/[0.09] blur-[150px]" />
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-indigo-600/[0.07] blur-[160px]" />
        <div className="absolute -bottom-40 left-[30%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.05] blur-[150px]" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] space-y-7 p-3 sm:space-y-9 sm:p-6 lg:p-8">
        {/* Page heading */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300 sm:h-14 sm:w-14">
            <FiShoppingCart className="text-xl sm:text-2xl" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Your learning space
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Shopping Cart
            </h1>

            <p className="mt-1.5 text-xs leading-5 text-zinc-500 sm:text-sm">
              Review your courses and continue your learning journey.
            </p>
          </div>
        </div>

        {/* Cart count */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 sm:text-sm">
            Your selection
          </p>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300">
            <FiBookOpen className="text-violet-300" />
            {totalItems} {totalItems === 1 ? "Course" : "Courses"} in cart
          </span>
        </div>

        {/* Cart content */}
        {total > 0 ? (
          <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-8 xl:gap-10">
            <div className="min-w-0 w-full flex-1">
              <RenderCartCourses />
            </div>

            <div className="w-full shrink-0 lg:sticky lg:top-8 lg:w-[340px] xl:w-[370px]">
              <RenderTotalAmount />
            </div>
          </div>
        ) : (
          /* Empty cart state */
          <div className="relative mx-auto my-10 max-w-2xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111114]/80 px-5 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:my-16 sm:px-12 sm:py-16">
            <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/[0.08] blur-[70px]" />

            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
              <FiShoppingCart className="text-3xl" />
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#111114] bg-[#24202f] text-xs text-violet-200">
                0
              </span>
            </div>

            <p className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Your cart is empty
            </p>

            <p className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Looks like you haven't added any courses yet. Explore the
              catalog and find something new to learn.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/[0.12] px-5 py-3 text-sm font-semibold text-violet-200 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-500/[0.2] hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            >
              Explore Courses
              <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
