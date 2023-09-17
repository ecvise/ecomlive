import React from 'react'
import Products from '../components/Products'

export default function MenuPage({error,loading,currentCategory,cart,filterItems}) {

 
if(loading)
  {
    return (<div>Loading...</div>)
  }
  else if(error)
  {
    return (<div>{error}</div>)
  }
  else if(filterItems.length)
  {
  return (
    <div className='container mb-5'>
      <Products key={currentCategory} filterItems={filterItems} cCat={currentCategory} cart={cart}/>
    </div>
  )
  }


}
