import React from 'react';
import './heroStyles.css';

function Hero() {
    return (
        <div className="hero-image">
            <img src="/assets/hero_lighter_lighter.jpg" alt="Hero Image"></img>
            <div className="hero-text">
                <h1>Are you a business that truly cares about sustainability?</h1>
                <p>We would love to work with you!</p>
                <button className="ghost-button">Get in touch</button>
            </div>
        </div>
    );
}

export default Hero;
