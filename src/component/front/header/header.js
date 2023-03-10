import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const header = ( cartItem) => {
  return (
  <header className='header'>
    <div>
        <h1>
            <Link to ="/" className='logo'>
                Art Galley
                </Link>        
            </h1>
    </div>
    <div className='header-links'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/cart" className="fas fa-shopping-cart"/>
               
                <span className='cart-length'>
                    {cartItem.length === 0? "": cartItem.length}
                </span>
            </li>
        </ul>

    </div>
  </header>
  )
}

export default header
