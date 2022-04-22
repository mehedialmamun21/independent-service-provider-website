import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    return (
        <div>
            <footer className="footer-section">
          <div className="footer-text">
            <h4>
              Everything is possible with right information and guidelines.
            </h4>
            <small>
          <h6>All rights are reserved by "Tution Provider"</h6>
          <br />
          copyright © {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
        </small>
          </div>
        </footer>
        </div>
    );
};

export default Footer;