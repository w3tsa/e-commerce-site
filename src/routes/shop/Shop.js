import { useContext } from "react";

// import context
import { ProductsContext } from "../../contexts/products";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
