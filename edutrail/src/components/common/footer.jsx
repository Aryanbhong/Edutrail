import React from "react"
import { Link } from "react-router-dom"
import { FooterLink2 } from "../../data/footer.links"
import { FaCopyright, FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa"

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
const Resources = [
  "Articles", "Blog", "Chart Sheet", "Code challenges",
  "Docs", "Projects", "Videos", "Workspaces"
]
const Plans = ["Paid memberships", "For students", "Business solutions"]
const Community = ["Forums", "Chapters", "Events"]

const Footer = () => {
  return (
    <footer className="relative bg-[#040612] border-t border-white/[0.08] text-slate-400 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />
      
      <div className="w-11/12 max-w-7xl mx-auto py-16 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between border-b border-white/[0.06] pb-12 gap-10">
          
          {/* Left Column */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
                <h1 className="text-2xl font-extrabold font-sans tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)] mb-4 pr-1">
                  Edu<span className="text-cyan-400">Trail</span>
                </h1>
              </Link>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Company</h2>
              <div className="flex flex-col gap-2 text-sm">
                {["About", "Careers", "Affiliates"].map((item, i) => (
                  <Link
                    key={i}
                    to={item === "About" ? "/about" : `/${item.toLowerCase()}`}
                    className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Social Icons with Neon Glass Pill styling */}
              <div className="flex gap-2.5 mt-5 text-sm">
                {[
                  { Icon: FaFacebook, href: "#", label: "Facebook" },
                  { Icon: FaGoogle, href: "#", label: "Google" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                  { Icon: FaYoutube, href: "#", label: "YouTube" },
                ].map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    aria-label={label}
                    className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Resources</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Resources.map((item, i) => (
                  <Link
                    key={i}
                    to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3 text-sm">Support</h2>
              <Link
                to="/contact"
                className="text-sm hover:text-cyan-300 transition-all duration-200 block hover:translate-x-1"
              >
                Help Center & Support
              </Link>
            </div>

            <div>
              <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Plans</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Plans.map((item, i) => (
                  <Link
                    key={i}
                    to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3 text-sm">Community</h2>
              <div className="flex flex-col gap-2 text-sm">
                {Community.map((item, i) => (
                  <Link
                    key={i}
                    to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (FooterLink2) */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FooterLink2.map((section, i) => (
              <div key={i}>
                <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">{section.title}</h2>
                <div className="flex flex-col gap-2 text-sm">
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-8 gap-4">
          <div className="flex gap-6">
            {BottomFooter.map((item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-cyan-300 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <FaCopyright className="text-cyan-400" />
            <span>{new Date().getFullYear()} EduTrail. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
