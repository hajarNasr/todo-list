import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const initList = [
    { text: "Item One. Checked", isChecked: true },
    { text: "Item Two. Unchecked", isChecked: false },
    { text: "Item Three. Unchecked", isChecked: false },
  ];
  const [list, setList] = useState(initList);
  const handleAddNewItem = (newItem) => {
    setList([newItem, ...list]);
  };
  const handleDeleteItem = (itemToDelete) => {
    setList(list.filter((item) => item.text !== itemToDelete));
  };
  const handleUpdateItem = (oldItem, updatedItem) => {
    setList(
      list.map((item) => {
        return item.text === oldItem.text ? updatedItem : item;
      })
    );
  };

  const handleCheckItem = (itemToCheck) => {
    setList(
      list.map((item) => {
        return item.text === itemToCheck.text
          ? { ...itemToCheck, isChecked: !itemToCheck.isChecked }
          : item;
      })
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addNewItem={handleAddNewItem} />
      <TodoList
        list={list}
        updateItem={handleUpdateItem}
        deleteItem={handleDeleteItem}
        toggleItemCheck={handleCheckItem}
      />
    </div>
  );
}

export default App;
