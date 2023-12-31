import React from "react";
import { Link } from "react-router-dom";

import "./navigation.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
            <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Bashrat Chowdhury</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={active === "resume" ? "nav-item active" : "nav-item"}
              >
                <Link to="/resume">Resume</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
