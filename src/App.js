import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import FilterButtons from "./components/FilterButtons";
import ResultList from "./components/ResultList";

const mockData = [
  { id: 1, title: "How to use React.js", category: "Web Development" },
  { id: 2, title: "Introduction to Tailwind CSS", category: "CSS Frameworks" },
  { id: 3, title: "Understanding JavaScript Closures", category: "JavaScript" },
  { id: 4, title: "Getting started with Node.js", category: "Backend" },
  { id: 5, title: "Responsive Design with Flexbox", category: "CSS Frameworks" },
  { id: 6, title: "Mastering React Hooks", category: "Web Development" },
  { id: 7, title: "Async/Await in JavaScript Explained", category: "JavaScript" },
  { id: 8, title: "Setting up Express.js for REST APIs", category: "Backend" },
  { id: 9, title: "Building a Portfolio with HTML & CSS", category: "Web Development" },
  { id: 10, title: "Understanding CSS Grid", category: "CSS Frameworks" },
  { id: 11, title: "JavaScript Promises Demystified", category: "JavaScript" },
  { id: 12, title: "Introduction to MongoDB", category: "Backend" },
  { id: 13, title: "Optimizing Web Performance", category: "Web Development" },
  { id: 14, title: "Tailwind CSS Best Practices", category: "CSS Frameworks" },
  { id: 15, title: "Advanced JavaScript Patterns", category: "JavaScript" },
  { id: 16, title: "Scaling Node.js Applications", category: "Backend" },
  { id: 17, title: "Deploying React Apps with Vercel", category: "Web Development" },
  { id: 18, title: "Creating Custom CSS Utilities", category: "CSS Frameworks" },
  { id: 19, title: "Debugging JavaScript Like a Pro", category: "JavaScript" },
  { id: 20, title: "Building Secure REST APIs", category: "Backend" },
];


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredResults = mockData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
     
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-center text-4xl mb-4 font-serif">Blog Search</h1>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <ResultList results={filteredResults} />
      </div>
    </div>
  );
};

export default App;
