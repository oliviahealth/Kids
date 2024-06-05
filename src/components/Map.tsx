// components/Map.tsx

"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Map = () => {
  const [markers, setMarkers] = useState([
    { id: 1, top: '40%', left: '30%', link: '/home/marker1' },
    { id: 2, top: '60%', left: '50%', link: '/home/marker2' },
    { id: 3, top: '70%', left: '80%', link: '/home/marker3' },
  ]);

  return (
    <div style={{ position: 'relative', width: '80%', height: '100%', float: 'right' }}>
      <Image
        src="/images/map.svg"
        alt="Map"
        fill
        quality={100}
        style={{ objectFit: 'cover' }}
      />
      {markers.map((marker) => (
        <Link key={marker.id} href={marker.link} legacyBehavior>
          <a
            style={{
              position: 'absolute',
              top: marker.top,
              left: marker.left,
              transform: 'translate(-50%, -50%)',
              background: 'red',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {marker.id}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Map;
