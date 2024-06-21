"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import Star from "../../../../../../public/images/Star 26.svg";
import ContinueIcon from "../../../../../../public/images/openmoji_return.png";
import '../../../../globals.css';

const Dashboard: React.FC = () => {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [countdown]);

    useEffect(() => {
        const duration = 3 * 1000; // 3 seconds
        const end = Date.now() + duration;

        const frame = () => {
            // Launch confetti from random points on the screen
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: Math.random(), y: Math.random() }
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: Math.random(), y: Math.random() }
            });

            // Keep going until we are out of time
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    return (
        <div style={{ overflow: 'hidden', height: '100vh' }} className="relative w-full h-full flex justify-center items-start meditation-activity-five-bg">
            <Link href="/home">
                <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#FB9318] rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
                    <span className="text-black font-bold">X</span>
                </div>
            </Link>
            
            <div className="absolute bottom-5 left-5">
                <Link href="./page7" legacyBehavior>
                    <div className="text-4xl font-bold back-effect cursor-pointer">Back</div>
                </Link>
            </div>
            <div className="text-center mt-20">
                <h1 className="text-5xl font-extrabold mb-8">Well Done!</h1>
                <p className="text-xl font-semibold mb-2">You have finished practicing the STOP technique. Here is a star!</p>
                <div className="mt-8 flex justify-center">
                    <Image
                        src={Star}
                        alt="Star"
                        width={600} // adjust the width as needed
                        height={600} // adjust the height as needed
                    />
                </div>
            </div>
           <div className="absolute bottom-9 right-9">
                <Link href="./page9">
                    <div className="flex items-center px-4 py-2 bg-[#FF5B5B] rounded-full text-white font-bold cursor-pointer hover-grow-x">
                        Continue
                        <Image
                            src={ContinueIcon}
                            alt="Continue Icon"
                            width={24} // adjust the width as needed
                            height={24} // adjust the height as needed
                            className="ml-2"
                        />
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Dashboard;
