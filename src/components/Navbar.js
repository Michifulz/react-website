import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => { 
    if (window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
// the return is being read like HTML in this JS file. see functions above.

// current known issue - the shop button is not redirecting 
// needs to be fixed or the outline needs to be scrapped
  return (
     <>
     <nav className='navbar'>
         <div className='navbar-container'>
            <Link to = '/Home' className='navbar-logo' onClick={closeMobileMenu}>
                Glemble
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
              

              <li className='nav-item'>
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              
              <li className='nav-item'>
                <Link to='/Shop' className='nav-links' onClick={closeMobileMenu}>
                 Shop
                </Link>
              </li>


            </ul>

         </div>
     </nav>
    </>
 );
}

export default Navbar;
