import React from "react";
import { useState } from "react";
import Coderlonda from "./image/papa.png";


// const Navbar = () => {
//       const [color , setcolor] = useState(false)
//       const changeColor = () => {
//          if(window.scrollY>= 90){
//             setcolor(true)
//          }
//          else{
//             setcolor(false)
//          }
//       }
   
//       window.addEventListener(scroll , changeColor)
          
//    };
            




  function Header(){
   const [color , setcolor] = useState(false)
   const changeColor = () => {
      
      if(window.scrollY>= 5){
         setcolor(true)
      }
      else{
         setcolor(false)
      }
   
    
   }

   window.addEventListener('scroll' , changeColor);
   
    return(
     <>
     
      <div className={color? 'navbar-scroll': 'navbar'}>
       <div className='navbar-left'>
       {color? <h1>SPONSMART</h1>:<div> <h1>SPONSMART</h1><img src={Coderlonda} className="chutia"/> </div>}
       </div>
       <div className='navbar-right-1'>
          
          <div className="dropdown">
          <a className="nav-links" href="#">AboutUs</a>
            
          </div>
          <a className="nav-links" href="#">JoinUs</a>
       </div>
      
        
     </div>
     
     </>
    
    );
 }

 export default Header;