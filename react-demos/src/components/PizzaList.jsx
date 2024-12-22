import Pizza from "./Pizza"
import { pizzas } from "../data.js"

export default function PizzaList(){
    
    return (
      <div className='pizza-list'>
        <h2>Pizza Listesi</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          {
            pizzas.length > 0 ? (
              pizzas.map((p) => (
                <Pizza pizzaObj = {p} key={p.id}/>
              ))
            ) : (
              <p>Pizza Yok</p>
            )
            
          }
          

        </div>
      </div>
    )
  }