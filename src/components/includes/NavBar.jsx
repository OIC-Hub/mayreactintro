import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

function NavBar(props) {
    const [search, setSearch] = useState('')
    const [searchProduct, setSearchProduct] = useState([])
    const searchForm=(e) => {
        e.preventDefault()
        if(search !=""){
            axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then(res => {
                setSearchProduct(res.data.products)
           
            })
        }
    }
  localStorage.setItem('products', JSON.stringify(searchProduct));
  return (
  <header className={props.style.nav}>
    <div>OIC Hub LTD</div>
    <form onSubmit={searchForm}> 
        <input type="search" name="searchproduct" onChange={(e)=> setSearch(e.target.value)} />
        <button type="submit">Search</button>
    </form>
    <ul className={props.style.navbar}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to='/services'> Services</Link>
        </li>
        <li>
            <Link to='/register'>Register</Link>
        </li>
    </ul>
  </header>
  )
}

export default NavBar