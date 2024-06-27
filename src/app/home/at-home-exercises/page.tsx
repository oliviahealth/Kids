"use client";

import React, { ReactNode, act, useState } from 'react';
import Pagination from './components/Pagination';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';

const AtHomeExercisesPage = () => {
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
            ...Page4,
            ...Page5,
            ...Page6,
            Page7,
        ]}
    />
}

export default AtHomeExercisesPage;