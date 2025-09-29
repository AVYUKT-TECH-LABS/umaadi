import React from "react";
import HeroSection from "../../../../components/hero-section";
import SecuritySection from "../../../../components/security";
import PartnersSection from "../../../../components/partners";
import FAQSection from "../../../../components/faq";
import ApproachSection from "../../../../components/approach";
import TestingTabs from "../../../../components/testing-tabs";
import Image from "next/image";

function page() {
  return (
    <>
      <HeroSection />

      <div className="main-container">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-white">
              <div className="main-container-header">
                <h2>
                  <span className="we-offer">Our</span>Methadology
                </h2>
              </div>
              <p className="mb-5 custom-text-width">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <h2 className="mb-4 what-include">What&apos;s Includes?</h2>
              <div className="row what-includes">
                <div className="col-md-6">
                  <p>1. Lorem ipsum dolor sit amet.</p>
                  <p>3. Lorem ipsum dolor sit amet.</p>
                  <p>5. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-6">
                  <p>2. Lorem ipsum dolor sit amet.</p>
                  <p>4. Lorem ipsum dolor sit amet.</p>
                  <p>6. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <TestingTabs />
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="container text-center text-white">
          <div className="benefits-header">
            <h2>
              <span className="we-offer">YOUR</span>Benefits
            </h2>
          </div>
          <p className="description mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <h3 className="quote mb-5">&quot; Defend to the End &quot;</h3>

          <div className="image-container mx-auto">
            <Image
              src="/img/service-image-1.svg"
              alt="Cybersecurity Tags Desktop"
              className="img-fluid benefits-image desktop-img"
              width={100}
              height={60}
            />

            <Image
              src="/img/service-image.svg"
              alt="Cybersecurity Tags Mobile"
              className="img-fluid benefits-image mobile-img"
              width={100}
              height={60}
            />
          </div>
        </div>
      </div>

      <div className="choose-us-section">
        <div className="container py-5 text-white px-lg-5">
          <div className="choose-header">
            <h2>
              <span className="we-offer">WHY</span>Choose Us
            </h2>
          </div>

          <div className="row features-grid">
            <div className="col-lg-6 col-md-12 feature-item pe-lg-5 pb-4 pb-lg-0 left-offset mb-0 feature-divider-1">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <Image src="/img/Group.png" alt="" width={100} height={60} />
                </div>
                <div>
                  <h4 className="feature-title">Competitive Pricing</h4>
                  <p className="feature-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 feature-item ps-lg-5 pb-4 pb-lg-0 border-start-lg feature-divider ">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <Image src="/img/Group.png" alt="" width={100} height={60} />
                </div>
                <div>
                  <h4 className="feature-title">Easy Financing</h4>
                  <p className="feature-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 feature-item pe-lg-5 pt-lg-4 pt-lg-5 left-offset left-border mt-4 mb-0 feature-dividerr">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <Image src="/img/Group.png" alt="" width={100} height={60} />
                </div>
                <div>
                  <h4 className="feature-title">Certified Expert</h4>
                  <p className="feature-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 feature-item ps-lg-4 pt-5 pt-lg-4 border-start-lg right-border">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <Image src="/img/Group.png" alt="" width={100} height={60} />
                </div>
                <div>
                  <h4 className="feature-title">100% Satisfaction</h4>
                  <p className="feature-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApproachSection />

      <SecuritySection />

      <PartnersSection />

      <FAQSection />

      <div className="cta-wrapper">
        <div className="cta-box">
          <div className="cta-text">
            Get the full <em>Sample VAPT Report</em>
            in just one click !!
          </div>
          <a href="#" className="cta-btn">
            <Image src="/img/cta-arrow.png" alt="" width={20} height={20} />{" "}
            VAPT Report
          </a>
        </div>
      </div>
    </>
  );
}

export default page;
