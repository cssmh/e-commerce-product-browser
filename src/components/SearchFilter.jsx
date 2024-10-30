import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const SearchFilter = ({ handleSearch, setCategory }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearchInput(search);
    handleSearch(search);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput("");
    handleSearch("");
  };

  return (
    <div className="search-filter flex flex-col lg:flex-row gap-3 items-center justify-between mb-4 relative">
      <div className="relative w-full mt-2 md:w-1/3">
        <input
          type="text"
          value={searchInput}
          placeholder="Search products"
          onChange={handleSearchChange}
          className="p-2 pl-3 border rounded-lg w-full outline-none border-gray-300"
        />
        {searchInput && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            aria-label="Clear search"
          >
            <FaTimesCircle />
          </button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          onChange={handleCategoryChange}
          className="border rounded-md border-gray-300 p-2 outline-none"
        >
          <option value="All">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
