import React, { useState, useEffect } from 'react'
import '../App.css';
import './AboutSection.css';
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
            <h1>CHANGE YOUR LIFE WITH GLEMBLE</h1>
            <p>Glembles- Unique and life changing</p>
            <h3>
            <br></br>
            <br></br>
             <p> Have you looked everywhere for something different?</p> 
               Been searching for something special, Something truly unique.<p>
                Welcome to Glemble- Truely one of a kind.</p>
                <br></br>
            
                <p> Chosing your Glemble: </p>
                Each Glemble is shown through hand picked images 
                detail its personlity.<p> Its important that you chose a Glemble
                that speaks to your soul </p>
                
                <br></br>

                <p>What are Glembles for? </p>
                Glembles clense the mind and soul, inspire growth and
                draw luck to them. Each Glemble has its own unique traits 
                and features with its own spirit to nuture. 
            
            </h3>
            <div className="hero-btns">
              

                


            </div>
        </div>
    );
}
export default HeroSection;