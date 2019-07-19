import React, {useState} from "react";
import { Fade } from 'react-reveal';

const Portfolio = () => {


  return (
    <div className="bg-portfolio">
      <div className="header-container">
      <div className='slide-in-right'>
      <Fade right delay={300} duration={2000}>
        <h1 className="portfolio">Portfolio</h1>
      </Fade>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
