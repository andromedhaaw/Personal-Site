import React from 'react';

export default function Footer() {
  return (
    <footer>
      <span style={{ fontStyle: 'italic', opacity: 0.7 }}>thx for reading</span>
      <div className="social-links">
        <a
          href="https://github.com/andromedhaaw"
          target="_blank"
          rel="noopener noreferrer"
          id="footer-github"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          id="footer-linkedin"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
