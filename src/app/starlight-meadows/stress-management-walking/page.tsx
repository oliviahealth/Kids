"use client";

import React, { ReactNode, act, useState } from 'react';
import Pagination from '@/components/Pagination';

import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3";
// import Page4 from './components/Page4';
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";

import Page12 from "./components/Page12";

const HealthyWeeklyMealPlanner = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return <Pagination
        onExit={() => {

        }}
        page={currentPage}
        onPageChange={(page) => {
            setCurrentPage(page);
        }}
        pages={[
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            Page6,
            Page7,
            Page8,
            Page9,
            Page10,
            Page11,
            //...Page4,
            Page12,
        ]}
    />
}

export default HealthyWeeklyMealPlanner;