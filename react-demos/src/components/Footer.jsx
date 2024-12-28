export default function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = currentHour >= openHour && currentHour < closeHour;

  return (
    <footer className="bg-dark text-white text-center py-4 shadow-lg">
      <div className="container">
        <p className="mb-0">
          {isOpen
            ? `Şu an açık! Kapanış saati: ${closeHour}:00`
            : `Kapalı. Açılış saati: ${openHour}:00`}
        </p>
        <small className="text-muted">
          © 2023 Pizza Store. Tüm Hakları Saklıdır.
        </small>
      </div>
    </footer>
  );
}
