import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="max-w-[1200px] mx-auto mt-5 mb-8">
      <h1>E-Commerce Product Browser</h1>
      <SearchFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default HomePage;
