export default function Pizza({ pizzaObj }) {
  if (!pizzaObj.is_active) return null;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={pizzaObj.img}
          alt={pizzaObj.title}
          className="card-img-top p-2 border-bottom rounded-3 hover-zoom"
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{pizzaObj.title}</h5>
          <p className="card-text">{pizzaObj.desc}</p>
          <span
            className={`badge ${
              pizzaObj.price <= 200 ? "bg-danger" : "bg-primary"
            }`}
          >
            {pizzaObj.price} TL
          </span>
        </div>
        <div className="card-footer bg-transparent border-0">
          <button className="btn btn-outline-dark w-100 hover-glow">
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
}
