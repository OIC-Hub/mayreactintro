 import Product  from "../components/Product"
function Products(){
    const products =[
      {
        title:"Women Blouse", img:"https://m.media-amazon.com/images/I/61NQoUmuKeL._AC_UY445_.jpg", price:23.68, discountPrice :20  
      },
      {
         title:"Headset",
        img:"https://m.media-amazon.com/images/I/61Zh467pKjL._AC_UL320_.jpg",
        price:2.67,
        discountPrice:1.5
      
      }, 
      {
         title:"LED",
        img:"https://m.media-amazon.com/images/I/81Yiw8Zk0uL._AC_UL320_.jpg",
        price:5.67,
        discountPrice:3.5
    }
    ]
  // Javascript goes here
  
  
  
    return(
              // <div style={{display: 'flex' }}>
              <div className="container">
                {
                  (products.length >0 ) ?
               
                  products.map((value, index)=>{
                    return (
                      <div key={index}  className="product">
                      <Product   title={value.title} img={value.img} price={value.price} discount={value.discountPrice} />
                     </ div>
                    )
                  }) :
                  <h2>No Product available</h2>
                }
               {/* <Img/> */}
            </div>
    )
    
  }
  export default Products