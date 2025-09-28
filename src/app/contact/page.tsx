"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-wrapper">
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row contact-content">
            {/* Left Column */}
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <div className="pe-lg-4">
                <h2 className="contact-title">
                  Get in Touch -<br />
                  We're Here to Help!
                </h2>
                <p className="contact-subtitle">
                  Have questions or need assistance? Our team is always ready to
                  guide you on your journey.
                </p>

                <div className="row mb-4">
                  <div className="col-md-6 col-6">
                    <div className="contact-info-item">
                      <span className="contact-info-label">Email</span>
                      <p className="contact-info-text">
                        hello@umaaid.com
                        <br />
                        For Emergency:
                        <br />
                        incident@umaaid.com
                      </p>
                    </div>

                    <div className="contact-info-item">
                      <span className="contact-info-label">Social Network</span>
                      <div className="social-icons">
                        <a href="#" className="social-iconn">
                          <img src="/img/Twitter-umaadi.png" alt="Twitter" />
                        </a>
                        <a href="#" className="social-iconn">
                          <img src="/img/Facebook-umaadi.png" alt="Facebook" />
                        </a>
                        <a href="#" className="social-iconn">
                          <img src="/img/Instagram-umaadi.png" alt="Instagram" />
                        </a>
                        <a href="#" className="social-iconn">
                          <img src="/img/Linkedin-umaadi.png" alt="LinkedIn" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-6">
                    <div className="contact-info-item">
                      <span className="contact-info-label">Phone Number</span>
                      <p className="contact-info-text">
                        +91 905-870-7374
                        <br />
                        ( Available on
                        <br />
                        WhatsApp as well )
                      </p>
                    </div>

                    <div className="contact-info-item mt-4">
                      <span className="contact-info-label">Our Location</span>
                      <p className="contact-info-text">
                        Meerut, Uttar Pradesh-
                        <br />
                        India - 250001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="col-lg-7 col-md-6">
              <div className="contact-form-container">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label-custom">Full Name</label>
                        <input
                          type="text"
                          className="form-control-custom"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label-custom">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control-custom"
                          placeholder="123-456-7890"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label-custom">Email</label>
                        <input
                          type="email"
                          className="form-control-custom"
                          placeholder="xyz123@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label-custom">Company</label>
                        <input
                          type="text"
                          className="form-control-custom"
                          placeholder="XYZ Group"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label-custom">Service</label>
                    <select className="form-select-custom">
                      <option defaultValue="selected">Your Services</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label-custom">Message</label>
                    <textarea
                      className="form-control-textarea"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="newsletter"
                    />
                    <label className="form-check-label" htmlFor="newsletter">
                      Subscribe to our weekly newsletter to stay updated!
                    </label>
                  </div>

                  <button type="submit" className="btn submit-btn">
                    Submit
                  </button>

                  <div className="privacy-text">
                    By clicking submit, you agree to our T&C, consent to our{" "}
                    <a href="#">privacy policy</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
