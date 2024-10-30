const SearchFilter = ({ handleSearch, setCategory }) => {
  const handleSearchChange = (e) => {
    handleSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="search-filter flex flex-col lg:flex-row gap-3 items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search products"
        onChange={handleSearchChange}
        className="p-2 border rounded-lg mt-2 outline-none border-gray-300"
      />
      <select
        onChange={handleCategoryChange}
        className="border rounded-md border-gray-300 p-2 outline-none ml-4"
      >
        <option value="All">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default SearchFilter;
