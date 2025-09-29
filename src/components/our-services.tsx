"use client";
import React, { useState } from "react";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

interface ServiceSlider {
  id: string;
  cards: ServiceCard[];
}

const serviceSliders: ServiceSlider[] = [
  {
    id: "slider-vapt",
    cards: [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum maiores illo in dolorum placeat aliquid sit",
        icon: "img/lock.png",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
    ],
  },
  {
    id: "slider-data",
    cards: [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
    ],
  },
  {
    id: "slider-code",
    cards: [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "img/lock.png",
      },
    ],
  },
];

const OurServices: React.FC = () => {
  const [activeSlider, setActiveSlider] = useState("slider-vapt");
  const [currentIndex, setCurrentIndex] = useState(2); // default active index

  const slider = serviceSliders.find((s) => s.id === activeSlider)!;

  const totalCards = slider.cards.length;

  const getCardClass = (i: number) => {
    if (i === currentIndex) return "active";
    if (i === (currentIndex - 1 + totalCards) % totalCards) return "prev";
    if (i === (currentIndex + 1) % totalCards) return "next";
    if (i === (currentIndex - 2 + totalCards) % totalCards) return "far-prev";
    if (i === (currentIndex + 2) % totalCards) return "far-next";
    return "";
  };

  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const goToIndex = (i: number) => setCurrentIndex(i);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>
            Services <span className="we-offer">WE</span>OFFER
          </h2>
        </div>

        <div className="services-nav">
          {serviceSliders.map((s) => (
            <div
              key={s.id}
              className={`nav-item ${activeSlider === s.id ? "active" : ""}`}
              onClick={() => {
                setActiveSlider(s.id);
                setCurrentIndex(2); // reset active index for new slider
              }}
            >
              {s.cards[2].title} {/* Or a custom label */}
            </div>
          ))}
        </div>

        <div className="services-slider-container">
          <div className="services-card-slider">
            {slider.cards.map((card, i) => (
              <div
                key={i}
                className={`service-card d-flex justify-content-center align-items-center ${getCardClass(
                  i
                )}`}
              >
                <img src={card.icon} alt={card.title} className="lock-icon" />
                <div className="service-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="services-slider-indicators">
            {slider.cards.map((_, i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => goToIndex(i)}
              ></span>
            ))}
          </div>

          <div className="services-title-section">
            <button className="services-navigation-btn" onClick={goPrev}>
              <img src="img/Vectorr-2.png" alt="Previous" />
            </button>
            <h3 id="currentServiceTitle">{slider.cards[currentIndex].title}</h3>
            <button className="services-navigation-btn" onClick={goNext}>
              <img src="img/Vectorr-1.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
