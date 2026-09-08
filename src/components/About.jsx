import React from 'react';

export default function About() {
  return (
    <div className="main-grid" id="about">
      {/* About */}
      <div className="about-section fade-in">
        <h2 className="section-title">About Me</h2>

        <div className="about-profile-row">
          <div className="profile-img-wrap">
            <img
              src="/profile.jpg"
              alt="Andromedha Anjar Wasari"
              className="profile-img"
            />
          </div>
          <div className="about-text-content">
            <p className="label">//NOW//</p>
            <ul>
              <li>
                building things as a <strong>Software Engineer</strong>
              </li>
              <li>crafting clean code and scalable systems</li>
              <li>exploring the intersection of tech and creativity</li>
            </ul>

            <p className="label">//FOCUS//</p>
            <ul>
              <li>love building consumer SaaS, edtech, and finance tools</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="fade-in" id="contact">
        <h2 className="section-title">Contact</h2>
        <ul className="writing-list">
          <li>
            <a
              href="https://github.com/andromedhaaw"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
            >
              GitHub
            </a>
            <div className="source">github.com/andromedhaaw</div>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
            >
              LinkedIn
            </a>
            <div className="source">linkedin.com/in/andromedha</div>
          </li>
        </ul>

        <p style={{ marginTop: '24px', fontSize: '12px', opacity: 0.6 }}>
          <span className="status-dot" aria-hidden="true" />
          Based in Indonesia
        </p>
      </div>
    </div>
  );
}
