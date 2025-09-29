"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adolf Stalin",
    role: "Cybersecurity Specialist Mentor",
    img: "/img/about-1.png",
  },
  {
    name: "Colin Munro",
    role: "AI Expert Mentor",
    img: "/img/about-image.png",
  },
  {
    name: "Sophie Johnson",
    role: "Data Analyst Mentor",
    img: "/img/about-3.png",
  },
  {
    name: "John Smith",
    role: "Web Developer Mentor",
    img: "/img/about-image.png",
  },
];

const OurTeam: React.FC = () => {
  return (
    <div className="team-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="card">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={120}
                className="card-img-top"
              />
              <div className="p-3 d-flex flex-column justify-content-center align-items-start">
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p>{member.role}</p>
              </div>
              <div className="d-flex gap-3 mt-3 social-icons justify-content-start">
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
