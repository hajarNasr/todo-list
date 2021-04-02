import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCogs } from "@fortawesome/free-solid-svg-icons";
import UpdateItemForm from "./UpdateItemForm";

const TrashIcon = () => <FontAwesomeIcon icon={faTrash} />;
const UpdateIcon = () => <FontAwesomeIcon icon={faCogs} />;

function TodoList({ list, updateItem, deleteItem, toggleItemCheck }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [txtToUpdate, setTextToUpdate] = useState("");

  const showUpdateForm = (e, item) => {
    setTextToUpdate(item);
    setIsUpdate(true);
  };

  return (
    <ul className="todo-list">
      {list.map((item, i) => (
        <li className="todo-item" key={`${i}- ${item}`}>
          <div className="todo-item-checkbox">
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={(e) => toggleItemCheck(item)}
            />
          </div>
          <div
            className={
              item.isChecked ? "line-throgh todo-item-text" : "todo-item-text"
            }
          >
            {item.text}
          </div>
          <div className="todo-item-btns">
            <button onClick={(e) => deleteItem(item.text)}>
              <TrashIcon />
            </button>
            <button
              onClick={(e) => showUpdateForm(e, item)}
              disabled={item.isChecked}
            >
              <UpdateIcon />
            </button>
          </div>

          {isUpdate && txtToUpdate === item && (
            <>
              <div className="update-form-wrapper">
                <UpdateItemForm
                  item={item}
                  updateItem={updateItem}
                  setIsUpdate={setIsUpdate}
                />
                <button
                  onClick={(e) => setIsUpdate(false)}
                  className="close-btn"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
