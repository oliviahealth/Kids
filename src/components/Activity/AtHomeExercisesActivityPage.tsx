"use client"; // Add this directive at the top

import React, { useEffect, useState, useRef, MutableRefObject, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const useCountdown = (initialSeconds: number) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [initialSeconds, seconds]);

    return [seconds];
};

export const APContainer: React.FC<{
    time: number,
    page: number,

    buttonColor: string,
    pageNumColor: string,
    bgColor: string,

    onBack: () => void,
    onContinue: () => void,
    onExit: () => void,
    children: ReactNode

}> = ({ buttonColor, pageNumColor, bgColor, time, page, onBack, onContinue, onExit, children }) => {
    const [countdown] = useCountdown(time);

    return <div>
        <div style={{ backgroundColor: bgColor }} className={`p-32 relative w-full h-[100vh] flex flex-col justify-between items-center`}>
            <div className="absolute top-10 left-10">
                <svg width="120" height="114" viewBox="0 0 120 114" xmlns="http://www.w3.org/2000/svg">
                    <path fill={pageNumColor} d="M120 76.8467C120 107.578 85.4973 113.514 54.8148 113.514C24.1323 113.514 0 88.6009 0 57.8696C0 27.1384 45.6138 0 76.2963 0C106.979 0 120 46.1154 120 76.8467Z" />
                </svg>

                <div className="absolute inset-0 flex justify-center items-center">
                    <span className="text-4xl font-bold text-black">{page}</span>
                </div>
            </div>
            <button onClick={onExit} style={{ backgroundColor: buttonColor }} className={`absolute top-0 right-0 m-4 w-20 h-20 rounded-full flex justify-center items-center cursor-pointer hover-grow-x`}>
                <span className="text-black font-bold">X</span>
            </button>

            {countdown > 0 ? (
                <button style={{ backgroundColor: buttonColor }} className={`absolute bottom-16 right-16 size-64 rounded-full flex justify-center items-center`}>
                    <span className="text-white text-4xl font-bold">{countdown}</span>
                </button>
            ) : (
                <button style={{ backgroundColor: buttonColor }} onClick={onContinue} className={`absolute bottom-16 right-16 size-64 rounded-full flex justify-center items-center`}>
                    <span className="text-white text-4xl font-bold">→</span>
                </button>
            )}

            <div className="absolute bottom-4 left-8 size-20 rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
                <button onClick={onBack} className="text-white text-3xl font-bold hover:underline">Back</button>
            </div>

            {children}
        </div >
    </div >
}

export const APHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => <div className="flex justify-center w-[70%] items-center">
    <div className="flex-col items-center space-y-2">
        <div className="text-5xl font-bold">{title}</div>
        <div className="text-2xl">{subtitle}</div>
    </div>
</div>

export const APInstruction: React.FC<{ instruction: string }> = ({ instruction }) => <div className="flex justify-center w-[60%] items-center">
    <div className="flex-col items-center space-y-2">
        <div className="text-5xl font-bold">{instruction}</div>
    </div>
</div>