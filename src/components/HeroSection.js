import React, { useState, useEffect } from 'react'
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';
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
            <h1>DO YOU GLEMBLE</h1>
            <p>the one and only place to buy unique Glembles</p>
            <div className="hero-btns">
              
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
            <Link to = '/Shop' className='navbar-logo' onClick={closeMobileMenu}>
            Shop Now <i class="fa fa-hand-sparkles"></i>
            </Link> 
                
                </Button>
                


            </div>
        </div>
    );
}
export default HeroSection;