"use client";
import React, { useState } from "react";

const capsulesData = [
  {
    number: "01",
    title: "ReconIntel",
    subtitle: "Map vulnerabilities before attackers do.",
    desc: "We gather technical and contextual intelligence about your systems, applications, and assets to map attack surfaces and identify potential entry points before the first exploit attempt.",
    gradient: "gradient-1",
    odd: true,
  },
  {
    number: "02",
    title: "Cybersure",
    subtitle: "Map vulnerabilities before attackers do.",
    desc: "Assess your environment against security standards and best practices to validate current defenses, highlight weak zones, and measure risk across web apps, APIs, networks, and cloud setups.",
    gradient: "gradient-2",
    odd: false,
  },
  {
    number: "03",
    title: "HackCheck",
    subtitle: "Map vulnerabilities before attackers do.",
    desc: "We perform real-world attack simulations, leveraging manual and automated techniques to exploit vulnerabilities, test detection capabilities, and evaluate how deep a threat actor could go.",
    gradient: "gradient-3",
    odd: true,
  },
  {
    number: "04",
    title: "BreachBrief",
    subtitle: "Map vulnerabilities before attackers do.",
    desc: "Deliver a comprehensive report of all identified vulnerabilities, risk scores, exploited paths, and suggested remediation steps—prioritized for impact and aligned with industry compliance standards.",
    gradient: "gradient-4",
    odd: false,
  },
  {
    number: "05",
    title: "FortiFix",
    subtitle: "Map vulnerabilities before attackers do.",
    desc: "We guide your technical team with patching, hardening, and security configuration fixes, followed by retesting to ensure all identified vulnerabilities are resolved and the system is breach-resilient.",
    gradient: "gradient-5",
    odd: true,
  },
];

function Capsules() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? capsulesData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === capsulesData.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container-fluid">
      {/* Desktop layout */}
      <div className="process-wrapper mt-5 d-none d-md-flex">
        {capsulesData.map((item, idx) => (
          <div
            key={idx}
            className={`process-card ${item.gradient} ${
              item.odd ? "odd" : "even"
            }`}
          >
            {item.odd && <div className="number">{item.number}</div>}
            <h3 className="title">{item.title}</h3>
            <h4 className="sub-title">{item.subtitle}</h4>
            <p className="desc">{item.desc}</p>
            {!item.odd && <div className="number">{item.number}</div>}
          </div>
        ))}
      </div>

      {/* Mobile slider */}
      <div className="slider-container d-md-none">
        <button className="slider-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {capsulesData.map((item, idx) => (
            <div className="slider-card" key={idx}>
              <div
                className={`process-card ${item.gradient} ${
                  item.odd ? "odd" : "even"
                }`}
              >
                {item.odd && <div className="number">{item.number}</div>}
                <h3 className="title">{item.title}</h3>
                <h4 className="sub-title">{item.subtitle}</h4>
                <p className="desc">{item.desc}</p>
                {!item.odd && <div className="number">{item.number}</div>}
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="slider-nav">
          {capsulesData.map((_, idx) => (
            <div
              key={idx}
              className={`slider-dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Capsules;
