"use client"
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// export const metadata: Metadata = {
//   title: "Protection Website",
//   description: "Your Ultimate Protection for Browsing",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return (
    <html lang="en">
      <head>
        {/* Slick Carousel CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {/* ✅ Wrap everything inside site-wrapper */}
        <div className="home-wrapper">
          {/* ✅ Navbar */}
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand text-white fw-bold" href="/">
                <img src="/img/Frame-7.png" alt="Logo" />
              </Link>

              <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">
                      Home
                    </Link>
                  </li>

                  {/* Services dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="servicesDropdownLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="servicesDropdownLink"
                    >
                      <li>
                        <Link className="dropdown-item" href="/service1">
                          Service-1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/service2">
                          Service-2
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                </ul>

                {/* Mobile-only Contact Button */}
                <Link
                  href="/contact"
                  className="btn btn-sm btn-outline-light rounded-pill contact-btn mobile-only mt-3"
                >
                  Contact
                  <span className="btn-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>

              {/* Desktop-only Contact Button */}
              <Link
                href="/contact"
                className="btn btn-sm btn-outline-light rounded-pill contact-btn desktop-only"
              >
                Contact
                <span className="btn-icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </nav>

          {/* ✅ Page Content */}
          {children}

          {/* ✅ Footer */}
          <footer className="footer-section">
            <div className="container footer-content">
              <div className="text-center">
                <div className="footer-logo">
                  <img src="/img/logo.png" alt="Logo" />
                </div>
                <p className="footer-tagline">
                  Unlock performance with data-driven campaigns, creative
                  storytelling, and impactful branding
                </p>
              </div>

              {/* Social Icons */}
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

              {/* Footer Links */}
              <div className="footer-links">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="footer-column">
                      <h6>Explore</h6>
                      <ul>
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">Our Process</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Blog & Insights</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="footer-column">
                      <h6>Company</h6>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/service1">Service</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="footer-column">
                      <h6>Legal Links</h6>
                      <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Copyright</a></li>
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

              {/* Footer Bottom */}
              <div className="footer-bottom">
                <p className="copyright">
                  © Umaadi Inc. All Rights Reserved.
                </p>
                <a href="#top" className="back-to-top">
                  <i className="fas fa-arrow-up"></i>
                  back to top
                </a>
              </div>
            </div>
          </footer>
        </div>

        {/* ✅ Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
