import Pizza from "./Pizza"

export default function PizzaList(){
    return (
      <div className='pizza-list'>
        <h2>Pizza Listesi</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
    )
  }