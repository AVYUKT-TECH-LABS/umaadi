"use client";
import React, { useState } from "react";

interface ApproachCard {
  title: string;
  desc: string;
  focus: string;
  imgSrc: string;
  alt: string;
}

const approachCards: ApproachCard[] = [
  {
    title: "Information Gathering",
    desc: "We begin by thoroughly understanding your business needs, target audience, and project objectives. This phase involves comprehensive research and analysis to establish a solid foundation for your project.",
    focus: "Market research, user personas, competitive analysis",
    imgSrc: "img/bezier.svg",
    alt: "Research",
  },
  {
    title: "Planning",
    desc: "We create a detailed project roadmap with milestones, deliverables, and timelines. Our strategic planning ensures efficient resource allocation and risk mitigation throughout the project lifecycle.",
    focus: "Project roadmap, resource allocation, risk assessment",
    imgSrc: "img/machine-learning.svg",
    alt: "Planning",
  },
  {
    title: "Design",
    desc: "Our design team creates intuitive, user-centered interfaces that align with your brand identity. We focus on both aesthetics and functionality to deliver engaging user experiences.",
    focus: "UI/UX design, wireframing, prototyping",
    imgSrc: "img/data-science.svg",
    alt: "Design",
  },
  {
    title: "Development",
    desc: "Using cutting-edge technologies, our developers bring designs to life with clean, efficient code. We follow agile methodologies to ensure flexibility and continuous improvement.",
    focus: "Coding, testing, iteration",
    imgSrc: "img/Frame 1116607169.svg",
    alt: "Development",
  },
  {
    title: "Deployment",
    desc: "We ensure smooth deployment with thorough testing and quality assurance. Our team manages the entire launch process and provides ongoing support and maintenance.",
    focus: "Quality assurance, launch, maintenance",
    imgSrc: "img/data-science.svg",
    alt: "Deployment",
  },
];

const ApproachSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevCard = () => {
    setCurrent(
      (prev) => (prev - 1 + approachCards.length) % approachCards.length
    );
  };

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % approachCards.length);
  };

  return (
    <div className="approach-section">
      <div className="approach-header">
        <h2>
          <span className="we-offer">Our</span>Approach
        </h2>
      </div>

      <div className="approach-cards-wrapper">
        {approachCards.map((card, i) => {
          let className =
            "approach-card d-flex flex-column justify-content-center align-items-center";
          if (i === current) className += " active";
          else if (i === (current + 1) % approachCards.length)
            className += " next";
          else className += " far";

          return (
            <div
              key={i}
              className={className}
              data-title={card.title}
              data-desc={card.desc}
              data-focus={card.focus}
            >
              <img src={card.imgSrc} alt={card.alt} />
              <h4 className="approach-step text-dark text-capitalize">
                Approach {i + 1}
              </h4>
            </div>
          );
        })}
      </div>

      <div className="content-container">
        <button onClick={prevCard} className="nav-button prev">
          <img src="img/Vectorr-2.png" alt="Previous" />
        </button>

        <div className="content-text">
          <h3 className="approach-title">{approachCards[current].title}</h3>
          <p className="approach-desc">{approachCards[current].desc}</p>
          <p className="focus-area">
            <b className="text-green">Focus Area :</b>{" "}
            <span className="text-white">{approachCards[current].focus}</span>
          </p>
        </div>

        <button onClick={nextCard} className="nav-button next">
          <img src="img/Vectorr-1.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ApproachSection;
