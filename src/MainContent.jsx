import React from "react";
import Require from "./image/mann.png"
import { useState } from "react";


 function MainContent(){
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
         
         <div className="maincontent">
          <div className="maincontent-left">
        <h2 id="text"> Want to connet with your niche Audience ?</h2>
        <button className="button-ex"> Join Our Community <i class="fa fa-sign-in " id="icon" aria-hidden="true"></i></button>
        </div>
        <div className="maincontent-right">
         <img src={Require} alt="img"  className={color? 'image': 'preimage'} />
        </div>
        </div>
   


      
      </>
      
    );
 }

 export default MainContent;