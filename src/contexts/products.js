import { createContext, useState } from "react";

// import data
import PRODUCTS from "../shop-data.json";

const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
