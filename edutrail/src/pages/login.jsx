import React from "react"
import Template from "../components/core/Template"
import loginimg from "../assets/images/login.png"

const Login = ({ setIsLoggedIn }) => {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#050816] text-white flex items-center justify-center">
      {/* Ambient neon lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-600/[0.08] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Template
          tittle="Welcome Back"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career"
          image={loginimg}
          formtype="login"
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </main>
  )
}

export default Login
