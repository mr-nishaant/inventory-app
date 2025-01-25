import InputField from "./InputField";

const ItemForm = ({ newItem, setNewItem, handleAddOrUpdate }) => (
  <div className="flex gap-4 mb-6">
    <InputField placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} borderColor="blue-500" />
    <InputField placeholder="Category" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} borderColor="purple-500" />
    <InputField placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} borderColor="green-500" />
    <button onClick={handleAddOrUpdate} className="bg-yellow-500 text-black text-lg font-bold p-3 rounded-lg shadow-lg hover:bg-yellow-400">
      {newItem.id ? "Update" : "Add"}
    </button>
  </div>
);

export default ItemForm;
