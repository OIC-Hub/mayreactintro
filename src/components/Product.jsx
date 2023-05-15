function Product(props){

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
               <div>
               Original Price: {props.price}  <br />
               Discount Price {props.discount} <br/>
               </div>
               <div>
                <a href=""  className="btn"> Detail</a> 
                <button className="btn">Buy</button>
               </div>
          </div>
      )
  }
  export default Product