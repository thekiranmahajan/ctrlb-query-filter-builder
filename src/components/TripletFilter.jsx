import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TripletFilter = ({ queries, removeQuery }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center h-full max-w-3/5 my-1 ">
      {queries?.map((query, index) => (
        <div
          key={index}
          className="flex items-center justify-center min-w-fit rounded text-xs w-fit p-2 border border-[#434650] h-8 ml-1 shadow-lg"
        >
          <span>
            {query?.attribute} {query?.operation} {query?.value}
          </span>
          <FontAwesomeIcon
            className="ml-2 text-red-400 active:text-red-500 hover:text-red-500 cursor-pointer"
            onClick={() => removeQuery(index)}
            icon={faXmark}
          />
        </div>
      ))}
    </div>
  );
};

export default TripletFilter;
