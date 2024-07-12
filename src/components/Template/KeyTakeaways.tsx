import React from "react";
import Image from "next/image";

interface KeyTakeawaysProps {
  text: string;
  photoSrc: string;
  photoAlt: string;
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({
  text,
  photoSrc,
  photoAlt,
}) => {
  return (
    <div className="w-full flex gap-8 flex-grow">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Key Takeaways</h1>
        <p className="text-xl text-justify">{text}</p>
        <div className="">
          <Image src={photoSrc} alt={photoAlt} />
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;
