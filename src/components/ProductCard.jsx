import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-2 lg:mx-0">
    <div className="flex-grow relative">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 mt-3 mx-auto object-contain"
      />
      <div className="absolute top-2 left-2 bg-yellow-400 text-xs text-gray-900 font-bold px-2 py-1 rounded-full">
        {product.category}
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
        {product.title}
      </h2>
      <p className="text-gray-700 text-sm line-clamp-2 mb-3">
        {product.description}
      </p>
      <p className="text-lg font-bold text-blue-600 mb-2">${product.price}</p>
      <div className="flex items-center gap-1 text-yellow-500 mb-3">
        {"★".repeat(Math.round(product?.rating.rate))}
        <span className="text-sm text-gray-600">
          ({product.rating.count} reviews)
        </span>
      </div>
      <Link
        to={`/product/${product.id}`}
        className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-center py-2 rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
