import React from "react";
import "./style.scss";
import logo from "./../../../images/logo.png";
const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <div className="navigation-item">Skills</div>
        <div className="navigation-item">Portfolio</div>
        <div className="navigation-item">Blogs & Articles</div>
      </div>
    </div>
  );
};

export default Navigation;
