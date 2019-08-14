import React from 'react';

import { Fade } from 'react-reveal';
import { Grid } from 'semantic-ui-react';

const MFadeOne = () => {
    return (
      <div className="bg-fade-one">
        <Fade duration={2000}>
            <div className="dot-container">
              {/***** DOT ********/}
              <div className='dot-text-col'>
                <div className="dot-one">
                  <Fade duration={3000}>
                    <Grid.Row className="dot-row-title">
                      <h6 className="dot-title">
                        <i>Skills:</i>
                      </h6>
                      <h5 className="dot-title">React, JavaScript, CSS</h5>
                      <h5 className="dot-title">HTML, CSS Frameworks, UI/UX</h5>
                      <h5 className="dot-title">Ruby on Rails, Git/GitHub</h5>
                    </Grid.Row>
                  </Fade>
                </div>
                <div className="dot-two">
                    <Grid.Row className="dot-row-title">
                      <h6 className="dot-title">
                        <i>Currently Learning:</i>
                      </h6>
                      <h5 className="dot-title">NodeJS</h5>
                      <h5 className="dot-title">Sketch</h5>
                    </Grid.Row>

              </div>
              </div>
            </div>
        </Fade>
      </div>
    )
}

export default MFadeOne;