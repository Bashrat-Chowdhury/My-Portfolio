import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-links">
          <ul className="footer-nav-link-list">
            <li className="footer-nav-link-item">
              <Link to="https://github.com/Bashrat-Chowdhury">Github</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="https://www.linkedin.com/in/bashrat-chowdhury-2b4019165/">
                LinkedIn
              </Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="https://www.facebook.com/bashrat.chowdhury">Facebook</Link>
            </li>
          </ul>
        </div>

        <div className="footer-credits">
          <div className="footer-credits-text">Bashrat Chowdhury</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
