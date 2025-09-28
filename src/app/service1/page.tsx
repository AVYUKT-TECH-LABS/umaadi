"use client";

import { useEffect } from "react";

export default function Service1Page() {
  // ---- Slider Logic ----
  const sectionsData = [
    {
      currentSlide: 2,
      totalSlides: 5,
      slideTitles: [
        "INFRASTRUCTURE PENETRATION TESTING",
        "WEB APPLICATION PENETRATION TESTING",
        "WEB APPLICATION PENETRATION TESTING",
        "MOBILE APPLICATION PENETRATION TESTING",
        "CLOUD PENETRATION TESTING",
      ],
    },
    {
      currentSlide: 2,
      totalSlides: 5,
      slideTitles: [
        "DATA PROTECTION AUDIT",
        "ENCRYPTION SOLUTIONS",
        "ACCESS CONTROL MANAGEMENT",
        "DISASTER RECOVERY PLANNING",
        "THREAT MONITORING AND RESPONSE",
      ],
    },
    {
      currentSlide: 2,
      totalSlides: 5,
      slideTitles: [
        "STATIC APPLICATION SECURITY TESTING (SAST)",
        "DYNAMIC APPLICATION SECURITY TESTING (DAST)",
        "SOURCE CODE REVIEW",
        "CODE AUDIT & HARDENING",
        "SECURE DEVELOPMENT LIFECYCLE (SDLC)",
      ],
    },
  ];

  function updateSlider(sectionIndex: number) {
    const section = sectionsData[sectionIndex];
    const slides = document.querySelectorAll(
      `.slide[data-section="${sectionIndex}"]`
    );
    const bottomTitleElement = document.getElementById(
      `bottom-title-${sectionIndex}`
    );

    slides.forEach((slide, index) => {
      slide.classList.remove("far-prev", "prev", "active", "next", "far-next");
      let position =
        (index - section.currentSlide + section.totalSlides) %
        section.totalSlides;
      if (position > 2) position -= section.totalSlides;

      if (position === -2) slide.classList.add("far-prev");
      else if (position === -1) slide.classList.add("prev");
      else if (position === 0) slide.classList.add("active");
      else if (position === 1) slide.classList.add("next");
      else if (position === 2) slide.classList.add("far-next");
    });

    if (bottomTitleElement) {
      bottomTitleElement.textContent =
        section.slideTitles[section.currentSlide];
    }

    updateNavigationDots(sectionIndex);
  }

  function nextSlide(sectionIndex: number) {
    const section = sectionsData[sectionIndex];
    section.currentSlide = (section.currentSlide + 1) % section.totalSlides;
    updateSlider(sectionIndex);
  }

  function prevSlide(sectionIndex: number) {
    const section = sectionsData[sectionIndex];
    section.currentSlide =
      (section.currentSlide - 1 + section.totalSlides) % section.totalSlides;
    updateSlider(sectionIndex);
  }

  function goToSlide(sectionIndex: number, slideIndex: number) {
    const section = sectionsData[sectionIndex];
    section.currentSlide = slideIndex;
    updateSlider(sectionIndex);
  }

  function createNavigationDots(sectionIndex: number) {
    const container = document.getElementById(`nav-dots-${sectionIndex}`);
    if (!container) return;
    container.innerHTML = "";
    const total = sectionsData[sectionIndex].totalSlides;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === sectionsData[sectionIndex].currentSlide)
        dot.classList.add("active");

      dot.addEventListener("click", () => {
        goToSlide(sectionIndex, i);
      });
      container.appendChild(dot);
    }
  }

  function updateNavigationDots(sectionIndex: number) {
    const container = document.getElementById(`nav-dots-${sectionIndex}`);
    if (!container) return;
    const dots = container.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      if (idx === sectionsData[sectionIndex].currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  useEffect(() => {
    // Init sliders
    sectionsData.forEach((_, index) => {
      updateSlider(index);
      createNavigationDots(index);
    });

    // ---- FAQ Toggle ----
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((q) => {
      q.addEventListener("click", () => {
        const isActive = q.classList.contains("active");
        document.querySelectorAll(".faq-question").forEach((el) => {
          el.classList.remove("active");
        });
        document.querySelectorAll(".faq-answer").forEach((el) => {
          el.classList.remove("active");
        });
        document.querySelectorAll(".faq-icon").forEach((el) => {
          el.classList.remove("active");
        });

        if (!isActive) {
          q.classList.add("active");
          const ans = q.nextElementSibling as HTMLElement;
          if (ans) ans.classList.add("active");
          const icon = q.querySelector(".faq-icon");
          if (icon) icon.classList.add("active");
        }
      });
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Your Ultimate Protection <br /> For Browsing
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

      {/* Services Section */}
      <div className="services-containerr">
        <div className="container text-center">
          <div className="servicess-header">
            <h2>
              <span className="we-offer">Our</span>Services
            </h2>
          </div>

          {/* Section 1: VAPT */}
          <div id="section-1" className="section my-5 py-4">
            <h2 className="section-title">1. VAPT</h2>
            <h3 className="section-subtitle">
              (Vulnerability Assessment & Penetration Testing)
            </h3>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="sliders-container">
              <button className="nav-button prev-btn" onClick={() => prevSlide(0)}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="slider-wrapper">
                <div className="slide far-prev" data-section="0" data-index="0" onClick={() => goToSlide(0, 0)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Infrastructure Penetration Testing</div><div className="slide-description">Lorem ipsum dolor sit amet...</div></div>
                </div>
                <div className="slide prev" data-section="0" data-index="1" onClick={() => goToSlide(0, 1)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Web Application Penetration Testing</div><div className="slide-description">Lorem ipsum dolor sit amet...</div></div>
                </div>
                <div className="slide active" data-section="0" data-index="2" onClick={() => goToSlide(0, 2)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Web Application Penetration Testing</div><div className="slide-description">We simulate multi-layered attacks covering OWASP Top 10...</div></div>
                </div>
                <div className="slide next" data-section="0" data-index="3" onClick={() => goToSlide(0, 3)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Mobile Application Penetration Testing</div><div className="slide-description">We simulate attacks targeting session handling, access control, authentication...</div></div>
                </div>
                <div className="slide far-next" data-section="0" data-index="4" onClick={() => goToSlide(0, 4)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Cloud Penetration Testing</div><div className="slide-description">We simulate multi-layered attacks to uncover vulnerabilities...</div></div>
                </div>
              </div>
              <button className="nav-button next-btn" onClick={() => nextSlide(0)}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="navigation-dots" id="nav-dots-0"></div>
            <div className="bottom-title" id="bottom-title-0">
              WEB APPLICATION PENETRATION TESTING
            </div>
          </div>

          {/* Section 2: Data Security */}
          <div id="section-2" className="section my-5 py-5">
            <h2 className="section-title">2. Data Security</h2>
            <h3 className="section-subtitle">(Confidentiality, Integrity, & Availability)</h3>
            <p className="section-description">
              We provide robust data security solutions to protect your sensitive information...
            </p>

            <div className="sliders-container">
              <button className="nav-button prev-btn" onClick={() => prevSlide(1)}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="slider-wrapper">
                <div className="slide far-prev" data-section="1" data-index="0" onClick={() => goToSlide(1, 0)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Data Protection Audit</div><div className="slide-description">We perform comprehensive audits...</div></div>
                </div>
                <div className="slide prev" data-section="1" data-index="1" onClick={() => goToSlide(1, 1)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Encryption Solutions</div><div className="slide-description">Our encryption services ensure data unreadable to unauthorized users...</div></div>
                </div>
                <div className="slide active" data-section="1" data-index="2" onClick={() => goToSlide(1, 2)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Access Control Management</div><div className="slide-description">We implement strict access control policies...</div></div>
                </div>
                <div className="slide next" data-section="1" data-index="3" onClick={() => goToSlide(1, 3)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Disaster Recovery Planning</div><div className="slide-description">We help you develop and implement robust disaster recovery plans...</div></div>
                </div>
                <div className="slide far-next" data-section="1" data-index="4" onClick={() => goToSlide(1, 4)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Threat Monitoring and Response</div><div className="slide-description">24/7 monitoring services provide real-time threat detection...</div></div>
                </div>
              </div>
              <button className="nav-button next-btn" onClick={() => nextSlide(1)}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="navigation-dots" id="nav-dots-1"></div>
            <div className="bottom-title" id="bottom-title-1">
              ACCESS CONTROL MANAGEMENT
            </div>
          </div>

          {/* Section 3: Code Security */}
          <div id="section-3" className="section my-5 py-5">
            <h2 className="section-title">3. Comprehensive Code Security</h2>
            <h3 className="section-subtitle">(Static & Dynamic Application Security Testing)</h3>
            <p className="section-description">We offer a full suite of code security services...</p>
            <div className="sliders-container">
              <button className="nav-button prev-btn" onClick={() => prevSlide(2)}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="slider-wrapper">
                <div className="slide far-prev" data-section="2" data-index="0" onClick={() => goToSlide(2, 0)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Static Application Security Testing (SAST)</div><div className="slide-description">We analyze your application's source code...</div></div>
                </div>
                <div className="slide prev" data-section="2" data-index="1" onClick={() => goToSlide(2, 1)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Dynamic Application Security Testing (DAST)</div><div className="slide-description">We test your running application simulating real-world attacks...</div></div>
                </div>
                <div className="slide active" data-section="2" data-index="2" onClick={() => goToSlide(2, 2)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Source Code Review</div><div className="slide-description">Our expert security engineers manually review your source code...</div></div>
                </div>
                <div className="slide next" data-section="2" data-index="3" onClick={() => goToSlide(2, 3)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Code Audit & Hardening</div><div className="slide-description">We perform a thorough audit of your codebase...</div></div>
                </div>
                <div className="slide far-next" data-section="2" data-index="4" onClick={() => goToSlide(2, 4)}>
                  <div className="slide-icon"><img src="/img/lock.png" alt="" /></div>
                  <div className="slide-content"><div className="slide-title">Secure Development Lifecycle (SDLC)</div><div className="slide-description">We help you integrate security into every stage of your development...</div></div>
                </div>
              </div>
              <button className="nav-button next-btn" onClick={() => nextSlide(2)}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="navigation-dots" id="nav-dots-2"></div>
            <div className="bottom-title" id="bottom-title-2">
              SOURCE CODE REVIEW
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="security-title mb-4">
                Protect Your Business Today - Get a <br /> Free Security Assessment!
              </h2>
              <div className="security-form">
                <form className="row g-3 justify-content-center">
                  <div className="col-md-7 col-sm-8">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your Email" required />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button type="submit" className="btn btn-submit btn-lg w-100">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="partners text-center my-5">
        <img src="/img/paytm-logo.png" alt="Paytm" />
        <img src="/img/awin-logo.png" alt="Awin" />
        <img src="/img/aw-logo.png" alt="a&w" />
        <img src="/img/spotify-logo.png" alt="Spotify" />
        <img src="/img/amazon-logo.png" alt="Amazon" />
      </div>

      {/* FAQ Section */}
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
    </main>
  );
}
