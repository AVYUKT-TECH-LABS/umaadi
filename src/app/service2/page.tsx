"use client";

import { useEffect } from "react";

export default function Service2Page() {
  useEffect(() => {
    // ---- FAQ toggle ----
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((q) => {
      q.addEventListener("click", () => {
        const isActive = q.classList.contains("active");
        document
          .querySelectorAll(".faq-question")
          .forEach((el) => el.classList.remove("active"));
        document
          .querySelectorAll(".faq-answer")
          .forEach((el) => el.classList.remove("active"));
        document
          .querySelectorAll(".faq-icon")
          .forEach((el) => el.classList.remove("active"));

        if (!isActive) {
          q.classList.add("active");
          const ans = q.nextElementSibling as HTMLElement;
          if (ans) ans.classList.add("active");
          const icon = q.querySelector(".faq-icon");
          if (icon) icon.classList.add("active");
        }
      });
    });

    // ---- Approach Cards Slider ----
    const cards = document.querySelectorAll<HTMLDivElement>(".approach-card");
    const titleElement = document.getElementById("approach-title");
    const descElement = document.getElementById("approach-desc");
    const focusElement = document.getElementById("approach-focus");
    const prevButton =
      document.querySelector<HTMLButtonElement>(".nav-button.prev");
    const nextButton =
      document.querySelector<HTMLButtonElement>(".nav-button.next");

    let currentIndex = 0;
    const totalCards = cards.length;

    function updateActiveCard(index: number) {
      cards.forEach((card) => {
        card.className =
          "approach-card d-flex flex-column justify-content-center align-items-center";
      });

      cards[index].classList.add("active");
      const nextIndex1 = (index + 1) % totalCards;
      const nextIndex2 = (index + 2) % totalCards;
      cards[nextIndex1].classList.add("next");
      cards[nextIndex2].classList.add("far", "far-next");

      const prevIndex1 = (index - 1 + totalCards) % totalCards;
      const prevIndex2 = (index - 2 + totalCards) % totalCards;
      cards[prevIndex1].classList.add("prev");
      cards[prevIndex2].classList.add("far", "far-prev");

      if (titleElement)
        titleElement.textContent = cards[index].dataset.title || "";
      if (descElement)
        descElement.textContent = cards[index].dataset.desc || "";
      if (focusElement)
        focusElement.textContent = cards[index].dataset.focus || "";
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateActiveCard(currentIndex);
      });
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateActiveCard(currentIndex);
      });
    }

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        currentIndex = index;
        updateActiveCard(currentIndex);
      });
    });

    updateActiveCard(currentIndex);
    const autoAdvance = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalCards;
      updateActiveCard(currentIndex);
    }, 5000);

    return () => clearInterval(autoAdvance);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-header">
            <h2>
              <span className="we-offer">THE</span>Overview
            </h2>
          </div>
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

      {/* Methodology Section */}
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
                eiusmod tempor incididunt...
              </p>
              <h2 className="mb-4 what-include">What's Includes?</h2>
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

            {/* Testing Tabs */}
            <div className="col-lg-6 col-md-12 text-white testing-types">
              <h2 className="mb-4 testing-title">Types of Testing</h2>
              <ul
                className="nav nav-tabs border-0 mb-4"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="black-box-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#black-box"
                    type="button"
                    role="tab"
                  >
                    Black Box
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="grey-box-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#grey-box"
                    type="button"
                    role="tab"
                  >
                    Grey Box
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="white-box-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#white-box"
                    type="button"
                    role="tab"
                  >
                    White Box
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="black-box"
                  role="tabpanel"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                  <img
                    src="/img/Usb-malware.png"
                    alt="USB Bug"
                    className="img-fluid usb-bug"
                  />
                </div>
                <div className="tab-pane fade" id="grey-box" role="tabpanel">
                  <p>This is the content for Grey Box testing...</p>
                  <img
                    src="/img/Usb-malware.png"
                    alt="USB Bug"
                    className="img-fluid usb-bug"
                  />
                </div>
                <div className="tab-pane fade" id="white-box" role="tabpanel">
                  <p>This is the content for White Box testing...</p>
                  <img
                    src="/img/Usb-malware.png"
                    alt="USB Bug"
                    className="img-fluid usb-bug"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits-section text-center text-white">
        <div className="benefits-header">
          <h2>
            <span className="we-offer">YOUR</span>Benefits
          </h2>
        </div>
        <p className="description mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <h3 className="quote mb-5">" Defend to the End "</h3>
        <div className="image-container mx-auto">
          <img
            src="/img/service-image-1.svg"
            alt="Desktop"
            className="img-fluid desktop-img"
          />
          <img
            src="/img/service-image.svg"
            alt="Mobile"
            className="img-fluid mobile-img"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="choose-us-section">
        <div className="container py-5 text-white px-lg-5">
          <div className="choose-header">
            <h2>
              <span className="we-offer">WHY</span>Choose Us
            </h2>
          </div>

          <div className="row features-grid">
            {/* LEFT TOP FEATURE */}
            <div className="col-lg-6 col-md-12 feature-item pe-lg-5 pb-4 pb-lg-0 left-offset mb-0 feature-divider-1">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <img src="/img/Group.png" alt="Competitive Pricing" />
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

            {/* RIGHT TOP FEATURE */}
            <div className="col-lg-6 col-md-12 feature-item ps-lg-5 pb-4 pb-lg-0 border-start-lg feature-divider">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <img src="/img/Group.png" alt="Easy Financing" />
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

            {/* LEFT BOTTOM FEATURE */}
            <div className="col-lg-6 col-md-12 feature-item pe-lg-5 pt-lg-4 pt-lg-5 left-offset left-border mt-4 mb-0 feature-dividerr">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <img src="/img/Group.png" alt="Certified Expert" />
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

            {/* RIGHT BOTTOM FEATURE */}
            <div className="col-lg-6 col-md-12 feature-item ps-lg-4 pt-5 pt-lg-4 border-start-lg right-border">
              <div className="d-flex align-items-start">
                <div className="feature-icon me-3">
                  <img src="/img/Group.png" alt="100% Satisfaction" />
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

      {/* Approach */}
      <div className="approach-section">
        {/* Header */}
        <div className="approach-header">
          <h2>
            <span className="we-offer">Our</span>Approach
          </h2>
        </div>

        {/* Cards */}
        <div className="approach-cards-wrapper">
          <div
            className="approach-card active d-flex flex-column justify-content-center align-items-center"
            data-title="Information Gathering"
            data-desc="We begin by thoroughly understanding your business needs, target audience, and project objectives. This phase involves comprehensive research and analysis to establish a solid foundation for your project."
            data-focus="Market research, user personas, competitive analysis"
          >
            <img src="/img/bezier.svg" alt="Research" />
            <h4 className="approach-step text-dark text-capitalize">
              Approach 1
            </h4>
          </div>

          <div
            className="approach-card next d-flex flex-column justify-content-center align-items-center"
            data-title="Planning"
            data-desc="We create a detailed project roadmap with milestones, deliverables, and timelines. Our strategic planning ensures efficient resource allocation and risk mitigation throughout the project lifecycle."
            data-focus="Project roadmap, resource allocation, risk assessment"
          >
            <img src="/img/machine-learning.svg" alt="Planning" />
            <h4 className="approach-step text-dark text-capitalize">
              Approach 2
            </h4>
          </div>

          <div
            className="approach-card far d-flex flex-column justify-content-center align-items-center"
            data-title="Design"
            data-desc="Our design team creates intuitive, user-centered interfaces that align with your brand identity. We focus on both aesthetics and functionality to deliver engaging user experiences."
            data-focus="UI/UX design, wireframing, prototyping"
          >
            <img src="/img/data-science.svg" alt="Design" />
            <h4 className="approach-step text-dark text-capitalize">
              Approach 3
            </h4>
          </div>

          <div
            className="approach-card far d-flex flex-column justify-content-center align-items-center"
            data-title="Development"
            data-desc="Using cutting-edge technologies, our developers bring designs to life with clean, efficient code. We follow agile methodologies to ensure flexibility and continuous improvement."
            data-focus="Coding, testing, iteration"
          >
            <img src="/img/Frame 1116607169.svg" alt="Development" />
            <h4 className="approach-step text-dark text-capitalize">
              Approach 4
            </h4>
          </div>

          <div
            className="approach-card far d-flex flex-column justify-content-center align-items-center"
            data-title="Deployment"
            data-desc="We ensure smooth deployment with thorough testing and quality assurance. Our team manages the entire launch process and provides ongoing support and maintenance."
            data-focus="Quality assurance, launch, maintenance"
          >
            <img src="/img/data-science.svg" alt="Deployment" />
            <h4 className="approach-step text-dark text-capitalize">
              Approach 5
            </h4>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-container">
          <button className="nav-button prev">
            <img src="/img/Vectorr-2.png" alt="Previous" />
          </button>

          <div className="content-text">
            <h3 id="approach-title" className="approach-title">
              Information Gathering
            </h3>
            <p id="approach-desc" className="approach-desc">
              We begin by thoroughly understanding your business needs, target
              audience, and project objectives. This phase involves
              comprehensive research and analysis to establish a solid
              foundation for your project.
            </p>
            <p className="focus-area">
              <b className="text-green">Focus Area :</b>{" "}
              <span id="approach-focus" className="text-white">
                Market research, user personas, competitive analysis
              </span>
            </p>
          </div>

          <button className="nav-button next">
            <img src="/img/Vectorr-1.png" alt="Next" />
          </button>
        </div>
      </div>

      {/* Security */}
   <section className="security-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2 className="security-title mb-4">
          “Book a Free Security Consultation”
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


      {/* Partners */}
      <div className="partners text-center my-5 py-5">
        <img src="/img/paytm-logo.png" alt="Paytm" />
        <img src="/img/awin-logo.png" alt="Awin" />
        <img src="/img/aw-logo.png" alt="a&w" />
        <img src="/img/spotify-logo.png" alt="Spotify" />
        <img src="/img/amazon-logo.png" alt="Amazon" />
      </div>

      {/* FAQ */}
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
              <button type="submit" className="newsletter-btn">
                →
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Right Section - FAQ Items --> */}
        <div className="faq-right">
          <div className="faq-item">
            <div className="faq-question active">
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
            <div className="faq-question">
              <span>
                How long does it typically take to complete a project?
              </span>
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
            <div className="faq-question">
              <span>
                Do you provide ongoing support after project completion?
              </span>
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
            <div className="faq-question">
              <span>
                What is your pricing structure for different services?
              </span>
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
            <div className="faq-question">
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
      {/* CTA */}
      <div className="cta-wrapper">
        <div className="cta-box">
          <div className="cta-text">
            Get the full <em>Sample VAPT Report</em> in just one click !!
          </div>
          <a href="#" className="cta-btn">
            <img src="/img/cta-arrow.png" alt="" /> VAPT Report
          </a>
        </div>
      </div>
    </main>
  );
}
