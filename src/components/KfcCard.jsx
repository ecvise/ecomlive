import React from "react"
import { Link } from "react-router-dom";

export default function KfcCard({item,cart}) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="h-100" alt="kfc card" /* data-bs-toggle="offcanvas" data-bs-target="#addItemffcanvasRight" aria-controls="offcanvasRight" key={item.id} onClick={ () => addToCart(cart,item)} */ />
      <div className="card-body">
        <h5 className="card-title"><Link key={`qq ${item.id}`} to={`/Product/${item.id}`} replace  > {item.title}</Link></h5>
        <p className="card-text">
            {item.description}
        </p>
        <div className="mb-2" ><span className="badge text-bg-info">Rs. {item.price}</span></div>
        <button className="btn btn-primary"  key={item.id} >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
