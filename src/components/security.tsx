import React from "react";

function SecuritySection() {
  return (
    <section className="security-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="security-title mb-4">
              Protect Your Business Today - Get a<br />
              Free Security Assessment!
            </h2>

            <div className="security-form">
              <form className="row g-3 justify-content-center">
                <div className="col-md-7 col-sm-8">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="col-md-3 col-sm-4">
                  <button type="submit" className="btn btn-submit btn-lg w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
