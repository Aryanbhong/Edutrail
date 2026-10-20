import React, { useEffect, useState, useRef } from "react"
import { Link, matchPath, useLocation } from "react-router-dom"
import { MdSchool } from "react-icons/md"
import { IoCartOutline } from "react-icons/io5"
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io"
import { useSelector } from "react-redux"

import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { NavbarLinks } from "../../data/navbar.links"
import { fetchCourseCategories } from "../../services/opreations/courseDetails"

const Navbar = () => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const totalItems = useSelector((state) => state.cart?.totalItems)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)

  const catalogDropdownRef = useRef(null)

  // Fetch categories for catalog dropdown
  useEffect(() => {
    let isMounted = true
    const getCategories = async () => {
      setLoading(true)
      try {
        const categories = await fetchCourseCategories()
        if (isMounted && categories?.length > 0) {
          setSubLinks(categories)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    getCategories()
    return () => {
      isMounted = false
    }
  }, [])

  // Listen to window scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close catalog and mobile drawer on route change
  useEffect(() => {
    setCatalogOpen(false)
    setMobileMenuOpen(false)
    setMobileCatalogOpen(false)
  }, [location.pathname])

  // Handle outside click & Escape key for catalog dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        catalogDropdownRef.current &&
        !catalogDropdownRef.current.contains(event.target)
      ) {
        setCatalogOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCatalogOpen(false)
        setMobileMenuOpen(false)
      }
    }

    if (catalogOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [catalogOpen])

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const matchRoute = (route) => matchPath({ path: route }, location.pathname)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          : "bg-[#050816]/70 backdrop-blur-xl border-b border-white/[0.08]"
      }`}
    >
      {/* Top subtle ambient neon gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-[4.25rem]">
        {/* ================= ZONE 1: LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
        >
          {/* Glass Logo Tile with Cyan Accent */}
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105">
            <MdSchool className="text-xl sm:text-2xl" />
          </div>

          {/* Crisp Wordmark with unclipped trailing glyph */}
          <span className="font-sans text-xl sm:text-2xl font-extrabold tracking-tight pr-1.5 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            Edu<span className="text-cyan-400">Trail</span>
          </span>
        </Link>

        {/* ================= ZONE 2: DESKTOP NAV LINKS ================= */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-x-1 lg:gap-x-2 text-sm font-medium text-slate-300">
            {NavbarLinks.map((link, index) => {
              const isCatalog = link.title === "Catalog"
              const isActive = isCatalog
                ? matchRoute("/catalog/:catalogName")
                : matchRoute(link?.path)

              if (isCatalog) {
                return (
                  <li key={index} className="relative" ref={catalogDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setCatalogOpen((prev) => !prev)}
                      aria-expanded={catalogOpen}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        isActive
                          ? "text-cyan-300 font-semibold"
                          : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{link.title}</span>
                      <IoIosArrowDown
                        className={`text-xs text-cyan-400 transition-transform duration-200 ${
                          catalogOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff] rounded-full" />
                      )}
                    </button>

                    {/* Catalog Glass Dropdown */}
                    {catalogOpen && (
                      <div className="absolute top-[calc(100%+0.5rem)] left-0 w-64 lg:w-72 rounded-2xl border border-cyan-500/25 bg-[#090f22]/95 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl z-50 animate-fadeIn">
                        {/* Top Hairline Glow */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                        <div className="px-3 py-2 border-b border-white/[0.06] mb-1">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                            Course Categories
                          </p>
                        </div>

                        {loading ? (
                          <div className="py-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            Loading categories...
                          </div>
                        ) : subLinks?.length > 0 ? (
                          <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
                            {subLinks
                              ?.filter((item) => item?.courses?.length > 0)
                              ?.map((subLink, i) => (
                                <Link
                                  key={i}
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  onClick={() => setCatalogOpen(false)}
                                  className="block px-3.5 py-2 text-xs font-medium text-slate-200 rounded-xl hover:text-cyan-300 hover:bg-cyan-950/40 hover:border-cyan-500/30 border border-transparent transition-all duration-150"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                          </div>
                        ) : (
                          <p className="py-4 text-center text-xs text-slate-400">
                            No courses available yet
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className={`relative block px-3.5 py-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "text-cyan-300 font-semibold"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{link.title}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff] rounded-full" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ================= ZONE 3: ACTIONS (CART / AUTH / MOBILE) ================= */}
        <div className="flex items-center gap-3">
          {/* Cart Icon (Students Only) */}
          {user?.accountType !== "Instructor" && (
            <Link
              to="/dashboard/cart"
              className="relative p-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-950/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`Shopping cart with ${totalItems || 0} items`}
            >
              <IoCartOutline className="text-xl sm:text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-cyan-400 text-[10px] font-extrabold text-slate-950 shadow-[0_0_10px_#00f0ff] animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Desktop Auth Buttons */}
          {!token && (
            <div className="hidden sm:flex items-center gap-2.5">
              <Link to="/login">
                <button
                  type="button"
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 border border-white/[0.12] bg-white/[0.04] rounded-xl backdrop-blur-md transition-all duration-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95 cursor-pointer"
                >
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-95 cursor-pointer"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Profile Dropdown if logged in */}
          {token && <ProfileDropDown />}

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {mobileMenuOpen ? (
              <IoMdClose className="text-2xl text-cyan-400" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE GLASS SLIDE-IN DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden animate-fadeIn">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-sm ml-auto h-[calc(100vh-4rem)] bg-[#070b1a]/95 border-l border-white/[0.1] backdrop-blur-2xl p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              {/* Mobile Nav Links */}
              <div className="space-y-1">
                <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  Navigation
                </p>

                {NavbarLinks.map((link, idx) => {
                  if (link.title === "Catalog") {
                    return (
                      <div key={idx} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileCatalogOpen((prev) => !prev)}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl text-slate-200 hover:bg-white/[0.04] hover:text-cyan-300 transition-all"
                        >
                          <span>Catalog</span>
                          <IoIosArrowDown
                            className={`text-xs text-cyan-400 transition-transform ${
                              mobileCatalogOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileCatalogOpen && (
                          <div className="pl-4 space-y-1 border-l-2 border-cyan-500/20 my-1 ml-4">
                            {subLinks
                              ?.filter((item) => item?.courses?.length > 0)
                              ?.map((subLink, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  const active = matchRoute(link.path)
                  return (
                    <Link
                      key={idx}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                        active
                          ? "bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                          : "text-slate-200 hover:bg-white/[0.04] hover:text-cyan-300"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            {!token && (
              <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    type="button"
                    className="w-full py-3 text-sm font-semibold text-slate-200 border border-white/[0.12] bg-white/[0.04] rounded-xl hover:border-cyan-400/60 hover:text-cyan-300 transition-all"
                  >
                    Log in
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    type="button"
                    className="w-full py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
