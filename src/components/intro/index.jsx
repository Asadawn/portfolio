import React from "react";
import Navigation from "./navigation-bar";
import cloud from "./../../images/cloud.png";
import cloudsoft from "./../../images/cloud-soft.png";
import "./style.scss";
const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img src={cloud} alt="cloud" className="cloud" />
      <img src={cloudsoft} alt="cloud" className="cloud-soft" />
      <div className="content">
        <Navigation />
      </div>
    </div>
  );
};

export default Intro;
