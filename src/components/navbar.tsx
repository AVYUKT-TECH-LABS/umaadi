"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => (pathname === path ? "active" : "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" href="/">
          <Image src="/img/Frame-7.png" alt="Logo" width={200} height={60} />
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/")}`}
                href="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
              <a
                className={`nav-link dropdown-toggle ${
                  pathname.startsWith("/service")
                    ? "text-decoration-underline fw-bold"
                    : ""
                }`}
                href="#"
                id="servicesDropdownLink"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                Services
              </a>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="servicesDropdownLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${isActive("/service-1")}`}
                    href="/service-1"
                    onClick={closeMenu}
                  >
                    Service-1
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive("/service-2")}`}
                    href="/service-2"
                    onClick={closeMenu}
                  >
                    Service-2
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/projects")}`}
                href="/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about")}`}
                href="/about"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className={`btn btn-sm btn-outline-light rounded-pill contact-btn mobile-only mt-3 ${isActive(
              "/contact"
            )}`}
            onClick={closeMenu}
          >
            Contact
            <span className="btn-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>

        <Link
          href="/contact"
          className={`btn btn-sm btn-outline-light rounded-pill contact-btn desktop-only ${isActive(
            "/contact"
          )}`}
        >
          Contact
          <span className="btn-icon">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
