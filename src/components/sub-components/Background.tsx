import React from 'react';
import '../../styles/background.css';

const Background: React.FC = () => {
  return (
    <div className="background-container">
      <div className="blurred-ellipse"></div>
      <div className="blurred-ellipse2"></div>

      <div className="container2">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </div>

      <div className="container3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="line2"></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
