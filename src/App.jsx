import React from "react";
import './App.css';
import Products from "./pages/Products";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import {Route,  Routes} from 'react-router-dom'
import NavBar from "./components/includes/NavBar";

function App(){
  return (
  
    <div>
      <NavBar />
     <Routes>
      <Route path="/" element={ <Index />} /> 
     <Route path="/products" element={<Products />} />
     <Route path="/services" element={<ServicesPage />} />
    <Route path="/about" element={<AboutPage />} /> 
      </Routes> 
      </div>
  )
}
export default App