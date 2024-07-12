import React from "react";
import Image from "next/image";
import arrow from "../../../public/images/dashboard/adventure-bay/next_arrow.png";

interface FooterProps {
  onNext: () => void;
  buttonDisabled: boolean;
  learnMoreText: string;
  continueText: string;
}

const Footer: React.FC<FooterProps> = ({
  onNext,
  buttonDisabled,
  learnMoreText,
  continueText,
}) => {
  return (
    <div className="flex justify-between items-end pb-10 lg:pb-5 2xl:pb-0">
      <div className="">
        <button className="text-red-600 border-2 border-red-300 rounded-3xl py-2 px-4">
          {learnMoreText}
        </button>
      </div>
      <div className="">
        <button
          className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onNext}
          disabled={buttonDisabled}
        >
          {continueText}
          <Image src={arrow} alt="arrow" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
