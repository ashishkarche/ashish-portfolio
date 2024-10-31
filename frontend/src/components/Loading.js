// src/components/Loading.js
import React from 'react';
import './Loading.css'; // Import the CSS for the loading animation

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
