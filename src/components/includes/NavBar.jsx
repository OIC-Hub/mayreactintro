import {Link} from "react-router-dom";

function NavBar(props) {
  return (
  <header className={props.style.nav}>
    <div>OIC Hub LTD</div>
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