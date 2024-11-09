import React from 'react'
import '../Styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse ,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'; 
import { GiBookshelf } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-logo">
        <h2><GiBookshelf />TechTome</h2>
      </div>
      <div className="navbar-links">
        <a href="/home"><FontAwesomeIcon className='icon' icon={faHouse} style={{ color: '#fff' }} /></a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/cart"><FontAwesomeIcon className='icon' icon={faCartShopping} style={{ color: '#fff' }} /></a>
        <a href="/wishlist"><FontAwesomeIcon className='icon' icon={faHeart} style={{ color: '#fff' }} /></a>
      </div>
    </nav>
    </>
  )
}

export default Header