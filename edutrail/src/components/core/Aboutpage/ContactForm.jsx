// // import React from "react";
// // import ContactUsForm from "../../common/ContactPage/ContactForrmSection";

// // const ContactForm = ()=>{
 
// //     return (
// //         <div className="mx-auto">
// //           <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
// //           <p className="text-center text-richblack-300 mt-3">We'd love to here for you, please fill out this form.</p>
           
// //            <div className="mt-12 mx-auto">
// //             <ContactUsForm/>
// //            </div>
         
// //         </div>
// //     )
// // }

// // export default ContactForm

// import React from "react";
// import ContactUsForm from "../../common/ContactPage/ContactForrmSection";

// const ContactForm = () => {
//   return (
//     <div className="relative mx-auto w-full max-w-[650px] rounded-3xl border border-cyan-500/20 bg-[#0B132B]/60 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] overflow-hidden">
      
//       {/* Ambient Top Glow Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

//       {/* Header */}
//       <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
//         Get in Touch
//       </h1>
      
//       <p className="text-center text-sm sm:text-base text-cyan-200/80 mt-3 font-medium">
//         We'd love to hear from you, please fill out this form.
//       </p>

//       {/* Form Container */}
//       <div className="mt-10 mx-auto">
//         <ContactUsForm />
//       </div>

//       {/* Ambient Bottom Glow Accent */}
//       <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 bg-cyan-500/10 blur-2xl pointer-events-none" />
//     </div>
//   );
// };

// export default ContactForm;




import React from "react";
import ContactUsForm from "../../common/ContactPage/ContactForrmSection";

const ContactForm = () => {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-12 font-sans text-white sm:px-6 sm:py-16">
      {/* Subtle ambient glow — matching About.jsx */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-600/[0.06] blur-[130px]" />

      {/* Contact card */}
      <div className="relative mx-auto w-full max-w-[650px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111114]/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/20 sm:p-10 md:p-12">
        {/* Top accent */}
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

        {/* Header */}
        <div className="mx-auto max-w-md text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Contact us
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in <span className="text-violet-300">Touch</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Form */}
        <div className="relative mx-auto mt-8 sm:mt-10">
          <ContactUsForm />
        </div>

        {/* Bottom accent */}
        <div className="mx-auto mt-8 h-px w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </section>
  );
};

export default ContactForm;
