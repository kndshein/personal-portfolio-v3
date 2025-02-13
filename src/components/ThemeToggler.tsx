import React, { useState, useEffect } from 'react';
import '../styles/themetoggler.css';

// There's some discrepancy w/ using svg files in Astro pages, yet the icons are directly embedded here. A few options:
// 1. Use `vite-plugin-svgr`; did not work
// 2. Embed svg into <img> tag like so: `<img src={icon.src} />`; this means `fill` nor `color` works for changing the color.
const themes = [
  {
    name: 'light',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"
        />
      </svg>
    ),
  },
  {
    name: 'dark',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none">
          <g fill="currentColor" clipPath="url(#siSunFill0)">
            <path d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m21-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 10a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6.657-3.343a1 1 0 0 1 0 1.414L4.93 20.485a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M20.485 3.515a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0m-16.97 0a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 6.343L3.515 4.93a1 1 0 0 1 0-1.414m14.142 14.141a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0" />
          </g>
          <defs>
            <clipPath id="siSunFill0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  },
];

const ThemeToggler: React.FC = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);

  // Initialize the theme on component mount
  useEffect(() => {
    const savedThemeName = localStorage.getItem('theme') || themes[0].name;
    const savedThemeIndex = themes.findIndex((theme) => theme.name === savedThemeName);

    // Set the theme based on saved index or default to the first theme
    setCurrentThemeIndex(savedThemeIndex !== -1 ? savedThemeIndex : 0);
    document.documentElement.setAttribute('data-theme', savedThemeName);
  }, []);

  // Function to toggle themes
  const toggleTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];

    setCurrentThemeIndex(nextIndex);
    document.documentElement.setAttribute('data-theme', newTheme.name);
    localStorage.setItem('theme', newTheme.name);
  };

  return (
    <>
      {themes.map((theme) => {
        return (
          theme.name == themes[currentThemeIndex].name && (
            <button onClick={toggleTheme} key={theme.name} id="theme-toggler">
              {theme.icon}
            </button>
          )
        );
      })}
    </>
  );
};

export default ThemeToggler;
