import React from "react"
function App(){
  let title1="Women Blouse"
  let img1= "https://m.media-amazon.com/images/I/61NQoUmuKeL._AC_UY445_.jpg"
  let price1 = 23.67;
  let discountPrice1 = 20

  let title2="Headset"
  let img2= "https://m.media-amazon.com/images/I/61Zh467pKjL._AC_UL320_.jpg"
  let price2 = 2.67;
  let discountPrice2 = 1.5

  let title3="LED"
  let img3= "https://m.media-amazon.com/images/I/81Yiw8Zk0uL._AC_UL320_.jpg"
  let price3 = 5.67;
  let discountPrice3 = 3.5
// Javascript goes here

  return(
            <div>
             <Img  title={title1} img={img1} price={price1} discount={discountPrice1}/>
             <Img title={title2} img={img2} price={price2} discount={discountPrice2} />
             <Img  title={title3} img={img3} price={price3} discount={discountPrice3}/>
           
          </div>
  )

}

function Img(props){

    return (
      <React.Fragment>
         <h2>{props.title}</h2>
             <img src={props.img}/>
             <div>
             Original Price: {props.price}  <br />
             Discount Price {props.discount} <br/>
             </div>
             <div>
              <a href="" > Detail</a> <br />
              <button>Buy</button>
             </div>
        </React.Fragment>
    )
}

export default App