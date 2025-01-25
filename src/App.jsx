import { useState } from "react";
import ItemForm from "./components/ItemForm";
import FilterAndSort from "./components/FilterAndSort";
import ItemTable from "./components/ItemTable";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 5 },
    { id: 2, name: "Chair", category: "Furniture", quantity: 15 },
    { id: 3, name: "Phone", category: "Electronics", quantity: 8 },
  ]);
  const [newItem, setNewItem] = useState({ id: null, name: "", category: "", quantity: "" });
  const [filter, setFilter] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const handleAddOrUpdate = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      if (newItem.id) {
        setItems(items.map((item) => (item.id === newItem.id ? { ...newItem, quantity: Number(newItem.quantity) } : item)));
      } else {
        setItems([...items, { ...newItem, id: Date.now(), quantity: Number(newItem.quantity) }]);
      }
      setNewItem({ id: null, name: "", category: "", quantity: "" });
    }
  };

  const editItem = (item) => setNewItem({ ...item });
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  const sortItems = () => {
    setItems([...items].sort((a, b) => (sortAscending ? a.quantity - b.quantity : b.quantity - a.quantity)));
    setSortAscending(!sortAscending);
  };

  const categories = [...new Set(items.map(item => item.category))];
  const filteredItems = filter ? items.filter((item) => item.category === filter) : items;

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-10">
      <div className="p-8 max-w-4xl w-full bg-gray-800 rounded-3xl shadow-2xl border-8 border-blue-400 hover:border-yellow-500 transition-all">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white underline">Inventory Management</h1>
        <ItemForm newItem={newItem} setNewItem={setNewItem} handleAddOrUpdate={handleAddOrUpdate} />
        <FilterAndSort filter={filter} setFilter={setFilter} categories={categories} sortItems={sortItems} sortAscending={sortAscending} />
        <ItemTable items={filteredItems} editItem={editItem} deleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default App;
