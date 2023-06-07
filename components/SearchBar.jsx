
const SearchBar = () => {
    const handleSearch = () => {
      // Handle search functionality here
    };
  
    return (
      <div className="flex items-center justify-between text-white gap-3">
        <input
          type="text"
          className="px-8 py-1 rounded-full bg-white focus:outline-none"
        />
        <button
          className="ml-2 px-4 py-1 rounded-full bg-lightgreen text-white"
        >
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;