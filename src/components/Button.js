import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //css classes for outlines

const SIZES = ['btn--medium', 'btn--large']; //css classes for size

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; //checks the style and defult applies primary (0 possition), if no style chosen

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; //checks the size and defult applies medium if none spesified

    return(
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        </Link>
    )
};