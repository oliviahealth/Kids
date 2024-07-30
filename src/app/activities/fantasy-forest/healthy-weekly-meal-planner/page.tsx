"use client";

import { useState } from 'react';
import Pagination from '@/components/Pagination';

import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
// import Page3 from "./components/Page3";
import Page4 from './components/Page4';

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
            // ...Page3,
            Page4,
        ]}
    />
}

export default HealthyWeeklyMealPlanner;