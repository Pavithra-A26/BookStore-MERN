import React from 'react'
import '../Styles/header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-logo">
        <h2>TechTome</h2>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/cart">Cart</a>
        <a href="/wishlist">Wishlist</a>
      </div>
    </nav>
    </>
  )
}

export default Header