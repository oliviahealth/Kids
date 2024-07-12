import React from "react";
import Image from "next/image";

type CheckboxState = {
  [key: string]: boolean;
};

interface Material {
  name: string;
  image: any;
  alt: string;
  key: keyof CheckboxState;
}

interface IntroductionAndMaterialsProps {
  introductionTitle: string;
  introductionText: string;
  materialsTitle: string;
  materials: Material[];
  isChecked: CheckboxState;
  handleCheckboxChange: (type: keyof CheckboxState) => void;
}

const IntroductionAndMaterials: React.FC<IntroductionAndMaterialsProps> = ({
  introductionTitle,
  introductionText,
  materialsTitle,
  materials,
  isChecked,
  handleCheckboxChange,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 justify-between flex-grow">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-bold">{introductionTitle}</h1>
        <p className="text-lg text-justify">{introductionText}</p>
      </div>
      <div
        className="w-full lg:w-1/2 rounded-3xl flex flex-col h-full p-5 gap-2"
        style={{
          border: "2px solid white",
          backgroundColor: "#C5FFFC",
        }}
      >
        <h1 className="text-xl font-bold flex">{materialsTitle}</h1>
        <div className="flex flex-col gap-2 h-full w-full">
          <div className="h-full flex flex-row gap-2 w-full">
            {materials.slice(0, 4).map((material) => (
              <div
                key={material.key}
                className={`h-full w-full ${
                  material.name
                    ? "border-2 rounded-2xl bg-white flex flex-col justify-around items-center p-2"
                    : "rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center p-2"
                } ${
                  isChecked[material.key]
                    ? "border-[#52C5C0]"
                    : "border-[#52C5C0]"
                }`}
              >
                {material.name ? (
                  <>
                    <Image
                      src={material.image}
                      alt={material.alt}
                      width={40}
                      height={40}
                    />
                    <h1
                      className="text-md font-bold text-center"
                      style={{ color: "#52C5C0" }}
                    >
                      {material.name}
                    </h1>
                    <input
                      type="checkbox"
                      checked={isChecked[material.key]}
                      onChange={() => handleCheckboxChange(material.key)}
                      className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                    />
                  </>
                ) : (
                  <div
                    className={`h-full w-full rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="h-full flex flex-row gap-2 w-full">
            {materials.slice(4).map((material) => (
              <div
                key={material.key}
                className={`h-full w-full ${
                  material.name
                    ? "border-2 rounded-2xl bg-white flex flex-col justify-around items-center p-2"
                    : "rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center"
                } ${
                  isChecked[material.key]
                    ? "border-[#52C5C0]"
                    : "border-[#52C5C0]"
                }`}
              >
                {material.name ? (
                  <>
                    <Image
                      src={material.image}
                      alt={material.alt}
                      width={40}
                      height={40}
                    />
                    <h1
                      className="text-md font-bold text-center"
                      style={{ color: "#52C5C0" }}
                    >
                      {material.name}
                    </h1>
                    <input
                      type="checkbox"
                      checked={isChecked[material.key]}
                      onChange={() => handleCheckboxChange(material.key)}
                      className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                    />
                  </>
                ) : (
                  <div
                    className={`h-full w-full rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center`}
                  ></div>
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
