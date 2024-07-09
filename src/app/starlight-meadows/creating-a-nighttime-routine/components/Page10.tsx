import React from 'react';
import { StarPage } from '@/components/StarPage';
import { Page } from "@/components/Pagination";
import Star from "../../../../../public/images/StarlightMeadows/Star.svg";
import Image from 'next/image';




export default ({ onBack, onContinue, onExit }: Page) => {
    return (
        <StarPage
            bgColor="#FEEE61"
            buttonColor="#F5DD00"
            title="Here is a Star!"
            subtitle=""
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
            imageUrl="/images/StarlightMeadows/Star.svg"
        />
    );
};