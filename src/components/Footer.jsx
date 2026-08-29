import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="logo" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et.
        </p>

        <h4>Join Newsletters</h4>

        <div className="newsletter">
          <input
            type="email"
            placeholder="Insert your mail here"
          />
          <button>➜</button>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-col">
          <h4>Product</h4>
          <a href="/">Movies</a>
          <a href="/">TV Show</a>
          <a href="/">Videos</a>
        </div>

        <div className="footer-col">
          <h4>Media Group</h4>
          <a href="/">Nice Studio</a>
          <a href="/">Nice News</a>
          <a href="/">Nice TV</a>
        </div>

        <div className="footer-col">
          <h4>Sitemap</h4>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+271 386-647-3637</span>
          </div>
          <div className="contact-item">
            <IoIosMail />
            <span>ourstudio@hello.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              8819 Ohio St. South Gate,
              California 90280
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2024 massArt, Designed & Developed Ethically by Ethical Den
      </div>
    </footer>
  );
};

export default Footer;