// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// interface WalkingActivityPage4Props {
//   onNext: () => void;
//   onBack: () => void;
// }

// const WalkingActivityPage4: React.FC<WalkingActivityPage4Props> = ({
//   onNext,
//   onBack,
// }) => {
//   const router = useRouter();
//   const handleExit = () => {
//     router.push("/home");
//   };
//   return (
//     <div className="bg-[#79CBF1] w-[100%] h-[100%] flex md:flex-row flex-col overflow-auto justify-between items-center shadow-lg p-6">
//       <div className="w-1/2 p-4 h-full flex flex-col justify-between">
//         <div className="flex flex-col justify-center items-center flex-grow">
//           <div className="pl-12 font-Candal">
//             <h1 className="text-2xl font-bold mb-2">Enjoy your walk!</h1>
//             <p className="mb-4 font-thin">
//               Remember to be attentive and stay safe.
//             </p>
//             <p className="mb-6 font-thin">
//               Once you have finished your walk, come back and continue the
//               activity.
//             </p>
//           </div>
//         </div>
//         <div className="w-full flex justify-start font-Inter">
//           <button onClick={onBack} className="text-red-500">
//             Back
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2 p-4 h-full flex flex-row justify-center items-center">
//         <div className="pl-12">
//           <Image
//             height={80}
//             width={260}
//             priority
//             src="/images/farmer_dude.svg"
//             alt="Image of character in overalls"
//           />
//         </div>
//         <div className="h-full pl-4 flex flex-col justify-between items-end">
//           <Image
//             height={73}
//             width={73}
//             priority
//             src="/images/exit.svg"
//             alt="Exit button"
//             onClick={handleExit}
//           />
//           <Image
//             height={80}
//             width={200}
//             priority
//             src="/images/continue_walking.svg"
//             alt="Continue button"
//             onClick={onNext}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalkingActivityPage4;
