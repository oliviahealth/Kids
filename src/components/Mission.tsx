import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center pt-16">
      <Image
        src="/images/Green-background.png"
        alt="Green Background"
        layout="fill"
        objectFit="cover"
        className="z-10"
        objectPosition="bottom"
      />
     <div className="absolute w-full h-full top-[-70%] left-0 z-20">
        <Image
          src="/images/Foliage.png"
          alt="Foliage"
          layout="fill"
          objectFit="cover"
          className="z-20"
          objectPosition="bottom"
        />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4/5 h-3/5 bg-transparent flex justify-center items-center">
        <div className="relative w-full h-full" style={{ top: '-60%' }}>
          <Image
            src="/images/Badge Board.png"
            alt="Badge Board"
            layout="fill"
            objectFit="cover"
            className="absolute rounded-2xl"
            objectPosition="top"
          />
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src="/images/Badges.png"
              alt="Badges"
              layout="intrinsic"
              width={1000}
              height={180}
              className="relative"
              style={{ maxWidth: '80%', maxHeight: '80%' }}
            />
          </div>
        </div>
      </div>
      <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-40 bg-red-500 text-white py-2 px-4 rounded-lg text-lg">
        Start your journey
      </button>
      <div className="overflow-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 w-3/4 h-3/4 rounded-3xl text-center flex flex-col z-50">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-800 mb-8">
          We believe in fostering an engaging learning environment where
          children can explore topics and equip skills that lead happy, active
          lives.
        </p>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 of cards */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 1
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 2
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 3
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 4
          </div>
          {/* Row 2 of cards */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 5
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 6
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 7
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md h-full w-full flex items-center justify-center">
            {/* Card content */}
            Card 8
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
