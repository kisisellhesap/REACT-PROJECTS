import CategoryList from "./CategoryList";

const Categories = ({ genre }) => {
  return (
    <div className="categories">
      <h3>{genre?.name}</h3>
      <div className="movies-list">
        <CategoryList genre={genre} />
      </div>
    </div>
  );
};

export default Categories;
