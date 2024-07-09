import React from 'react';
import { StarPage } from '@/components/StarPage';
import { Page } from "@/components/Pagination";
import Star from "../../../../../public/images/StarlightMeadows/Star.svg";
import Image from 'next/image';




export default ({ onBack, onContinue, onExit }: Page) => {
    return (
        <StarPage
            bgColor="#61C5FE"
            buttonColor="#33A6E6"
            title="Well Done!"
            subtitle="Repeat this exercise whenever you need it. Here is your star! "
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
            imageUrl="/images/StarlightMeadows/Star.svg"
        />
    );
};