import React from 'react';
import './OneCard.css'; // Import the CSS file

function OneCard() {
  return (
    <div className="card">
      <img 
        src='src/assets/Volunteering-bro.svg' 
        className="card-image" // Add class name for card image
        alt='...'
      />
      <div className="card-body">
        <h5 className="card-title">Join our community in creating a more sustainable future for everyone</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href='#' className="card-button">Button</a>
      </div>
    </div>
  );
}

export default OneCard;
