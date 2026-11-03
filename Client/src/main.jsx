import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'



createRoot(document.getElementById('root')).render(  
  <BrowserRouter>
    <App />
  </BrowserRouter>,  
)


//1 : 13 : 43
//1 : 37 : 17
//1 : 42 : 51
//1 : 49 : 03
//1 : 56 : 10
//2 : 13 : 28 //figure out spacing on Sidebar