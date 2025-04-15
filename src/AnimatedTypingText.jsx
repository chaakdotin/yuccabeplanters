import React, { useState, useEffect, useRef } from 'react';
import './AnimatedTypingText.css';

const AnimatedTypingText = () => {
    const texts = [
        "Craft Detail: Every planter is uniquely handcrafted, ensuring no two pieces are exactly alike.",
        "Durability Fact: Designed to endure all seasons—ideal for both indoor elegance and outdoor toughness.",
        "Material Insight: Made using high-grade FRP and ceramic, combining strength with effortless portability.",
        "Sustainability Fact: Created with eco-conscious materials and processes to reduce environmental impact.",
        "Design Insight: Thoughtfully designed to blend aesthetic beauty with optimal plant health.",
        "Style Highlight: Available in a wide range of finishes—matte, glossy, textured, and stone-inspired.",
        "Shape Detail: From bold sculptural silhouettes to space-saving forms, there’s a style for every setting.",
        "Trust Factor: A preferred choice among top architects, designers, and luxury interior brands.",
        "Customization Note: Bespoke planters can be tailored to match any theme, space, or branding.",
        "Legacy Highlight: A brand rooted in years of experience, constantly redefining premium green design."
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [textClass, setTextClass] = useState('text typing');
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    setDisplayedText('');
    setTextClass('text typing');

    const typeChar = () => {
      if (charIndex < currentText.length) {
        setDisplayedText(prev => prev + currentText[charIndex++]);
        timersRef.current.push(setTimeout(typeChar, 60));
      } else {
        setTextClass('text');
        timersRef.current.push(setTimeout(() => {
          setTextClass('text slide-out');
          timersRef.current.push(setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % texts.length);
          }, 600));
        }, 1200));
      }
    };

    typeChar();
    return clearTimers;
  }, [currentIndex]);

  return (
    <div className="container-fluid typings">
      <div className="rectangle">
        <span className={textClass}>{displayedText}</span>
      </div>
    </div>
  );
};

export default AnimatedTypingText;
