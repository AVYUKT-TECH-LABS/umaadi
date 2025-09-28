"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // ✅ FAQ toggle
    const faqQuestions = document.querySelectorAll(".faq-question");

    const handleClick = (q: Element) => () => {
      const isActive = q.classList.contains("active");

      // Remove all actives
      document
        .querySelectorAll(".faq-question")
        .forEach((el) => el.classList.remove("active"));
      document
        .querySelectorAll(".faq-answer")
        .forEach((el) => el.classList.remove("active"));
      document
        .querySelectorAll(".faq-icon")
        .forEach((el) => el.classList.remove("active"));

      // Re-add active if not already
      if (!isActive) {
        q.classList.add("active");
        const ans = q.nextElementSibling as HTMLElement;
        if (ans) ans.classList.add("active");
        const icon = q.querySelector(".faq-icon");
        if (icon) icon.classList.add("active");
      }
    };

    faqQuestions.forEach((q) => {
      const handler = handleClick(q);
      q.addEventListener("click", handler);

      // cleanup
      return () => {
        q.removeEventListener("click", handler);
      };
    });

    // ✅ Slick carousel (requires jQuery + slick loaded globally in layout)
    if ((window as any).$) {
      const $ = (window as any).$;

      if ($(".team-slider").hasClass("slick-initialized")) {
        $(".team-slider").slick("unslick"); // prevent double init on hot reload
      }

      $(".team-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        rtl: true, // ✅ Cards move right → left
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      });
    }

    // ✅ Cleanup on unmount
    return () => {
      if ((window as any).$) {
        const $ = (window as any).$;
        if ($(".team-slider").hasClass("slick-initialized")) {
          $(".team-slider").slick("unslick");
        }
      }
    };
  }, []);

  return (
    <main>
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
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

      {/* ✅ Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-item">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Journey" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Journey</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Mission" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Vision" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Vision</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Value" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Value</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Methodology Section */}
      <section className="methodology-section">
        <div className="container text-center">
          <h2>
            <span className="we-offer">OUR</span>Customer Centric Methodology
          </h2>
          <p className="methodology-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
          <img
            src="/img/Group 349.svg"
            alt="Customer Methodology"
            className="methodology-image"
          />
        </div>
      </section>

      {/* ✅ History Section */}
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
              {/* Left side: Paragraphs */}
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

              {/* Right side: Milestones */}
              <div className="col-lg-6">
                <h5 className="mb-3 fw-semibold text-white">
                  Key Milestones :
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span
                      className="badge rounded-circle me-2 mt-1"
                      style={{ width: "10px", height: "10px" }}
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
                      style={{ width: "10px", height: "10px" }}
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
                      style={{ width: "10px", height: "10px" }}
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
                      style={{ width: "10px", height: "10px" }}
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

      <section className="security-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="security-title mb-4">
                Protect Your Business Today - Get a
                <br />
                Free Security Assessment!
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
                    <button
                      type="submit"
                      className="btn btn-submit btn-lg w-100"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
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

          {/* ✅ Slick Slider Container */}
          <div className="team-slider">
            {/* Card 1 */}
            <div>
              <div className="card">
                <img
                  src="/img/about-1.png"
                  alt="Adolf Stalin"
                  className="card-img-top"
                />
                <div className="p-3 d-flex flex-column justify-content-center align-items-start">
                  <h5 className="fw-bold mb-1">Adolf Stalin</h5>
                  <p>Cybersecurity Specialist Mentor</p>
                </div>
                <div className="d-flex gap-3 mt-3 social-icons justify-content-start">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="card">
                <img
                  src="/img/about-image.png"
                  alt="Colin Munro"
                  className="card-img-top"
                />
                <div className="p-3 d-flex flex-column justify-content-center align-items-start">
                  <h5 className="fw-bold mb-1">Colin Munro</h5>
                  <p>AI Expert Mentor</p>
                </div>
                <div className="d-flex gap-3 mt-3 social-icons justify-content-start">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <div className="card">
                <img
                  src="/img/about-3.png"
                  alt="Sophie Johnson"
                  className="card-img-top"
                />
                <div className="p-3 d-flex flex-column justify-content-center align-items-start">
                  <h5 className="fw-bold mb-1">Sophie Johnson</h5>
                  <p>Data Analyst Mentor</p>
                </div>
                <div className="d-flex gap-3 mt-3 social-icons justify-content-start">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              <div className="card">
                <img
                  src="/img/about-image.png"
                  alt="John Smith"
                  className="card-img-top"
                />
                <div className="p-3 d-flex flex-column justify-content-center align-items-start">
                  <h5 className="fw-bold mb-1">John Smith</h5>
                  <p>Web Developer Mentor</p>
                </div>
                <div className="d-flex gap-3 mt-3 social-icons justify-content-start">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Partners */}
      <div className="partners text-center my-5">
        <img src="/img/paytm-logo.png" alt="Paytm" />
        <img src="/img/awin-logo.png" alt="Awin" />
        <img src="/img/aw-logo.png" alt="a&w" />
        <img src="/img/spotify-logo.png" alt="Spotify" />
        <img src="/img/amazon-logo.png" alt="Amazon" />
      </div>

      {/* ✅ Reputable Partners */}
      <section className="py-5">
        <div className="container text-center">
          {/* Header */}
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

          {/* Stats Boxes */}
          <div className="row justify-content-center mb-5">
            <div className="col-8 col-md-3 mb-3">
              <div className="stats-boxes rounded-4 py-4 px-3 shadow-sm">
                <h3 className="mb-1 fw-bold">100+</h3>
                <p className="mb-0" style={{ fontWeight: 500 }}>
                  Project Completed
                </p>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-3">
              <div className="stats-boxes rounded-4 py-4 px-3 shadow-sm">
                <h3 className="mb-1 fw-bold">98.1%</h3>
                <p className="mb-0" style={{ fontWeight: 500 }}>
                  Client Succession
                </p>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="py-4">
            <img
              src="/img/Group-195.png"
              alt="Partner Logo 1"
              className="partner-logo-img"
            />
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section */}
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
    </main>
  );
}
