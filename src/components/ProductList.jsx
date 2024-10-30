import axios from "axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const ProductList = ({ category, searchTerm }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    },
  });
  // console.log(products);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / limit);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );

  useEffect(() => {
    setPage(1);
  }, [category, searchTerm]);

  if (isLoading) {
    return (
      <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="product-card p-4 border rounded shadow animate-pulse"
          >
            <div className="h-48 w-full bg-gray-300 mb-2 rounded"></div>
            <div className="h-6 w-3/4 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 mb-1 rounded"></div>
            <div className="h-6 w-1/4 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {paginatedProducts.length > 0 ? (
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-col md:flex-row items-center mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="btn border-blue-500 bg-yellow-50 hover:bg-blue-500 hover:text-white text-blue-500 hover:border-blue-500 disabled:opacity-50 mb-2 md:mb-0"
            >
              Previous
            </button>
            <div className="flex flex-wrap m-0 justify-center md:justify-start mx-[6px]">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => setPage(idx + 1)}
                  className={`btn border-blue-500 ${
                    page === idx + 1
                      ? "bg-blue-500 text-white"
                      : "bg-yellow-50 text-blue-500 hover:bg-blue-500 hover:text-white"
                  } rounded-none mb-2 md:mb-0 mx-[2px]`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="btn border-blue-500 bg-yellow-50 hover:bg-blue-500 hover:text-white text-blue-500 hover:border-blue-500 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="mt-2 text-center md:text-left">
            <select
              onChange={(e) => {
                setLimit(parseInt(e.target.value, 10));
                setPage(1);
              }}
              value={limit}
              style={{ outline: "none" }}
              className="input input-bordered border-blue-500 text-green-500"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
      ) : (
        <p className="flex justify-center items-center h-[67vh] text-red-500">
          No product found!
        </p>
      )}
    </div>
  );
};

export default ProductList;
