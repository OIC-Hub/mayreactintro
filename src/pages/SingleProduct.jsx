import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function SingleProduct() {
const [product, setProduct]=useState({});
  const {productId} = useParams()
 function singlePro(){
    axios.get(`https://dummyjson.com/products/${productId}`)
    .then(res=>{
        setProduct(res.data)
    })
 }
 useEffect(()=>{
    singlePro()
 }, [])

 let isProduct = Object.keys(product).length > 0 ? true : false;
  return (
    <div>
      { isProduct ? 
      
      <div>
       <div><img src={product.images[0]} /> </div>
       <div> 
          {product.description}

       </div>
         </div>
        
      : "Loading"}
      </div>
  )
}

export default SingleProduct