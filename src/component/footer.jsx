// Footer.js

import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="footer-address">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </div>
      </div>
      <div className="footer-copyright">
        © 2022. Ntwist Inc.
      </div>
    </footer>
  );
};

export default Footer;
