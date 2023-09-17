import React, { useState,useEffect} from 'react'
import MenuPage from './pages/MenuPage'
import ProductDetail from './pages/ProductDetail'
import P404 from './pages/P404'
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import CatButtons from './components/CatButtons'
import Header from './components/Header'
import { fetchData } from './data/prodcutsData'

export default function App() {
  const [currentCategory,setCurrentCategory] = useState('');
  const [filterItems,setFilterItems] = useState([]); //items
  const [categories,setCategories] = useState([]);

  const [cart,setCart] = useState([]);   
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(true);
 

  
  useEffect(() => {
    async function fetchProductData() {
      // You can await here
      const catString= currentCategory==''?'products':'products/category/'+currentCategory;
      const items = await fetchData({'dataUrl':catString,'setError':setError,'setLoading':setLoading,'loading':loading,'error':error});
      const categories = await fetchData({'dataUrl':'products/categories','setError':setError,'setLoading':setLoading,'loading':loading,'error':error});
     
      setFilterItems(items);
      setCategories(categories);

    }
    fetchProductData();
  }, [currentCategory]);

  return (
    <>
    <Router>
    <Header  cart={cart} setCart={setCart}  />
    <CatButtons categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} />
    <Routes>
        <Route path="/" element={<MenuPage error={error} loading={loading} filterItems={filterItems} currentCategory={currentCategory} categories={categories}/>} />
        <Route path="/product/:id" element={<ProductDetail /> } />
        <Route path="*" element={<P404 />} />
      </Routes>
    </Router>

    </>
  )
}
