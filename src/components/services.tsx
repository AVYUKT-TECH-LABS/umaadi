"use client";
import React, { useState } from "react";

const servicesData = [
  {
    sectionTitle: "1. VAPT",
    subtitle: "(Vulnerability Assessment & Penetration Testing)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slides: [
      {
        title: "Infrastructure\nPenetration Testing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "Web Application Penetration Testing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "Web Application\nPenetration Testing",
        description:
          "We simulate multi-layered attacks by covering OWASP Top 10 to uncover vulnerabilities proactive hackers exploit across single-page.",
        icon: "img/lock.png",
      },
      {
        title: "Mobile Application\nPenetration Testing",
        description:
          "We simulate attacks targeting session handling, access control, and authentication mechanisms by covering OWASP.",
        icon: "img/lock.png",
      },
      {
        title: "Cloud\nPenetration Testing",
        description:
          "We simulate multi-layered attacks to uncover vulnerabilities proactive hackers exploit across single-page.",
        icon: "img/lock.png",
      },
    ],
  },
  {
    sectionTitle: "2. Data Security",
    subtitle: "(Confidentiality, Integrity, & Availability)",
    description:
      "We provide robust data security solutions to protect your sensitive information from unauthorized access, loss, or corruption.",
    slides: [
      {
        title: "Data Protection\nAudit",
        description:
          "We perform comprehensive audits to assess your current data protection measures, identify weaknesses.",
        icon: "img/lock.png",
      },
      {
        title: "Encryption\nSolutions",
        description:
          "Our encryption services ensure that your data is unreadable to unauthorized users, both in transit and at rest.",
        icon: "img/lock.png",
      },
      {
        title: "Access Control\nManagement",
        description:
          "We implement strict access control policies to ensure that only authorized personnel can view, modify, or delete sensitive data.",
        icon: "img/lock.png",
      },
      {
        title: "Disaster Recovery\nPlanning",
        description:
          "We help you develop and implement robust disaster recovery plans to ensure business continuity and quick data recovery in the event.",
        icon: "img/lock.png",
      },
      {
        title: "Threat Monitoring\nand Response",
        description:
          "Our 24/7 monitoring services provide real-time threat detection and rapid response to security incidents, minimizing.",
        icon: "img/lock.png",
      },
    ],
  },
  {
    sectionTitle: "3. Comprehensive Code Security",
    subtitle: "(Static & Dynamic Application Security Testing)",
    description:
      "We offer a full suite of code security services, combining both static and dynamic analysis to identify and fix vulnerabilities.",
    slides: [
      {
        title: "Static Application\nSecurity Testing (SAST)",
        description:
          "We analyze your application's source code to identify security vulnerabilities early in the development lifecycle.",
        icon: "img/lock.png",
      },
      {
        title: "Dynamic Application\nSecurity Testing (DAST)",
        description:
          "We test your running application from the outside, simulating real-world attacks to find vulnerabilities that may not be visible in the source code alone.",
        icon: "img/lock.png",
      },
      {
        title: "Source Code\nReview",
        description:
          "Our expert security engineers manually review your source code to find complex, business-logic flaws and automated tools often miss.",
        icon: "img/lock.png",
      },
      {
        title: "Code Audit\n& Hardening",
        description:
          "We perform a thorough audit of your codebase and provide recommendations to improve security, reduce attack surface, and implement secure coding practices.",
        icon: "img/lock.png",
      },
      {
        title: "Secure Development\nLifecycle (SDLC)",
        description:
          "We help you integrate security into every stage of your development process, from design to deployment, to build secure applications from the ground up.",
        icon: "img/lock.png",
      },
    ],
  },
];

const ServicesSlider = () => {
  const [currentSlides, setCurrentSlides] = useState(
    servicesData.map(() => 2) // default active slide index for each section
  );

  const prevSlide = (sectionIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((cur, idx) =>
        idx === sectionIndex
          ? (cur - 1 + servicesData[idx].slides.length) %
            servicesData[idx].slides.length
          : cur
      )
    );
  };

  const nextSlide = (sectionIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((cur, idx) =>
        idx === sectionIndex ? (cur + 1) % servicesData[idx].slides.length : cur
      )
    );
  };

  const goToSlide = (sectionIndex: number, slideIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((cur, idx) => (idx === sectionIndex ? slideIndex : cur))
    );
  };

  return (
    <div className="services-containerr">
      <div className="container text-center">
        <div className="servicess-header">
          <h2>
            <span className="we-offer">Our</span>Services
          </h2>
        </div>

        {servicesData.map((section, sectionIndex) => {
          const activeIndex = currentSlides[sectionIndex];
          return (
            <div key={sectionIndex} className="section my-5 py-4">
              <h2 className="section-title">{section.sectionTitle}</h2>
              <h3 className="section-subtitle">{section.subtitle}</h3>
              <p className="section-description">{section.description}</p>

              <div className="sliders-container">
                <button
                  className="nav-button prev-btn"
                  onClick={() => prevSlide(sectionIndex)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="slider-wrapper">
                  {section.slides.map((slide, slideIndex) => {
                    let className = "slide";
                    if (slideIndex === activeIndex) className += " active";
                    else if (
                      slideIndex ===
                      (activeIndex - 1 + section.slides.length) %
                        section.slides.length
                    )
                      className += " prev";
                    else if (
                      slideIndex ===
                      (activeIndex + 1) % section.slides.length
                    )
                      className += " next";
                    else if (
                      slideIndex ===
                      (activeIndex - 2 + section.slides.length) %
                        section.slides.length
                    )
                      className += " far-prev";
                    else if (
                      slideIndex ===
                      (activeIndex + 2) % section.slides.length
                    )
                      className += " far-next";

                    return (
                      <div
                        key={slideIndex}
                        className={className}
                        onClick={() => goToSlide(sectionIndex, slideIndex)}
                      >
                        <div className="slide-icon">
                          <img src={slide.icon} alt="" />
                        </div>
                        <div className="slide-content">
                          <div className="slide-title">{slide.title}</div>
                          <div className="slide-description">
                            {slide.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="nav-button next-btn"
                  onClick={() => nextSlide(sectionIndex)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="navigation-dots">
                {section.slides.map((_, i) => (
                  <span
                    key={i}
                    className={i === activeIndex ? "dot active" : "dot"}
                    onClick={() => goToSlide(sectionIndex, i)}
                  ></span>
                ))}
              </div>

              <div className="bottom-title">
                {section.slides[activeIndex].title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSlider;
