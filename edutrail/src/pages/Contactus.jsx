// import React from "react"
// import { FaEnvelope, FaComments, FaArrowRight } from "react-icons/fa"

// import Footer from "../components/common/footer"
// import ContactDetails from "../components/common/ContactPage/ConatctDetails"
// import ContactForm from "../components/core/Aboutpage/ContactForm"
// import ReviewSlider from "../components/common/ReviewSlider"

// const Contact = () => {
//   return (
//     <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-slate-100">
//       {/* Ambient background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/[0.12] blur-[130px]" />
//         <div className="absolute right-[-8rem] top-[30rem] h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[130px]" />
//         <div className="absolute bottom-40 left-[-8rem] h-80 w-80 rounded-full bg-indigo-500/[0.08] blur-[120px]" />
//       </div>

//       {/* Hero */}
//       <section className="relative px-4 pb-6 pt-14 sm:px-6 sm:pt-20">
//         <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl shadow-[0_0_15px_rgba(34,211,238,0.15)]">
//             <FaComments className="text-cyan-300" />
//             Let's Connect
//           </div>

//           <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
//             Let's Start a{" "}
//             <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
//               Conversation
//             </span>
//           </h1>

//           <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
//             Have a question, an idea, or need help with your learning journey?
//             We'd love to hear from you. Reach out and let's build something great together.
//           </p>
//         </div>
//       </section>

//       {/* Contact content */}
//       <section className="relative mx-auto w-11/12 max-w-7xl py-12 sm:py-16">
//         <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
//           {/* Contact details */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-8 backdrop-blur-2xl lg:col-span-2 shadow-xl">
//             <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[80px]" />

//             <div className="relative">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-950/40 text-xl text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
//                 <FaEnvelope />
//               </div>

//               <h2 className="text-2xl font-bold text-white">
//                 Get in Touch
//               </h2>

//               <p className="mt-2 text-sm leading-relaxed text-slate-400">
//                 Whether you're exploring EduTrail or already learning with us,
//                 we're ready to help you take the next step.
//               </p>

//               <div className="my-6 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/[0.08] to-transparent" />

//               <ContactDetails />
//             </div>
//           </div>

//           {/* Contact form */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-6 sm:p-8 backdrop-blur-2xl lg:col-span-3 shadow-xl">
//             <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[100px]" />

//             <div className="relative">
//               <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
//                 Direct Message
//               </p>

//               <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
//                 How Can We Help You?
//               </h2>

//               <p className="mt-2 text-sm text-slate-400">
//                 Fill out the form below and our team will get back to you shortly.
//               </p>

//               <div className="my-6 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/[0.08] to-transparent" />

//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="relative overflow-hidden border-t border-white/[0.08] px-4 py-16 sm:px-6 sm:py-24">
//         <div className="relative mx-auto w-full max-w-7xl">
//           <div className="mb-10 text-center">
//             <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
//               Community Voices
//             </p>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
//               Real Learners. Real Experiences.
//             </h2>
//           </div>

//           <div className="rounded-3xl border border-white/[0.08] bg-[#0b1224]/60 p-3 sm:p-6 backdrop-blur-2xl shadow-xl">
//             <ReviewSlider />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default Contact



import React from "react";
import { FaEnvelope, FaComments } from "react-icons/fa";

import Footer from "../components/common/footer";
import ContactDetails from "../components/common/ContactPage/ConatctDetails";
import ContactForm from "../components/core/Aboutpage/ContactForm";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#09090b] font-sans text-zinc-100">
      {/* Subtle background glow — matching About.jsx */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.10] blur-[150px]" />
        <div className="absolute -right-40 top-[30%] h-[550px] w-[550px] rounded-full bg-indigo-600/[0.08] blur-[160px]" />
        <div className="absolute -left-40 top-[65%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.06] blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/[0.08] blur-[160px]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:pt-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200 sm:text-xs">
            <FaComments className="text-violet-300" />
            Let's Connect
          </div>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-7xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Have a question, an idea, or need help with your learning journey?
            We'd love to hear from you. Reach out and let's build something
            great together.
          </p>

          <div className="mt-8 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-violet-400/80" />
            <span className="h-1 w-2 rounded-full bg-violet-400/40" />
            <span className="h-1 w-1 rounded-full bg-violet-400/20" />
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="relative mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-5 lg:gap-7">
          {/* Contact details */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/20 sm:p-7 lg:col-span-2 lg:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.10]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.10] text-lg text-violet-300 transition-all duration-300 group-hover:bg-violet-500/[0.15]">
                <FaEnvelope />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                Get in Touch
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                We're Here to Help
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Whether you're exploring EduTrail or already learning with us,
                we're ready to help you take the next step.
              </p>

              <div className="my-7 h-px bg-gradient-to-r from-violet-400/30 via-white/[0.08] to-transparent" />

              <ContactDetails />
            </div>
          </div>

          {/* Contact form */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/20 sm:p-7 lg:col-span-3 lg:p-8">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/[0.05] blur-3xl transition-all duration-500 group-hover:bg-indigo-500/[0.08]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                  Direct Message
                </p>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-zinc-500">
                  We typically reply soon
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                How Can We Help You?
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Share what's on your mind, and our team will get back to you.
              </p>

              <div className="my-7 h-px bg-gradient-to-r from-violet-400/30 via-white/[0.08] to-transparent" />

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative mt-8 overflow-hidden border-t border-white/[0.07] px-4 py-16 sm:mt-12 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.05),transparent_65%)]" />

        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
              Community Voices
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white [text-wrap:balance] sm:text-4xl lg:text-5xl">
              Real Learners.{" "}
              <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                Real Experiences.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Discover what our learning community has to say about their
              EduTrail journey.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013]/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6 lg:p-8">
            <ReviewSlider />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Contact;
