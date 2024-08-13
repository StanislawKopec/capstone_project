import React from "react"
import logo from "../assets/Asset 16@4x.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>    
      <img src={logo}/>
      <nav>
        <ul>
          <li><Link to="/home" hre aria-label="On Click">Home</Link></li>
          <li><a href="about" aria-label="On Click">About</a></li>
          <li><a href="menu" aria-label="On Click">Menu</a></li>
          <li><Link to="/reserve-table" href="home" aria-label="On Click">Reservations</Link></li>
          <li><a href="home" aria-label="On Click">Order Online</a></li>
          <li><a href="home" aria-label="On Click">Login</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
