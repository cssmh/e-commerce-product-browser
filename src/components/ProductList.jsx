import axios from "axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res?.data;
    },
  });

  if (isLoading) {
    return (
      <div className="product-list grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
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
    <div className="product-list grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
