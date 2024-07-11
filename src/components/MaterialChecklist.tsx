"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MaterialChecklistProps {
  materials: {
    imagePath: string;
    label: string;
  }[];
  setButtonDisabled: (disabled: boolean) => void;
}

export default function MaterialChecklist({ 
  materials, 
  setButtonDisabled 
}: MaterialChecklistProps) {
  const [isChecked, setIsChecked] = useState<Record<string, boolean>>({});
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      const initialCheckedState = materials.reduce((acc, material) => {
        acc[material.label] = false;
        return acc;
      }, {} as Record<string, boolean>);
      setIsChecked(initialCheckedState);
      setButtonDisabled(true);
      initializedRef.current = true;
    }
  }, [materials, setButtonDisabled]);

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(value => value);
    setButtonDisabled(!allChecked);
  }, [isChecked, setButtonDisabled]);

  const handleCheckboxChange = (label: string) => {
    setIsChecked(prevState => {
      const newState = {
        ...prevState,
        [label]: !prevState[label],
      };
      const allChecked = Object.values(newState).every(value => value);
      // console.log('All checked:', allChecked);
      setButtonDisabled(!allChecked);
      return newState;
    });
  };

  const renderMaterialItem = (material: { imagePath: string; label: string } | null, index: number) => {
    if (material) {
      return (
        <div
          key={index}
          className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
            isChecked[material.label] ? "border-[#52C5C0]" : "border-[#52C5C0]"
          }`}
        >
          <Image src={material.imagePath} alt={material.label} width={60} height={60} />
          <h1
            className="text-md font-bold text-center"
            style={{ color: "#52C5C0" }}
          >
            {material.label}
          </h1>
          <input
            type="checkbox"
            checked={isChecked[material.label]}
            onChange={() => handleCheckboxChange(material.label)}
            className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
          />
        </div>
      );
    } else {
      return (
        <div key={index} className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white flex"></div>
      );
    }
  };

  const filledMaterials = [...materials, ...Array(8 - materials.length).fill(null)];

  return (
    <div
      className="w-full rounded-3xl flex flex-col h-full p-5 gap-2"
      style={{
        border: "2px solid white",
        backgroundColor: "#C5FFFC",
      }}
    >
      <h1 className="text-xl font-bold flex">Materials Needed</h1>
      <div className="flex flex-col gap-2 h-full w-full">
        <div className="h-full flex flex-row gap-2 w-full">
          {filledMaterials.slice(0, 4).map((material, index) => renderMaterialItem(material, index))}
        </div>
        <div className="h-full flex flex-row gap-2 w-full">
          {filledMaterials.slice(4, 8).map((material, index) => renderMaterialItem(material, index + 4))}
        </div>
      </div>
    </div>
  );
}