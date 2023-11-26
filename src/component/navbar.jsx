import React from 'react';
import '../Styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' alt='logo' id="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">About</a></li>
        <li className="dropdown">
          <a href="/">Industries</a>
          <ul className="dropdown-content">
            <li><a href="/">Sustainability</a></li>
            <li><a href="/">Mineral Processing</a></li>
            <li><a href="/">Mine-To-Mill-To-Mine</a></li>
            <li><a href="/">Oil & Gas</a></li>
          </ul>
        </li>
        <li><a href="/">Ai Software</a></li>
        <li><a href="/about">Blog</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
