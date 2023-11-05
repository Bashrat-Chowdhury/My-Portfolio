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
            
                 <p> Hello, I'm Bashrat Chowdhury, a passionate full stack software
                  developer with a strong foundation in programming and a knack
                  for problem-solving! </p> 
                 
                  <p>My journey as a developer began in university. Since then, I have honed my skills and gained
                  experience in a variety of programming languages and
                  frameworks, such as JavaScript, React, MongoDB, etc.</p>
              
                  <p>I am also professionally a Product manager with
                  1.5+ years of experience driving successful product
                  development from concept to launch. I have strong analytical and
                  communication skills, with a passion for delivering
                  customer-centric solutions that enhance user experiences.</p>

                  Hope you enjoy my webpage and get in touch!
        
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
