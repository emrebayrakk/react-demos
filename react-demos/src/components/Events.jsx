import { pizzas } from "../data.js";

export default function Events() {
  let index = 0;
  let pizza = pizzas[index];

  function handlePreviousClick() {
    alert("Previous");
  }
  function handleNextClick() {
    alert("Next");
  }

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "400px" }}>
        <img
          src={pizza.img}
          className="card-img-top p-2 p-md-3 border-bottom"
        ></img>
        <div className="card-body">
          <h2 className="card-title">{pizza.title}</h2>
          <p className="card-text">{pizza.desc}</p>
          <span
            className={
              pizza.price <= 200
                ? "badge text-bg-danger"
                : "badge text-bg-primary"
            }
          >
            {pizza.price} TL
          </span>
        </div>
      </div>
      <button
        className="btn btn-primary me-1 mt-1"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <button className="btn btn-primary mt-1" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}
