import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar2.css';

function Navbar2() {
    const [clicked, setClicked] = useState(false); // State for managing click event

    const toggleMenu = () => {
        setClicked(!clicked);
    };

    return (
        <div className="navWrapper"> {/* Ensure that the navWrapper class is applied */}
            <navv>
                <span className="logo">
                    Ecoyaan
                </span>
                <div>
                    <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div id="mobile" onClick={toggleMenu}>
                    <i id="bar" className={clicked ? '' : 'fas fa-bars'}></i>
                </div>
            </navv>
            {/* Overlay panel */}
            <div className={`overlay-panel ${clicked ? 'show' : ''}`}>
                {/* Panel content */}
                <div className={`panel-content ${clicked ? 'show' : ''}`}>
                    {/* Close icon */}
                    <div id="close-icon" onClick={toggleMenu}>
                        <i className="fas fa-chevron-right fa-lg"></i>
                    </div>
                    {/* Anchor links */}
                    <ul id="overlay-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar2;
