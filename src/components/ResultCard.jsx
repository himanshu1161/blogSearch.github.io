import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="p-4 mb-2 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.category}</p>
    </div>
  );
};

export default ResultCard;
