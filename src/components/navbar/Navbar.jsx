import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <nav>
        <div className="navContainer">
          <h1>Rick Baier</h1> 
          <div class="menuToggle"></div>
          <ul className="navMenu">
            <li class="list"><Link to="/aboutme">About Me</Link></li>
            <li class="list"><Link to="/portfolio">Portfolio</Link></li>
            <li class="list"><Link to="/contact">Contact</Link></li>
            <li class="list"><Link to="/resume">Resume</Link></li>
          </ul>
        </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;