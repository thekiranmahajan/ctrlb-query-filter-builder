import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TripletFilter = ({ queries, removeQuery }) => {
  return (
    <div className="max-w-3/5 my-1 flex h-full flex-wrap items-center gap-1">
      {queries?.map((query, index) => (
        <div
          key={index}
          className="ml-1 flex h-8 w-fit min-w-fit items-center justify-center rounded border border-[#434650] p-2 text-xs shadow-lg"
        >
          <span>
            {query?.attribute} {query?.operation} {query?.value}
          </span>
          <FontAwesomeIcon
            className="ml-2 cursor-pointer text-red-400 hover:text-red-500 active:text-red-500"
            onClick={() => removeQuery(index)}
            icon={faXmark}
          />
        </div>
      ))}
    </div>
  );
};

export default TripletFilter;
