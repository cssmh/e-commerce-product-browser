import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-filter mt-1">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={handleSearchChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default SearchFilter;
