import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import TripletFilter from "./TripletFilter";

const SearchBar = () => {
  const [queries, setQueries] = useState([]);
  const [currentQuery, setCurrentQuery] = useState({
    attribute: "",
    operation: "",
    value: "",
  });
  const [step, setStep] = useState("attribute");
  const [inputValue, setInputValue] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);

  const handleInputClick = () => {
    setIsDropdown(true);
  };

  const handleSelect = (selectedValue) => {
    if (step === "attribute") {
      setCurrentQuery({
        attribute: selectedValue,
        operation: "",
        value: "",
      });
      setStep("operation");
    } else if (step === "operation") {
      setCurrentQuery({
        ...currentQuery,
        operation: selectedValue,
      });
      setStep("value");
    }
    setInputValue("");
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
    if (e.key !== "Enter") return;
    if (step === "value" && currentQuery.value) {
      setQueries([...queries, currentQuery]);
      setCurrentQuery({
        attribute: "",
        operation: "",
        value: "",
      });
      setStep("attribute");
      setInputValue("");
      console.log(currentQuery.value);
    }
  };

  const removeQuery = (index) => {
    setQueries(queries.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="h-11  w-full flex items-center justify-center relative bg-[#17181d] border-2 border-[#1f212c] rounded gap-1">
        <TripletFilter queries={queries} removeQuery={removeQuery} />
        <input
          className="h-full flex-grow bg-transparent px-3 outline-none shadow-lg placeholder:text-sm placeholder:text-[#3f4044] pr-10"
          placeholder='Search Filter: select options from suggested values, for IN/NOT IN operators - press "Enter" after selecting options'
          type="text"
          value={step === "value" ? currentQuery.value : inputValue}
          onClick={handleInputClick}
          onChange={handleValueChange}
          onKeyUp={handleAddQuery}
        />
        <FontAwesomeIcon
          onClick={() => !isDropdown && step !== "value" && setIsDropdown(true)}
          className="absolute z-10 right-4 text-sm text-[#3f4044]"
          icon={isDropdown ? faMagnifyingGlass : faChevronDown}
        />
      </div>
      {isDropdown && step !== "value" && (
        <Dropdown step={step} inputValue={inputValue} onSelect={handleSelect} />
      )}
    </>
  );
};

export default SearchBar;
