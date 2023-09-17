import {
    Link,
    useParams
  } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchData } from '../data/prodcutsData'


export default function  ProductDetail(){
    const [item,setItemData] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);

    let { id } = useParams();
    useEffect(() => {
        async function fetchProductData() {
          // You can await here
          const catString = 'products/'+id
          const item = await fetchData({'dataUrl':catString,'setError':setError,'setLoading':setLoading,'loading':loading,'error':error});
          setItemData(item);
          // ...
        }
        fetchProductData();
      }, []);
      
    
    {

        if(loading)
        {
          return (<div>Loading...</div>)
        }
        else if(error)
        {
          return (<div> Error {error}</div>)
        }
        else if(item)
        {        
    return (
        <>

        <div className="col container">
        <div className="card " style={{ width: "30rem" }}>
          <img src={item.image} className="img-fluid img-thumbnail"  />
          <div className="card-body">
            <h5 className="card-title"><Link to={`/Product/${item.id}`} > {item.title}</Link></h5>
            <p className="card-text">
                {item.description}
            </p>
            <div className="mb-2" ><span className="badge text-bg-info">Rs. {item.price}</span></div>
            <button className="btn btn-primary"   >
              Add to Cart
            </button>
          </div>
        </div>
        </div>
        </>
      );
    }
}
}