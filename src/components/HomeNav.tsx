"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import '../app/globals.css';
import logoCompany from "../../public/images/Logo+Company.svg";
import Image from 'next/image';  // Import the Image component from next/image

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Initialize usePathname

    const menuToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="flex min-h-[6rem] w-full text-black border-b z-10 shadow-sm">
            <div className="w-1/3 flex flex-col items-center">
                <Image
                    src={logoCompany}
                    alt="Logo"
                    priority
                />
            </div>
            <div className="xl:container xl:px-2 flex px-5 mx-auto justify-between">
                <div className="flex-1 flex justify-center items-end relative w-full">
                    <div className="flex h-[3rem] relative z-10 w-full justify-between">
                        <div className="absolute bottom-0 left-0 right-0 h-[0.8rem] w-full rounded-md z-0" style={{ backgroundColor: '#E0E0E0' }}></div>
                        <Link
                            href={'/home'}
                            className="pregnancy-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-q mr-6 hover-grow hover-bg-pregnancy"
                        >
                        </Link>
                        <Link
                            href={'/lessons'}
                            className="age-one-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-one"
                        >
                        </Link>
                        <Link
                            href={'/Starlight-Meadows'}
                            className={`age-two-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-two ${pathname === '/Starlight-Meadows' ? 'active' : ''}`}
                        >
                        </Link>
                        <Link
                            href={'/worlds'}
                            className="age-three-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-three"
                        >
                        </Link>
                        <Link
                            href={'/volcano'}
                            className="age-four-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-four"
                        >
                        </Link>
                        <Link
                            href={'/volcano'}
                            className="age-five-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 hover-grow hover-bg-age-five"
                        >
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
