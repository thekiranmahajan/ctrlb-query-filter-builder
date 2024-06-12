import React from "react";
import { attributes, operations } from "../utils/constants";

const Dropdown = ({ step, inputValue, onSelect }) => {
  const getDropdownOptions = () => {
    if (step === "attribute") return attributes;
    if (step === "operation") return operations;
    return [];
  };
  return (
    <div className="bg-[#121317] z-10 w-full mt-2 rounded p-1 flex flex-col justify-start gap-1 ">
      {getDropdownOptions()
        .filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className="h-10 w-full hover:bg-slate-800 rounded flex px-3 items-center cursor-pointer"
          >
            {option}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
