import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ProductDetail = ({ product }) => {
  return (
    <div className="flex items-center justify-center md:h-screen bg-gray-100">
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>
          <p className="flex items-center text-yellow-500 font-semibold">
            Rating: {product.rating.rate} / 5
            <span className="text-gray-500 text-sm ml-2">
              ({product.rating.count} reviews)
            </span>
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
