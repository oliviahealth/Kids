"use client";

import React, { useState } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const menuToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="flex min-h-[6rem] w-full items-center text-black border-b z-10 shadow-sm">
            <div className="xl:container xl:px-2 flex w-full px-5 mx-auto items-center justify-between">
                <div className="font-bold text-red-500">
                    World Menu
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-4 h-[3.5rem]">
                        <Link
                            href={'/home'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#ADD8E6' }}
                        >
                            Ages 0-1 <br /> Icy Kingdom
                        </Link>

                        <Link
                            href={'/lessons'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#FF7F7F' }}
                        >
                            Ages 1-2 <br /> Misty Plain
                        </Link>

                        <Link
                            href={'/activities'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#90EE90' }}
                        >
                            Ages 2-3 <br /> Rad River
                        </Link>

                        <Link
                            href={'/worlds'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#FFD700' }}
                        >
                            Ages 3-4 <br /> Pirate Beach
                        </Link>

                        <Link
                            href={'/volcano'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#9370DB' }}
                        >
                            Ages 4-5 <br /> Volcano Land
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
