"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

interface Testimonial {
  name: string;
  role?: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Harry Maguire",
    role: "CEO, Company",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Michael Davis",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Michael Davis",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>
          What <span className="we-offer">Our</span> Clients Say
        </h2>
      </div>

      <div className="testimonial-slider-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider-wrapper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="client-info">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={100}
                    height={60}
                    className="client-avatar"
                  />
                  <div className="client-details">
                    <h4>{t.name}</h4>
                    {t.role && <p>{t.role}</p>}
                    <div className="star-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`fa-star ${i < t.rating ? "fas" : "far"}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="testimonial-text-wrapper">
                  <Image
                    src="/img/quotation-marks.png"
                    className="quote-icon"
                    alt="quote"
                    width={100}
                    height={60}
                  />
                  <p className="testimonial-text">{t.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSection;
