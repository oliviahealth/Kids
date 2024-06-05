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
                <div>
                    <Link href={'/'}>
                        <img
                            className="h-[5rem]"
                            alt="Olivia Health Plan of Safecare logo"
                            src="/images/logo+Company.svg"
                        />
                    </Link>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="hidden md:flex space-x-4 h-[3.5rem]">
                        <Link
                            href={'/home'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#ec9bfc', border: '5px solid #e466fc' }}
                        >
                            Home
                        </Link>

                        <Link
                            href={'/lessons'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#8be9b0', border: '5px solid #4ce49c' }}
                        >
                            Lessons
                        </Link>

                        <Link
                            href={'/activities'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#94ece2', border: '5px solid #51e5d5' }}
                        >
                            Activities
                        </Link>

                        <Link
                            href={'/worlds'}
                            className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-2"
                            style={{ backgroundColor: '#fbb355', border: '5px solid #f4946c' }}
                        >
                            Worlds
                        </Link>

                        
                    </div>
                </div>

                <div className="flex items-center">
                    <Link
                        href={'/sign-in'}
                        className="block md:flex button font-bold"
                        style={{ color: 'red', textDecoration: 'none' }}
                    >
                        Sign In
                    </Link>

                    <div className="md:hidden selectable group" onClick={menuToggle}>
                        <div className="space-y-2">
                            <span
                                className={`block h-1 w-8 bg-black rounded-full transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                            ></span>
                            <div className="relative">
                                <span
                                    className={`block absolute h-1 w-8 bg-black rounded-full transition-transform duration-200 ease-in-out origin-center ${isOpen ? 'rotate-45' : ''}`}
                                ></span>
                                <span
                                    className={`block h-1 w-8 bg-black transition-transform duration-200 ease-in-out rounded-full origin-center ${isOpen ? '-rotate-45' : ''}`}
                                ></span>
                            </div>
                            <span
                                className={`block h-1 w-8 bg-black rounded-full transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                            ></span>
                        </div>
                    </div>

                    

                    
                </div>
                
            </div>
            
            <Link href={'/'}>
                        <img
                            className="h-[1.5rem] pr-10"
                            alt="Olivia Health Plan of Safecare logo"
                            src="/images/For Parents.svg"
                        />
                    </Link>
           
        </div>
    );
}

export default Navbar;
