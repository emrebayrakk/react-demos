import { useSelector } from "react-redux";
export default function Summary() {
  const { items = [] } = useSelector((state) => state.todos || {});

  if (!Array.isArray(items)) {
    return <p>Error: Items data is not valid.</p>;
  }

  const doneItems = items.filter((item) => item.isDone).length;
  const totalItems = items.length;

  return (
    <footer className="mt-4">
      <div className="alert alert-info">
        <p>Total Tasks: {totalItems}</p>
        <p>Completed Tasks: {doneItems}</p>
      </div>
    </footer>
  );
}
