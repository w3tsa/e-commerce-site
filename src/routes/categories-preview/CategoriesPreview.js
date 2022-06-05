import { useContext } from "react";

// import context
import { CategoriesContext } from "../../contexts/categories";
import CategoryPreview from "../../components/category_preview/CategoryPreview";

// nested routes

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
