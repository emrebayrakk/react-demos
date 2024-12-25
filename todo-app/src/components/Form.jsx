import { useState } from "react";
import { items } from "../data.js";

export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Date.now(),
      title: itemName,
      isDone: false,
    };
    onAddItem(item);
    setItemName("");
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your task"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
