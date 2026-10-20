import React from "react"
import Aboutimg1 from "../assets/images/aboutus1.webp"
import Aboutimg2 from "../assets/images/aboutus2.webp"
import Aboutimg3 from "../assets/images/aboutus3.webp"
import Quote from "../components/core/Aboutpage/Quote"
import Visionimg from "../assets/images/FoundingStory.png"
import StatsComponents from "../components/core/Aboutpage/StatsComponents"
import GridLearning from "../components/core/Aboutpage/GridLearn"
import ContactForm from "../components/core/Aboutpage/ContactForm"
import Footer from "../components/common/footer"
import ReviewSlider from "../components/common/ReviewSlider"

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-[#050816] text-white">
        {/* Layered ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 -top-32 h-[30rem] w-[45rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
          <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex w-11/12 max-w-6xl flex-col items-center gap-8 pb-20 pt-12 sm:pt-20 text-center sm:pb-28">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            Learning Without Limits
          </span>

          {/* Fixed & Balanced Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] [text-wrap:balance]">
            Driving Innovation in Online Education for a{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              Brighter Future
            </span>
          </h1>

          {/* Real, Engaging EduTrail Copy (Replaced Lorem Ipsum) */}
          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 [text-wrap:balance]">
            At EduTrail, we are pioneering a new paradigm in digital education.
            We believe mastering technology shouldn't mean drowning in passive video lectures.
            By uniting industry-crafted curriculums, interactive coding labs, and dedicated mentorship,
            we empower every learner to navigate their career trail with clarity and real-world mastery.
          </p>

          {/* Quick value props */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              ✦ Practical Engineering
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              ✦ Industry Mentorship
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              ✦ Self-Paced Mastery
            </span>
          </div>

          {/* Image Showcase Grid */}
          <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
            {[Aboutimg1, Aboutimg2, Aboutimg3].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-1.5 shadow-[0_15px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] ${
                  index === 1 ? "sm:-translate-y-4" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`EduTrail learning experience ${index + 1}`}
                  className="h-52 sm:h-56 lg:h-64 w-full rounded-xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE SECTION ================= */}
      <section className="border-y border-white/[0.08] bg-[#070b1a]/80 py-16">
        <div className="mx-auto flex w-11/12 max-w-5xl flex-col justify-center text-center">
          <Quote />
        </div>
      </section>

      {/* ================= FOUNDING STORY & VISION/MISSION ================= */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[120px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-20">
          {/* How EduTrail Started */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-5 lg:w-[55%]">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
                How EduTrail Started
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-slate-300 space-y-4">
                <p>
                  EduTrail began with a fundamental dream: to dismantle the barrier between theoretical coursework and tangible software capability. As developers ourselves, we experienced firsthand how traditional platforms left learners stranded after "finishing" a course, ill-equipped for modern tech stacks.
                </p>
                <p>
                  EduTrail was forged through countless iterations to deliver curated curriculum tracks that simulate production workflows. We don't just teach code—we build problem-solving muscle, technical confidence, and resilient mindsets, trail by trail.
                </p>
              </div>
            </div>

            <div className="group relative w-full lg:w-[40%]">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-indigo-500/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0b1224]/80 p-2 shadow-2xl backdrop-blur-xl">
                <img
                  src={Visionimg}
                  alt="EduTrail founding story"
                  className="h-auto w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1224]/70 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              <div className="h-1 w-16 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-200 to-sky-300 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                To democratize elite technology education and ensure that any motivated learner, regardless of background, can gain the skills, confidence, and portfolio needed to shape the future of technology.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1224]/70 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              <div className="h-1 w-16 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 to-cyan-200 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                To cultivate a hands-on learning ecosystem combining adaptive learning paths, expert instruction, and collaborative community, transforming learners into high-impact innovators and leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <StatsComponents />

      {/* ================= LEARNING GRID & CONTACT ================= */}
      <section className="mx-auto mt-16 flex w-11/12 max-w-6xl flex-col justify-between gap-12 text-white">
        <GridLearning />
        <ContactForm />
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="relative mx-auto my-20 flex w-11/12 max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070b1a]/80 px-4 py-12 text-white shadow-2xl sm:px-8">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Social Proof
          </p>
          <h2 className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
            Reviews from Other Learners
          </h2>
        </div>
        <ReviewSlider />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default About
