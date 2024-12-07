import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  const categories = [
    "All",
    "Web Development",
    "CSS Frameworks",
    "JavaScript",
    "Backend",
  ];

  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-4 py-2 rounded-lg ${
            filter === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
