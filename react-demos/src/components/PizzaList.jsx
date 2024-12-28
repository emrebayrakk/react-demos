import Pizza from "./Pizza";
import { pizzas } from "../data.js";

export default function PizzaList() {
  return (
    <section className="my-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-shadow">Pizza Listesi</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {pizzas.length > 0 ? (
            pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.id} />)
          ) : (
            <p className="text-center">Pizza Yok</p>
          )}
        </div>
      </div>
    </section>
  );
}
