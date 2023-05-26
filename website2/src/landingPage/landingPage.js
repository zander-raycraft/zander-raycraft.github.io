import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './tStyle.css';

const triangleBase = 48;

const TriangleBack = () => {
  useEffect(() => {
    const container = document.querySelector('.triangle-container');

    const instantiateGrid = () => {
      container.innerHTML = '';
      const width = document.body.clientWidth;
      const height = document.body.clientHeight * 0.4;

      let columns = Math.ceil(width / (triangleBase * 2)) + 1;
      let rows = Math.ceil(height / triangleBase * 1.733);
      container.style.setProperty('--columns', columns);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          createTriangleSet(container, x + y * columns, x, y);
        }
      }
    };

    const createTriangleSet = (container, index, column, row) => {
      let el = document.createElement('div');
      el.classList.add('triangle-set');
      if (row % 2 === 0) el.classList.add('triangle-set--offset');

      container.appendChild(el);
    };

    const handleMouseMove = (event) => {
      const glow = document.body.querySelector('#glow');
      glow.style.top = event.pageY + 'px';
      glow.style.left = event.pageX + 'px';
    };

    instantiateGrid(container);

    window.addEventListener('mousemove', handleMouseMove);

    window.onresize = () => {
      instantiateGrid(container);
    };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.onresize = null;
    };
  }, []);

  //Making an animation for the h2
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getAnimatedText = () => {
    const textContent = 'Access my Page';
    const words = textContent.split(' ');
    return words.map((word, wordIndex) => (
      <React.Fragment key={wordIndex}>
        {word.split('').map((letter, letterIndex) => (
          <span
            key={letterIndex}
            style={{ animationDelay: `${letterIndex * 0.1}s` }}
            className={isHovered ? 'wave-animation' : ''}
          >
            {letter}
          </span>
        ))}
        {wordIndex !== words.length - 1 && ' '}
      </React.Fragment>
    ));
  };

  return (
    <div className="overallCont">
      <div id="glow"></div>
      <div className="triangle-container"></div>
      <h1>Zander Raycraft</h1>
      <Link to="../mainPage" className="mainPageBtn">
        <h2
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="animatedTextContainer"
        >
          {getAnimatedText()}
        </h2>
      </Link>
    </div>
  );
};

export default TriangleBack;