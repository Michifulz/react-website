import React, { useState, useEffect } from 'react'
import '../App.css';
import { Button } from "./ShopButton";
import './ShopSection.css';
import { Link } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";

// trying to add link to shop now button 
function HeroSection(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <div className='hero-container'>
            <video src='/video/Gold_Dust.mp4' autoPlay loop muted />
            
            <h1>CURRENT GLEMBLES</h1>
            <div className="hero-btns">
              
                <Button
                className='btns'
                
                buttonSize='btn--large'
                >
            <Link to = '/ItemOne' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="logo192.png" width="110" height="60" ></img>
            </Link>
            
                </Button>

            <Button className='btns'
                
                buttonSize='btn--large'>

            <Link to = '/ItemTwo' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="logo192.png" width="110" height="60" ></img>
            </Link>
                
            </Button>

            <Button className='btns'
                
                buttonSize='btn--large'>

            <Link to = '/ItemThree' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="logo192.png" width="110" height="60" ></img>
            </Link>
                
            </Button>



            </div>
        </div>
    );
}
export default HeroSection;