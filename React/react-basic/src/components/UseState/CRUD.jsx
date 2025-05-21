import React, { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  const handleDelete = (index) => {
    console.log("delete");
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    console.log("editText", editText);
    console.log(index);
    let updateItems = items.map((item, i) => (i === index ? editText : item));
    setItems(updateItems);
    setEditIndex(null)
  };
  return (
    <>
      <h2>CRUD</h2>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
      {console.log("items", items)}
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setEditText(e.target.value)}
                  value={item}
                />
                <button onClick={() => handleUpdate(index)}>Update</button>
                <br />
              </>
            ) : (
              <>
                <h4 key={index}>{item}</h4>
                <button onClick={() => setEditIndex(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <hr />
              </>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default CRUD;
