import React, { useEffect } from "react";

import NavBar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import "./about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">About Me</div>

                <div className="subtitle about-subtitle">
                  Hello I am Bashrat...
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src="./about.svg" className="about-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
