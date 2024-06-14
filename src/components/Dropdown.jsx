import { useEffect, useRef } from "react";

const Dropdown = ({
  focusedIndex,
  options,
  step,
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
    <div className="z-10 mt-2 flex w-full flex-col justify-start gap-1 overflow-y-auto overflow-x-hidden rounded bg-[#121317] p-1">
      {options.map((option, index) => (
        <div
          key={index}
          ref={index === focusedIndex ? optionContainer : null}
          onClick={() => onSelect(option)}
          className={`flex h-10 w-full cursor-pointer items-center rounded px-3 active:bg-[#434650] ${
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
