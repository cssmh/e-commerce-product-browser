import ProductList from "../components/ProductList";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
    return (
      <div>
        <h1>Product Browser</h1>
        <SearchFilter />
        <ProductList />
      </div>
    );
};

export default HomePage;