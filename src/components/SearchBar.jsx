import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="h-10  w-full flex items-center justify-center">
      <input
        className="h-full w-full bg-[#17181d] px-4 outline-none border-2 border-[#1f212c] rounded-lg  shadow-lg placeholder:text-sm placeholder:text-[#3f4044]"
        placeholder='Search Filter: select options from suggested values, for IN/NOT IN operators - press "Enter" after selecting options'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
