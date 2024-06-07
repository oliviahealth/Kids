import React from "react";
import Image from "next/image";
import badgeBoardImage from "../../public/images/Badge Board.png";
import badgesImage from "../../public/images/Badges.png";
import foliageImage from "../../public/images/Foliage.png";
import greenBackgroundImage from "../../public/images/Green-background.png";

const Mission = () => {
  return (
    // <div className="relative min-h-screen flex justify-center items-center pt-16">
    //   <Image
    //     src="/images/Green-background.png"
    //     alt="Green Background"
    //     layout="fill"
    //     objectFit="cover"
    //     className="z-10"
    //     objectPosition="bottom"
    //   />

    //   <div className="absolute w-full h-full top-[-70%] left-0 z-20">
    //     <Image
    //       src="/images/Foliage.png"
    //       alt="Foliage"
    //       // layout="fill"
    //       // width={100}
    //       // height={1240}
    //       objectFit="cover"
    //       className="z-20"
    //       objectPosition="bottom"
    //       fill={true}
    //     />
    //   </div>

    //   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4/5 h-3/5 bg-transparent flex justify-center items-center">
    //     <div className="relative w-full h-full" style={{ top: "-60%" }}>
    //       <Image
    //         src="/images/Badge Board.png"
    //         alt="Badge Board"
    //         layout="fill"
    //         objectFit="cover"
    //         className="absolute rounded-2xl"
    //         objectPosition="top"
    //       />
    //       <div className="relative w-full h-full flex justify-center items-center">
    //         <Image
    //           src="/images/Badges.png"
    //           alt="Badges"
    //           layout="intrinsic"
    //           width={1000}
    //           height={180}
    //           className="relative"
    //           style={{ maxWidth: "80%", maxHeight: "80%" }}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-40 bg-red-500 text-white py-2 px-4 rounded-lg text-lg">
    //     Start your journey
    //   </button>

    //   <div className="overflow-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 w-3/4 h-3/4 rounded-3xl text-center flex flex-col z-50">
    //     <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
    //     <p className="text-gray-800 mb-8">
    //       We believe in fostering an engaging learning environment where
    //       children can explore topics and equip skills that lead happy, active
    //       lives.
    //     </p>
    //     <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {/* Row 1 of cards */}
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 1
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 2
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 3
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 4
    //       </div>
    //       {/* Row 2 of cards */}
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 5
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 6
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 7
    //       </div>
    //       <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
    //         {/* Card content */}
    //         Card 8
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <div className="grid grid-rows-12 grid-cols-12">
    //     <div className="col-start-1 col-end-13 row-start-1 row-end-13">
    //       <div className="grid grid-rows-12 grid-cols-12">
    //         <div className="col-start-1 col-end-13 row-start-1 row-end-13">
    //           <div className="grid grid-rows-12 grid-cols-12">
    //             <div className="col-start-1 col-end-13 row-start-1 row-end-13">
    //               {/* borad badge */}
    //               <div className="grid grid-cols-12 rows-12">
    //                 <div className="col-start-3 col-end-11">
    //                   <div className="grid grid-rows-12 grid-cols-12">
    //                     <Image
    //                       src={badgeBoardImage}
    //                       alt="Badge Board"
    //                       className=" col-start-1 col-end-13 row-start-1 row-end-13"
    //                     />
    //                     <Image
    //                       src={badgesImage}
    //                       alt="Badges"
    //                       className="mx-auto col-start-1 col-end-13 row-start-2 row-end-13"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             {/* green mountain */}
    //             <div className="col-start-1 col-end-13 row-start-3 row-end-13 md:row-start-2 md:row-end-13 z-20">
    //               <Image src={foliageImage} alt="Foliage" />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-start-1 col-end-13 row-start-5 row-end-13 md:row-start-5 md:row-end-13">
    //           {/* green background */}
    //           <Image src={greenBackgroundImage} alt="Green Background" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" col-start-3 col-end-11 row-start-3 row-end-13 md:row-start-5 md:row-end-12 lg:row-start-7 lg:row-end-12">
    //       <div className="bg-white rounded-3xl text-center flex flex-col h-full">
    //         <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
    //         <p className="text-gray-800 mb-8">
    //           We believe in fostering an engaging learning environment where
    //           children can explore topics and equip skills that lead happy,
    //           active lives.
    //         </p>
    //         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    //           {/* Row 1 of cards */}
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 1
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 2
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 3
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 4
    //           </div>
    //           {/* Row 2 of cards */}
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 5
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 6
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 7
    //           </div>
    //           <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
    //             {/* Card content */}
    //             Card 8
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="grid grid-rows-12 grid-cols-12">
        <div className="col-start-1 col-end-13 row-start-1 row-end-13">
          <div className="grid grid-rows-12 grid-cols-12">
            <div className="col-start-1 col-end-13 row-start-2 row-end-13">
              <div className="grid grid-rows-12 grid-cols-12">
                <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                  {/* board badge */}
                  <div className="grid grid-cols-12 grid-rows-12">
                    <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                      <div className="grid grid-cols-12 rows-12">
                        <div className="col-start-3 col-end-11">
                          <div className="grid grid-rows-12 grid-cols-12">
                            <Image
                              src={badgeBoardImage}
                              alt="Badge Board"
                              className="h-[9rem] 1s-sm:h-auto 2s-sm:h-[40rem] 1s-lg:h-auto lg:h-[55rem] col-start-1 col-end-13 row-start-1 row-end-13"
                            />
                            <Image
                              src={badgesImage}
                              alt="Badges"
                              className="mx-auto col-start-1 col-end-13 row-start-2 row-end-13"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-auto col-start-1 col-end-13 row-start-1 row-end-2 ">
                      <button className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-full">
                        World 1
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-13 row-start-3 row-end-13 md:row-start-2 md:row-end-13 z-20">
                  <Image src={foliageImage} alt="Foliage" />
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-13 row-start-4 row-end-13 2s-sm:row-start-5 2s-sm:row-end-13 sm:row-start-5 sm:row-end-13 md:row-start-5 md:row-end-13 lg:row-start-6 lg:row-end-13">
              {/* green background */}
              <div className="grid grid-cols-12 grid-rows-12">
                <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                  <Image
                    src={greenBackgroundImage}
                    alt="Green Background"
                    className=" h-[40rem] md:h-[50rem] lg:h-auto"
                  />
                </div>
                <div className="m-auto col-start-1 col-end-13 row-start-1 row-end-2 ">
                  <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                    Start your journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-start-3 col-end-11 row-start-5 row-end-13 1s-sm:row-start-6 1sm-sm:row-end-13 sm:h-auto md:row-end-12 lg:row-start-7 lg:row-end-12">
          <div className="overflow-auto h-[22rem] md:h-full bg-white rounded-3xl text-center flex flex-col">
            <h3 className="text-3xl font-bold mb-6">Our Ambition</h3>
            <p className="text-gray-800 mb-8">
              We believe in fostering an engaging learning environment where
              children can explore topics and equip skills that lead happy,
              active lives.
            </p>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-auto md:overflow-visible">
              {/* Row 1 of cards */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 1
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 2
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 3
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 4
              </div>
              {/* Row 2 of cards */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 5
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 6
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 7
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md h-5/6 w-5/6 mx-auto flex items-center justify-center">
                {/* Card content */}
                Card 8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
