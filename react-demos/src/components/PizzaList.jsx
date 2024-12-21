import Pizza from "./Pizza"

export default function PizzaList(){
    
    
    const pizzas = [
       {
        id:1,
        title: "Pizza 1",
        desc:"Lorem ipsum dolor sit amet.",
        img:"https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-vegetable-italian-slice-piece-pizza-vintage-png-image_13059928.png",
        price:200,
        is_active: true
      },
      {
        id:2,
        title: "Pizza 2",
        desc:"Lorem ipsum dolor sit amet.",
        img:"https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-vegetable-italian-slice-piece-pizza-vintage-png-image_13059928.png",
        price:400,
        is_active: true
      },
      {
        id:3,
        title: "Pizza 3",
        desc:"Lorem ipsum dolor sit amet.",
        img:"https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-vegetable-italian-slice-piece-pizza-vintage-png-image_13059928.png",
        price:600,
        is_active: true
      },
      {
        id:4,
        title: "Pizza 4",
        desc:"Lorem ipsum dolor sit amet.",
        img:"https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-vegetable-italian-slice-piece-pizza-vintage-png-image_13059928.png",
        price:800,
        is_active: true
      }
    ]

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