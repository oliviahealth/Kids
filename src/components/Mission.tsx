import React from "react";
import Image from "next/image";
import badgeBoardImage from "../../public/images/Badge Board.png";
import badgesImage from "../../public/images/Badges.png";
import foliageImage from "../../public/images/Foliage.png";
import greenBackgroundImage from "../../public/images/Green-background.png";

const Mission = () => {
  return (
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
          <div className="overflow-auto h-[22rem] md:h-full bg-white rounded-3xl text-center flex flex-col p-8">
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
