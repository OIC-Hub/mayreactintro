import { useEffect, useState } from "react";
import Home from "../components/Home"
import axios from "axios";
function Index() {

  const[products, setProducts] = useState([]);
  const [searchProd, setSearchProd] = useState();

  function fetchData(){
 axios.get('https://dummyjson.com/products?limit=10')
 .then(res =>{
  if(localStorage.getItem(products)){
    setProducts(JSON.parse(localStorage.getItem(products)))
  }else{
    setProducts(res.data.products)
  }
 }).catch( err =>{
  console.log(err)
 })
}
useEffect(()=>{
  fetchData()
}, [])
  return (
    <div>
    {products.length > 0 ? products.map((value, index) =>{
       <Home /> 
    }) :
     <p>Products LOading...</p>
    
    }
   
   </div>
  )
}

export default Index