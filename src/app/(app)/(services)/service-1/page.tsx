import React from "react";
import HeroSection from "../../../../components/hero-section";
import SecuritySection from "../../../../components/security";
import PartnersSection from "../../../../components/partners";
import FAQSection from "../../../../components/faq";
import ServicesSlider from "../../../../components/services";

function page() {
  return (
    <>
      <HeroSection />

      <ServicesSlider />

      <SecuritySection />

      <PartnersSection />

      <FAQSection />
    </>
  );
}

export default page;
