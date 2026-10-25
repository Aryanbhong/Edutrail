// // import { useEffect, useRef, useState } from "react"
// // import { useDropzone } from "react-dropzone"
// // import { FiUploadCloud } from "react-icons/fi"
// // import { useSelector } from "react-redux"
// // import ReactPlayer from "react-player"


// // const Upload = ({
// //   name,
// //   label,
// //   register,
// //   setValue,
// //   errors,
// //   video=false ,
// //   viewData = null,
// //   editData = null,
// // }) => {
  
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [previewSource, setPreviewSource] = useState(
// //     viewData ? viewData : editData ? editData : ""
// //   );
// //   const inputRef = useRef(null);

// //   const onDrop = (acceptedFiles) => {
// //     const file = acceptedFiles[0];
// //     console.log("the reason merko...",file);
// //     console.log(file.type)
// //    const data =URL.createObjectURL(file);
// //    console.log(" url ban raha hai yaha nahi ",data);
// //     if (file) {
// //       previewFile(file);
// //       setSelectedFile(file);
// //     }
// //   };

// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
// //     accept: !video
// //       ? { "image/*": [".jpeg", ".jpg", ".png"] }
// //       : { "video/*": [".mp4"] },
// //     // accept: video ? '.mp4' : '.jpeg,.jpg,.png',
// //     onDrop,
// //   });
// //  if(video){
// //   console.log(" true video to hai",video)
// //  }
// //   const previewFile = (file) => {
   
// //     const reader = new FileReader();
// //     reader.readAsDataURL(file)
// //     reader.onloadend=()=>{
// //       console.log("the file url shayad ", reader.result);
// //       setPreviewSource(reader.result)
// //     }
    
// //   };

// //   useEffect(() => {
// //     register(name, { required: true });
// //   }, [register]);

// //   useEffect(() => {
// //     setValue(name, selectedFile);
    
// //   }, [selectedFile, setValue]);
// //  console.log("gaya sub section ke pass");
// //   return (
// //     <div className="flex flex-col space-y-2">
// //       <label className="text-sm text-richblack-5" htmlFor={name}>
// //         {label} {!viewData && <sup className="text-pink-200">*</sup>}
// //       </label>
// //       <div
// //         className={`${
// //           isDragActive ? "bg-richblack-600" : "bg-richblack-700"
// //         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
// //       >
// //         {previewSource ? (
// //           <div className="flex w-full flex-col p-6">
// //             {!video ? (
// //               <img
// //                 src={previewSource}
// //                 alt="Preview"
// //                 className="h-full w-full rounded-md object-cover"
// //               />
// //             ) : (
// //               <ReactPlayer url={previewSource} controls width="100%" height="100%" />
// //             )}
// //             {!viewData && (
// //               <button
// //                 type="button"
// //                 onClick={() => {
// //                   setPreviewSource("");
// //                   setSelectedFile(null);
// //                   setValue(name, null);
// //                 }}
// //                 className="mt-3 text-richblack-400 underline"
// //               >
// //                 Cancel
// //               </button>
// //             )}
// //           </div>
// //         ) : (
// //           <div
// //             className="flex w-full flex-col items-center p-6"
// //             {...getRootProps()}
// //           >
// //             <input {...getInputProps()} />
// //             <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
// //               <FiUploadCloud className="text-2xl text-yellow-50" />
// //             </div>
// //             <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
// //               Drag and drop an {!video ? "image" : "video"}, or click to{" "}
// //               <span className="font-semibold text-yellow-50">Browse</span> a file
// //             </p>
// //             <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
// //               <li>Aspect ratio 16:9</li>
// //               <li>Recommended size 1024x576</li>
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //       {errors[name] && (
// //         <span className="ml-2 text-xs tracking-wide text-pink-200">
// //           {label} is required
// //         </span>
// //       )}
// //     </div>
// //   );
// // };


// // export default Upload


// //  // if(video){
// //     //  setPreviewSource(URL.createObjectURL(file));
    
// //     // } else{
// //     //   const reader = new FileReader();
// //     //   reader.readAsDataURL(file);
// //     //   reader.onloadend = () => {
// //     //     setPreviewSource(reader.result);
// //     //   };
// //     //   setSelectedFile(file);
// //     // }


// import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { FiUploadCloud } from "react-icons/fi"
// import ReactPlayer from "react-player"

// const Upload = ({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   video = false,
//   viewData = null,
//   editData = null,
// }) => {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   )

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0]
//     if (file) {
//       previewFile(file)
//       setSelectedFile(file)
//     }
//   }

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: !video
//       ? { "image/*": [".jpeg", ".jpg", ".png"] }
//       : { "video/*": [".mp4"] },
//     onDrop,
//   })

//   const previewFile = (file) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSource(reader.result)
//     }
//   }

//   useEffect(() => {
//     register(name, { required: true })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [register, name])

//   useEffect(() => {
//     setValue(name, selectedFile)
//   }, [selectedFile, setValue, name])

//   return (
//     <div className="flex flex-col space-y-2">
//       {/* Label */}
//       <label className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase" htmlFor={name}>
//         {label} {!viewData && <sup className="text-rose-400">*</sup>}
//       </label>

//       {/* Upload Box Container */}
//       <div
//         className={`relative flex min-h-[250px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 backdrop-blur-md ${
//           isDragActive
//             ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
//             : "border-cyan-500/30 bg-[#030712]/70 hover:border-cyan-500/60 hover:bg-[#0B132B]/60"
//         }`}
//       >
//         {previewSource ? (
//           <div className="flex w-full flex-col p-6 items-center">
//             <div className="relative w-full overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
//               {!video ? (
//                 <img
//                   src={previewSource}
//                   alt="Preview"
//                   className="max-h-[300px] w-full rounded-xl object-cover"
//                 />
//               ) : (
//                 <div className="aspect-video w-full">
//                   <ReactPlayer url={previewSource} controls width="100%" height="100%" />
//                 </div>
//               )}
//             </div>

//             {!viewData && (
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   setPreviewSource("")
//                   setSelectedFile(null)
//                   setValue(name, null)
//                 }}
//                 className="mt-4 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-1.5 text-xs font-semibold text-rose-300 transition-all duration-300 hover:bg-rose-900/60 hover:text-white hover:shadow-[0_0_12px_rgba(244,63,94,0.4)] cursor-pointer"
//               >
//                 Cancel / Remove
//               </button>
//             )}
//           </div>
//         ) : (
//           <div
//             className="flex w-full flex-col items-center p-6 text-center"
//             {...getRootProps()}
//           >
//             <input {...getInputProps()} />

//             {/* Glowing Icon Badge */}
//             <div className="grid aspect-square w-14 place-items-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-110">
//               <FiUploadCloud className="text-2xl drop-shadow-[0_0_6px_#00f0ff]" />
//             </div>

//             <p className="mt-3 max-w-[220px] text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
//               Drag and drop an {!video ? "image" : "video"}, or click to{" "}
//               <span className="font-bold text-cyan-300 underline decoration-cyan-400">Browse</span> a file
//             </p>

//             <ul className="mt-8 flex flex-wrap justify-center gap-x-6 text-center text-[11px] font-medium text-cyan-300/70">
//               <li>Aspect ratio 16:9</li>
//               <li>Recommended size 1024x576</li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Error Message */}
//       {errors[name] && (
//         <span className="ml-1 text-xs font-semibold tracking-wide text-rose-400">
//           {label} is required
//         </span>
//       )}
//     </div>
//   )
// }

// export default Upload




import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiImage, FiVideo, FiX, FiCheckCircle } from "react-icons/fi";
import ReactPlayer from "react-player";

const Upload = ({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      previewFile(file);
      setSelectedFile(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: !video
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { "video/*": [".mp4"] },
    onDrop,
    noClick: Boolean(previewSource),
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  useEffect(() => {
    register(name, { required: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register, name]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue, name]);

  const removeFile = (e) => {
    e.stopPropagation();
    setPreviewSource("");
    setSelectedFile(null);
    setValue(name, null);
  };

  const FileIcon = video ? FiVideo : FiImage;

  return (
    <div className="flex flex-col space-y-2.5 font-sans">
      {/* Label */}
      <label
        htmlFor={name}
        className="flex items-center gap-2 text-sm font-medium text-zinc-200"
      >
        {label}
        {!viewData && (
          <span className="text-rose-400" aria-label="required">
            *
          </span>
        )}
      </label>

      {/* Upload area */}
      <div
        {...getRootProps()}
        className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
          isDragActive
            ? "border-violet-400/60 bg-violet-500/[0.08] shadow-[0_0_30px_rgba(139,92,246,0.08)]"
            : errors[name]
            ? "border-rose-400/30 bg-rose-500/[0.02]"
            : "border-white/[0.08] bg-[#0c0c0f] hover:border-violet-400/25 hover:bg-[#101014]"
        }`}
      >
        <input {...getInputProps({ id: name })} />

        {previewSource ? (
          <div className="p-3 sm:p-4">
            {/* Preview header */}
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/[0.08] text-violet-300">
                  <FileIcon className="text-base" />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-zinc-200">
                    {selectedFile?.name || `${label} preview`}
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-500">
                    {selectedFile
                      ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`
                      : "Current uploaded file"}
                  </p>
                </div>
              </div>

              {selectedFile && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-1 text-[10px] font-medium text-emerald-300">
                  <FiCheckCircle />
                  Ready
                </span>
              )}
            </div>

            {/* Image or video preview */}
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-black">
              {!video ? (
                <img
                  src={previewSource}
                  alt={`${label} preview`}
                  className="max-h-[320px] min-h-[150px] w-full object-contain"
                />
              ) : (
                <div className="aspect-video w-full">
                  <ReactPlayer
                    url={previewSource}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              )}
            </div>

            {/* Preview actions */}
            {!viewData && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
                <p className="text-xs text-zinc-500">
                  {selectedFile
                    ? "File selected successfully"
                    : "Previewing existing content"}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      open();
                    }}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-white"
                  >
                    Replace
                  </button>

                  <button
                    type="button"
                    onClick={removeFile}
                    aria-label="Remove selected file"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-rose-400/15 bg-rose-500/[0.05] px-3 py-2 text-xs font-medium text-rose-300 transition-colors hover:border-rose-400/30 hover:bg-rose-500/[0.12]"
                  >
                    <FiX className="text-sm" />
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`flex min-h-[240px] flex-col items-center justify-center px-5 py-8 text-center transition-colors sm:min-h-[270px] sm:px-8 ${
              isDragActive ? "bg-violet-500/[0.04]" : ""
            }`}
          >
            {/* Upload icon */}
            <div
              className={`relative mb-5 grid h-16 w-16 place-items-center rounded-2xl border transition-all duration-300 ${
                isDragActive
                  ? "scale-105 border-violet-400/40 bg-violet-500/[0.12] text-violet-200"
                  : "border-white/[0.08] bg-white/[0.03] text-zinc-400 group-hover:border-violet-400/25 group-hover:bg-violet-500/[0.06] group-hover:text-violet-300"
              }`}
            >
              <FiUploadCloud className="text-3xl" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0c0c0f] bg-violet-400" />
            </div>

            <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">
              {isDragActive
                ? "Drop your file here"
                : `Upload ${video ? "a video" : "an image"}`}
            </h3>

            <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500 sm:text-sm">
              Drag and drop your {video ? "video" : "image"} here, or{" "}
              <span className="font-semibold text-violet-300 underline decoration-violet-400/30 underline-offset-4">
                browse files
              </span>
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                {video ? "MP4" : "JPG · PNG · JPEG"}
              </span>

              {!video && (
                <span className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-zinc-500">
                  16:9 recommended
                </span>
              )}
            </div>

            {!video && (
              <p className="mt-3 text-[10px] text-zinc-600">
                Recommended thumbnail: 1024 × 576 px
              </p>
            )}
          </div>
        )}
      </div>

      {/* Validation error */}
      {errors[name] && (
        <p className="ml-1 flex items-center gap-1.5 text-xs font-medium text-rose-400">
          <FiX className="shrink-0" />
          {errors[name]?.message || `${label} is required`}
        </p>
      )}
    </div>
  );
};

export default Upload;

