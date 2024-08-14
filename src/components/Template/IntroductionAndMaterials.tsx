import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CheckboxState {
  [key: string]: boolean;
}

export interface Material {
  name: string;
  image: StaticImageData | string;
  alt: string;
  key: keyof CheckboxState;
}

export interface Link {
  text: string;
  url: string;
  img: StaticImageData | string;
}

export interface IntroductionAndMaterialsProps {
  introductionTitle: string;
  introductionText: string;
  materialsTitle: string;
  link?: [Link];
  materials: Material[];
  isChecked: CheckboxState;
  mainBackgroundColor: string;
  emptyCardBackgroundColor: string;
  checkedCardColor: string;
  handleCheckboxChange: (type: keyof CheckboxState) => void;
}

// Introduction
const IntroductionAndMaterials: React.FC<IntroductionAndMaterialsProps> = (
  materialsData: IntroductionAndMaterialsProps
) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 justify-between flex-grow">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        <h1 className="text-xl font-bold">{materialsData.introductionTitle}</h1>
        <p className="text-lg text-justify">{materialsData.introductionText}</p>
        {materialsData?.link && materialsData.link.length && (
          <a
            href={materialsData?.link[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex gap-2"
            style={{ color: materialsData.checkedCardColor }}
          >
            {materialsData.link[0]?.text}
            <Image src={materialsData?.link[0]?.img} alt={""} />
          </a>
        )}
      </div>
      <div
        className="w-full lg:w-1/2 rounded-3xl flex flex-col h-full p-5 gap-2 border-2 border-solid border-white"
        style={{ backgroundColor: materialsData.mainBackgroundColor }}
      >
        <h1 className="text-xl font-bold flex">
          {materialsData.materialsTitle}
        </h1>
        <div className="flex flex-col gap-2 h-full w-full">
          <div className="h-full flex flex-row gap-2 w-full">
            {materialsData.materials.slice(0, 4).map((material) => (
              <div
                key={material.key}
                className={`h-full w-full flex flex-col justify-around items-center p-2`}
                style={{
                  backgroundColor: material.name
                    ? "white"
                    : materialsData.emptyCardBackgroundColor,
                  borderColor: material.name
                    ? materialsData.checkedCardColor
                    : "transparent",
                  borderWidth: material.name ? "2px" : "0",
                  borderRadius: "1rem",
                }}
              >
                {material.name && (
                  <>
                    <Image
                      src={material.image}
                      alt={material.alt}
                      width={40}
                      height={40}
                    />
                    <h1
                      className="text-md font-bold text-center"
                      style={{ color: materialsData.checkedCardColor }}
                    >
                      {material.name}
                    </h1>
                    <input
                      type="checkbox"
                      checked={materialsData.isChecked[material.key]}
                      onChange={() =>
                        materialsData.handleCheckboxChange(material.key)
                      }
                      className="appearance-none h-6 w-6 rounded-full focus:outline-none"
                      style={{
                        borderColor: materialsData.checkedCardColor,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        backgroundColor: materialsData.isChecked[material.key]
                          ? materialsData.checkedCardColor
                          : "transparent",
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="h-full flex flex-row gap-2 w-full">
            {materialsData.materials.slice(4).map((material) => (
              <div
                key={material.key}
                className={`h-full w-full flex flex-col justify-around items-center p-2`}
                style={{
                  backgroundColor: material.name
                    ? "white"
                    : materialsData.emptyCardBackgroundColor,
                  borderColor: material.name
                    ? materialsData.checkedCardColor
                    : "transparent",
                  borderWidth: material.name ? "2px" : "0",
                  borderRadius: "1rem",
                }}
              >
                {material.name && (
                  <>
                    <Image
                      src={material.image}
                      alt={material.alt}
                      width={40}
                      height={40}
                    />
                    <h1
                      className="text-md font-bold text-center"
                      style={{ color: materialsData.checkedCardColor }}
                    >
                      {material.name}
                    </h1>
                    <input
                      type="checkbox"
                      checked={materialsData.isChecked[material.key]}
                      onChange={() =>
                        materialsData.handleCheckboxChange(material.key)
                      }
                      className="appearance-none h-6 w-6 rounded-full focus:outline-none"
                      style={{
                        borderColor: materialsData.checkedCardColor,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        backgroundColor: materialsData.isChecked[material.key]
                          ? materialsData.checkedCardColor
                          : "transparent",
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionAndMaterials;
