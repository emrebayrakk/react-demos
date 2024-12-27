import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/feautures/todos/todosSlice";
export default function Form() {
  const [itemName, setItemName] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Date.now(),
      title: itemName,
      isDone: false,
    };

    dispatch(addTodo(item));
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
