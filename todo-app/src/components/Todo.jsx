export default function Todo({ item, onDeleteItem, updateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          updateItem(item.id);
        }}
      />
      <span style={item.isDone ? { textDecoration: "line-through" } : {}}>
        {item.title}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
}
