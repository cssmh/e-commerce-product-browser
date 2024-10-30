import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-5 mb-8">
      <h1 className="mx-3 lg:mx-0 text-xl md:text-2xl text-center md:text-left font-semibold">
        E-Commerce Product Browser
      </h1>
      <SearchFilter handleSearch={handleSearch} setCategory={setCategory} />
      <ProductList category={category} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
