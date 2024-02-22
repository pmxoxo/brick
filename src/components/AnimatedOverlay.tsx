import React from 'react';
import '../styles/AnimatedOverlay.scss';

const AnimatedOverlay: React.FC = () => {
  // Direct URL to the image hosted on a third-party service
  const imageUrl = "https://i.ibb.co/Pw06nPb/enter.png";

  return (
    <div className="effect-wrapper">
      <div className="enter-image-container">
        <img src={imageUrl} alt="Enter" />
      </div>
    </div>
  );
};

export default AnimatedOverlay;
