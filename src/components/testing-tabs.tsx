"use client";
import React, { useState } from "react";

type TabKey = "black-box" | "grey-box" | "white-box";

const tabContent: Record<TabKey, { text: string; img: string; alt: string }> = {
  "black-box": {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: "img/Usb-malware.png",
    alt: "USB Bug",
  },
  "grey-box": {
    text: "This is the content for Grey Box testing. It involves some knowledge of the internal structure of the system.",
    img: "img/Usb-malware.png",
    alt: "USB Bug",
  },
  "white-box": {
    text: "This is the content for White Box testing. It focuses on the internal working of the application.",
    img: "img/Usb-malware.png",
    alt: "USB Bug",
  },
};

const TestingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("black-box");

  return (
    <div className="col-lg-6 col-md-12 text-white testing-types">
      <h2 className="mb-4 testing-title">Types of Testing</h2>

      <ul
        className="nav nav-tabs justify-content-start border-0 mb-4"
        role="tablist"
      >
        {(["black-box", "grey-box", "white-box"] as TabKey[]).map((tab) => (
          <li className="nav-item" role="presentation" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {Object.entries(tabContent).map(([key, content]) => (
          <div
            key={key}
            className={`tab-pane fade ${
              activeTab === key ? "show active" : ""
            }`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
                <p>{content.text}</p>
                <img
                  src={content.img}
                  alt={content.alt}
                  className="img-fluid usb-bug"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingTabs;
