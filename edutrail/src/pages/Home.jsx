import React from "react"
import { Link } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa"

import CButton from "../components/core/Button"
import banner from "../pages/background.mp4"
import CodeBlock from "../components/core/CodeBlock"
import TimeLineSection from "../components/core/TimeLineSection"
import LanguageLearning from "../components/core/LanguageLearningSection"
import Instructor from "../components/core/InstructorSection"
import Footer from "../components/common/footer"
import Explore from "../components/core/ExploreMore"
import ReviewSlider from "../components/common/ReviewSlider"

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate px-4 pb-16 pt-10 sm:px-6 lg:pt-20">
        {/* Layered ambient neon glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute -left-20 top-40 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-60 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          {/* Announcement badge */}
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-white/[0.04] px-5 py-2 text-xs sm:text-sm font-medium text-slate-200 shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-950/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span>Become an Instructor</span>
            <FaArrowAltCircleRight className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Subtitle Eyebrow */}
          <p className="mt-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Your journey. Your future.
          </p>

          {/* Main Hero Headline - Perfectly Centered and Balanced */}
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
            Empowering Minds,<br className="hidden sm:inline" />
            With One{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Trail
            </span>{" "}
            at a{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Time.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 [text-wrap:balance]">
            Whether you are exploring the basics or mastering advanced
            development, EduTrail gives you a structured path to success through
            interactive lessons, real-world projects, and expert mentorship.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center gap-4">
            <CButton active={true} linkto="/signup">
              Get Started Now
            </CButton>
            <CButton active={false} linkto="/login">
              Explore Learning
            </CButton>
          </div>

          {/* Video preview with glass frame */}
          <div className="group relative mt-14 sm:mt-18 w-full max-w-5xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-indigo-600/30 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#090f22]/90 p-2 sm:p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl">
              {/* Browser-style top bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2.5 sm:px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                <div className="mx-auto flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-1 text-xs text-slate-400">
                  <span className="text-cyan-400">✦</span>
                  edutrail.dev/classroom
                </div>
              </div>

              <video
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                src={banner}
                className="aspect-video w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Feature highlights */}
          <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: "⌘",
                title: "Hands-on Learning",
                text: "Build while you learn with interactive workspaces",
              },
              {
                icon: "↗",
                title: "Real-world Projects",
                text: "Turn ideas into production-ready software skills",
              },
              {
                icon: "✦",
                title: "Learn at Your Pace",
                text: "Structured pathways tailored to your ambitions",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-950/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.08] text-xl text-cyan-300 transition group-hover:bg-cyan-400/[0.18]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CODING EXPERIENCE ================= */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 lg:gap-28">
          <CodeBlock
            position="lg:flex-row"
            heading={
              <div className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Unlock Your
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  {" "}Coding Potential{" "}
                </span>
                with Online Courses
              </div>
            }
            subheading="Learn from industry experts, strengthen your fundamentals, and build practical skills through structured online courses designed for your growth."
            ctabtn1={{
              btnText: "Try It Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduTrail Academy</title>
</head>
<body>
  <h1>Welcome to EduTrail!</h1>
  <p>Where your future begins.</p>
</body>
</html>`}
            codeColor="text-yellow-25"
          />

          <CodeBlock
            position="lg:flex-row-reverse"
            heading={
              <div className="w-full text-3xl font-bold leading-tight text-white sm:text-4xl">
                Start
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  {" "}Coding in Seconds
                </span>
              </div>
            }
            subheading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/signup",
              active: false,
            }}
            codeColor="text-yellow-25"
            codeblock={`import React, { useState, useEffect } from "react";

function EduTrail() {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    console.log("Your learning journey starts here!");
  }, []);

  return (
    <div className="trail-card">
      <h2>Welcome to EduTrail</h2>
      <p>Building skills, one trail at a time.</p>
    </div>
  );
}`}
            backgroundGradient={<div className="codeblock2 absolute" />}
          />

          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0c132b]/80 via-[#070b1a]/90 to-[#0b1224]/80 p-4 sm:p-8 lg:p-10 backdrop-blur-xl">
            <Explore />
          </div>
        </div>
      </section>

      {/* ================= SKILLS & LEARNING PATH ================= */}
      <section className="relative overflow-hidden border-y border-white/[0.08] bg-gradient-to-b from-[#070b1a] via-[#090f24] to-[#050816] px-4 py-16 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Learn. Build. Advance.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white [text-wrap:balance]">
              Get the Skills You Need for a{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Career in Demand
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
              Building a competitive career takes more than textbook knowledge.
              Follow your path, develop practical expertise, and prepare for
              opportunities in the technology industry.
            </p>

            <div className="mt-8 flex justify-center">
              <CButton active={true} linkto="/signup">
                <span className="inline-flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowAltCircleRight />
                </span>
              </CButton>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-xl sm:p-8 lg:p-10 shadow-xl">
            <TimeLineSection />
          </div>

          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-[#0b1224]/70 p-4 backdrop-blur-xl sm:mt-16 sm:p-8 lg:p-10 shadow-xl">
            <LanguageLearning />
          </div>
        </div>
      </section>

      {/* ================= INSTRUCTORS & REVIEWS ================= */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16">
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/80 p-4 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-12">
            <Instructor />
          </div>

          <div>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Community Voices
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Reviews from{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Our Learners
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
                Discover what learners have to say about their EduTrail journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-3 backdrop-blur-xl sm:p-6 shadow-xl">
              <ReviewSlider />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default Home
