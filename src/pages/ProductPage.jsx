import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-cover"
      />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <Link to="/" className="text-blue-500">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductPage;
