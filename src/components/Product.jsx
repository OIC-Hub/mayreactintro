import { Link } from "react-router-dom"

function Product(props){
console.log(props)
    // let mainStyle={
    //   width: '31%',
    //   margin: '2.33%',
    //   boxSizing: 'border-box'
    // }
      return (
        // <div style={mainStyle}>
        <div>
           <h2>{props.title}</h2>
               <img src={props.img}/>
               <p>{props.description}</p>
               <div>
               Original Price: {props.price}  <br />
               Discount Price {props.discount} <br/>
               </div>
               <div>
                <Link to={`../details/${props.id}`} className="btn"> Detail</Link> 
                <button className="btn">Buy</button>
               </div>
          </div>
      )
  }
  export default Product