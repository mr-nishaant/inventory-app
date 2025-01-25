const FilterAndSort = ({ filter, setFilter, categories, sortItems, sortAscending }) => (
    <div className="flex justify-between items-center mb-6">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border-4 border-red-500 p-3 rounded-lg w-1/3 text-lg bg-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
      >
        <option value="">Filter by Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={sortItems} className="bg-pink-500 text-white text-lg font-bold p-3 rounded-lg shadow-lg hover:bg-pink-400">
        Sort by Quantity {sortAscending ? "⬆️" : "⬇️"}
      </button>
    </div>
  );
  
  export default FilterAndSort;
  