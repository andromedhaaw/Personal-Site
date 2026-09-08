import React from 'react';

export default function Header({ isDark, onToggleTheme }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (!targetId || targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 20;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header id="top">
      <div className="header-left">
        <div className="site-title">
          <a href="#top" onClick={(e) => handleNavClick(e, 'top')}>
            Andromedha Anjar Wasari
          </a>
        </div>
        <nav aria-label="Main Navigation">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>
            Portfolio
          </a>
          <a href="#shelf" onClick={(e) => handleNavClick(e, 'shelf')}>
            Shelf
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </nav>
      </div>
      <button
        className="theme-toggle"
        id="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle dark mode"
      >
        {isDark ? '☾' : '☀'}
      </button>
    </header>
  );
}
