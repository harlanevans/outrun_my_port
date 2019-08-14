import React from "react";

import { Grid } from 'semantic-ui-react';

import { Fade } from 'react-reveal';

const MFadeTwo = () => {
  return(

    <div className='bg-fade-two'>
      <Grid.Column>
        <div className="fade-two-cont">
          <Fade left duration={3000}>

            <div className="rect-row">
              <div className="rectangle-one">
                {/* <h1 className="fade-header">Fade </h1> */}
              </div>
            </div>
          </Fade>
          <Fade right duration={3000}>
            <div className="rect-row">
              <div className="rectangle-two">
                {/* <h1 className="fade-header">Fade Two</h1> */}
              </div>
            </div>
          </Fade>
          <Fade left duration={3000}>
            <div className="rect-row">
              <div className="rectangle-three">
                {/* <h1 className="fade-header">Fade Two</h1> */}
              </div>
            </div>
          </Fade>
          <Fade right duration={3000}>
            <div className="rect-row">
              <div className="rectangle-four">
                {/* <h1 className="fade-header">Fade Two</h1> */}
              </div>
            </div>
          </Fade>
          <Fade left duration={3000}>
            <div className="rect-row">
              <div className="rectangle-five">
                {/* <h1 className="fade-header">Fade Two</h1> */}
              </div>
            </div>
          </Fade>
        </div>
      </Grid.Column>
    </div>
  )
};

export default MFadeTwo;
