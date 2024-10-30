import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="flex flex-col product-card border rounded shadow">
    <div className="flex-grow">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-cover mb-2 rounded"
      />
      <div className="px-3">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-gray-800 font-bold">Price: ${product.price}</p>
        <p className="text-yellow-600">
          Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
        </p>
      </div>
    </div>
    <Link
      to={`/product/${product.id}`}
      className="p-3 text-blue-500 underline mt-2 inline-block"
    >
      View Details
    </Link>
  </div>
);

export default ProductCard;
