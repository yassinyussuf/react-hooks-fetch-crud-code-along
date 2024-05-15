import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        category: category,
        isInCart: false
      })
    })
      .then(response => response.json())
      .then(newItem => onAddItem(newItem));
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;