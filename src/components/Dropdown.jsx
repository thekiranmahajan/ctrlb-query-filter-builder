import { useEffect, useRef } from "react";

const Dropdown = ({
  focusedIndex,
  options,
  step,
  inputValue,
  onSelect,
  currentQuery,
}) => {
  const optionContainer = useRef(null);
  useEffect(() => {
    if (!optionContainer.current) return;
    optionContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  return (
    <div className="bg-[#121317] z-10 w-full mt-2 rounded p-1 flex flex-col justify-start gap-1  overflow-y-auto overflow-x-hidden">
      {options
        .filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((option, index) => (
          <div
            key={index}
            ref={index === focusedIndex ? optionContainer : null}
            onClick={() => onSelect(option)}
            className={` h-10 w-full active:bg-[#434650] rounded flex px-3 items-center cursor-pointer ${
              index === focusedIndex ? "bg-[#434650]" : ""
            }`}
            role="button"
            tabIndex={0}
            aria-label={option}
          >
            {step === "operation" && `${currentQuery?.attribute} `}
            {option}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
