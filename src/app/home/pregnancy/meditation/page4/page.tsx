"use client"; // Add this directive at the top

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SmileLine from "../../../../../../public/images/Line 16.png";
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

    return (
        <div style={{ overflow: 'hidden', height: '100vh' }} className="relative w-full h-full flex justify-center items-start meditation-activity-one-bg">
            <div className="absolute top-10 left-10">
                <Image
                    src="/images/ellipse 122.png"
                    alt="Ellipse"
                    width={175} // adjust the width as needed
                    height={175} // adjust the height as needed
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <span className="text-4xl font-bold text-black">1</span>
                </div>
            </div>
            <Link href="/home">
                <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#FF7613] rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
                    <span className="text-black font-bold">X</span>
                </div>
            </Link>
            <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-[#FFDF38] rounded-full flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="eye absolute top-[6%] left-[40%]"></div>
                    <div className="eye absolute top-[20%] right-[15%]"></div>
                    <div className="absolute bottom-[73%] left-[60%] transform -translate-x-1/2 rotate-11">
                        <Image
                            src={SmileLine}
                            alt="Smile Line"
                            width={200} // adjust the width as needed
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-180px] left-[8%] w-[600px] h-[600px] bg-[#CCFBFB] rounded-full flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute top-[6%] left-[40%] w-10 h-10 bg-black rounded-full"></div>
                    <div className="absolute top-[13%] right-[20%] w-10 h-10 bg-black rounded-full"></div>
                    <div className="absolute bottom-[78%] left-[48%] transform -translate-x-1/2" style={{ transform: 'rotate(-7deg)' }}>
                        <Image
                            src={SmileLine}
                            alt="Smile Line"
                            width={120} // adjust the width as needed
                            height={50} // adjust the height as needed
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#FF7613] rounded-full flex justify-center items-center">
                {countdown > 0 ? (
                    <span className="text-white text-4xl font-bold">{countdown}</span>
                ) : (
                    <Link href="./page5" legacyBehavior>
                        <a className="text-white text-4xl font-bold">→</a>
                    </Link>
                )}
            </div>
            <div className="text-center mt-20 fade-in">
                <h1 className="text-5xl font-extrabold mb-8">Stop</h1>
                <p className="text-xl font-semibold mb-2">Pause what you are doing, and find a comfortable place to sit down</p>
            </div>
        </div>
    )
}

export default Dashboard;
