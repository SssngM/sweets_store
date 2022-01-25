import React from 'react'; 
import { NavLink } from "react-router-dom"; 
import './NavBar.css'

function NavBar({ quantity }){
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/product/chips">
        Chips
      </NavLink>
      <NavLink exact to="/product/drinks">
        Drinks
      </NavLink>
      <NavLink exact to="/product/candy">
        Candy
      </NavLink>
      <NavLink exact to="/cart">
        <span>{quantity}</span>
        <i className="fas fa-shopping-cart"></i>
      </NavLink>
    </nav>
  )
}

export default NavBar; 
