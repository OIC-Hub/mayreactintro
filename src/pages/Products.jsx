 import { useEffect, useState } from "react"
import Product  from "../components/Product"
 import axios from 'axios'
function Products(){
  const[products, setProducts]=useState([]);
  function fetchProducts(){
  axios.get('https://dummyjson.com/products')
  .then(response =>{
    setProducts(response.data.products)
  })
}
useEffect(()=>{
  fetchProducts()
}, [])
    return(
              // <div style={{display: 'flex' }}>
              <div className="container">
                {
                  (products.length >0 ) ?
               
                  products.map((value, index)=>{
                    return (
                      <div key={index}  className="product">
                      <Product  description={value.description}  title={value.title} img={value.images[0]} price={value.price} discount={value.discountPercentage} />
                     </ div>
                    )
                  }) :
                  <h2>Products Loading...</h2>
                }
               {/* <Img/> */}
            </div>
    )
    
  }
  export default Products