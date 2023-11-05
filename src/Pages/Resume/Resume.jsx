import React, { useEffect } from "react";

import NavBar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import "./resume.css";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //function to download PDF
  const downloadPDF = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1m_fnyYj9BDbz2tVQYt9OlqPEtPK-Vpmn/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Bashrat-Chowdhury-Resume.pdf";
    link.click();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <h1 className="resume-title">My Proficiencies</h1>

          <ul>
            <li className="proficiency">
              Programming Languages: HTML, CSS, JavaScript, SQL
            </li>
            <li className="proficiency">
              Libraries and Frameworks: React.js, Node.js, Express.js, MySQL,
              jQuery, Bootstrap, MongoDB
            </li>
            <li className="proficiency">
              Core Skills: Product Management, Agile Methodologies, Product
              Research, Design Thinking
            </li>
          </ul>
          <h2 className="resume-title">Download my resume here:</h2>
          <button className="button" onClick={downloadPDF}>
            Click Me
          </button>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
