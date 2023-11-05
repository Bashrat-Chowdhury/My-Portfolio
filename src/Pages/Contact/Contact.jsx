import React, { useEffect } from "react";

import NavBar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import "./contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-container">
            <h2 className="contact-title">Send Me An Email!</h2>
            <ContactForm />
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
