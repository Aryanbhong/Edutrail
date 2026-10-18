// import React from "react";
// import Template from "../components/core/Template";
// import loginimg from "../assets/images/login.png"

// const Login=({setIsLoggedIn})=>{
//     return(
//         <Template
//         tittle="Welcome Back"
//         desc1="Build skills for today, tomorrow, and beyond."
//         desc2="Education to future-proof your career"
//         image={loginimg}
//         formtype="login"
//         setIsLoggedIn={setIsLoggedIn}
        
//         />
//     )
// }

// export default Login

import React from "react";
import Template from "../components/core/Template";
import loginimg from "../assets/images/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <main className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden bg-[#070B18] text-white">
      {/* Ambient neon lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-600/[0.08] blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1400px] items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="w-full overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0B1224]/60 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <Template
            tittle="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career"
            image={loginimg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
    </main>
  );
};

export default Login;
