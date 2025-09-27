"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // ✅ FAQ toggle
    const faqQuestions = document.querySelectorAll(".faq-question");

    const handleClick = (q: Element) => () => {
      const isActive = q.classList.contains("active");

      // Remove all actives
      document.querySelectorAll(".faq-question").forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(".faq-answer").forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(".faq-icon").forEach((el) => el.classList.remove("active"));

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
        $(".team-slider").slick("unslick"); // prevent double init on fast refresh
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
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      });
    }
  }, []);

  return (
    <main>
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-demo">
              Request a demo
              <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
            <a href="#" className="btn btn-contact">
              Get in touch
              <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Mission" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Mission</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Vision" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Vision</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>

          <div className="journey-item reverse">
            <div className="journey-image">
              <img src="/img/Rectangle-5.png" alt="Value" />
              <div className="arrow-icon">➜</div>
            </div>
            <div className="journey-content">
              <h4>Our Value</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Methodology Section */}
      <section className="methodology-section">
        <div className="container text-center">
          <h2><span className="we-offer">OUR</span>Customer Centric Methodology</h2>
          <p className="methodology-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>
          <img src="/img/Group 349.svg" alt="Customer Methodology" className="methodology-image" />
        </div>
      </section>

      {/* ✅ History Section */}
      <section className="py-5">
        <div className="container">
          <h2><span className="we-offer">OUR</span>History</h2>
          <div className="row g-5">
            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
            <div className="col-lg-6">
              <h5 className="text-white">Key Milestones:</h5>
              <ul className="list-unstyled">
                <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Security Form */}
      <section className="security-section">
        <div className="container text-center">
          <h2 className="security-title mb-4">
            Protect Your Business Today - Get a Free Security Assessment!
          </h2>
          <form className="row g-3 justify-content-center">
            <div className="col-md-7"><input type="email" placeholder="Enter your Email" className="form-control" required /></div>
            <div className="col-md-3"><button type="submit" className="btn btn-submit btn-lg w-100">Submit</button></div>
          </form>
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

          {/* Slick Slider */}
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
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
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
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
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
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
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
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
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
      <section className="py-5 text-center">
        <h2><span className="we-offer">OUR</span>Reputable Partners</h2>
        <p>Our reputable partners underscore our commitment to quality...</p>
        <div className="row justify-content-center mb-5">
          <div className="col-md-3"><div className="stats-boxes"><h3>100+</h3><p>Project Completed</p></div></div>
          <div className="col-md-3"><div className="stats-boxes"><h3>98.1%</h3><p>Client Succession</p></div></div>
        </div>
        <img src="/img/Group-195.png" alt="Partner Logo" className="partner-logo-img" />
      </section>

      {/* ✅ FAQ Section */}
      <div className="faq-container">
        <div className="faq-left">
          <h1>FAQs</h1>
          <p>Have questions? Here you'll find answers...</p>
          <form className="newsletter-form"><input type="email" placeholder="Email" required /><button>→</button></form>
        </div>
        <div className="faq-right">
          <div className="faq-item"><div className="faq-question active"><span>What services do you offer?</span><span className="faq-icon active"></span></div><div className="faq-answer active"><p>We offer comprehensive digital solutions...</p></div></div>
          <div className="faq-item"><div className="faq-question"><span>How long does it take to complete a project?</span><span className="faq-icon"></span></div><div className="faq-answer"><p>Timelines vary: 2–4 weeks for sites, 3–6 months for apps...</p></div></div>
          <div className="faq-item"><div className="faq-question"><span>Do you provide ongoing support?</span><span className="faq-icon"></span></div><div className="faq-answer"><p>Yes, we provide post-launch support...</p></div></div>
          <div className="faq-item"><div className="faq-question"><span>What is your pricing?</span><span className="faq-icon"></span></div><div className="faq-answer"><p>Pricing is project-based, depends on complexity...</p></div></div>
          <div className="faq-item"><div className="faq-question"><span>Can you work with our team?</span><span className="faq-icon"></span></div><div className="faq-answer"><p>Yes, we collaborate with your existing systems...</p></div></div>
        </div>
      </div>
    </main>
  );
}
