import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TripletFilter = ({ queries, removeQuery }) => {
  return (
    <>
      {queries?.map((query, index) => (
        <div
          key={index}
          className="flex items-center justify-center min-w-fit rounded text-xs w-40 p-2 border border-[#434650] h-8 ml-1 shadow-lg"
        >
          <span>
            {query?.attribute} {query?.operation} {query?.value}
          </span>
          <FontAwesomeIcon
            className="ml-2 text-red-500"
            onClick={() => removeQuery(index)}
            icon={faXmark}
          />
        </div>
      ))}
    </>
  );
};

export default TripletFilter;
