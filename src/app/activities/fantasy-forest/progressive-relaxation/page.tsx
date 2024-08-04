"use client";

import { ReactNode, useState } from 'react';
import Image from "next/image";
import backgroundMap from "/public/images/background.png";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

const NatureWalk: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleBack = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < pagesData.length - 1) setCurrentPage(currentPage + 1);
    };

    const MapContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
        <div className="relative w-full h-full max-h-screen overflow-hidden">
            <div className="z-5 absolute inset-0">
                <Image
                    src={backgroundMap}
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                />
            </div>
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                <div className="row-start-2 row-end-12 col-start-2 col-end-12 z-20 h-full overflow-y-auto">
                    <div className="relative bg-white shadow-2xl rounded-2xl h-full p-10 overflow-auto">
                        <div className="flex flex-col justify-between h-full w-full gap-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ActivityContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
        <div className="relative w-full h-full max-h-screen overflow-hidden">
            <div className="h-full w-full">
                <div className="z-20 h-full overflow-y-auto">
                    <div
                        className="relative shadow-2xl rounded-2xl h-full p-10"
                        style={{ backgroundColor: "#E1FF8D" }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );

    const pagesData = [
        {
            content: (
                <MapContainer>
                    <Page1 onContinue={handleNext} onBack={handleBack} />
                </MapContainer>
            ),
        },
        {
            content: (
                <MapContainer>
                    <Page2 onContinue={handleNext} onBack={handleBack} />
                </MapContainer>
            ),
        },
        // {
        //     content: (
        //         <ActivityContainer>
        //             <Page3 onContinue={handleNext} onBack={handleBack} />
        //         </ActivityContainer>
        //     ),
        // },
        {
            content: (
                <MapContainer>
                    <Page4 onContinue={handleNext} onBack={handleBack} />
                </MapContainer>
            ),
        },
    ];

    return <>{pagesData[currentPage].content}</>;
};

export default NatureWalk;