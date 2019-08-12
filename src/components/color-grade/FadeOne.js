import React from "react";
import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

const FadeOne = () => (
  <div className="bg-fade-one">
    <Fade>
      <Grid.Column>
        <Fade duration={3000}>
          <div className="dot-container">
            {/***** DOT ********/}
            <div className='dot-text-col'>
            <div className="dot">
              <Fade delay={400} duration={3000}>
                <Grid.Row className="dot-row-title">
                  <h4 className="dot-title">
                    <i>Skills:</i>
                  </h4>
                  <h5 className="dot-title">React, JavaScript, CSS</h5>
                  <h5 className="dot-title">HTML, CSS Frameworks, UI/UX</h5>
                  <h5 className="dot-title">Ruby on Rails, Git/GitHub</h5>
                </Grid.Row>
              </Fade>
              <Fade delay={400} duration={3000}>
                <Grid.Row className="dot-row-title">
                  <h6 className="dot-title">
                    <i>Currently Learning:</i>
                  </h6>
                  <p className="dot-title">NodeJS</p>
                  <p className="dot-title">Sketch</p>
                </Grid.Row>
              </Fade>
              </div>

            </div>
          </div>
        </Fade>
      </Grid.Column>
    </Fade>
  </div>
);

export default FadeOne;
