import Image from "next/image";
import React from "react";

const PartnersSection: React.FC = () => {
  const partners = [
    { src: "/img/paytm-logo.png", alt: "Paytm", width: 120, height: 60 },
    { src: "/img/awin-logo.png", alt: "Awin", width: 100, height: 50 },
    { src: "/img/aw-logo.png", alt: "a&w", width: 80, height: 80 },
    { src: "/img/spotify-logo.png", alt: "Spotify", width: 120, height: 40 },
    { src: "/img/amazon-logo.png", alt: "Amazon", width: 120, height: 40 },
  ];

  return (
    <div className="partners text-center my-5 py-4">
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.src}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
          className="partner-logo"
        />
      ))}
    </div>
  );
};
export default PartnersSection;
