import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";

const ToDo = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentEleId, setCurrentEleId] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(newListItems);
  };

  let handleAddOrSave = () => {
    if (isEditing) {
      let newListItems = items.map((item) => {
        return item.id === currentEleId ? { ...item, label: newItem } : item;
      });
      setItems(newListItems);
      setCurrentEleId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };

  let handleUpdate = (id) => {
    setIsEditing(true);
    setCurrentEleId(id);
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
  };

  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItems);
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        marginTop: "80px",
        border: "5px solid black",
        borderRadius: "80px",
        height: "450px",
        width: "600px",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          style={{
            borderRadius: "6px",
            border: "2px solid black",
            fontSize: "20px",
            height: "40px",
          }}
        />
        <button
          style={{
            marginLeft: "15px",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            width: "60px",
            height: "50px",
            borderRadius: "6px",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={handleAddOrSave}
        >
          {isEditing ? <IoIosSave /> : <IoIosAddCircleOutline />}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                marginBottom: "20px",
                listStyle: "none",
                fontSize: "26px",
              }}
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
                onClick={() => handleUpdate(item.id)}
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
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
