"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // ✅ Services nav -> change active slider
    const navItems = document.querySelectorAll(".services-nav .nav-item");
    const sliders = document.querySelectorAll(".services-slider-container");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        // remove active from all
        navItems.forEach((el) => el.classList.remove("active"));
        sliders.forEach((s) => s.classList.remove("active"));

        // add active to clicked
        item.classList.add("active");
        const targetId = item.getAttribute("data-target");
        if (targetId) {
          const targetSlider = document.getElementById(targetId);
          if (targetSlider) targetSlider.classList.add("active");
        }
      });
    });

    // ✅ Statistics Counter
    const counters = document.querySelectorAll<HTMLElement>(".counter");

    const runCounter = (counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);
      const format = counter.getAttribute("data-format");
      let count = 0;
      const speed = target / 200; // adjust speed

      const updateCount = () => {
        count += speed;
        if (count < target) {
          if (format === "k") {
            counter.innerText = Math.floor(count / 1000) + "k";
          } else if (format === "k-decimal") {
            counter.innerText = (count / 1000).toFixed(1) + "k";
          } else {
            counter.innerText = Math.floor(count).toString();
          }
          requestAnimationFrame(updateCount);
        } else {
          // final value
          if (format === "k") {
            counter.innerText = Math.floor(target / 1000) + "k";
          } else if (format === "k-decimal") {
            counter.innerText = (target / 1000).toFixed(1) + "k";
          } else {
            counter.innerText = target.toString();
          }
        }
      };

      updateCount();
    };

    counters.forEach((c) => runCounter(c));
  }, []);
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Your Ultimate Protection <br />
            For Browsing
          </h1>
          <p>
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

      {/* ✅ Partners Section */}
      <div className="partners text-center my-5 py-4">
        <img src="/img/paytm-logo.png" alt="Paytm" />
        <img src="/img/awin-logo.png" alt="Awin" />
        <img src="/img/aw-logo.png" alt="a&w" />
        <img src="/img/spotify-logo.png" alt="Spotify" />
        <img src="/img/amazon-logo.png" alt="Amazon" />
      </div>

       {/* <!-- Services Section --> */}
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="services-header">
            <h2>Services <span className="we-offer">WE</span>OFFER</h2>
          </div>

          <div className="services-nav">
            <div className="nav-item active" data-target="slider-vapt">Offensive Security & VAPT</div>
            <div className="nav-item" data-target="slider-data">Data Security</div>
            <div className="nav-item" data-target="slider-code">
              Comprehensive Code Security
            </div>
          </div>

          {/* <!-- vapt tab slider---------------------------------------------------- --> */}

          <div className="services-slider-container" id="slider-vapt">
            <div className="services-card-slider">
              <div
                className="service-card far-prev d-flex justify-content-center align-items-center"
                data-index="0"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">WEB APPLICATION PENETRATION TESTING</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde earum maiores illo in dolorum placeat aliquid sit
                  </p>
                </div>
              </div>
              <div
                className="service-card prev d-flex justify-content-center align-items-center"
                data-index="1"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">DATA SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card active d-flex justify-content-center align-items-center"
                data-index="2"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4>COMPREHENSIVE CODE SECURITY</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card next d-flex justify-content-center align-items-center"
                data-index="3"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">THREAT INTELLIGENCE</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card far-next d-flex justify-content-center align-items-center"
                data-index="4"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">CLOUD SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- vapt tabs slider ends---------------------------------------------------------- --> */}

          {/* <!-- data security tab slider---------------------------------------------------- --> */}

          <div
            className="services-slider-container"
            id="slider-data"
            style={{ display: "none" }}
          >
            <div className="services-card-slider">
              <div
                className="service-card far-prev d-flex justify-content-center align-items-center"
                data-index="0"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">WEB APPLICATION PENETRATION TESTING</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card prev d-flex justify-content-center align-items-center"
                data-index="1"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">DATA SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card active d-flex justify-content-center align-items-center"
                data-index="2"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4>COMPREHENSIVE CODE SECURITY</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card next d-flex justify-content-center align-items-center"
                data-index="3"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">THREAT INTELLIGENCE</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card far-next d-flex justify-content-center align-items-center"
                data-index="4"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">CLOUD SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- vapt data security slider ends---------------------------------------------------------- -->

          <!-- comprehensice security tab slider---------------------------------------------------- --> */}

          <div
            className="services-slider-container"
            id="slider-code"
            style={{ display: "none" }}
          >
            <div className="services-card-slider">
              <div
                className="service-card far-prev d-flex justify-content-center align-items-center"
                data-index="0"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">WEB APPLICATION PENETRATION TESTING</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card prev d-flex justify-content-center align-items-center"
                data-index="1"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">DATA SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card active d-flex justify-content-center align-items-center"
                data-index="2"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4>COMPREHENSIVE CODE SECURITY</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card next d-flex justify-content-center align-items-center"
                data-index="3"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">THREAT INTELLIGENCE</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="service-card far-next d-flex justify-content-center align-items-center"
                data-index="4"
              >
                <img src="img/lock.png" alt="Unlocked Lock" className="lock-icon" />
                <div className="service-card-content">
                  <h4 className=" ">CLOUD SECURITY</h4>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- comprehensive data security slider ends---------------------------------------------------------- --> */}

          <div className="services-slider-indicators">
            <span className="dot" data-index="0"></span>
            <span className="dot" data-index="1"></span>
            <span className="dot active" data-index="2"></span>
            <span className="dot" data-index="3"></span>
            <span className="dot" data-index="4"></span>
          </div>

          <div className="services-title-section">
            <button id="prevBtn" className="services-navigation-btn">
              <img src="img/Vectorr-2.png" alt="Previous" />
            </button>
            <h3 id="currentServiceTitle">COMPREHENSIVE CODE SECURITY</h3>
            <button id="nextBtn" className="services-navigation-btn">
              <img src="img/Vectorr-1.png" alt="Next" />
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Statistics Section --> */}
      <section className="statistics-section pb-5">
        <div className="glassy-card">
          <div className="row text-center">
            <div className="col-6 col-md-3 stat-item">
              <h3 className="counter" data-target="1000">0</h3>
              <p>Applications Tested</p>
            </div>
            <div className="col-6 col-md-3 stat-item">
              <h3 className="counter" data-target="25000" data-format="k">0</h3>
              <p>IT Infra Devices Tested</p>
            </div>
            <div className="col-6 col-md-3 stat-item">
              <h3 className="counter" data-target="3100" data-format="k-decimal">
                0
              </h3>
              <p>Weeks Of Testing</p>
            </div>
            <div className="col-6 col-md-3 stat-item">
              <h3 className="counter" data-target="1500">0</h3>
              <p>Vulnerabilities Detected</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Process Section --> */}
      <section className="process-section">
        <div className="container">
          <div className="row">
            <div className="process-header">
              <h2>How <span className="we-offer">WE</span> Work ?</h2>
            </div>
            <p className="process-para">
              Our process is simple and designed to provide you with seamless
              cybersecurity solutions tailored to your business needs
            </p>
          </div>
        </div>

        <div className="container-fluid">
          {/* <!-- Desktop View --> */}
          <div className="process-wrapper mt-5">
            {/* <!-- Item 1 --> */}
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

            {/* <!-- Item 2 --> */}
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

            {/* <!-- Item 3 --> */}
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

            {/* <!-- Item 4 --> */}
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

            {/* <!-- Item 5 --> */}
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

          {/* <!-- Mobile Slider --> */}
          <div className="slider-container">
            <button className="slider-btn prev">
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="slider-track">
              {/* <!-- Item 1 --> */}
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

              {/* <!-- Item 2 --> */}
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

              {/* <!-- Item 3 --> */}
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

              {/* <!-- Item 4 --> */}
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

              {/* <!-- Item 5 --> */}
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

      {/* <!-- Certification Section --> */}
      <section className="certification-section">
        <div className="content-wrapper">
          <div className="certification-header">
            <h2><span className="we-offer">Our</span>Certification</h2>
          </div>

          <div className="certification-tabs">
            <span className="cert-tab active" data-cert="A">A Certificate</span>
            <span className="cert-tab" data-cert="B">B Certificate</span>
          </div>

          <div className="cert-slider-container">
            <button className="cert-slider-btn cert-prev-btn" id="certPrev">
              <img src="img/Vectorr-2.png" alt="Previous" />
            </button>
            <div id="slider-A" className="cert-card-slider active">
              <div className="cert-card active">
                <img src="img/Picture (2).png" alt="Certification 1" />
              </div>
              <div className="cert-card prev">
                <img src="img/Picture (1).png" alt="Certification 2" />
              </div>
              <div className="cert-card next">
                <img src="img/Picture.png" alt="Certification 3" />
              </div>
              <div className="cert-card far-prev">
                <img src="img/Picture (4).png" alt="Certification 4" />
              </div>
              <div className="cert-card far-next">
                <img src="img/Picture (3).png" alt="Certification 5" />
              </div>
            </div>
            <div id="slider-B" className="cert-card-slider">
              <div className="cert-card active">
                <img src="img/Picture (2).png" alt="Certification 1" />
              </div>
              <div className="cert-card prev">
                <img src="img/Picture.png" alt="Certification 2" />
              </div>
              <div className="cert-card next">
                <img src="img/Picture (1).png" alt="Certification 3" />
              </div>
              <div className="cert-card far-prev">
                <img src="img/Picture (3).png" alt="Certification 4" />
              </div>
              <div className="cert-card far-next">
                <img src="img/Picture (4).png" alt="Certification 5" />
              </div>
            </div>
            <button className="cert-slider-btn cert-next-btn" id="certNext">
              <img src="img/Vectorr-1.png" alt="Next" />
            </button>
          </div>

          <div className="cert-info">
            <div className="info-text" id="certText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="info-boxes">
              <div className="info-box">
                <h4 id="yearBox">2024</h4>
                <p>Year Established</p>
              </div>
              <div className="info-box">
                <h4 id="revenueBox">$1M+</h4>
                <p>Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>What <span className="we-offer">Our</span>Clients Says</h2>
        </div>

        <div className="testimonial-slider-container">
          <div className="testimonial-slider-wrapper" id="testimonialSliderWrapper">
            {/* <!-- Testimonial Card 1 --> */}
            <div className="testimonial-card">
              <div className="client-info">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  className="client-avatar"
                  alt="Client"
                />
                <div className="client-details">
                  <div>
                    <h4>Harry Maguire</h4>
                    <p>CEO, company</p>
                  </div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-text-wrapper">
                <img
                  src="img/quotation-marks.png"
                  className="quote-icon"
                  alt="quote"
                />
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            {/* <!-- Testimonial Card 2 --> */}
            <div className="testimonial-card">
              <div className="client-info">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
                  className="client-avatar"
                  alt="Client"
                />
                <div className="client-details">
                  <h4>Sarah Johnson</h4>
                  <div className="star-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i
                    ><i className="fas fa-star"></i><i className="far fa-star"></i
                    ><i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-text-wrapper">
                <img
                  src="img/quotation-marks.png"
                  className="quote-icon"
                  alt="quote"
                />
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            {/* <!-- Testimonial Card 3 --> */}
            <div className="testimonial-card">
              <div className="client-info">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  className="client-avatar"
                  alt="Client"
                />
                <div className="client-details">
                  <h4>Michael Davis</h4>
                  <div className="star-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i
                    ><i className="fas fa-star"></i><i className="fas fa-star"></i
                    ><i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-text-wrapper">
                <img
                  src="img/quotation-marks.png"
                  className="quote-icon"
                  alt="quote"
                />
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-slider-container">
        <div className="section-header">
          <h2>Latest from <span className="we-offer">Our</span>Blog</h2>
          <button className="view-more-btn">View More</button>
        </div>

        {/* <!-- Swiper --> */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card-image">
                <img src="img/Picture (1).png" alt="Modern Web Development" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Essential Developer Tools & Workflows
                </h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card-image">
                <img src="img/Picture (2).png" alt="React Applications" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Essential Developer Tools & Workflows
                </h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card-image">
                <img src="img/Picture (3).png" alt="UI/UX Design" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Essential Developer Tools & Workflows
                </h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card-image">
                <img src="img/Picture (4).png" alt="Performance Optimization" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Essential Developer Tools & Workflows
                </h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card-image">
                <img src="img/Picture.png" alt="Developer Tools" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Essential Developer Tools & Workflows
                </h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>

          {/* <!-- Add Navigation --> */}
          <div className="custom-prev-button">
            <img src="img/Vector-1.png" alt="Previous" />
          </div>
          <div className="custom-next-button">
            <img src="img/Vector-1.png" alt="Next" />
          </div>
        </div>
      </div>

      <div className="faq-container">
        {/* <!-- Left Section --> */}
        <div className="faq-left">
          <h1 className="faq-title">FAQs</h1>
          <p className="faq-description">
            Have questions? Here you'll find the answers most valued by our
            partners, along with access to step-by-step instructions and
            support.
          </p>

          <div className="newsletter-section">
            <h3 className="newsletter-title">Join our monthly Newsletter</h3>
            <form className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Email"
                required
              />
              <button type="submit" className="newsletter-btn">→</button>
            </form>
          </div>
        </div>

        {/* <!-- Right Section - FAQ Items --> */}
        <div className="faq-right">
          <div className="faq-item">
            <div className="faq-question active" >
              <span>What services do you offer to help businesses grow?</span>
              <span className="faq-icon active"></span>
            </div>
            <div className="faq-answer active">
              <div className="faq-answer-text">
                We offer comprehensive digital solutions including web
                development, mobile app development, digital marketing, SEO
                optimization, and business consulting. Our team works closely
                with clients to create customized strategies that drive growth
                and increase revenue.
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" >
              <span
                >How long does it typically take to complete a project?</span
              >
              <span className="faq-icon"></span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-text">
                Project timelines vary depending on scope and complexity. A
                basic website might take 2-4 weeks, while complex applications
                can take 3-6 months. We provide detailed timelines during our
                initial consultation and keep you updated throughout the
                development process.
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" >
              <span
                >Do you provide ongoing support after project completion?</span
              >
              <span className="faq-icon"></span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-text">
                Yes! We offer comprehensive post-launch support including
                maintenance, updates, bug fixes, and technical assistance. We
                have different support packages available to meet your specific
                needs and ensure your digital solutions continue performing
                optimally.
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" >
              <span
                >What is your pricing structure for different services?</span
              >
              <span className="faq-icon"></span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-text">
                Our pricing is project-based and depends on requirements,
                complexity, and timeline. We offer competitive rates with
                transparent pricing - no hidden fees. Contact us for a free
                consultation and detailed quote tailored to your specific needs.
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" >
              <span>Can you work with our existing team and systems?</span>
              <span className="faq-icon"></span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-text">
                Absolutely! We're experienced in integrating with existing teams
                and systems. We can work alongside your current developers,
                integrate with your existing tools, and adapt to your workflow.
                We believe in collaborative partnerships that enhance your
                current capabilities.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="security-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="security-title mb-4">
                Protect Your Business Today - Get a<br />Free Security
                Assessment!
              </h2>

              <div className="security-form">
                <form className="row g-3 justify-content-center">
                  <div className="col-md-7 col-sm-8">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button type="submit" className="btn btn-submit btn-lg w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
