"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MaterialChecklistProps {
  materials: {
    imagePath: string;
    label: string;
  }[];
  onComplete: () => void;
}

export default function MaterialChecklist({ materials, onComplete }: MaterialChecklistProps) {
  const [isChecked, setIsChecked] = useState<Record<string, boolean>>({});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const initialCheckedState = materials.reduce((acc, material) => {
      acc[material.label] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setIsChecked(initialCheckedState);
  }, [materials]);

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(value => value);
    setButtonDisabled(!allChecked);
  }, [isChecked]);

  const handleCheckboxChange = (label: string) => {
    setIsChecked(prevState => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <div className="w-full rounded-3xl flex flex-col h-full p-5 gap-2" style={{ border: "2px solid white", backgroundColor: "#C5FFFC" }}>
      <h1 className="text-xl font-bold flex">Materials Needed</h1>
      <div className="flex flex-wrap gap-2 h-full w-full">
        {materials.map((material, index) => (
          <div
            key={index}
            className={`border-2 h-2/6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
              isChecked[material.label] ? "border-[#52C5C0]" : "border-[#52C5C0]"
            }`}
          >
            <Image src={material.imagePath} alt={material.label} width={60} height={60} />
            <h1 className="text-md font-bold text-center" style={{ color: "#52C5C0" }}>
              {material.label}
            </h1>
            <input
              type="checkbox"
              checked={isChecked[material.label]}
              onChange={() => handleCheckboxChange(material.label)}
              className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end mt-4">
        <button
          className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onComplete}
          disabled={buttonDisabled}
        >
          Continue
          <Image src="/images/dashboard/adventure-bay/next_arrow.png" alt="arrow" width={30} height={30} />
        </button>
      </div> */}
    </div>
  );
}