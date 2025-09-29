"use client";
import React, { useEffect, useRef } from "react";

interface StatItem {
  target: number;
  format?: "k" | "k-decimal";
  label: string;
}

const stats: StatItem[] = [
  { target: 1000, label: "Applications Tested" },
  { target: 25000, format: "k", label: "IT Infra Devices Tested" },
  { target: 3100, format: "k-decimal", label: "Weeks Of Testing" },
  { target: 1500, label: "Vulnerabilities Detected" },
];

const StatSection: React.FC = () => {
  const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const speed = 200;

    const formatNumber = (num: number, format?: string) => {
      if (format === "k") return Math.round(num / 1000) + "k";
      if (format === "k-decimal") return (num / 1000).toFixed(1) + "k";
      return Math.ceil(num).toString();
    };

    const runCounter = (
      counter: HTMLHeadingElement,
      target: number,
      format?: string
    ) => {
      let count = 0;
      const increment = target / speed;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
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
            const index = countersRef.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) {
              const stat = stats[index];
              runCounter(
                entry.target as HTMLHeadingElement,
                stat.target,
                stat.format
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics-section pb-5">
      <div className="glassy-card">
        <div className="row text-center">
          {stats.map((stat, i) => (
            <div key={i} className="col-6 col-md-3 stat-item">
              <h3
                className="counter"
                ref={(el) => (countersRef.current[i] = el)}
              >
                {stat.format === "k-decimal"
                  ? (stat.target / 1000).toFixed(1) + "k"
                  : stat.format === "k"
                  ? Math.round(stat.target / 1000) + "k"
                  : stat.target}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
