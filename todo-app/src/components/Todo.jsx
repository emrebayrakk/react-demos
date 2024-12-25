export default function Todo({ item, onDeleteItem, updateItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.isDone}
          onChange={() => updateItem(item.id)}
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
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}
