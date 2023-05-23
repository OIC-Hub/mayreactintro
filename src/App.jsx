import React from "react";
import './App.css';
import Products from "./pages/Products";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import {Route,  Routes} from 'react-router-dom'
import NavBar from "./components/includes/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css"
import RegisterPage from "./pages/RegisterPage";
import SingleProduct from "./pages/SingleProduct";

function App(props){
  return (
  
    <div>
      <NavBar style={props.style}  />
     <Routes>
      <Route path="/" element={ <Index />} /> 
     <Route path="/products" element={<Products />} />
     <Route path="/services" element={<ServicesPage />} />
    <Route path="/about" element={<AboutPage />} /> 
    <Route path="/register" element={<RegisterPage/>} /> 
    <Route path="/details/:productId" element={<SingleProduct />} />
      </Routes> 
      </div>
  )
}
export default App