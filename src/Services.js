import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import One from './image/tarangna.jpg';
import Two from './image/moksha.webp';
import Three from './image/awahan.jpg';
import Four from './image/engi.jpg';
import Five from './image/rondewu.png';
import Six from './image/invictus.jpg';
import Seven from './image/udan.webp';
function Services() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const imagestyle ={
      padding:'5%'
    };
    return (
      <div className="services">
        <h1 className="h1">Latest Events</h1>
        <Slider {...settings}>
          <div className="servicecontainer">
          
            <img src={One} alt = "1" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
            {/* <h3>Writing & Translation</h3> */}
            </div>
          </div>
          
          <div className="servicecontainer">
          
            <img src={Two} alt ="2" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer" > 
            {/* <h3>Video & Animation</h3> */}
            </div>
          </div>

          <div className="servicecontainer">
          
            <img src={Three} alt ="3" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
            {/* <h3>Programming & Tech</h3> */}
            </div>
            
          </div>
          <div className="servicecontainer">
         
            <img src={Four} alt ="4" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
          {/* <h3>Music & Video</h3> */}
            </div>
          </div>
          {/* <div className="servicecontainer">
         
            <img src={Five} alt ="5" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
            <h3>Fun & Lifestyle</h3>
            </div>
          </div> */}
          <div className="servicecontainer">
         
            <img src={Six} alt ="6" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
            {/* <h3>Digital Marketing</h3> */}
            </div>
          </div>

          <div className="servicecontainer">
         
            <img src={Seven} alt ="7" style={imagestyle} className="servicesimage"/>
            <div className="servicetextcontainer">
            {/* <h3>Business</h3> */}
            </div>
          </div>
        </Slider>
      </div>
    );
  };

export default Services;
  