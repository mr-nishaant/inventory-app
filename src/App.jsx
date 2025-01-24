import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 5 },
    { id: 2, name: "Chair", category: "Furniture", quantity: 15 },
    { id: 3, name: "Phone", category: "Electronics", quantity: 8 },
  ]);
  const [newItem, setNewItem] = useState({
    id: null,
    name: "",
    category: "",
    quantity: "",
  });
  const [filter, setFilter] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  // Add or Update item in inventory
  const handleAddOrUpdate = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      if (newItem.id) {
        // Update existing item
        setItems(
          items.map((item) =>
            item.id === newItem.id
              ? { ...newItem, quantity: Number(newItem.quantity) }
              : item
          )
        );
      } else {
        // Add new item
        setItems([
          ...items,
          { ...newItem, id: Date.now(), quantity: Number(newItem.quantity) },
        ]);
      }
      setNewItem({ id: null, name: "", category: "", quantity: "" });
    }
  };

  // Edit existing item
  const editItem = (item) => {
    setNewItem({ ...item });
  };

  // Delete item from inventory
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Sort items by quantity
  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) =>
      sortAscending ? a.quantity - b.quantity : b.quantity - a.quantity
    );
    setItems(sortedItems);
    setSortAscending(!sortAscending);
  };

  // Filter items by category
  const filteredItems = filter
    ? items.filter((item) => item.category.includes(filter))
    : items;

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-4xl shadow-2xl shadow-black">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Inventory Management
        </h1>

        {/* Add or Update Item */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Item Name"
            className="border p-2 rounded w-full"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded w-full"
            value={newItem.category}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded w-sm"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white p-2 rounded w-1/4"
          >
            {newItem.id ? "Update" : "Add"}
          </button>
        </div>

        {/* Filter & Sort */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Filter by Category"
            className="border p-2 rounded w-1/4"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button
            onClick={sortItems}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Sort by Quantity {sortAscending ? "↑" : "↓"}
          </button>
        </div>

        {/* Inventory */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.id}
                className={item.quantity < 10 ? "bg-red-100" : ""}
              >
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-center">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-xl mr-2"
                    onClick={() => editItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-xl"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
