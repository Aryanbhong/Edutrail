// import React from 'react'
// import { useSelector } from 'react-redux'
// import RenderCartCourses from './RenderCartCourses';
// import RenderTotalAmount from './RenderTotalAmount';

// const Cart = () => {

//     const {total,totalItems} = useSelector((state) =>state.cart);
//   return (
//     <>
//     <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
//     <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
//       {totalItems} Courses in Cart
//     </p>
//     {total > 0 ? (
//       <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
//         <RenderCartCourses />
//         <RenderTotalAmount />
//       </div>
//     ) : (
//       <p className="mt-14 text-center text-3xl text-richblack-100">
//         Your cart is empty
//       </p>
//     )}
//   </>
//   )
// }

// export default Cart

import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses'
import RenderTotalAmount from './RenderTotalAmount'

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
        Shopping Cart
      </h1>

      {/* Cart Counter Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300/80 uppercase">
          {totalItems} {totalItems === 1 ? "Course" : "Courses"} in Cart
        </p>
      </div>

      {/* Cart Content or Empty State */}
      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div className="my-16 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-wide">
            Your cart is empty
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium text-cyan-300/70">
            Explore our catalog to discover courses and expand your skills.
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart
