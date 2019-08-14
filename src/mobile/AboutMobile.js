import React from "react";

import { Fade } from 'react-reveal';

const AboutMobile = () => {
  return (
    <div className="bg-about">
      <div className="about-container">
      <Fade top duration={2000} delay={500}>
        <h1 className="about-title">About</h1>
      </Fade>
      </div>
        <div className="abt-txt-cont">
          <Fade bottom duration={3000}>
          <center>

            <h3 className="about-text">Born in Salt Lake City, UT.</h3>
            <h3 className="about-text">24 years old.</h3>
            <h3 className="about-text">
              Student at University of Utah.
            </h3>
            <h3 className="about-text">
              Pursuing a degree in Computer
              Science with a minor in philosophy.
            </h3>
          </center>
          </Fade>
        </div>
    </div>
  );
};

export default AboutMobile;
