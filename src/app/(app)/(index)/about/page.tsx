import React from "react";
import SecuritySection from "../../../../components/security";
import PartnersSection from "../../../../components/partners";
import FAQSection from "../../../../components/faq";
import OurTeam from "../../../../components/our-team";

function page() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
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

      <section className="journey-section">
        <div className="container">
          <div className="journey-item">
            <div className="journey-image">
              <img src="img/Rectangle-5.png" alt="Journey" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Journey</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="img/Rectangle-5.png" alt="Mission" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-image">
              <img src="img/Rectangle-5.png" alt="Vision" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Vision</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="img/Rectangle-5.png" alt="Value" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Value</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology-section">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="methodology-header">
                <h2>
                  <span className="we-offer">OUR</span>Customer Centric
                  Methodology
                </h2>
              </div>
              <p className="methodology-subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <img
                src="img/Group 349.svg"
                alt="Customer Centric Methodology"
                className="methodology-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="history-header">
              <h2>
                <span className="we-offer">OUR</span>History
              </h2>
            </div>
          </div>
          <div className="history-content">
            <div className="row g-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <p className="px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <div className="col-lg-6">
                <h5 className="mb-3 fw-semibold text-white">
                  Key Milestones :
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span
                      className="badge rounded-circle me-2 mt-1"
                      style={{
                        height: "10px",
                        width: "10px",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span
                      className="badge rounded-circle me-2 mt-1"
                      style={{
                        height: "10px",
                        width: "10px",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span
                      className="badge rounded-circle me-2 mt-1"
                      style={{
                        height: "10px",
                        width: "10px",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span
                      className="badge rounded-circle me-2 mt-1"
                      style={{
                        height: "10px",
                        width: "10px",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SecuritySection />

      <section className="team-section">
        <div className="container text-center">
          <div className="team-header">
            <h2>
              <span className="we-offer">OUR</span>TEAM
            </h2>
          </div>
          <h2 className="mb-3 team-heading">Learn from Industry Experts</h2>
          <p className="mb-4 team-subtitle">
            Gain insights from industry experts and master real-world skills for
            career growth and professional development
          </p>

          <OurTeam />
        </div>
      </section>

      <PartnersSection />

      <section className="py-5">
        <div className="container text-center">
          <div className="partner-header">
            <h2>
              <span className="we-offer">OUR</span>Reputable Partners
            </h2>
          </div>
          <p className="partner-para">
            Our reputable partners underscore our commitment to quality,
            illustrating the strong relationships we've built with top brands in
            the industry.
          </p>

          <div className="row justify-content-center mb-5">
            <div className="col-8 col-md-3 mb-3">
              <div className="stats-boxes rounded-4 py-4 px-3 shadow-sm">
                <h3 className="mb-1 fw-bold">100+</h3>
                <p
                  className="mb-0"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Project Completed
                </p>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-3">
              <div className="stats-boxes rounded-4 py-4 px-3 shadow-sm">
                <h3 className="mb-1 fw-bold">98.1%</h3>
                <p
                  className="mb-0"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Client Succession
                </p>
              </div>
            </div>
          </div>

          <div className="py-4">
            <img
              src="img/Group-195.png"
              alt="Partner Logo 1"
              className="partner-logo-img"
            />
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

export default page;
