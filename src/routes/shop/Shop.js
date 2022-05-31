import { useContext } from "react";

// import context
import { ProductsContext } from "../../contexts/products";
import ProductCard from "../../components/product_card/ProductCard";

// styles
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
