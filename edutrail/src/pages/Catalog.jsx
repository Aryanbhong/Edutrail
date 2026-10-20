import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FaArrowRight, FaGraduationCap } from "react-icons/fa"

import Footer from "../components/common/footer"
import getCatalogPageData from "../services/opreations/PageAndComponent"
import { fetchCourseCategories } from "../services/opreations/courseDetails"
import CourseSlider from "../components/core/catalog.jsx/CourseSlider"
import Course_Card from "../components/core/catalog.jsx/Course_Card"

const Catalog = () => {
  const { catalogName } = useParams()

  const [catalogPageData, setCatalogPageData] = useState(null)
  const [categoryId, setCategoryId] = useState("")
  const [active, setActive] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch the selected category
  useEffect(() => {
    let cancelled = false

    const getCategoryDetails = async () => {
      setLoading(true)
      setError("")
      setCatalogPageData(null)
      setCategoryId("")

      try {
        const categories = await fetchCourseCategories()

        const selectedCategory = categories?.find(
          (category) =>
            category.name.split(" ").join("-").toLowerCase() === catalogName
        )

        if (!selectedCategory) {
          if (!cancelled) {
            setError("We couldn't find this course category.")
            setLoading(false)
          }
          return
        }

        if (!cancelled) {
          setCategoryId(selectedCategory._id)
        }
      } catch (err) {
        console.error("Unable to fetch course categories:", err)

        if (!cancelled) {
          setError("Unable to load course categories. Please try again.")
          setLoading(false)
        }
      }
    }

    getCategoryDetails()

    return () => {
      cancelled = true
    }
  }, [catalogName])

  // Fetch data for the selected category
  useEffect(() => {
    if (!categoryId) return

    let cancelled = false

    const getCategoryData = async () => {
      setLoading(true)
      setError("")

      try {
        const response = await getCatalogPageData(categoryId)

        if (!cancelled) {
          setCatalogPageData(response)
          setLoading(false)
        }
      } catch (err) {
        console.error("Unable to fetch catalog page data:", err)

        if (!cancelled) {
          setError("Unable to load courses. Please try again later.")
          setCatalogPageData(null)
          setLoading(false)
        }
      }
    }

    getCategoryData()

    return () => {
      cancelled = true
    }
  }, [categoryId])

  const selectedCategory = catalogPageData?.data?.selectedCategory
  const differentCategory = catalogPageData?.data?.differentCategory

  const mostSellingCourses =
    catalogPageData?.data?.mostSellingCourses ?? []

  const selectedCourses = selectedCategory?.courses ?? []
  const relatedCourses = differentCategory?.courses ?? []

  const displayedCourses =
    active === 2 &&
    selectedCourses.some((course) => course.createdAt || course.updatedAt)
      ? [...selectedCourses].sort((a, b) => {
          const dateA = new Date(
            a.createdAt || a.updatedAt || 0
          ).getTime()

          const dateB = new Date(
            b.createdAt || b.updatedAt || 0
          ).getTime()

          return dateB - dateA
        })
      : selectedCourses

  const sectionHeading =
    active === 1 ? "Courses to get you started" : "Recently Added Courses"

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      {/* Ambient neon background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.10] blur-[140px]" />
        <div className="absolute left-[-12rem] top-[35rem] h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[120px]" />
        <div className="absolute right-[-12rem] top-[75rem] h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[120px]" />
      </div>

      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col gap-6 py-14 sm:py-18 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="transition-colors hover:text-cyan-300">
              Home
            </Link>
            <span className="text-cyan-500/60">/</span>
            <span className="text-cyan-300">Catalog</span>
            {selectedCategory?.name && (
              <>
                <span className="text-cyan-500/60">/</span>
                <span className="text-slate-200">{selectedCategory.name}</span>
              </>
            )}
          </nav>

          {/* Category badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            Curated Skill Path
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              {selectedCategory?.name || "Explore Courses"}
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Learn today. Lead tomorrow.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              {selectedCategory?.description ||
                "Discover practical courses, sharpen your skills, and turn your curiosity into real-world expertise."}
            </p>
          </div>

          {/* Quick stats pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "✦ Expert-Led Curriculum",
              "✦ Real-World Code Labs",
              "✦ Self-Paced Progression",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs sm:text-sm text-slate-300 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <section className="mx-auto w-11/12 max-w-7xl py-16">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-[#0b1224]/60 px-6 py-16 text-center backdrop-blur-xl">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
            <h2 className="mt-6 text-lg font-semibold text-white">
              Preparing your classroom...
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Loading courses tailored for this trail
            </p>
          </div>
        </section>
      )}

      {/* Error state */}
      {!loading && error && (
        <section className="mx-auto w-11/12 max-w-7xl py-16">
          <div className="rounded-3xl border border-rose-400/20 bg-rose-950/20 px-6 py-12 text-center backdrop-blur-xl">
            <h2 className="text-xl font-semibold text-white">
              Something went wrong
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              {error}
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-900/60"
            >
              Back to Home
              <FaArrowRight />
            </Link>
          </div>
        </section>
      )}

      {/* Course sections */}
      {!loading && !error && (
        <>
          {/* Featured courses */}
          <section className="mx-auto w-11/12 max-w-7xl py-12 sm:py-16">
            <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Curated for you
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {sectionHeading}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Find a course that matches your curiosity and goals.
                </p>
              </div>

              {/* Tabs */}
              <div
                className="inline-flex w-fit rounded-xl border border-white/[0.08] bg-[#0B1326]/80 p-1.5 shadow-lg backdrop-blur-xl"
                role="tablist"
                aria-label="Course sorting"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === 1}
                  onClick={() => setActive(1)}
                  className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    active === 1
                      ? "border border-cyan-300/30 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Most Popular
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={active === 2}
                  onClick={() => setActive(2)}
                  className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    active === 2
                      ? "border border-cyan-300/30 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Newest
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/70 p-3 sm:p-6 shadow-2xl backdrop-blur-2xl">
              <CourseSlider Courses={displayedCourses} />
            </div>

            {selectedCourses.length === 0 && (
              <p className="mt-5 rounded-2xl border border-white/[0.08] bg-[#0b1224]/50 p-8 text-center text-sm text-slate-400">
                No courses are available in this category yet.
              </p>
            )}
          </section>

          {/* Related category courses */}
          {relatedCourses.length > 0 && (
            <section className="mx-auto w-11/12 max-w-7xl py-8 sm:py-12">
              <div className="mb-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Keep exploring
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Top Courses in Other Categories
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Expand your knowledge with related learning paths.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1224]/70 p-3 sm:p-6 shadow-2xl backdrop-blur-2xl">
                <CourseSlider Courses={relatedCourses} />
              </div>
            </section>
          )}

          {/* Frequently bought */}
          {mostSellingCourses.length > 0 && (
            <section className="mx-auto w-11/12 max-w-7xl pb-20 pt-8 sm:pb-28">
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                  Learner favourites
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Frequently Bought Courses
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Popular picks to help you level up your skills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mostSellingCourses.slice(0, 6).map((course, index) => (
                  <Course_Card
                    key={course?._id || index}
                    course={course}
                    Height="h-[200px]"
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </main>
  )
}

export default Catalog
