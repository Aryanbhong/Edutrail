// import React from "react";
// import signupImg from "../assets/images/signup.png"
// import Template from "../components/core/Template";

// const Signup=({setIsLoggedIn})=>{
//     return(
//         <Template
//         tittle="join the millions learning to code with us for free"
//         desc1="Build skills for today, tomorrow, and beyond."
//         desc2="Education to future-proof your career"
//         image={signupImg}
//         formtype="signup"
//         setIsLoggedIn={setIsLoggedIn}
        
//         />
//     )
// }

// export default Signup



import React from "react";
import signupImg from "../assets/images/signup.png";
import Template from "../components/core/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B18] text-white">
      {/* Ambient neon background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0B1224]/80 shadow-[0_0_80px_rgba(37,99,235,0.08)] backdrop-blur-2xl">
          <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">
            {/* Signup form and intro */}
            <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
              <div className="w-full max-w-md">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  YOUR LEARNING JOURNEY STARTS HERE
                </div>

                <Template
                  tittle="Join the millions learning to code with us for free"
                  desc1="Build skills for today, tomorrow, and beyond."
                  desc2="Education to future-proof your career."
                  image={signupImg}
                  formtype="signup"
                  setIsLoggedIn={setIsLoggedIn}
                />
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative hidden overflow-hidden border-l border-white/[0.06] bg-gradient-to-br from-[#101D3A] via-[#0B1429] to-[#07101F] lg:flex lg:items-center lg:justify-center">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

              <div className="relative z-10 mx-8 max-w-lg">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    E
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Edu<span className="text-cyan-300">Trail</span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      Learn. Build. Grow.
                    </p>
                  </div>
                </div>

                <h3 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                  Turn your
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    curiosity into code.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
                  Learn in-demand skills, build real-world projects, and take
                  the next step toward your future in technology.
                </p>

                <div className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl">
                  <img
                    src={signupImg}
                    alt="Start learning with EduTrail"
                    className="mx-auto max-h-72 w-full rounded-xl object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Learn at your pace", "Build real projects", "Grow your skills"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
                      >
                        <span className="mr-2 text-cyan-300">✦</span>
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
