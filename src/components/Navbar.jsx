import React, { useState, useEffect } from 'react';
import './NavbarStyle.css';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight / 2) { // Change here to window.innerHeight / 2
                setScrollBackground(true);
            } else {
                setScrollBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setClicked(!clicked);
    };

    return (
        <div className={`navWrapper ${scrollBackground ? 'scroll-background' : ''}`}>
            <nav>
                <span className="logo">
                    Ecoyaan
                </span>
                <div>
                    <ul id="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={toggleMenu}>
                    <i id="bar" className={clicked ? '' : 'fas fa-bars'}></i>
                </div>
            </nav>
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        <div/>
    </div>
    );
}

export default Navbar;
