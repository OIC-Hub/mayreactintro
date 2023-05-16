import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import style from './components/style.module.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <App  style={style}/>
   </BrowserRouter>
  </React.StrictMode>,
)
