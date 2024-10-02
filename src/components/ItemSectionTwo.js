import React, { useState, useEffect } from 'react'
import '../App.css';
import { Button } from "./ShopButton";
import './ItemPage.css';
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

        
            <h1>GLORB</h1>

            <img src="logo192.png" width="110" height="60" ></img>
            <img src="logo192.png" width="110" height="60" ></img>
            <img src="logo192.png" width="110" height="60" ></img>

            <br></br>
            <br></br>
             <p> Gletcher is soft and wants to bring peace</p>
                <br></br>

                <p>The spirt of Gletcher comes from their gentley
                chosen soul crystal</p>

                <br></br>

                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
            <Link to = '/Shop' className='navbar-logo' onClick={closeMobileMenu}>
            $300 <i class="fa fa-hand-sparkles"></i>
            </Link> 
                
            </Button>

        </div>
    );
}
export default HeroSection;