const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-4">
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;