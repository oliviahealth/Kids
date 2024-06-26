import React, { useState, useEffect } from 'react';
import { Page } from './Types';

const Pagination: React.FC<{ onFinish?: () => void, onExit: () => void, onPageChange?: (page: number) => void, page?: number, pages: React.FC<Page>[] }> = ({ onFinish, onExit, onPageChange, page, pages }) => {
    const [currentPage, setCurrentPage] = useState(page || 0);

    useEffect(() => {
        if (onPageChange) {
            onPageChange(currentPage);
        }
    }, [currentPage, onPageChange]);

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleContinue = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            if (onFinish) {
                onFinish()
            }
        }
    }

    return pages[currentPage]({ onBack: handleBack, onContinue: handleContinue, onExit: onExit, page: currentPage, setCurrentPage: setCurrentPage });
}

export default Pagination