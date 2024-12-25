export default function Summary({ items }) {
  const doneItems = items.filter((item) => item.isDone === true).length;
  const totalItems = items.length;
  return (
    <footer>
      <p>Görev Sayısı: {totalItems}</p>
      <p>Tamamlanan Görev Sayısı: {doneItems}</p>
    </footer>
  );
}
