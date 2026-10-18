// import React from "react"

// import Footer from "../components/common/footer"
// import ContactDetails from "../components/common/ContactPage/ConatctDetails"
// import ContactForm from "../components/core/Aboutpage/ContactForm"
// import ReviewSlider from "../components/common/ReviewSlider"


// const Contact = () => {
//   return (
//     <div>
//       <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
//         {/* Contact Details */}
//         <div className="lg:w-[40%]">
//           <ContactDetails />
//         </div>

//         {/* Contact Form */}
//         <div className="lg:w-[60%]">
//           <ContactForm />
//         </div>
//       </div>
//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Reviws from Other Learner */}
//         <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1>
//         <ReviewSlider/>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Contact


import React from "react";

import Footer from "../components/common/footer";
import ContactDetails from "../components/common/ContactPage/ConatctDetails";
import ContactForm from "../components/core/Aboutpage/ContactForm";
import ReviewSlider from "../components/common/ReviewSlider";

import {
  FaEnvelope,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070B18] text-slate-100">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/[0.12] blur-[130px]" />
        <div className="absolute right-[-8rem] top-[30rem] h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute bottom-40 left-[-8rem] h-80 w-80 rounded-full bg-indigo-500/[0.08] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(125,211,252,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.4)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-6 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-xl">
            <FaComments className="text-cyan-300" />
            Let's connect
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Have a question, an idea, or need help with your learning journey?
            We'd love to hear from you. Reach out and let's build something
            great together.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span className="mr-2 text-cyan-300">✦</span>
              We're here to help
            </span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span className="mr-2 text-blue-300">✦</span>
              Your feedback matters
            </span>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="relative mx-auto w-11/12 max-w-maxContent py-12 sm:py-16">

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">

          {/* Contact details */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#101C35]/90 via-[#0C152A]/95 to-[#090F20]/95 p-5 shadow-2xl shadow-blue-950/20 backdrop-blur-2xl sm:p-8 lg:col-span-2">

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[80px]" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-xl text-cyan-300">
                <FaEnvelope />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Get in Touch
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Whether you're exploring EduTrail or already learning with us,
                we're ready to help you take the next step.
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/[0.08] to-transparent" />

              <div className="mt-7">
                <ContactDetails />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/[0.12] bg-gradient-to-br from-[#0D1730]/95 to-[#090F20]/95 p-5 shadow-2xl shadow-blue-950/25 backdrop-blur-2xl sm:p-8 lg:col-span-3">

            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[100px]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Send us a message
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Fill out the form below, and we'll get back to you.
              </p>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-blue-400/30 via-white/[0.08] to-transparent" />

              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

        <div className="relative mx-auto w-full max-w-maxContent">

          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Community voices
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Real Learners.
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Real Experiences.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Discover what our learners think about their EduTrail journey
              and how they're growing their skills.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#101A31]/80 to-[#080E1D]/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-6">
            <ReviewSlider />
          </div>

          {/* Closing CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-300/[0.12] bg-gradient-to-r from-blue-600/[0.10] via-cyan-500/[0.06] to-indigo-500/[0.10] p-6 text-center backdrop-blur-xl sm:flex-row sm:p-8 sm:text-left">

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Your next chapter starts here.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Keep learning, keep building, and keep moving forward.
              </p>
            </div>

            <a
              href="mailto:"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.14]"
            >
              Get in Touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
