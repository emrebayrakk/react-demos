export default function Pizza({ pizzaObj }){

    if(!pizzaObj.is_active) return null;

    return (
      <div className='col'>
        <div className="card">
          <img src={pizzaObj.img} className='card-img-top p-2 p-md-3 border-bottom'>
          </img>
          <div className='card-body'>
            <h2 className='card-title'>{pizzaObj.title}</h2>
            <p className='card-text'>{pizzaObj.desc}</p>
            <span className={ pizzaObj.price <= 200 ? "badge text-bg-danger" : "badge text-bg-primary"}>{pizzaObj.price} TL</span>
          </div>
        </div>
      </div>
    )
  }