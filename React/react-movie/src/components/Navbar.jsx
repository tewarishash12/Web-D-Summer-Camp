import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            {/* Logo link that takes to the homepage of the file */}
            <div className="nav-logo">
                <Link to="/">MovieFinder</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact Us</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default NavBar;