import {
  Link,
  useParams
} from "react-router-dom";

export default function CatButtons({setCurrentCategory,currentCategory,categories}) {
 
 return (
  <>
    <Link to="/" key={0} onClick={()=>(setCurrentCategory(''))}  className={`btn me-2 mb-3 ${currentCategory==''?'btn-success':'btn-light'}`} >
      All
    </Link>
  {categories.map(function(category) {
    return (
      <Link to="/" key={category} onClick={()=>(setCurrentCategory(category))}  className={`btn me-2 mb-3 ${currentCategory==category?'btn-success':'btn-light'}`} >
      {category}
    </Link>
    )
  })}
 </> 
 )
  
}
