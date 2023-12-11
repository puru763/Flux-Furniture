// About.js

import React from "react";
import back from "./back.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="backimg">
        <img src={back} alt="" />
        <div className="about-details">
          <div className="aheading">FLUX FURNITURE</div>
          <div className="adescription">YOUR FUTURE FURNITURE</div>
          <div className="year">Since 2001</div>
        </div>
      </div>

      <div className="about-text">
        Established in 2001 by Purvesh Krishnani, Flux Furnishings brings over
        two decades of expertise in the furniture industry. With a commitment to
        quality and design, we have become a trusted name in the field. Our 22
        years of experience shine through in each piece we create. Offering
        nationwide delivery, Flux Furnishings is dedicated to making quality
        furniture accessible across India. Choose us for furniture that
        seamlessly blends style, durability, and innovation, enhancing every
        space with a touch of elegance.
      </div>
    </div>
  );
};

export default About;
