"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Map = () => {
  const [markers, setMarkers] = useState([
    { id: 1, top: '50%', left: '20%', link: '/home/marker1' },
    { id: 2, top: '50%', left: '40%', link: '/home/marker2' },
    { id: 3, top: '50%', left: '60%', link: '/home/marker3' },
  ]);

  return (
    <div className="relative w-4/5 h-full float-right">
      <Image
        src="/images/map.svg"
        alt="Map"
        fill
        quality={100}
        className="object-cover"
      />
      {markers.map((marker) => (
        <Link key={marker.id} href={marker.link} passHref>
          <div
            className="absolute flex items-center justify-center text-white font-bold rounded-xl bg-[#ec9bfc] border-[5px] border-[#e466fc] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
            style={{
              top: marker.top,
              left: marker.left,
            }}
          >
            {marker.id}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Map;
