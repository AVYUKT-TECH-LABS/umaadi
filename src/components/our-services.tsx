"use client";

import { useState } from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
}

interface SliderState {
  index: number;
}

interface TabItem {
  id: string;
  label: string;
}

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("slider-vapt");
  const [sliderStates, setSliderStates] = useState<Record<string, SliderState>>(
    {
      "slider-vapt": { index: 2 },
      "slider-data": { index: 2 },
      "slider-code": { index: 2 },
    }
  );

  // Services data for each tab
  const servicesData: Record<string, Service[]> = {
    "slider-vapt": [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum maiores illo in dolorum placeat aliquid sit",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    "slider-data": [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    "slider-code": [
      {
        title: "WEB APPLICATION PENETRATION TESTING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "DATA SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "COMPREHENSIVE CODE SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "THREAT INTELLIGENCE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "CLOUD SECURITY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  };

  const tabItems: TabItem[] = [
    { id: "slider-vapt", label: "Offensive Security & VAPT" },
    { id: "slider-data", label: "Data Security" },
    { id: "slider-code", label: "Comprehensive Code Security" },
  ];

  const getCurrentServices = (): Service[] => servicesData[activeTab] || [];
  const getCurrentIndex = (): number => sliderStates[activeTab]?.index || 0;
  const getCurrentTitle = (): string =>
    getCurrentServices()[getCurrentIndex()]?.title || "";

  const updateSliderIndex = (newIndex: number): void => {
    const services = getCurrentServices();
    const validIndex =
      ((newIndex % services.length) + services.length) % services.length;

    setSliderStates((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], index: validIndex },
    }));
  };

  const handlePrevious = (): void => {
    updateSliderIndex(getCurrentIndex() - 1);
  };

  const handleNext = (): void => {
    updateSliderIndex(getCurrentIndex() + 1);
  };

  const handleDotClick = (index: number): void => {
    updateSliderIndex(index);
  };

  const handleTabChange = (tabId: string): void => {
    setActiveTab(tabId);
  };

  const getCardClass = (
    index: number,
    currentIndex: number,
    totalCards: number
  ): string => {
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    const nextIndex = (currentIndex + 1) % totalCards;
    const farPrevIndex = (currentIndex - 2 + totalCards) % totalCards;
    const farNextIndex = (currentIndex + 2) % totalCards;

    if (index === currentIndex)
      return "service-card active d-flex justify-content-center align-items-center";
    if (index === prevIndex)
      return "service-card prev d-flex justify-content-center align-items-center";
    if (index === nextIndex)
      return "service-card next d-flex justify-content-center align-items-center";
    if (index === farPrevIndex)
      return "service-card far-prev d-flex justify-content-center align-items-center";
    if (index === farNextIndex)
      return "service-card far-next d-flex justify-content-center align-items-center";

    return "service-card d-flex justify-content-center align-items-center";
  };

  const renderServiceCards = () => {
    const services = getCurrentServices();
    const currentIndex = getCurrentIndex();

    return services.map((service, index) => (
      <div
        key={index}
        className={getCardClass(index, currentIndex, services.length)}
        data-index={index}
      >
        <Image
          src="/img/lock.png"
          alt="Unlocked Lock"
          className="lock-icon"
          width={50}
          height={50}
        />
        <div className="service-card-content">
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      </div>
    ));
  };

  const renderIndicators = () => {
    const services = getCurrentServices();
    const currentIndex = getCurrentIndex();

    return services.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        data-index={index}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>
            Services <span className="we-offer">WE</span>OFFER
          </h2>
        </div>

        <div className="services-nav">
          {tabItems.map((tab) => (
            <div
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
              data-target={tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Active Slider */}
        <div className="services-slider-container" id={activeTab}>
          <div className="services-card-slider">{renderServiceCards()}</div>
        </div>

        <div className="services-slider-indicators">{renderIndicators()}</div>

        <div className="services-title-section">
          <button
            id="prevBtn"
            className="services-navigation-btn"
            onClick={handlePrevious}
          >
            <Image
              src="/img/Vectorr-2.png"
              alt="Previous"
              width={20}
              height={20}
            />
          </button>
          <h3 id="currentServiceTitle">{getCurrentTitle()}</h3>
          <button
            id="nextBtn"
            className="services-navigation-btn"
            onClick={handleNext}
          >
            <Image src="/img/Vectorr-1.png" alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
