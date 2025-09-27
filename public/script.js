document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("servicesDropdown");
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      dropdown.classList.toggle("show");
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.classList.toggle("show");
    }
  });
});

// ===== CERTIFICATION SECTION SCRIPT =====
document.addEventListener("DOMContentLoaded", function () {
  const certTabs = document.querySelectorAll(".cert-tab");
  const sliderA = document.getElementById("slider-A");
  const sliderB = document.getElementById("slider-B");
  const prevBtn = document.getElementById("certPrev");
  const nextBtn = document.getElementById("certNext");
  const infoText = document.getElementById("certText");
  const yearBox = document.getElementById("yearBox");
  const revenueBox = document.getElementById("revenueBox");

  const certificateData = {
    A: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      year: "2024",
      revenue: "$1M+",
    },
    B: {
      text: "Here is the new paragraph for B Certificate. It explains a different set of achievements and details related to the B certification.",
      year: "2023",
      revenue: "$500K+",
    },
  };

  function updateSliderClasses(slider) {
    const certCards = Array.from(slider.getElementsByClassName("cert-card"));
    const currentActive = slider.querySelector(".cert-card.active");
    let current = certCards.indexOf(currentActive);

    certCards.forEach((card, index) => {
      card.className = "cert-card";
      if (index === current) {
        card.classList.add("active");
      } else if (
        index ===
        (current - 1 + certCards.length) % certCards.length
      ) {
        card.classList.add("prev");
      } else if (index === (current + 1) % certCards.length) {
        card.classList.add("next");
      } else if (
        index ===
        (current - 2 + certCards.length) % certCards.length
      ) {
        card.classList.add("far-prev");
      } else if (index === (current + 2) % certCards.length) {
        card.classList.add("far-next");
      }
    });
  }

  function nextSlide() {
    const activeSlider = document.querySelector(".cert-card-slider.active");
    const certCards = Array.from(
      activeSlider.getElementsByClassName("cert-card")
    );
    const currentActive = activeSlider.querySelector(".cert-card.active");
    let current = certCards.indexOf(currentActive);

    current = (current + 1) % certCards.length;
    certCards.forEach((card) =>
      card.classList.remove("active", "prev", "next", "far-prev", "far-next")
    );
    certCards[current].classList.add("active");
    updateSliderClasses(activeSlider);
  }

  function prevSlide() {
    const activeSlider = document.querySelector(".cert-card-slider.active");
    const certCards = Array.from(
      activeSlider.getElementsByClassName("cert-card")
    );
    const currentActive = activeSlider.querySelector(".cert-card.active");
    let current = certCards.indexOf(currentActive);

    current = (current - 1 + certCards.length) % certCards.length;
    certCards.forEach((card) =>
      card.classList.remove("active", "prev", "next", "far-prev", "far-next")
    );
    certCards[current].classList.add("active");
    updateSliderClasses(activeSlider);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  function updateContent(certType) {
    infoText.textContent = certificateData[certType].text;
    yearBox.textContent = certificateData[certType].year;
    revenueBox.textContent = certificateData[certType].revenue;
  }

  certTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      certTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const certType = tab.getAttribute("data-cert");

      document.querySelectorAll(".cert-card-slider").forEach((slider) => {
        slider.classList.remove("active");
      });
      document.getElementById(`slider-${certType}`).classList.add("active");

      updateContent(certType);
      updateSliderClasses(document.getElementById(`slider-${certType}`));
    });
  });

  // Initial load
  updateContent("A");
  updateSliderClasses(sliderA);
});

// ===== SERVICES SECTION SCRIPT =====

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".services-nav .nav-item");
  const sliders = document.querySelectorAll(".services-slider-container");
  const currentServiceTitle = document.getElementById("currentServiceTitle");

  if (sliders.length === 0) return; // agar section hi nahi hai toh exit

  // Har slider ke liye currentIndex track karna hoga
  const sliderStates = {};
  sliders.forEach((slider) => {
    const cards = slider.querySelectorAll(".service-card");
    sliderStates[slider.id] = {
      index: 0,
      cards,
      indicators: slider.parentElement.querySelectorAll(
        ".services-slider-indicators .dot"
      ),
      prevBtn: slider.parentElement.querySelector("#prevBtn"),
      nextBtn: slider.parentElement.querySelector("#nextBtn"),
      titles: Array.from(cards).map(
        (c) => c.querySelector("h4")?.textContent || ""
      ),
    };
  });

  function updateSlider(sliderId) {
    const state = sliderStates[sliderId];
    if (!state) return;

    const { index, cards, indicators, titles } = state;
    const totalCards = cards.length;
    if (totalCards === 0) return;

    // Reset classes
    cards.forEach((card) =>
      card.classList.remove("active", "prev", "next", "far-prev", "far-next")
    );

    const prevIndex = (index - 1 + totalCards) % totalCards;
    const nextIndex = (index + 1) % totalCards;
    const farPrevIndex = (index - 2 + totalCards) % totalCards;
    const farNextIndex = (index + 2) % totalCards;

    cards[index].classList.add("active");
    cards[prevIndex].classList.add("prev");
    cards[nextIndex].classList.add("next");
    cards[farPrevIndex].classList.add("far-prev");
    cards[farNextIndex].classList.add("far-next");

    if (indicators?.length) {
      indicators.forEach((dot) => dot.classList.remove("active"));
      if (indicators[index]) indicators[index].classList.add("active");
    }

    if (currentServiceTitle) {
      currentServiceTitle.textContent = titles[index] || "";
    }
  }

  // Buttons + indicators
  Object.keys(sliderStates).forEach((sliderId) => {
    const state = sliderStates[sliderId];

    if (state.prevBtn) {
      state.prevBtn.addEventListener("click", () => {
        state.index =
          (state.index - 1 + state.cards.length) % state.cards.length;
        updateSlider(sliderId);
      });
    }

    if (state.nextBtn) {
      state.nextBtn.addEventListener("click", () => {
        state.index = (state.index + 1) % state.cards.length;
        updateSlider(sliderId);
      });
    }

    if (state.indicators?.length) {
      state.indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          state.index = i;
          updateSlider(sliderId);
        });
      });
    }

    updateSlider(sliderId); // init
  });

  // Tabs
  if (navItems?.length) {
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");

        const target = item.getAttribute("data-target");
        sliders.forEach((slider) => {
          slider.style.display = slider.id === target ? "block" : "none";
        });

        updateSlider(target);
      });
    });
  }

  // By default first slider
  sliders.forEach((s, i) => {
    s.style.display = i === 0 ? "block" : "none";
  });
});

// counter-section js starts-------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const formatNumber = (num, format) => {
    if (format === "k") {
      return Math.round(num / 1000) + "k";
    }
    if (format === "k-decimal") {
      return (num / 1000).toFixed(1) + "k"; // e.g. 3.1k
    }
    return Math.ceil(num); // default normal
  };

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const format = counter.getAttribute("data-format");
    let count = 0;
    const increment = target / speed;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = formatNumber(count, format);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = formatNumber(target, format);
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// capsule process js section starts--------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".slider-card");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  let currentIndex = 0;
  const cardCount = cards.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cardCount;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    updateSlider();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  let startX = 0;
  let endX = 0;

  const sliderContainer = document.querySelector(".slider-container");

  sliderContainer.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    false
  );

  sliderContainer.addEventListener(
    "touchend",
    (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    const threshold = 50;

    if (startX - endX > threshold) {
      nextSlide();
    } else if (endX - startX > threshold) {
      prevSlide();
    }
  }
});

// ===== TESTIMONIAL AUTO SLIDER =====
class AutoSlider {
  constructor() {
    this.sliderWrapper = document.getElementById("testimonialSliderWrapper");
    this.originalCards = Array.from(
      this.sliderWrapper.querySelectorAll(".testimonial-card")
    );
    this.currentIndex = 0;
    this.autoSlideInterval = 2500;
    this.isTransitioning = false;

    this.init();
  }

  init() {
    this.cloneCards();
    this.handleResize();
    this.startAutoSlide();
    window.addEventListener("resize", () => this.handleResize());
    this.sliderWrapper.addEventListener("transitionend", () =>
      this.handleTransitionEnd()
    );
  }

  cloneCards() {
    const cards = [...this.originalCards];

    // Pehle aur last dono clone karke chipka do
    this.sliderWrapper.innerHTML = "";
    cards.forEach((card) =>
      this.sliderWrapper.appendChild(card.cloneNode(true))
    );

    // Extra clones add (seamless loop ke liye)
    cards.forEach((card) =>
      this.sliderWrapper.appendChild(card.cloneNode(true))
    );
    cards.forEach((card) =>
      this.sliderWrapper.insertBefore(
        card.cloneNode(true),
        this.sliderWrapper.firstChild
      )
    );

    this.totalCards =
      this.sliderWrapper.querySelectorAll(".testimonial-card").length;
    this.middleIndex = cards.length; // yahan se asli start hoga
    this.currentIndex = this.middleIndex;
    this.updatePosition(false);
  }

  updatePosition(withTransition = true) {
    this.sliderWrapper.style.transition = withTransition
      ? "transform 0.6s linear"
      : "none";

    const translateX = -this.currentIndex * this.cardWidth;
    this.sliderWrapper.style.transform = `translateX(${translateX}px)`;
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex++;
    this.updatePosition(true);
  }

  handleTransitionEnd() {
    this.isTransitioning = false;

    if (this.currentIndex >= this.totalCards - this.middleIndex) {
      // Jump back bina blink ke
      this.currentIndex = this.middleIndex;
      this.updatePosition(false);
    } else if (this.currentIndex < this.middleIndex) {
      // Reverse direction me bhi seamless
      this.currentIndex = this.totalCards - this.middleIndex - 1;
      this.updatePosition(false);
    }
  }

  startAutoSlide() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.nextSlide(), this.autoSlideInterval);
  }

  handleResize() {
    if (window.innerWidth <= 768) {
      this.cardWidth = document.querySelector(
        ".testimonial-slider-container"
      ).offsetWidth;
    } else {
      const firstCard = this.sliderWrapper.querySelector(".testimonial-card");
      this.cardWidth = firstCard.offsetWidth + 30; // margin add
    }
    this.updatePosition(false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new AutoSlider();
});

// blog-js starts-----------------------------------------------------------

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 3,
  navigation: {
    nextEl: ".custom-next-button",
    prevEl: ".custom-prev-button",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      loopedSlides: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      loopedSlides: 3,
      spaceBetween: 20,
    },
  },
  grabCursor: true,
});

// blog js ends-----------------------------------------------------

function toggleFAQ(clickedElement) {
  const allQuestions = document.querySelectorAll(".faq-question");
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allIcons = document.querySelectorAll(".faq-icon");

  allQuestions.forEach((question) => {
    question.classList.remove("active");
  });

  allAnswers.forEach((answer) => {
    answer.classList.remove("active");
  });

  allIcons.forEach((icon) => {
    icon.classList.remove("active");
  });

  const parentAnswer = clickedElement.nextElementSibling;
  if (!parentAnswer.classList.contains("active")) {
    clickedElement.classList.add("active");
    parentAnswer.classList.add("active");
    clickedElement.querySelector(".faq-icon").classList.add("active");
  }
}

document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    this.reset();
  });

document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// approach section js starts------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".approach-card");
  const title = document.getElementById("approach-title");
  const desc = document.getElementById("approach-desc");
  const focus = document.getElementById("approach-focus");

  let current = 0;

  function updateActiveCard(index) {
    cards.forEach((c, i) => {
      c.classList.remove("active", "next", "far");

      if (i === index) {
        c.classList.add("active");
      } else if (i === (index + 1) % cards.length) {
        c.classList.add("next");
      } else {
        c.classList.add("far");
      }
    });

    title.textContent = cards[index].getAttribute("data-title");
    desc.textContent = cards[index].getAttribute("data-desc");
    focus.textContent = cards[index].getAttribute("data-focus");
  }

  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", () => {
      current = (current + 1) % cards.length;
      updateActiveCard(current);
    });

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      updateActiveCard(current);
    });

  // Init
  updateActiveCard(current);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const section = document.querySelector(".approach-section");
//   if (!section) return;

//   const wrapper = section.querySelector(".approach-cards-wrapper");
//   const cards = Array.from(section.querySelectorAll(".approach-card"));
//   const prevBtn = section.querySelector(".carousel-control-prev");
//   const nextBtn = section.querySelector(".carousel-control-next");

//   let current = 0;
//   const total = cards.length;

//   // Reset all classes
//   function resetClasses() {
//     cards.forEach((card) => {
//       card.classList.remove(
//         "active",
//         "left-1",
//         "left-2",
//         "right-1",
//         "right-2",
//         "out-left",
//         "out-right"
//       );
//     });
//   }

//   // Update classes for visible cards
//   function updateClasses(index) {
//     resetClasses();
//     cards[index].classList.add("active");

//     if (index > 0) cards[index - 1].classList.add("left-1");
//     if (index > 1) cards[index - 2].classList.add("left-2");

//     if (index < total - 1) cards[index + 1].classList.add("right-1");
//     if (index < total - 2) cards[index + 2].classList.add("right-2");

//     if (index > 2)
//       for (let i = 0; i < index - 2; i++) cards[i].classList.add("out-left");
//     if (index < total - 3)
//       for (let i = index + 3; i < total; i++)
//         cards[i].classList.add("out-right");
//   }

//   // Compute translateX value for centering
//   function computeTranslate(index) {
//     const activeCard = cards[index];
//     const wrapperRect = wrapper.getBoundingClientRect();
//     const cardRect = activeCard.getBoundingClientRect();
//     return (
//       wrapperRect.width / 2 -
//       (cardRect.left - wrapperRect.left) -
//       cardRect.width / 2
//     );
//   }

//   // Apply translate with/without animation
//   function applyTranslate(index, withTransition = true) {
//     const translateValue = computeTranslate(index);
//     wrapper.style.transition = withTransition
//       ? "transform 0.5s ease-in-out"
//       : "none";
//     wrapper.style.transform = `translateX(${translateValue}px)`;
//   }

//   // Button actions
//   prevBtn.addEventListener("click", () => {
//     if (current > 0) {
//       current--;
//       updateClasses(current);
//       applyTranslate(current);
//     }
//   });

//   nextBtn.addEventListener("click", () => {
//     if (current < total - 1) {
//       current++;
//       updateClasses(current);
//       applyTranslate(current);
//     }
//   });

//   // Handle resize
//   window.addEventListener("resize", () => applyTranslate(current, false));

//   // Init (slight delay for fonts/images)
//   setTimeout(() => {
//     updateClasses(current);
//     applyTranslate(current, false);
//   }, 200);
// });

// team slider js starts-----------------------------------------------
