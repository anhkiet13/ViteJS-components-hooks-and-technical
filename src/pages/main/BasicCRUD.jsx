import React, { useEffect, useState } from "react";


// Cần đưa vào route
const BasicCRUD = () => {
  const [items, setItems] = useState([]);

  //GET: useEffect sử dụng cho get dữ liệu
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // CREATE: add new items into list items
  const addItem = (name) => {
    const newItem = { name };
    setItems([...items, newItem]);
  };

  // UPDATE
  const updateItem = (index, name) => {
    const updateItem = [...items];
    updateItem[index] = { name };
    setItems(updateItem);
  };

  // DELETE
  const deleteItem = (index) => {
    const deleteItem = [...items];
    deleteItem.splice(index, 1);
    setItems(deleteItem);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => updateItem(index, "updated name")}>
              Update
            </button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
        <button onClick={() => addItem("new item")}>Add item</button>
      </ul>
    </div>
  );
};

export default BasicCRUD;
