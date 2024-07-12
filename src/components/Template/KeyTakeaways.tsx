import React from "react";
import Image, { StaticImageData } from "next/image";

export interface KeyTakeawaysProps {
  text: string;
  photoSrc: StaticImageData | string;
  photoAlt: string;
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = (
  keyTakeawaysData: KeyTakeawaysProps
) => {
  return (
    <div className="w-full flex gap-8 flex-grow">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Key Takeaways</h1>
        <p className="text-xl text-justify">{keyTakeawaysData.text}</p>
        <div className="">
          <Image
            src={keyTakeawaysData.photoSrc}
            alt={keyTakeawaysData.photoAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;
