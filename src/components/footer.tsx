import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="text-center">
          <div className="footer-logo">
            <img src="img/logo.png" alt="" />
          </div>
          <p className="footer-tagline">
            Unlock performance with data-driven campaigns, creative
            storytelling, and impactful branding
          </p>
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footer-links">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer-column">
                <h6>Explore</h6>
                <ul>
                  <li>
                    <a href="#">What We Do</a>
                  </li>
                  <li>
                    <a href="#">Our Process</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="#">Blog & Insights</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer-column">
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer-column">
                <h6>Legal Links</h6>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Copyright</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-12 mb-4">
              <div className="rewards-section">
                <h3>Rewards & Recognition</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© Umaadi Inc. All Rights Reserved.</p>
          <a href="#top" className="back-to-top">
            <i className="fas fa-arrow-up"></i>
            back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
