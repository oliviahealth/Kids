"use client";

import React, { useState } from "react";
import '../app/globals.css';
import logoCompany from "../../public/images/Logo+Company.svg";
import Image from 'next/image';  // Import the Image component from next/image

interface NavbarProps {
    onMapChange: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMapChange }) => {
    const [isOpen, setOpen] = useState(false);

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
                        <button
                            onClick={() => onMapChange(0)}
                            className="pregnancy-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-q mr-6 hover-grow hover-bg-pregnancy"
                        >
                        </button>
                        <button
                            onClick={() => onMapChange(1)}
                            className="age-one-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-one"
                        >
                        </button>
                        <button
                            onClick={() => onMapChange(2)}
                            className="age-two-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-two"
                        >
                        </button>
                        <button
                            onClick={() => onMapChange(3)}
                            className="age-three-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-three"
                        >
                        </button>
                        <button
                            onClick={() => onMapChange(4)}
                            className="age-four-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 mr-6 hover-grow hover-bg-age-four"
                        >
                        </button>
                        <button
                            onClick={() => onMapChange(5)}
                            className="age-five-button flex items-center justify-center text-white font-bold rounded-xl px-8 py-2 hover-grow hover-bg-age-five"
                        >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
