import React from "react";
import ResultCard from "./ResultCard";

const ResultList = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((item) => <ResultCard key={item.id} item={item} />)
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default ResultList;
