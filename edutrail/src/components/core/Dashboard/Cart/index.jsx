import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses'
import RenderTotalAmount from './RenderTotalAmount'

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div className="w-full space-y-6 p-2 sm:p-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
        Shopping Cart
      </h1>

      {/* Cart Counter Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300 uppercase">
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
        <div className="my-16 flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-[#0B132B]/60 p-12 text-center backdrop-blur-xl shadow-2xl">
          <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
            Your cart is empty
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Explore our course catalog to discover trails and elevate your career skills.
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart
