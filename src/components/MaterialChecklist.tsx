"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ColorScheme {
  borderColor: string;
  emptySlotColor: string;
  backgroundColor: string;
}

interface MaterialChecklistProps {
  materials: {
    imagePath: string;
    label: string;
  }[];
  setButtonDisabled: (disabled: boolean) => void;
  colorScheme: ColorScheme;
}

export default function MaterialChecklist({ 
  materials, 
  setButtonDisabled,
  colorScheme
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
      setButtonDisabled(!allChecked);
      return newState;
    });
  };

  const renderMaterialItem = (material: { imagePath: string; label: string } | null, index: number) => {
    if (material) {
      return (
        <div
          key={index}
          className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2`}
          style={{ borderColor: `#${colorScheme.borderColor}` }}
        >
          <Image src={material.imagePath} alt={material.label} width={90} height={60} />
          <h1
            className="text-md font-bold text-center"
            style={{ color: `#${colorScheme.borderColor}` }}
          >
            {material.label}
          </h1>
          <input
            type="checkbox"
            checked={isChecked[material.label]}
            onChange={() => handleCheckboxChange(material.label)}
            className="appearance-none h-6 w-6 rounded-full border-2 focus:outline-none"
            style={{ 
              borderColor: `#${colorScheme.borderColor}`,
              backgroundColor: isChecked[material.label] ? `#${colorScheme.borderColor}` : 'transparent'
            }}
          />
        </div>
      );
    } else {
      return (
        <div 
          key={index} 
          className="h-full w-full rounded-2xl text-white flex"
          style={{ backgroundColor: `#${colorScheme.emptySlotColor}` }}
        ></div>
      );
    }
  };

  const filledMaterials = [...materials, ...Array(8 - materials.length).fill(null)];

  return (
    <div
      className="w-full rounded-3xl flex flex-col h-full p-5 gap-2"
      style={{
        border: "2px solid white",
        backgroundColor: `#${colorScheme.backgroundColor}`,
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