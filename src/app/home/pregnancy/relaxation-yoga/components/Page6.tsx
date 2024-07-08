// import React, { useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import confetti from "canvas-confetti";

// interface WalkingActivityPage6Props {
//   onNext: () => void;
//   onBack: () => void;
// }

// const WalkingActivityPage6: React.FC<WalkingActivityPage6Props> = ({
//   onNext,
//   onBack,
// }) => {
//   const router = useRouter();

//   const handleExit = () => {
//     router.push("/home");
//   };

//   useEffect(() => {
//     const duration = 3 * 1000; // playing the confetti for 3 seconds
//     const end = Date.now() + duration;

//     const frame = () => {
//       confetti({
//         particleCount: 2,
//         angle: 60,
//         spread: 55,
//         origin: { x: Math.random(), y: Math.random() }
//       });
//       confetti({
//         particleCount: 2,
//         angle: 120,
//         spread: 55,
//         origin: { x: Math.random(), y: Math.random() }
//       });

      
//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     };

//     frame();
//   }, []); 

//   return (
//     <div className="bg-[#79CBF1] w-[100%] h-[100%] flex md:flex-col flex-col overflow-auto justify-between items-center shadow-lg p-6">
//               <div className="w-full h-1/6 flex justify-end items-center">
//                 <Image
//                   height={73}
//                   width={73}
//                   priority
//                   src="/images/exit.svg"
//                   alt="Exit button"
//                   onClick={handleExit}
//                 />
//               </div>
//               <div className="flex flex-row p-4 pl-8 h-2/3 w-full">
//                   <div className="font-Candal w-6/12 flex flex-col justify-center">
//                     <h1 className="text-2xl font-bold mb-2">
//                       Amazing!
//                     </h1>
//                     <p className="mb-4 font-thin">
//                       Here is a star.
//                     </p>
//                     <p className="mb-6 font-thin">
//                       Remember to continue to take walks and reflect on them too.
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center h-full w-6/12" style={{ marginTop: "-25px" }}>
//                     <Image
//                       height={73}
//                       width={300}
//                       priority
//                       src="/images/Star.svg"
//                       alt="Image of a star"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-row pt-8 w-full">
//                   <div className="w-full flex justify-start font-Inter">
//                     <button onClick={onBack} className="text-red-500">
//                       Back
//                     </button>
//                   </div>
//                   <Image
//                     height={80}
//                     width={200}
//                     priority
//                     src="/images/continue_walking.svg"
//                     alt="Continue button"
//                     onClick={onNext}
//                   />
//                 </div>
//             </div>
//   );
// };

// export default WalkingActivityPage6;
