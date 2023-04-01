import React from 'react';
import ReactDOM from 'react-dom/client';

export default function(){
    return(
     <>
      <footer>
            <div id="left-footer">
                <h3>Company</h3>
                <p>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">How It Works</a>
                        </li>
                        <li>
                            <a href="#">Carriers</a>
                        </li>
                        <li>
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#">Trust and Safety</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </p>
            </div>
            <div id="right-footer">
                 <h3>Follow us on</h3>
                 <div id="social-media-footer">
                     <ul>
                        <li>
                            <a href="#">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                     </ul>
                 </div>
            </div>
        </footer>
     </>
    )
}