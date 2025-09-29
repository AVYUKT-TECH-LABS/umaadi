"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface BlogPost {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "img/Picture (1).png",
    alt: "Modern Web Development",
    title: "Essential Developer Tools & Workflows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "img/Picture (2).png",
    alt: "React Applications",
    title: "Essential Developer Tools & Workflows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "img/Picture (3).png",
    alt: "UI/UX Design",
    title: "Essential Developer Tools & Workflows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "img/Picture (4).png",
    alt: "Performance Optimization",
    title: "Essential Developer Tools & Workflows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "img/Picture.png",
    alt: "Developer Tools",
    title: "Essential Developer Tools & Workflows",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function BlogSection() {
  return (
    <div className="blog-slider-container">
      {/* Header */}
      <div className="section-header">
        <h2>
          Latest from <span className="we-offer">Our</span> Blog
        </h2>
        <button className="view-more-btn">View More</button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        grabCursor={true}
        className="mySwiper"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="card-image">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="custom-prev-button">
          <img src="img/Vector-1.png" alt="Previous" />
        </div>
        <div className="custom-next-button">
          <img src="img/Vector-1.png" alt="Next" />
        </div>
      </Swiper>
    </div>
  );
}

export default BlogSection;
