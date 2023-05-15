import {Link} from "react-router-dom";
function NavBar() {
  return (
  <header>
    <ul className='navbar'>
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
    </ul>
  </header>
  )
}

export default NavBar