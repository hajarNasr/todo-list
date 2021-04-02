import { useState } from "react";
function UpdateItemForm({ item, updateItem, setIsUpdate }) {
  const [updatedItem, setUpdatedItem] = useState(item);
  const handleSubmint = (e) => {
    e.preventDefault();
    updateItem(item, updatedItem);
    setIsUpdate(false);
  };
  return (
    <form onSubmit={handleSubmint} className="update-form">
      <input
        value={updatedItem.text}
        onChange={(e) => setUpdatedItem({ ...item, text: e.target.value })}
      />
      <button>Update</button>
    </form>
  );
}

export default UpdateItemForm;
