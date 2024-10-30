import ProductList from "../components/ProductList";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
    return (
      <div className="max-w-[1200px] mx-auto mt-5 mb-8">
        <h1>Product Browser</h1>
        <SearchFilter />
        <ProductList />
      </div>
    );
};

export default HomePage;