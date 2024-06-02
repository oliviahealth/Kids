import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="grid grid-rows-2">
      <div style={{ paddingTop: "4.25rem", paddingLeft: "3.25rem" }}>
        <img src="/images/olivia-health-logo.png" alt="Olivia Health Logo"/>
        <div style={{ marginTop: "1rem" }}>
          <Link href={"/about"} style={{ color: "#A155B9" }} className="hover:text-purple-500 hover:underline transition duration-300">
            About
          </Link>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Link href={"/resources"} style={{ color: "#A155B9" }} className="hover:text-purple-500 hover:underline transition duration-300">
            Resources
          </Link>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Link href={"/contact-us"} style={{ color: "#A155B9" }} className="hover:text-purple-500 hover:underline transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <img src="/images/Sponsors.png" />
      </div>
    </div>
  );
};

export default Footer;
