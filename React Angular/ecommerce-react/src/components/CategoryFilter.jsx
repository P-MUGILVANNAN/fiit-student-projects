export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-4">
      <div className="btn-group" role="group">
        {categories.map(category => (
          <button
            key={category}
            type="button"
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};