"use client";

import { useEffect } from "react";

export default function Service2Page() {
  useEffect(() => {
    // ---- FAQ toggle ----
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((q) => {
      q.addEventListener("click", () => {
        const isActive = q.classList.contains("active");
        document.querySelectorAll(".faq-question").forEach((el) => el.classList.remove("active"));
        document.querySelectorAll(".faq-answer").forEach((el) => el.classList.remove("active"));
        document.querySelectorAll(".faq-icon").forEach((el) => el.classList.remove("active"));

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
    const prevButton = document.querySelector<HTMLButtonElement>(".nav-button.prev");
    const nextButton = document.querySelector<HTMLButtonElement>(".nav-button.next");

    let currentIndex = 0;
    const totalCards = cards.length;

    function updateActiveCard(index: number) {
      cards.forEach((card) => {
        card.className = "approach-card d-flex flex-column justify-content-center align-items-center";
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

      if (titleElement) titleElement.textContent = cards[index].dataset.title || "";
      if (descElement) descElement.textContent = cards[index].dataset.desc || "";
      if (focusElement) focusElement.textContent = cards[index].dataset.focus || "";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
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

      {/* Methodology Section */}
      <div className="main-container">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-white">
              <div className="main-container-header">
                <h2><span className="we-offer">Our</span>Methadology</h2>
              </div>
              <p className="mb-5 custom-text-width">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
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
              <ul className="nav nav-tabs border-0 mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="black-box-tab" data-bs-toggle="tab" data-bs-target="#black-box" type="button" role="tab">Black Box</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="grey-box-tab" data-bs-toggle="tab" data-bs-target="#grey-box" type="button" role="tab">Grey Box</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="white-box-tab" data-bs-toggle="tab" data-bs-target="#white-box" type="button" role="tab">White Box</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="black-box" role="tabpanel">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <img src="/img/Usb-malware.png" alt="USB Bug" className="img-fluid usb-bug" />
                </div>
                <div className="tab-pane fade" id="grey-box" role="tabpanel">
                  <p>This is the content for Grey Box testing...</p>
                  <img src="/img/Usb-malware.png" alt="USB Bug" className="img-fluid usb-bug" />
                </div>
                <div className="tab-pane fade" id="white-box" role="tabpanel">
                  <p>This is the content for White Box testing...</p>
                  <img src="/img/Usb-malware.png" alt="USB Bug" className="img-fluid usb-bug" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits-section text-center text-white">
        <div className="benefits-header"><h2><span className="we-offer">YOUR</span>Benefits</h2></div>
        <p className="description mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <h3 className="quote mb-5">" Defend to the End "</h3>
        <div className="image-container mx-auto">
          <img src="/img/service-image-1.svg" alt="Desktop" className="img-fluid desktop-img" />
          <img src="/img/service-image.svg" alt="Mobile" className="img-fluid mobile-img" />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="choose-us-section text-white">
        <div className="container py-5 px-lg-5">
          <div className="choose-header"><h2><span className="we-offer">WHY</span>Choose Us</h2></div>
          <div className="row features-grid">
            <div className="col-lg-6 feature-item"><h4>Competitive Pricing</h4><p>Lorem ipsum dolor sit amet...</p></div>
            <div className="col-lg-6 feature-item"><h4>Easy Financing</h4><p>Lorem ipsum dolor sit amet...</p></div>
            <div className="col-lg-6 feature-item"><h4>Certified Expert</h4><p>Lorem ipsum dolor sit amet...</p></div>
            <div className="col-lg-6 feature-item"><h4>100% Satisfaction</h4><p>Lorem ipsum dolor sit amet...</p></div>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="approach-section">
        <div className="approach-header"><h2><span className="we-offer">Our</span>Approach</h2></div>
        <div className="approach-cards-wrapper">
          <div className="approach-card" data-title="Information Gathering" data-desc="We begin by thoroughly..." data-focus="Market research"><img src="/img/bezier.svg" alt="Research" /><h4>Approach 1</h4></div>
          <div className="approach-card" data-title="Planning" data-desc="We create a detailed roadmap..." data-focus="Project roadmap"><img src="/img/machine-learning.svg" alt="Planning" /><h4>Approach 2</h4></div>
          <div className="approach-card" data-title="Design" data-desc="Our design team creates..." data-focus="UI/UX design"><img src="/img/data-science.svg" alt="Design" /><h4>Approach 3</h4></div>
          <div className="approach-card" data-title="Development" data-desc="Using cutting-edge technologies..." data-focus="Coding, testing"><img src="/img/Frame 1116607169.svg" alt="Dev" /><h4>Approach 4</h4></div>
          <div className="approach-card" data-title="Deployment" data-desc="We ensure smooth deployment..." data-focus="QA, launch"><img src="/img/data-science.svg" alt="Deploy" /><h4>Approach 5</h4></div>
        </div>
        <div className="content-container">
          <button className="nav-button prev"><img src="/img/Vectorr-2.png" alt="Prev" /></button>
          <div className="content-text">
            <h3 id="approach-title">Information Gathering</h3>
            <p id="approach-desc">We begin by thoroughly understanding...</p>
            <p className="focus-area"><b>Focus Area :</b> <span id="approach-focus">Market research...</span></p>
          </div>
          <button className="nav-button next"><img src="/img/Vectorr-1.png" alt="Next" /></button>
        </div>
      </div>

    

      {/* Security */}
      <section className="security-section">
        <div className="container text-center">
          <h2 className="security-title mb-4">“Book a Free Security Consultation”</h2>
          <form className="row g-3 justify-content-center">
            <div className="col-md-7"><input type="email" className="form-control form-control-lg" placeholder="Enter your Email" required /></div>
            <div className="col-md-3"><button type="submit" className="btn btn-submit btn-lg w-100">Submit</button></div>
          </form>
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
        <div className="faq-left">
          <h1 className="faq-title">FAQs</h1>
          <p className="faq-description">Have questions? Here you'll find answers...</p>
          <form className="newsletter-form"><input type="email" placeholder="Email" required /><button>→</button></form>
        </div>
        <div className="faq-right">
          <div className="faq-item"><div className="faq-question active"><span>What services do you offer?</span><span className="faq-icon active"></span></div><div className="faq-answer active"><div className="faq-answer-text">We offer digital solutions...</div></div></div>
          <div className="faq-item"><div className="faq-question"><span>How long does a project take?</span><span className="faq-icon"></span></div><div className="faq-answer"><div className="faq-answer-text">Basic sites: 2–4 weeks, complex apps: 3–6 months...</div></div></div>
          <div className="faq-item"><div className="faq-question"><span>Do you provide ongoing support?</span><span className="faq-icon"></span></div><div className="faq-answer"><div className="faq-answer-text">Yes, we provide post-launch support...</div></div></div>
          <div className="faq-item"><div className="faq-question"><span>What is your pricing?</span><span className="faq-icon"></span></div><div className="faq-answer"><div className="faq-answer-text">Pricing depends on scope & complexity...</div></div></div>
          <div className="faq-item"><div className="faq-question"><span>Can you work with our team?</span><span className="faq-icon"></span></div><div className="faq-answer"><div className="faq-answer-text">Yes, we integrate with existing teams...</div></div></div>
        </div>
      </div>
      {/* CTA */}
      <div className="cta-wrapper">
        <div className="cta-box">
          <div className="cta-text">Get the full <em>Sample VAPT Report</em> in just one click !!</div>
          <a href="#" className="cta-btn"><img src="/img/cta-arrow.png" alt="" /> VAPT Report</a>
        </div>
      </div>
    </main>
  );
}
