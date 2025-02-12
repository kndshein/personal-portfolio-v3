import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import '../styles/themetoggler.css';

// const themes: string[] = ['light', 'dark', 'blue', 'green'];
const themes = [
  { name: 'light', icon: 'fa6-solid:moon' },
  { name: 'dark', icon: 'mdi:white-balance-sunny' },
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
              <Icon icon={theme.icon} />
            </button>
          )
        );
      })}
    </>
  );
};

export default ThemeToggler;
