import Link from "next/link";
import Image from "next/image";
import React from "react";
import Sponsors from "../../public/images/Sponsors.png";
import oliviaLogo from "../../public/images/olivia-health-logo.png";

const LandingPageFooter: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-5">
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 px-10 pb-4 md:pb-0 space-x-0 md:space-x-2">
        <Image src={oliviaLogo} alt="Olivia Logo" />
        <Link href="/about" className="mt-2 md:mt-0">
          <span className="text-xl text-[#A155B9] hover:text-purple-500 hover:underline transition duration-300">
            About
          </span>
        </Link>
        <Link href="/resources" className="mt-2 md:mt-0">
          <span className="text-xl text-[#A155B9] hover:text-purple-500 hover:underline transition duration-300">
            Resources
          </span>
        </Link>
        <Link href="/contact-us" className="mt-2 md:mt-0 whitespace-nowrap">
          <span className="text-xl text-[#A155B9] hover:text-purple-500 hover:underline transition duration-300">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageFooter;