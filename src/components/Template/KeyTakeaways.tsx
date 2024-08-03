import React from "react";
import Image, { StaticImageData } from "next/image";

export interface KeyTakeawaysProps {
  text: string;
  photoSrc?: StaticImageData | string;
  photoAlt?: string;
  img?: StaticImageData | string;
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = (
  keyTakeawaysData: KeyTakeawaysProps
) => {
  return (
    <div className="w-full flex gap-8 flex-grow">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Key Takeaways</h1>
        <p className="text-xl text-justify">{keyTakeawaysData.text}</p>
        {keyTakeawaysData.photoSrc && (
          <div className="">
            <Image
              src={keyTakeawaysData.photoSrc}
              alt={keyTakeawaysData.photoAlt || ""}
            />
          </div>
        )}
      </div>
      {keyTakeawaysData?.img && (
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <Image src={keyTakeawaysData.img} alt="Image" />
        </div>
      )}
    </div>
  );
};

export default KeyTakeaways;
