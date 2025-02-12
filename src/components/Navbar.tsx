import React from 'react';

const navItems = [
  {
    name: 'I code.',
    link: '/code',
  },
  {
    name: 'I design.',
    link: '/design',
  },
  {
    name: 'I snap.',
    link: '/snap',
  },
  {
    name: 'I am.',
    link: '/about',
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileNav = () => setMobileOpen((prevState) => !prevState);

  return (
    <>
      <div className={`overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="overlay-content">
          {navItems.map((item) => {
            return (
              <li key={item.link}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </div>
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <a href="/" id="logo">
            Kaung Nan Dar Shein
          </a>
          <div id="mobile-nav">
            <div
              className={`menu-button ${mobileOpen ? 'open' : ''}`}
              onClick={handleMobileNav}
              role="button"
              tabIndex={0}
              onKeyDown={handleMobileNav}
            >
              <div className="menu-button-burger">qwdqwdqwd</div>
            </div>
            <div className={`overlay-background ${mobileOpen ? 'open' : ''}`}></div>
          </div>
          <ul className="navbar-links">
            {navItems.map((item) => {
              return (
                <li key={item.link}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
