import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
      <div
        onBlur={() => setIsDropdown(false)}
        className="h-10  w-full flex items-center justify-center relative"
      >
        {queries.map((query, index) => (
          <div
            key={index}
            className="absolute flex items-center  px-2 py-1 rounded mr-2"
          >
            <span>
              {query?.attribute} {query?.operation} {query?.value}
            </span>
            <button
              type="button"
              onClick={() => removeQuery(index)}
              className="ml-2 text-red-500"
            >
              x
            </button>
          </div>
        ))}
        <input
          className="h-full w-full bg-[#17181d] px-4 outline-none border-2 border-[#1f212c] rounded  shadow-lg placeholder:text-sm placeholder:text-[#3f4044] pr-10"
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
