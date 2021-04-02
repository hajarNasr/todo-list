import { useState } from "react";

function TodoForm({ addNewItem }) {
  const initItem = { text: "", isChecked: false };
  const [newItem, setNewItem] = useState(initItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.text) {
      alert("Please enter an item to add");
    } else {
      addNewItem(newItem);
      setNewItem(initItem);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Enter item"
        value={newItem.text}
        onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
