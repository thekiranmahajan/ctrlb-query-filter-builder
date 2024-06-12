import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { attributes } from "../utils/constants";
import Dropdown from "./Dropdown";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const handleInputClick = () => {
    setIsDropdown(true);
  };
  const handleHideDropdown = () => {
    setIsDropdown(false);
  };

  return (
    <>
      <div className="h-10  w-full flex items-center justify-center relative">
        <input
          className="h-full w-full bg-[#17181d] px-4 outline-none border-2 border-[#1f212c] rounded  shadow-lg placeholder:text-sm placeholder:text-[#3f4044] pr-10"
          placeholder='Search Filter: select options from suggested values, for IN/NOT IN operators - press "Enter" after selecting options'
          type="text"
          value={query}
          onClick={handleInputClick}
          onBlur={handleHideDropdown}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FontAwesomeIcon
          className="absolute z-10 right-4 text-sm text-[#3f4044]"
          icon={isDropdown ? faMagnifyingGlass : faChevronDown}
        />
      </div>
      {isDropdown && <Dropdown options={attributes} />}
    </>
  );
};

export default SearchBar;
