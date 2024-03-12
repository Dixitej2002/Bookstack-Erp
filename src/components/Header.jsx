import React from 'react'
import { Link } from 'react-router-dom';
import logo from './icons/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
     <header>
        <div className="logo">
      <img src={logo} alt="logo" />
       <Link to='/'  className="link-text">Bookstack</Link></div>
        <div className="header-menu">
          <Link to="/coming">Login</Link>
          <span className='div-bar'>/</span>
          <Link to="/coming">Signup</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
           
          </ul>
        </nav>
      </header>
    
    </div>
  )
}

export default Header