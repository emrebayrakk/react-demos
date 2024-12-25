import { useState } from "react";
import { items } from "../data.js";

export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: items.length + 1,
      title: itemName,
      isDone: false,
    };
    onAddItem(item);
    setItemName("");
  }
  function handleChange(event) {
    setItemName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        name="itemName"
        value={itemName}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
