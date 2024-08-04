import React from "react";
import Image from "next/image";
import arrow from "../../../public/images/dashboard/adventure-bay/next_arrow.png";
import Link from "next/link";

export interface FooterProps {
  onNext: () => void;
  onBack: () => void;
  rightButtonDisabledAllowed?: boolean;
  rightButtonDisabled?: boolean;
  rightButtonText: string;
  rightHasLink?: boolean;
  rightLinkHref?: string;
  leftClickAllowed?: boolean;
  leftButtonText: string;
}

const Footer: React.FC<FooterProps> = (footerData: FooterProps) => {  
  return (
    <div className="flex justify-between items-end pb-10 lg:pb-5 2xl:pb-5">
      <div className="">
        <button
          className="text-red-600 border-2 border-red-300 rounded-3xl py-2 px-4"
          onClick={footerData.leftClickAllowed ? footerData.onBack : undefined}
        >
          {footerData.leftButtonText}
        </button>
      </div>
      <div className="">
        {footerData.rightLinkHref && footerData.rightHasLink ? (
          <Link href={footerData.rightLinkHref}>
            <button
              className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
                footerData.rightButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={footerData.onNext}
              disabled={
                footerData.rightButtonDisabledAllowed &&
                footerData.rightButtonDisabled
              }
            >
              {footerData.rightButtonText}
              <Image src={arrow} alt="arrow" width={30} height={30} />
            </button>
          </Link>
        ) : (
          <button
            className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
              footerData.rightButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={footerData.onNext}
            disabled={
              footerData.rightButtonDisabledAllowed &&
              footerData.rightButtonDisabled
            }
          >
            {footerData.rightButtonText}
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
