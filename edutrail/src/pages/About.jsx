// import React from "react"
// import Aboutimg1 from "../assets/images/aboutus1.webp"
// import Aboutimg2 from "../assets/images/aboutus2.webp"
// import Aboutimg3 from "../assets/images/aboutus3.webp"
// import Quote from "../components/core/Aboutpage/Quote"
// import Visionimg from "../assets/images/FoundingStory.png"
// import StatsComponents from "../components/core/Aboutpage/StatsComponents"
// import GridLearning from "../components/core/Aboutpage/GridLearn"
// import ContactForm from "../components/core/Aboutpage/ContactForm"
// import Footer from "../components/common/footer"
// import ReviewSlider from "../components/common/ReviewSlider"

// const About = () => {
//   return (
//     <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative isolate overflow-hidden bg-[#050816] text-white">
//         {/* Layered ambient lighting */}
//         <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//           <div className="absolute left-1/2 -top-32 h-[30rem] w-[45rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
//           <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
//           <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-[120px]" />
//         </div>

//         <div className="relative mx-auto flex w-11/12 max-w-6xl flex-col items-center gap-8 pb-20 pt-12 sm:pt-20 text-center sm:pb-28">
//           {/* Eyebrow badge */}
//           <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
//             Learning Without Limits
//           </span>

//           {/* Fixed & Balanced Headline */}
//           <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] [text-wrap:balance]">
//             Driving Innovation in Online Education for a{" "}
//             <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
//               Brighter Future
//             </span>
//           </h1>

//           {/* Real, Engaging EduTrail Copy (Replaced Lorem Ipsum) */}
//           <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 [text-wrap:balance]">
//             At EduTrail, we are pioneering a new paradigm in digital education.
//             We believe mastering technology shouldn't mean drowning in passive video lectures.
//             By uniting industry-crafted curriculums, interactive coding labs, and dedicated mentorship,
//             we empower every learner to navigate their career trail with clarity and real-world mastery.
//           </p>

//           {/* Quick value props */}
//           <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
//             <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
//               ✦ Practical Engineering
//             </span>
//             <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
//               ✦ Industry Mentorship
//             </span>
//             <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
//               ✦ Self-Paced Mastery
//             </span>
//           </div>

//           {/* Image Showcase Grid */}
//           <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
//             {[Aboutimg1, Aboutimg2, Aboutimg3].map((image, index) => (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-1.5 shadow-[0_15px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] ${
//                   index === 1 ? "sm:-translate-y-4" : ""
//                 }`}
//               >
//                 <img
//                   src={image}
//                   alt={`EduTrail learning experience ${index + 1}`}
//                   className="h-52 sm:h-56 lg:h-64 w-full rounded-xl object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= QUOTE SECTION ================= */}
//       <section className="border-y border-white/[0.08] bg-[#070b1a]/80 py-16">
//         <div className="mx-auto flex w-11/12 max-w-5xl flex-col justify-center text-center">
//           <Quote />
//         </div>
//       </section>

//       {/* ================= FOUNDING STORY & VISION/MISSION ================= */}
//       <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
//         <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
//         <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[120px]" />

//         <div className="relative mx-auto flex max-w-6xl flex-col gap-20">
//           {/* How EduTrail Started */}
//           <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
//             <div className="flex flex-col gap-5 lg:w-[55%]">
//               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
//                 Our Genesis
//               </span>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
//                 How EduTrail Started
//               </h2>
//               <div className="text-sm sm:text-base leading-relaxed text-slate-300 space-y-4">
//                 <p>
//                   EduTrail began with a fundamental dream: to dismantle the barrier between theoretical coursework and tangible software capability. As developers ourselves, we experienced firsthand how traditional platforms left learners stranded after "finishing" a course, ill-equipped for modern tech stacks.
//                 </p>
//                 <p>
//                   EduTrail was forged through countless iterations to deliver curated curriculum tracks that simulate production workflows. We don't just teach code—we build problem-solving muscle, technical confidence, and resilient mindsets, trail by trail.
//                 </p>
//               </div>
//             </div>

//             <div className="group relative w-full lg:w-[40%]">
//               <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-indigo-500/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
//               <div className="relative rounded-2xl border border-white/[0.12] bg-[#0b1224]/80 p-2 shadow-2xl backdrop-blur-xl">
//                 <img
//                   src={Visionimg}
//                   alt="EduTrail founding story"
//                   className="h-auto w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.02]"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Vision & Mission Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Vision */}
//             <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1224]/70 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
//               <div className="h-1 w-16 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
//               <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-200 to-sky-300 bg-clip-text text-transparent">
//                 Our Vision
//               </h3>
//               <p className="text-sm sm:text-base leading-relaxed text-slate-300">
//                 To democratize elite technology education and ensure that any motivated learner, regardless of background, can gain the skills, confidence, and portfolio needed to shape the future of technology.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1224]/70 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
//               <div className="h-1 w-16 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
//               <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">
//                 Our Mission
//               </h3>
//               <p className="text-sm sm:text-base leading-relaxed text-slate-300">
//                 To cultivate a hands-on learning ecosystem combining adaptive learning paths, expert instruction, and collaborative community, transforming learners into high-impact innovators and leaders.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= STATS SECTION ================= */}
//       <StatsComponents />

//       {/* ================= LEARNING GRID & CONTACT ================= */}
//       <section className="mx-auto mt-16 flex w-11/12 max-w-6xl flex-col justify-between gap-12 text-white">
//         <GridLearning />
//         <ContactForm />
//       </section>

//       {/* ================= REVIEWS SECTION ================= */}
//       <section className="relative mx-auto my-20 flex w-11/12 max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070b1a]/80 px-4 py-12 text-white shadow-2xl sm:px-8">
//         <div className="text-center">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
//             Social Proof
//           </p>
//           <h2 className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
//             Reviews from Other Learners
//           </h2>
//         </div>
//         <ReviewSlider />
//       </section>

//       {/* FOOTER */}
//       <Footer />
//     </main>
//   )
// }

// export default About



import React from "react";
import Aboutimg1 from "../assets/images/aboutus1.webp";
import Aboutimg2 from "../assets/images/aboutus2.webp";
import Aboutimg3 from "../assets/images/aboutus3.webp";
import Quote from "../components/core/Aboutpage/Quote";
import Visionimg from "../assets/images/FoundingStory.png";
import StatsComponents from "../components/core/Aboutpage/StatsComponents";
import GridLearning from "../components/core/Aboutpage/GridLearn";
import ContactForm from "../components/core/Aboutpage/ContactForm";
import Footer from "../components/common/footer";
import ReviewSlider from "../components/common/ReviewSlider";

const About = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#09090b] font-sans text-[#ededed]">
      {/* Global background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.12] blur-[150px]" />
        <div className="absolute -right-40 top-[25%] h-[550px] w-[550px] rounded-full bg-indigo-600/[0.10] blur-[160px]" />
        <div className="absolute -left-40 top-[55%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.08] blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-violet-500/[0.10] blur-[160px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden">
        {/* Hero glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[140px]" />
          <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-indigo-500/[0.10] blur-[120px]" />
        </div>

        <div className="relative mx-auto flex w-11/12 max-w-[1200px] flex-col items-center gap-8 pb-20 pt-12 text-center sm:pb-28 sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            Learning Without Limits
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-[#ededed] [text-wrap:balance] sm:text-5xl md:text-6xl lg:text-7xl">
            Driving Innovation in Online Education for a{" "}
            <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-zinc-400 bg-clip-text font-normal text-transparent">
              Brighter Future
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-400 [text-wrap:balance] sm:text-base md:text-lg">
            At EduTrail, we are pioneering a new paradigm in digital education.
            We believe mastering technology shouldn't mean drowning in passive
            video lectures. By uniting industry-crafted curriculums,
            interactive coding labs, and dedicated mentorship, we empower
            every learner to navigate their career trail with clarity and
            real-world mastery.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 sm:text-sm">
            <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.05]">
              ✦ Practical Engineering
            </span>
            <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.05]">
              ✦ Industry Mentorship
            </span>
            <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.05]">
              ✦ Self-Paced Mastery
            </span>
          </div>

          {/* Image showcase */}
          <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
            {[Aboutimg1, Aboutimg2, Aboutimg3].map((image, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl border border-white/[0.09] bg-white/[0.03] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_70px_rgba(139,92,246,0.12)] ${
                  index === 1 ? "sm:-translate-y-4" : ""
                }`}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`EduTrail learning experience ${index + 1}`}
                    className="h-52 w-full rounded-xl object-cover transition duration-700 group-hover:scale-105 sm:h-56 lg:h-64"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[130px]" />

        <div className="relative mx-auto flex w-11/12 max-w-5xl flex-col justify-center text-center">
          <Quote />
        </div>
      </section>

      {/* FOUNDING STORY, VISION & MISSION */}
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-20">
          {/* Founding story */}
          <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
            <div className="flex flex-col gap-5 lg:w-[55%]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Our Genesis
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                How EduTrail Started
              </h2>

              <div className="space-y-4 text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
                <p>
                  EduTrail began with a fundamental dream: to dismantle the
                  barrier between theoretical coursework and tangible software
                  capability. As developers ourselves, we experienced firsthand
                  how traditional platforms left learners stranded after
                  "finishing" a course, ill-equipped for modern tech stacks.
                </p>

                <p>
                  EduTrail was forged through countless iterations to deliver
                  curated curriculum tracks that simulate production workflows.
                  We don't just teach code—we build problem-solving muscle,
                  technical confidence, and resilient mindsets, trail by trail.
                </p>
              </div>
            </div>

            <div className="group relative w-full lg:w-[40%]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-500/[0.12] to-indigo-500/[0.08] opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111114] p-2 shadow-2xl transition duration-300 hover:border-violet-400/30">
                <img
                  src={Visionimg}
                  alt="EduTrail founding story"
                  className="h-auto w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Vision & mission */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.035] sm:p-9">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-[60px] transition duration-500 group-hover:bg-violet-500/[0.14]" />
              <div className="relative h-[2px] w-12 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400" />
              <h3 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Our Vision
              </h3>
              <p className="relative text-sm leading-relaxed text-zinc-400 sm:text-base">
                To democratize elite technology education and ensure that any
                motivated learner, regardless of background, can gain the
                skills, confidence, and portfolio needed to shape the future
                of technology.
              </p>
            </div>

            <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/[0.035] sm:p-9">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.08] blur-[60px] transition duration-500 group-hover:bg-indigo-500/[0.14]" />
              <div className="relative h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
              <h3 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Our Mission
              </h3>
              <p className="relative text-sm leading-relaxed text-zinc-400 sm:text-base">
                To cultivate a hands-on learning ecosystem combining adaptive
                learning paths, expert instruction, and collaborative
                community, transforming learners into high-impact innovators
                and leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[700px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]" />
        <StatsComponents />
      </div>

      {/* LEARNING GRID & CONTACT */}
      <section className="relative isolate mx-auto mt-16 flex w-11/12 max-w-[1200px] flex-col justify-between gap-12">
        <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[120px]" />
        <GridLearning />
        <ContactForm />
      </section>

      {/* REVIEWS */}
      <section className="relative isolate mx-auto my-20 flex w-11/12 max-w-[1200px] flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/80 px-4 py-12 text-[#ededed] shadow-2xl backdrop-blur-xl sm:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-600/[0.12] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-indigo-600/[0.08] blur-[100px]" />

        <div className="relative text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Social Proof
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reviews from Other Learners
          </h2>
        </div>

        <div className="relative w-full">
          <ReviewSlider />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default About;

