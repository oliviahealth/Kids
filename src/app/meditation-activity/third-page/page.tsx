"use client"; // Add this directive at the top

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SmileLine from "../../../../public/images/Line 16.png";
import EyeClosed from "../../../../public/images/Line 17.png";
import '../../globals.css';

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
        <div style={{ overflow: 'hidden', height: '100vh' }} className="relative w-full h-full flex justify-center items-start meditation-activity-three-bg">
            <div className="absolute top-10 left-10">
                <Image
                    src="/images/Group 57.png"
                    alt="Ellipse"
                    width={175} // adjust the width as needed
                    height={175} // adjust the height as needed
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <span className="text-4xl font-bold text-black">3</span>
                </div>
            </div>

            <Link href="/home">
                <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#8BD5FF] rounded-full flex justify-center items-center hover-grow-x">
                    <span className="text-black font-bold">X</span>
                </div>
            </Link>
            <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-[#FF792D] rounded-full flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="eye absolute top-[26%] left-[18%]"></div>
                    <div className="eye absolute top-[17%] right-[39%]"></div>
                    <div className="absolute bottom-[67%] left-[31%] transform -translate-x-1/2" style={{ transform: 'rotate(-36deg)' }}>
                        <Image
                            src={SmileLine}
                            alt="Smile Line"
                            width={200} // adjust the width as needed
                            height={50} // adjust the height as needed
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-180px] left-[8%] w-[600px] h-[600px] bg-[#FFAA86] rounded-full flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute top-[38%] left-[20%] w-25 h-25" style={{ transform: 'rotate(187deg)' }}>
                        <Image
                            src={EyeClosed}
                            alt="Eye Closed"
                        />
                    </div>
                    <div className="absolute top-[38%] right-[25%] w-25 h-25" style={{ transform: 'rotate(187deg)' }}>
                        <Image
                            src={EyeClosed}
                            alt="Eye Closed"
                            
                        />
                    </div>
                    <div className="absolute bottom-[41%] left-[35%] transform -translate-x-1/2" style={{ transform: 'rotate(-20deg)' }}>
                        <Image
                            src={SmileLine}
                            alt="Smile Line"
                            width={150} // adjust the width as needed
                            height={80} // adjust the height as needed
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#8BD5FF] rounded-full flex justify-center items-center">
                {countdown > 0 ? (
                    <span className="text-white text-4xl font-bold">{countdown}</span>
                ) : (
                    <Link href="/meditation-activity/fourth-page" legacyBehavior>
                        <a className="text-white text-4xl font-bold">→</a>
                    </Link>
                )}
            </div>

            <div className="absolute bottom-5 left-5">
                <Link href="/meditation-activity/second-page" legacyBehavior>
                    <a className="text-4xl font-bold back-effect">Back</a>
                </Link>
            </div>
            <div className="text-center mt-20 fade-in">
                <h1 className="text-5xl font-extrabold mb-8">Observe</h1>
                <p className="text-xl font-semibold mb-2">Notice and take a look around at your environment</p>
                <p className="text-xl font-semibold mb-2">Find out what is causing your stress or anxiety so you know the cause of the stress</p>
            </div>
        </div>
    )
}

export default Dashboard;
