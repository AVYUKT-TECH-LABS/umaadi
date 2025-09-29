import React from "react";
import HeroSection from "@/components/hero-section";
import FAQSection from "@/components/faq";
import SecuritySection from "@/components/security";
import PartnersSection from "@/components/partners";
import CertificationSection from "@/components/certification";
import BlogSection from "@/components/blogs";
import TestimonialSection from "@/components/testimonials";
import OurServices from "@/components/our-services";
import StatSection from "@/components/stats";
import Capsules from "@/components/capsules";

function page() {
  return (
    <>
      <HeroSection />

      <PartnersSection />

      <OurServices />

      <StatSection />

      <section className="process-section">
        <div className="container">
          <div className="row">
            <div className="process-header">
              <h2>
                How <span className="we-offer">WE</span> Work ?
              </h2>
            </div>
            <p className="process-para">
              Our process is simple and designed to provide you with seamless
              cybersecurity solutions tailored to your business needs
            </p>
          </div>
        </div>

        <Capsules />
      </section>

      <CertificationSection />

      <TestimonialSection />

      <BlogSection />

      <FAQSection />

      <SecuritySection />
    </>
  );
}

export default page;
