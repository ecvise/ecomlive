import React from 'react'
import CartViewOffCanvas from './CartViewOffCanvas'

export default function Header({setCart,cart}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo" width="30" height="24" className=" me-1" />
      shop Pakistan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className="btn btn-dark ms-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartviewoffcanvasRight" aria-controls="offcanvasRight"> 
       <i className="fas fa-shopping-cart "></i>  
       <span className="ms-2 badge rounded-pill bg-danger">
       {cart.length}
        </span>
       </button>
  
    </div>
  </div>
</nav>
<CartViewOffCanvas setCart={setCart}  cart={cart} />
</>
  )
}
