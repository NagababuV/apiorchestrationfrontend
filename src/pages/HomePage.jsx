import React from "react";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">User Search</h1>
      <SearchBar />
    </div>
  );
};

export default HomePage;
