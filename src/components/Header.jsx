import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({cart}) => {
  return (
    <header className="header">
      <h1>Welcome to J-Mart</h1>
      <div className="h2-div">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/cart"><h2>Cart {cart.length !== 0 && `(${cart.length})`}</h2></Link>
        <h2>Logout</h2>
      </div>
    </header>
  )
}

export default Header