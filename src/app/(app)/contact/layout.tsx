import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="contact-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
