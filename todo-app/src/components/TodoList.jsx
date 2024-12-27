import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { items = [] } = useSelector((state) => state.todos || {});
  console.log(items);
  if (!Array.isArray(items)) {
    return <p>Error: Items data is not valid.</p>;
  }

  return (
    <ul className="list-group mt-4">
      {items.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
  );
}
