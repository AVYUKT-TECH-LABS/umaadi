"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer to help businesses grow?",
    answer:
      "We offer comprehensive digital solutions including web development, mobile app development, digital marketing, SEO optimization, and business consulting. Our team works closely with clients to create customized strategies that drive growth and increase revenue.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on scope and complexity. A basic website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance. We have different support packages available to meet your specific needs and ensure your digital solutions continue performing optimally.",
  },
  {
    question: "What is your pricing structure for different services?",
    answer:
      "Our pricing is project-based and depends on requirements, complexity, and timeline. We offer competitive rates with transparent pricing - no hidden fees. Contact us for a free consultation and detailed quote tailored to your specific needs.",
  },
  {
    question: "Can you work with our existing team and systems?",
    answer:
      "Absolutely! We're experienced in integrating with existing teams and systems. We can work alongside your current developers, integrate with your existing tools, and adapt to your workflow. We believe in collaborative partnerships that enhance your current capabilities.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [email, setEmail] = useState<string>("");

  const toggleFAQ = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleNewsletterSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="faq-container">
      {/* Left side */}
      <div className="faq-left">
        <h1 className="faq-title">FAQs</h1>
        <p className="faq-description">
          Have questions? Here you&apos;ll find the answers most valued by our
          partners, along with access to step-by-step instructions and support.
        </p>

        <div className="newsletter-section">
          <h3 className="newsletter-title">Join our monthly Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Right side */}
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`faq-icon ${activeIndex === index ? "active" : ""}`}
              ></span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-answer-text">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
