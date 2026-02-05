import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-section brand">
          <img src="/logo.png" alt="logo" className="footer-logo" />
          <p>
            <strong>NANDINI EXPO HOUSE</strong> -Leather Manufacturing & Exporter.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
            
            
  <div className="footer-section">
  <h3>Quick Link</h3>
  <ul className="footer-links">
    <li><Link to="/products/bags">Bags</Link></li>
    <li><Link to="/products/belt">Belts</Link></li>
    <li><Link to="/products/skirts">Skirts</Link></li>
    <li><Link to="/products/jacket">Jacket</Link></li>
  </ul>
</div>

      

        
        
        {/* Contact */}
        <div className="footer-contact">
  <h3>Contact Us</h3>
  <p>
    Email:{" "}
    <a href="mailto:nandiniexpohouse2025@gmail.com">
      nandiniexpohouse2025@gmail.com
    </a>
  </p>
  <p>
    Phone:{" "}
    <a href="tel:+919716929878">
      +91 9716929878
    </a>
  </p>
</div>

        {/* Map */}
        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=delhi&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        ©2026 Copyright NANDINI EXPO HOUSE, All Right Reserved.
      </div>
    </footer>
  );
}
