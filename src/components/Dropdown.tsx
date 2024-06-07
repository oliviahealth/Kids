"use client";
import React from "react";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedValue, handleChange }) => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-5">
      <span className="font-bold">{label}</span>
      <select
        className="border-2 border-black rounded-full shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
