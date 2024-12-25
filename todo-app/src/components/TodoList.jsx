import Todo from "./Todo";

export default function TodoList({ items, onDeleteItem, updateItem }) {
  return (
    <ul className="list-group mt-4">
      {items.map((item) => (
        <Todo
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          updateItem={updateItem}
        />
      ))}
    </ul>
  );
}