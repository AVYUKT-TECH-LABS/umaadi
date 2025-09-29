"use client";
import React, { useState } from "react";

type CertificateKey = "A" | "B";

interface CertificateData {
  text: string;
  year: string;
  revenue: string;
  images: string[];
}

const certificateData: Record<CertificateKey, CertificateData> = {
  A: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    year: "2024",
    revenue: "$1M+",
    images: [
      "img/Picture (2).png",
      "img/Picture (1).png",
      "img/Picture.png",
      "img/Picture (4).png",
      "img/Picture (3).png",
    ],
  },
  B: {
    text: "Here is the new paragraph for B Certificate. It explains a different set of achievements and details related to the B certification.",
    year: "2023",
    revenue: "$500K+",
    images: [
      "img/Picture (2).png",
      "img/Picture.png",
      "img/Picture (1).png",
      "img/Picture (3).png",
      "img/Picture (4).png",
    ],
  },
};

function CertificationSection() {
  const [activeCert, setActiveCert] = useState<CertificateKey>("A");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images = certificateData[activeCert].images;

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCardClass = (index: number): string => {
    if (index === currentIndex) return "cert-card active";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "cert-card prev";
    if (index === (currentIndex + 1) % images.length) return "cert-card next";
    if (index === (currentIndex - 2 + images.length) % images.length)
      return "cert-card far-prev";
    if (index === (currentIndex + 2) % images.length)
      return "cert-card far-next";
    return "cert-card";
  };

  return (
    <section className="certification-section">
      <div className="content-wrapper">
        <div className="certification-header">
          <h2>
            <span className="we-offer">Our</span> Certification
          </h2>
        </div>

        {/* Tabs */}
        <div className="certification-tabs">
          {(Object.keys(certificateData) as CertificateKey[]).map((certKey) => (
            <span
              key={certKey}
              className={`cert-tab ${activeCert === certKey ? "active" : ""}`}
              onClick={() => {
                setActiveCert(certKey);
                setCurrentIndex(0); // reset slider when switching tabs
              }}
            >
              {certKey} Certificate
            </span>
          ))}
        </div>

        {/* Slider */}
        <div className="cert-slider-container">
          <button
            className="cert-slider-btn cert-prev-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <img src="img/Vectorr-2.png" alt="Previous" />
          </button>

          <div className="cert-card-slider active">
            {images.map((src, index) => (
              <div key={index} className={getCardClass(index)}>
                <img src={src} alt={`Certification ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className="cert-slider-btn cert-next-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <img src="img/Vectorr-1.png" alt="Next" />
          </button>
        </div>

        {/* Info */}
        <div className="cert-info">
          <div className="info-text">{certificateData[activeCert].text}</div>
          <div className="info-boxes">
            <div className="info-box">
              <h4>{certificateData[activeCert].year}</h4>
              <p>Year Established</p>
            </div>
            <div className="info-box">
              <h4>{certificateData[activeCert].revenue}</h4>
              <p>Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationSection;
