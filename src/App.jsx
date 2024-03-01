import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
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
        console.log(localStorage.getItem("theme"))
    }, [])

  return (
      
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
          <div className="bg-bg w-full h-screen text-center py-8 text-lg text-text ">
              <ul >
                  <li>Home</li>
                  <li>webseries </li>
              </ul>
          </div>
      ):null
        }
<Home/>
    
    
      
      
    </div> );
}
