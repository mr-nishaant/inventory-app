const InputField = ({ placeholder, value, onChange, borderColor }) => (
    <input
      type={placeholder === "Quantity" ? "number" : "text"}
      placeholder={placeholder}
      className={`border-4 border-${borderColor} p-3 rounded-lg w-full text-lg bg-gray-700 text-white placeholder-gray-400 focus:border-yellow-400`}
      value={value}
      onChange={onChange}
    />
  );
  
  export default InputField;
  