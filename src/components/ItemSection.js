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
             <p> Glorb is kind and wants to bring luck</p>
                <br></br>

                <p>The spirt of Glorb comes from his carefully
                chosen heartstrings</p>

                <br></br>

                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
            <Link to = '/Shop' className='navbar-logo' onClick={closeMobileMenu}>
            $200 <i class="fa fa-hand-sparkles"></i>
            </Link> 
                
            </Button>

        </div>
    );
}
export default HeroSection;