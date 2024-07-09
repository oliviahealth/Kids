"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Page } from "@/components/Pagination";
import Image from 'next/image';
import confetti from 'canvas-confetti';

interface APContainerProps {
    buttonColor: string,
    bgColor: string,
}

export const APContainer: React.FC<APContainerProps & Page & { children: ReactNode }> = ({ buttonColor, bgColor, onBack, onContinue, onExit, children }) => {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [countdown]);

    useEffect(() => {
        const duration = 3 * 1000; // 3 seconds
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: Math.random(), y: Math.random() },
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: Math.random(), y: Math.random() },
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    return (
        <div style={{ backgroundColor: bgColor }} className="p-32 relative w-full h-[100vh] flex flex-col justify-between items-center">
            <button onClick={onExit} style={{ backgroundColor: buttonColor }} className="absolute top-0 right-0 m-4 w-20 h-20 rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
                <span className="text-black font-bold">X</span>
            </button>

            <button style={{ backgroundColor: buttonColor }} onClick={onContinue} className={`absolute bottom-16 right-16 size-64 rounded-full flex justify-center items-center`}>
                <span className="text-white text-4xl font-bold">→</span>
            </button>

            <div className="absolute bottom-4 left-8 size-20 rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
                <button onClick={onBack} className="text-white text-3xl font-bold hover:underline">Back</button>
            </div>

            {children}
        </div>
    );
}

export const APHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="flex justify-center w-full items-center">
        <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-5xl font-bold">{title}</div>
            <div className="text-2xl">{subtitle}</div>
        </div>
    </div>
);

export const APImageInput: React.FC<{ src: string }> = ({ src }) => (
    <div className="flex justify-center items-center w-full h-full">
        <Image src={src} alt="Star" width={400} height={400} className="text-center" />
    </div>
);

type StarPageProps = Page & APContainerProps & {
    title: string,
    subtitle: string,
    imageUrl: string,
}

export const StarPage: React.FC<StarPageProps> = ({ onBack, onContinue, onExit, bgColor, buttonColor, title, subtitle, imageUrl }) => (
    <APContainer
        bgColor={bgColor}
        buttonColor={buttonColor}
        onBack={onBack}
        onContinue={onContinue}
        onExit={onExit}
    >
        <APHeader title={title} subtitle={subtitle} />
        <APImageInput src={imageUrl} />
    </APContainer>
);
