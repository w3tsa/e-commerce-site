import { createContext, useState, useEffect } from "react";

// firebase utils
import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";
// import data
// import SHOP_DATA from "../shop-data.js";

const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /* set the new value inside the database */
  // useEffect(() => {
  //   addCollectionAndDocuments("category", SHOP_DATA);
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
