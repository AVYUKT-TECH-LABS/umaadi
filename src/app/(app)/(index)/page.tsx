import React from "react";
import HeroSection from "../../../components/hero-section";
import FAQSection from "../../../components/faq";
import SecuritySection from "../../../components/security";
import PartnersSection from "../../../components/partners";
import CertificationSection from "../../../components/certification";
import BlogSection from "../../../components/blogs";
import TestimonialSection from "../../../components/testimonials";
import OurServices from "../../../components/our-services";
import StatSection from "../../../components/stats";

function page() {
  return (
    <>
      <HeroSection />

      <PartnersSection />

      <OurServices />

      <StatSection />

      <section className="process-section">
        <div className="container">
          <div className="row">
            <div className="process-header">
              <h2>
                How <span className="we-offer">WE</span> Work ?
              </h2>
            </div>
            <p className="process-para">
              Our process is simple and designed to provide you with seamless
              cybersecurity solutions tailored to your business needs
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="process-wrapper mt-5">
            <div className="process-card gradient-1 odd">
              <div className="number">01</div>
              <h3 className="title">ReconIntel</h3>
              <h4 className="sub-title">
                Map vulnerabilities before attackers do.
              </h4>
              <p className="desc">
                We gather technical and contextual intelligence about your
                systems, applications, and assets to map attack surfaces and
                identify potential entry points before the first exploit
                attempt.
              </p>
            </div>

            <div className="process-card gradient-2 even">
              <h3 className="title">Cybersure</h3>
              <h4 className="sub-title">
                Map vulnerabilities before attackers do.
              </h4>
              <p className="desc">
                Assess your environment against security standards and best
                practices to validate current defenses, highlight weak zones,
                and measure risk across web apps, APIs, networks, and cloud
                setups.
              </p>
              <div className="number">02</div>
            </div>

            <div className="process-card gradient-3 odd">
              <div className="number">03</div>
              <h3 className="title">HackCheck</h3>
              <h4 className="sub-title">
                Map vulnerabilities before attackers do.
              </h4>
              <p className="desc">
                We perform real-world attack simulations, leveraging manual and
                automated techniques to exploit vulnerabilities, test detection
                capabilities, and evaluate how deep a threat actor could go.
              </p>
            </div>

            <div className="process-card gradient-4 even">
              <h3 className="title">BreachBrief</h3>
              <h4 className="sub-title">
                Map vulnerabilities before attackers do.
              </h4>
              <p className="desc">
                Deliver a comprehensive report of all identified
                vulnerabilities, risk scores, exploited paths, and suggested
                remediation steps—prioritized for impact and aligned with
                industry compliance standards.
              </p>
              <div className="number">04</div>
            </div>

            <div className="process-card gradient-5 odd">
              <div className="number">05</div>
              <h3 className="title">FortiFix</h3>
              <h4 className="sub-title">
                Map vulnerabilities before attackers do.
              </h4>
              <p className="desc">
                We guide your technical team with patching, hardening, and
                security configuration fixes, followed by retesting to ensure
                all identified vulnerabilities are resolved and the system is
                breach-resilient.
              </p>
            </div>
          </div>

          <div className="slider-container">
            <button className="slider-btn prev">
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="slider-track">
              <div className="slider-card">
                <div className="process-card gradient-1 odd">
                  <div className="number">01</div>
                  <h3 className="title">ReconIntel</h3>
                  <h4 className="sub-title">
                    Map vulnerabilities before attackers do.
                  </h4>
                  <p className="desc">
                    We gather technical and contextual intelligence about your
                    systems, applications, and assets to map attack surfaces and
                    identify potential entry points before the first exploit
                    attempt.
                  </p>
                </div>
              </div>

              <div className="slider-card">
                <div className="process-card gradient-2 even">
                  <h3 className="title">Cybersure</h3>
                  <h4 className="sub-title">
                    Map vulnerabilities before attackers do.
                  </h4>
                  <p className="desc">
                    Assess your environment against security standards and best
                    practices to validate current defenses, highlight weak
                    zones, and measure risk across web apps, APIs, networks, and
                    cloud setups.
                  </p>
                  <div className="number">02</div>
                </div>
              </div>

              <div className="slider-card">
                <div className="process-card gradient-3 odd">
                  <div className="number">03</div>
                  <h3 className="title">HackCheck</h3>
                  <h4 className="sub-title">
                    Map vulnerabilities before attackers do.
                  </h4>
                  <p className="desc">
                    We perform real-world attack simulations, leveraging manual
                    and automated techniques to exploit vulnerabilities, test
                    detection capabilities, and evaluate how deep a threat actor
                    could go.
                  </p>
                </div>
              </div>

              <div className="slider-card">
                <div className="process-card gradient-4 even">
                  <h3 className="title">BreachBrief</h3>
                  <h4 className="sub-title">
                    Map vulnerabilities before attackers do.
                  </h4>
                  <p className="desc">
                    Deliver a comprehensive report of all identified
                    vulnerabilities, risk scores, exploited paths, and suggested
                    remediation steps—prioritized for impact and aligned with
                    industry compliance standards.
                  </p>
                  <div className="number">04</div>
                </div>
              </div>

              <div className="slider-card">
                <div className="process-card gradient-5 odd">
                  <div className="number">05</div>
                  <h3 className="title">FortiFix</h3>
                  <h4 className="sub-title">
                    Map vulnerabilities before attackers do.
                  </h4>
                  <p className="desc">
                    We guide your technical team with patching, hardening, and
                    security configuration fixes, followed by retesting to
                    ensure all identified vulnerabilities are resolved and the
                    system is breach-resilient.
                  </p>
                </div>
              </div>
            </div>

            <button className="slider-btn next">
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="slider-nav">
              <div className="slider-dot active"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>
          </div>
        </div>
      </section>

      <CertificationSection />

      <TestimonialSection />

      <BlogSection />

      <FAQSection />

      <SecuritySection />
    </>
  );
}

export default page;
