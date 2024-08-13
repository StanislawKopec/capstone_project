import React from "react"
import image from "../assets/Asset 9@4x.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={image}/>
      <div className="footer_column">
        <h4>Doormat Navigation:</h4>
        <ul>
        <li><Link to="/home" hre aria-label="On Click">Home</Link></li>
          <li><a href="" aria-label="On Click">About</a></li>
          <li><a href="" aria-label="On Click">Menu</a></li>
          <li><Link to="/reserve-table" href="home" aria-label="On Click">Reservations</Link></li>
          <li><a href="" aria-label="On Click">Order Online</a></li>
          <li><a href="" aria-label="On Click">Login</a></li>
        </ul>
      </div>
      <div className="footer_column">
        <h4>Contact:</h4>
        <h5>Address</h5>
        <h5>Phone</h5>
        <h5>Email</h5>
      </div>
      <div className="footer_column">
        <h4>Social Media Links:</h4>
        <h5>Facebook</h5>
        <h5>Instagram</h5>
        <h5>X</h5>
      </div>
    </footer>
  )
};

export default Footer;
