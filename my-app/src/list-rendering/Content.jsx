import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

//List-Rendering + Input Controlling
const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");

  let [isEditing, setIsEditing] = useState(false);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(newListItems);
  };

  let handleUpdate = () => {
    setIsEditing(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button>{isEditing ? "Save" : "Add"}</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              style={{ marginBottom: "20px", listStyle: "none" }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
                style={{ cursor: "pointer" }}
                name="check"
              />
              <label htmlFor="check">{item.label}</label>
              <FaEdit
                style={{
                  marginLeft: "15px",
                  color: "blue",
                  outline: "none",
                  cursor: "pointer",
                }}
                role="button"
                tabIndex={0}
                onClick={handleUpdate}
              />

              <FaTrashAlt
                style={{
                  marginLeft: "15px",
                  color: "red",
                  outline: "none",
                  cursor: "pointer",
                }}
                role="button"
                tabIndex={0}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
