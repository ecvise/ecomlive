export default function CatButtons({setCurrentCategory,currentCategory,categories}) {
 
 return (
  <>
    <button key={0} onClick={()=>(setCurrentCategory(''))} type="button" className={`btn me-2 mb-3 ${currentCategory==''?'btn-success':'btn-light'}`} >
      All
    </button>
  {categories.map(function(category) {
    return (
      <button key={category} onClick={()=>(setCurrentCategory(category))} type="button" className={`btn me-2 mb-3 ${currentCategory==category?'btn-success':'btn-light'}`} >
      {category}
    </button>
    )
  })}
 </> 
 )
  
}
