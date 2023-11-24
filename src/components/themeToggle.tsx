/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from 'theme-ui';
import Svg from './svg';
import * as React from 'react';
import './modeToggle.css';

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();
  const isDark = colorMode === `dark`;

  const toggleMode = () => {
    const next = isDark ? `light` : `dark`;
    setColorMode(next);
    document.documentElement.classList.value = `theme-ui-${next}`;
  };

  return (
    <div className="theme-button-container" style={{right: 32, zIndex: 100}}>
      <button className="theme-button" aria-label="Toggle color mode" onClick={toggleMode} title="Toggle color mode">
        <div className={`sun ${!isDark ? 'visible' : ''}`} />
        <div className={`moon ${isDark ? 'visible' : ''}`}>
          <div className="star" />
          <div className="star small" />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
