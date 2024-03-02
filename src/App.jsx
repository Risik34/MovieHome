import "./App.css";
import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist"; 
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
        
        <nav className="bg-secondary shadow-md  flex shadow-md">

<div className=" pl-3 py-1" onClick={menuToggler}>{isClicked?(
    <i className="fa-solid fa-arrow-left text-text text-2xl" ></i>):(<i className="fa-solid fa-bars text-text text-2xl"></i>)}
</div>
      <h1 className="text-2xl font-anta text-center py-1 text-text mx-auto ">Movie Home</h1>
<div className=" pr-3 py-1" onClick={themeToggler}>{isDark?(
    <i className="fa-solid fa-sun text-text  text-2xl" ></i>):(<i className="fa-solid fa-moon text-text text-2xl"></i>)}
</div>
        </nav>
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
