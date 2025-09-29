"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">
          <Image src="/img/Frame-7.png" alt="" width={200} height={60} />
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} href="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  pathname.startsWith("/service")
                    ? "text-decoration-underline fw-bold"
                    : ""
                }`}
                href="#"
                id="servicesDropdownLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="servicesDropdownLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${isActive("/service-1")}`}
                    href="/service-1"
                  >
                    Service-1
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive("/service-2")}`}
                    href="/service-2"
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
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} href="/about">
                About Us
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className={`btn btn-sm btn-outline-light rounded-pill contact-btn mobile-only mt-3 ${isActive(
              "/contact"
            )}`}
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
