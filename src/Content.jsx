import React from "react";
import Require_1 from "./image/tick.png";
import Require from "./image/img-01-1-1.png";
import Require_2 from "./image/man.png";


function Content(){
    return(
   <>
{/*    
         <div className="content">
         <h1 className="h1">Latest Events</h1>
         <div className="cards">
         <div className='card'>
         </div>
         <div className='card'>
         </div>
         <div className='card'>
         </div>
         <div className='card'>
         </div>
         </div>
        </div> */}

        
        <div className='our-community'>
             <div className='our-community-left'>
                <img src={Require} alt="img" />
                <h1>We’re Surprisingly Amazing</h1>
                <br></br>
                <ul>
                    <li className='display'> <img src={Require_1} alt="img" className='tick-img'  /><h3>Fast and Reliable Dealings</h3></li>
                    <br></br>
                    <li className='display'> <img src={Require_1} alt="img" className='tick-img' /><h3>User Data Secured in Vault</h3></li>
                    <br></br>
                    <li className='display'> <img src={Require_1} alt="img" className='tick-img'/><h3>Live Chat Supprt 24/7 Available</h3></li>
                    <br></br>
                </ul> 
                    {/* <button className='button-3'>Join Our Community</button> */}
                 </div>
             <div className='our-community-right'>
                 <img src={Require_2} alt="img" className='img-girl' /> 
             </div>

         </div>
         
    
   
   </>

    );
 }

 export default Content;