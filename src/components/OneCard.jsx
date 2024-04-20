import React from 'react';
import './OneCard.css'; // Import the CSS file

function OneCard(props) {
  const { imageUrl, title, text, buttonText } = props; // Destructure props

  return (
    <div className="card">
      <img 
        src={imageUrl} // Use the imageUrl prop
        className="card-image" // Add class name for card image
        alt='...'
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5> {/* Use the title prop */}
        <p className="card-text">{text}</p> {/* Use the text prop */}
        <a href='#' className="card-button">{buttonText}</a> {/* Use the buttonText prop */}
      </div>
    </div>
  );
}

export default OneCard;

