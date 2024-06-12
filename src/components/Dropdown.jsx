import React from "react";
import { getDropdownOptions } from "../utils/constants";

const Dropdown = ({ step, inputValue, onSelect }) => {
  return (
    <div className="bg-[#121317] z-10 w-full mt-2 rounded p-1 flex flex-col justify-start gap-1 ">
      {getDropdownOptions(step)
        .filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className="h-10 w-full hover:bg-slate-800 rounded flex px-3 items-center cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={option}
          >
            {option}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
