import React from "react";

const Dropdown = ({ options, onSelect }) => {
  return (
    <div className="bg-[#121317] z-10 w-full mt-2 rounded p-1 flex flex-col justify-start gap-1 ">
      {options.map((option, index) => (
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
