import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkdIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Md Sazibur Rahman</span>
          <span>
            MERN Stack Developer in web design and Development,producting the
            quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="#">
            <img src={Github} alt="" />
          </a>
          <a href="#">
            <img src={LinkdIn} alt="" />
          </a>
          <a href="#">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">i am right side</div>
    </div>
  );
};

export default Intro;
