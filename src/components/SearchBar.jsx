import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import TripletFilter from "./TripletFilter";
import { getDropdownOptions } from "../utils/constants";

const SearchBar = () => {
  const [queries, setQueries] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentQuery, setCurrentQuery] = useState({
    attribute: "",
    operation: "",
    value: "",
  });
  const [step, setStep] = useState("attribute");
  const [inputValue, setInputValue] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    setOptions(getDropdownOptions(step));
    setFocusedIndex(-1);
  }, [step]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resetQuery = () => {
    setCurrentQuery({ attribute: "", operation: "", value: "" });
    setStep("attribute");
    setInputValue("");
    setIsDropdown(true);
    focusInput();
  };
  const handleSelect = (selectedValue) => {
    if (!selectedValue) return;
    if (step === "attribute") {
      setCurrentQuery({
        attribute: selectedValue,
        operation: "",
        value: "",
      });
      setStep("operation");
    } else if (step === "operation") {
      setCurrentQuery((prev) => ({ ...prev, operation: selectedValue }));
      setStep("value");
      setIsDropdown(false);
    }
    setInputValue("");
    focusInput();
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    if (step === "value") {
      setCurrentQuery((prev) => ({ ...prev, value }));
    } else {
      setInputValue(value);
      setIsDropdown(true);
    }
  };

  const handleAddQuery = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && step === "value" && currentQuery.value) {
      setQueries((prev) => [...prev, currentQuery]);
      resetQuery();
    }
  };

  const removeQuery = (index) => {
    setQueries((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (!isDropdown) return;

    const { key } = e;

    if (key === "ArrowDown" || key === "ArrowUp") {
      const direction = key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (focusedIndex + direction + options.length) % options.length;
      setFocusedIndex(nextIndex);
      setInputValue(options[nextIndex]);
    } else if (key === "Enter" && step !== "value") {
      handleSelect(options[focusedIndex]);
    }
  };

  return (
    <>
      <div
        tabIndex={1}
        className="relative flex min-h-11 w-full flex-col gap-1 overflow-hidden rounded border-2 border-[#1f212c] bg-[#17181d] pr-6 text-sm shadow-lg md:flex-row md:items-center md:justify-center md:pr-10 md:text-base"
        onKeyDown={handleKeyDown}
      >
        <TripletFilter queries={queries} removeQuery={removeQuery} />
        <div className="flex flex-grow items-center py-2">
          <span className="ml-1 flex h-full items-center justify-center">
            {currentQuery.attribute} {currentQuery.operation}
          </span>
          <input
            ref={inputRef}
            className="h-full flex-grow overflow-hidden bg-transparent px-3 outline-none placeholder:truncate placeholder:text-sm placeholder:text-[#3f4044]"
            placeholder={`${
              step !== "value"
                ? 'Search Filter: select options from suggested values, for IN/NOT IN operators - press "Enter" after selecting options'
                : 'Type specific value and press "Enter" to form triplet'
            }`}
            type="text"
            value={step !== "value" ? inputValue : currentQuery.value}
            onClick={() => setIsDropdown(true)}
            onChange={handleValueChange}
            onKeyUp={handleAddQuery}
            aria-label="Search filter"
          />
        </div>
        <FontAwesomeIcon
          onClick={() => setIsDropdown(!isDropdown && step !== "value")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-sm text-[#3f4044]"
          icon={isDropdown ? faMagnifyingGlass : faChevronDown}
          aria-hidden="true"
        />
      </div>

      {isDropdown && step !== "value" && (
        <Dropdown
          focusedIndex={focusedIndex}
          options={options}
          step={step}
          onSelect={handleSelect}
          currentQuery={currentQuery}
        />
      )}
    </>
  );
};

export default SearchBar;
