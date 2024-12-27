import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/feautures/todos/todosSlice";

export default function Todo({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.isDone}
          onChange={() => dispatch(updateTodo(item.id))}
        />
        <label
          className="form-check-label"
          style={item.isDone ? { textDecoration: "line-through" } : {}}
        >
          {item.title}
        </label>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        X
      </button>
    </li>
  );
}
