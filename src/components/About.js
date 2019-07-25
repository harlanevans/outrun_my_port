import React from 'react';
import { Fade } from 'react-reveal';

const About = () => {
  return(
    <div className='bg-about'>
    <Fade left duration={3000}>
      <h1 className='about'>
      About Me
      </h1>
    </Fade>
    </div>
  )
}

export default About;