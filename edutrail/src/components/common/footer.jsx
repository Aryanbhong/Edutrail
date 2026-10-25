// import React from "react"
// import { Link } from "react-router-dom"
// import { FooterLink2 } from "../../data/footer.links"
// import { FaCopyright, FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa"

// const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
// const Resources = [
//   "Articles", "Blog", "Chart Sheet", "Code challenges",
//   "Docs", "Projects", "Videos", "Workspaces"
// ]
// const Plans = ["Paid memberships", "For students", "Business solutions"]
// const Community = ["Forums", "Chapters", "Events"]

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#040612] border-t border-white/[0.08] text-slate-400 overflow-hidden">
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />
      
//       <div className="w-11/12 max-w-7xl mx-auto py-16 px-4 lg:px-0">
//         <div className="flex flex-col lg:flex-row justify-between border-b border-white/[0.06] pb-12 gap-10">
          
//           {/* Left Column */}
//           <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div>
//               <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
//                 <h1 className="text-2xl font-extrabold font-sans tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.3)] mb-4 pr-1">
//                   Edu<span className="text-cyan-400">Trail</span>
//                 </h1>
//               </Link>
//               <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Company</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {["About", "Careers", "Affiliates"].map((item, i) => (
//                   <Link
//                     key={i}
//                     to={item === "About" ? "/about" : `/${item.toLowerCase()}`}
//                     className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Social Icons with Neon Glass Pill styling */}
//               <div className="flex gap-2.5 mt-5 text-sm">
//                 {[
//                   { Icon: FaFacebook, href: "#", label: "Facebook" },
//                   { Icon: FaGoogle, href: "#", label: "Google" },
//                   { Icon: FaTwitter, href: "#", label: "Twitter" },
//                   { Icon: FaYoutube, href: "#", label: "YouTube" },
//                 ].map(({ Icon, href, label }, idx) => (
//                   <a
//                     key={idx}
//                     href={href}
//                     aria-label={label}
//                     className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-950/30 hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer"
//                   >
//                     <Icon />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Resources</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Resources.map((item, i) => (
//                   <Link
//                     key={i}
//                     to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
//                     className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3 text-sm">Support</h2>
//               <Link
//                 to="/contact"
//                 className="text-sm hover:text-cyan-300 transition-all duration-200 block hover:translate-x-1"
//               >
//                 Help Center & Support
//               </Link>
//             </div>

//             <div>
//               <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">Plans</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Plans.map((item, i) => (
//                   <Link
//                     key={i}
//                     to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
//                     className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               <h2 className="font-semibold text-slate-100 tracking-wide mt-6 mb-3 text-sm">Community</h2>
//               <div className="flex flex-col gap-2 text-sm">
//                 {Community.map((item, i) => (
//                   <Link
//                     key={i}
//                     to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
//                     className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column (FooterLink2) */}
//           <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
//             {FooterLink2.map((section, i) => (
//               <div key={i}>
//                 <h2 className="font-semibold text-slate-100 tracking-wide mb-3 text-sm">{section.title}</h2>
//                 <div className="flex flex-col gap-2 text-sm">
//                   {section.links.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.link}
//                       className="hover:text-cyan-300 transition-all duration-200 hover:translate-x-1"
//                     >
//                       {link.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Bar Strip */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-8 gap-4">
//           <div className="flex gap-6">
//             {BottomFooter.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
//                 className="hover:text-cyan-300 transition-all duration-200"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center gap-2 text-slate-400">
//             <FaCopyright className="text-cyan-400" />
//             <span>{new Date().getFullYear()} EduTrail. All rights reserved.</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




import React from "react"
import { Link } from "react-router-dom"
import { FooterLink2 } from "../../data/footer.links"
import {
  FaCopyright,
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]

const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
]

const Plans = [
  "Paid memberships",
  "For students",
  "Business solutions",
]

const Community = ["Forums", "Chapters", "Events"]

const socialLinks = [
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaGoogle, href: "#", label: "Google" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
]

const linkClass =
  "w-fit text-sm text-zinc-500 transition-all duration-300 ease-out hover:translate-x-1 hover:text-violet-200 focus-visible:text-violet-200 focus-visible:outline-none"

const headingClass =
  "mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200"

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#09090b] font-sans text-zinc-400">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-72 w-72 rounded-full bg-violet-600/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-80 w-80 rounded-full bg-indigo-500/[0.05] blur-[110px]" />

      <div className="mx-auto w-11/12 max-w-[1200px] px-2 py-14 sm:py-16 lg:px-0">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.08] pb-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand and Company */}
          <div className="lg:col-span-3">
            <Link
              to="/"
              aria-label="EduTrail home"
              className="group mb-8 inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <span className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
                Edu
                <span className="font-normal text-zinc-400 transition-colors duration-300 group-hover:text-violet-300">
                  Trail
                </span>
                <span className="ml-0.5 text-violet-400">.</span>
              </span>
            </Link>

            <h2 className={headingClass}>Company</h2>

            <div className="flex flex-col items-start gap-3">
              {["About", "Careers", "Affiliates"].map((item) => (
                <Link
                  key={item}
                  to={item === "About" ? "/about" : `/${item.toLowerCase()}`}
                  className={linkClass}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h2 className={headingClass}>Resources</h2>

            <div className="flex flex-col items-start gap-3">
              {Resources.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className={linkClass}
                >
                  {item}
                </Link>
              ))}
            </div>

            <h2 className={`${headingClass} mt-8`}>Support</h2>

            <Link to="/contact" className={linkClass}>
              Help Center & Support
            </Link>
          </div>

          {/* Plans and Community */}
          <div className="lg:col-span-2">
            <h2 className={headingClass}>Plans</h2>

            <div className="flex flex-col items-start gap-3">
              {Plans.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className={linkClass}
                >
                  {item}
                </Link>
              ))}
            </div>

            <h2 className={`${headingClass} mt-8`}>Community</h2>

            <div className="flex flex-col items-start gap-3">
              {Community.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className={linkClass}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5 lg:gap-x-5">
            {FooterLink2.map((section) => (
              <div key={section.title}>
                <h2 className={headingClass}>{section.title}</h2>

                <div className="flex flex-col items-start gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={`${section.title}-${link.title}`}
                      to={link.link}
                      className={linkClass}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {BottomFooter.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-xs text-zinc-500 transition-colors duration-300 hover:text-violet-200 focus-visible:outline-none focus-visible:text-violet-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <FaCopyright className="text-zinc-600" />
            <span>
              {new Date().getFullYear()} EduTrail. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
