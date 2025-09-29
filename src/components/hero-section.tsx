import React from 'react'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Your Ultimate Protection <br />
          For Browsing
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-demo">
            Request a demo
            <span className="btn-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a href="#" className="btn btn-contact">
            Get in touch
            <span className="btn-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
