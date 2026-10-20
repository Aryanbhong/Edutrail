import React from "react"
import signupImg from "../assets/images/signup.png"
import Template from "../components/core/Template"

const Signup = ({ setIsLoggedIn }) => {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#050816] text-white flex items-center justify-center">
      {/* Ambient neon background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Template
          tittle="Join the Millions Learning on EduTrail"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={signupImg}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </main>
  )
}

export default Signup
