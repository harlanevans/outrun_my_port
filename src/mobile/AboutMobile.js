import React from "react";

import { Fade } from 'react-reveal';

const AboutMobile = () => {
  return (
    <div className="bg-about">
      <div className="about-container">
      <Fade top duration={2000} delay={500}>
        <h1 className="about">About</h1>
      </Fade>
      </div>
    </div>
  );
};

export default AboutMobile;
