const ItemTable = ({ items, editItem, deleteItem }) => (
    <table className="w-full border-4 border-white text-white">
      <thead>
        <tr className="bg-blue-600 text-lg font-bold">
          <th className="border border-white p-3">Item Name</th>
          <th className="border border-white p-3">Category</th>
          <th className="border border-white p-3">Quantity</th>
          <th className="border border-white p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={item.quantity < 10 ? "bg-red-600" : "bg-green-600"}>
            <td className="border border-white p-3 text-lg font-semibold text-black">{item.name}</td>
            <td className="border border-white p-3 text-lg font-semibold text-black">{item.category}</td>
            <td className="border border-white p-3 text-center text-lg font-semibold text-black">{item.quantity}</td>
            <td className="border border-white p-3 text-center">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mr-2 hover:bg-yellow-400" onClick={() => editItem(item)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400" onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default ItemTable;
  