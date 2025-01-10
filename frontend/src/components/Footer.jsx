import React from "react";
import { assets } from "../assets/assets";
import "./Footer.css"; // You can still keep this for other styles if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/*-------Left Section------*/}
        <div className="footer-left">
          <img 
            src={assets.logo1} 
            alt="Logo" 
            className="footer-logo"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}  // Zoom effect on hover
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}  // Reset zoom on hover out
          />
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/*-------Center Section------*/}
        <div className="footer-center">
          <h3 className="footer-heading">COMPANY</h3>
          <ul className="flex flex-col gap-1 text-gray-800 footer-links">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*-------Right Section------*/}
        <div className="footer-right">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          <ul className="footer-contact">
            <li>+1-212-456-484</li>
            <li>Mr.doctor@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*-------------Copyright Text----------*/}
      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
