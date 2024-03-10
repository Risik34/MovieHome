import "./App.css";
import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist"; 
import NavBar from './components/NavBar';
export default function App() {
    
  const [isClicked, setIsClicked]=useState(false);
    const [isDark,setIsDark]=useState(0 );
    const menuToggler=()=>{
        setIsClicked(!isClicked)

console.log("toggled")
    }
     const themeToggler=()=>{
         setIsDark(!isDark);
     }
    useEffect(()=>{
        localStorage.setItem("theme","dark");
        
    }, [])

  return (
      <BrowserRouter>
          
    <div className="container " >
    <NavBar/>

        {
      isClicked?(
          <div className="bg-bg w-full h-screen text-center py-8 text-xl space-y-2  text-text ">
              <ul onClick={()=>{setIsClicked(!isClicked)}}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/watchlist">Watchlist</Link> </li>
              </ul>
          </div>
      ):null
        }
        <Routes>
<Route path="/" element={<Home/>}/>
            <Route path="watchlist" element={<Watchlist/>}/>
    
                </Routes>
      
      
    </div> 
      </BrowserRouter>);
}
