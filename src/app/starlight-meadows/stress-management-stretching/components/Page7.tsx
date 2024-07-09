import React from 'react';
import { StarPage } from '@/components/StarPage';
import { Page } from "@/components/Pagination";
import Star from "../../../../../public/images/StarlightMeadows/Star.svg";
import Image from 'next/image';




export default ({ onBack, onContinue, onExit }: Page) => {
    return (
        <StarPage
            bgColor="#FF8C38"
            buttonColor="#FF7613"
            title="Well Done!"
            subtitle="You have finished the stretches, here is a star!"
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
            imageUrl="/images/StarlightMeadows/Star.svg"
        />
    );
};