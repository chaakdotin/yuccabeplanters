import React, { useEffect, useState } from 'react';
import './PageLoadAnimation.css';

const PageLoadAnimation = ({ children }) => {
  // State to control when to hide the overlay
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    // Remove overlay after 2000 milliseconds (2 seconds)
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {/* Render overlay only if showOverlay is true */}
      {showOverlay && (
        <div id="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {/* Main page content; opacity transitions to 1 after the overlay is removed */}
      <div
        id="content"
        style={{ opacity: showOverlay ? 0 : 1 }}
      >
        { children }
      </div>
    </div>
  );
};
export default PageLoadAnimation;