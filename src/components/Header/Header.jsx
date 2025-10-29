import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
  <header className="header">
      <div className="container header-container">
        <div className="logo">Excl<span>usive</span></div>

        <nav className="nav">
          <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
        </nav>

        <div className="icons">
          <img src="../../../src/assets/Wishlist.svg" alt="" />
          <img src="../../../src/assets/Cart1 with buy.svg" alt="" />
          <img src="../../../src/assets/user.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
