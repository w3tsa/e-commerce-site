import "./Directory.scss";

// local imports
import DirectoryItem from "../directory_item/DirectoryItem";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
