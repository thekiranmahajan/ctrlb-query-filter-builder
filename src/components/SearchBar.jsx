import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    setOptions(getDropdownOptions(step));
  }, [step]);

  const handleSelect = (selectedValue) => {
    if (step === "attribute") {
      setCurrentQuery({
        attribute: selectedValue,
        operation: "",
        value: "",
      });
      setStep("operation");
      setIsDropdown(true);
    } else if (step === "operation") {
      setCurrentQuery({
        ...currentQuery,
        operation: selectedValue,
      });
      setStep("value");
      setIsDropdown(false);
    }
    setInputValue("");
    setFocusedIndex(-1);
  };

  const handleValueChange = (e) => {
    if (step === "value") {
      setCurrentQuery({ ...currentQuery, value: e.target.value });
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleAddQuery = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && step === "value" && currentQuery.value) {
      setQueries([...queries, currentQuery]);
      setCurrentQuery({
        attribute: "",
        operation: "",
        value: "",
      });
      setStep("attribute");
      setInputValue("");
      setFocusedIndex(-1);
      setIsDropdown(true);
    }
  };

  const removeQuery = (index) => {
    setQueries(queries.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = focusedIndex;
    if (key === "ArrowDown") {
      nextIndexCount = (focusedIndex + 1) % options.length;
      setFocusedIndex(nextIndexCount);
      return;
    }
    if (key === "ArrowUp") {
      nextIndexCount = (focusedIndex + options.length - 1) % options.length;
      setFocusedIndex(nextIndexCount);
      return;
    }
    if (key === "Enter" && step !== "value") {
      if (options[focusedIndex]) {
        handleSelect(options[focusedIndex]);
      }
      return;
    }
  };

  const getDisplayValue = () => {
    if (step === "attribute") return inputValue;
    if (step === "operation") return `${currentQuery.attribute} ${inputValue}`;
    if (step === "value") return currentQuery.value;
    return inputValue;
  };

  useEffect(() => {
    if (step === "operation" && currentQuery.attribute) {
      setIsDropdown(true);
    }
  }, [step, currentQuery]);

  useEffect(() => {
    if (options.length === 0) {
      setIsDropdown(false);
    }
  }, [options]);
  return (
    <>
      <div
        tabIndex={1}
        className="h-11  w-full flex items-center justify-center relative bg-[#17181d] border-2 border-[#1f212c] rounded gap-1"
        onKeyDown={handleKeyDown}
      >
        <TripletFilter queries={queries} removeQuery={removeQuery} />
        <input
          className="h-full flex-grow bg-transparent px-3 outline-none shadow-lg placeholder:text-sm placeholder:text-[#3f4044] pr-10"
          placeholder='Search Filter: select options from suggested values, for IN/NOT IN operators - press "Enter" after selecting options'
          type="text"
          value={getDisplayValue()}
          onClick={() => setIsDropdown(true)}
          onChange={handleValueChange}
          onKeyUp={handleAddQuery}
          aria-label="Search filter"
        />
        <FontAwesomeIcon
          onClick={() => setIsDropdown(!isDropdown && step !== "value")}
          className="absolute z-10 right-4 text-sm text-[#3f4044]"
          icon={isDropdown ? faMagnifyingGlass : faChevronDown}
          aria-hidden="true"
        />
      </div>

      {isDropdown && step !== "value" && (
        <Dropdown
          focusedIndex={focusedIndex}
          options={options}
          step={step}
          inputValue={inputValue}
          onSelect={handleSelect}
          currentQuery={currentQuery}
        />
      )}
    </>
  );
};

export default SearchBar;
