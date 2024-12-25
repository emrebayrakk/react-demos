export default function Summary({ items }) {
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
