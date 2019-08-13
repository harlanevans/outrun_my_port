import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Resume from "../assets/HarlanEvans_Resume_PDF.pdf";


const HeaderMobile = () => {
  return (
    <div>
      <div className="padding" />
      <div className="title-container">
        <Fade duration={2000} delay={1000}>
          <Grid.Row>
            <h1 className="title-name">Harlan Evans</h1>
          </Grid.Row>
        </Fade>
        <Fade delay={3000} duration={2000}>
          <a href={Resume} target="_blank" className="resume-link">
            <Grid.Row className="row-title">
              <h4 className="title-resume">Resume()</h4>
            </Grid.Row>
          </a>
        </Fade>
        <Fade delay={2000} duration={2000}>
          <Grid.Row>
            <h3 className="title-misc">
              {" "}
              {"<"}Web Developer{">"}
            </h3>
          </Grid.Row>
        </Fade>
        <Fade delay={3000} duration={2000}>
          <Grid.Row>
          <div className="scroll">Scroll &darr;</div>
          </Grid.Row>
        </Fade>
      </div>
    </div>
  );
}

export default HeaderMobile;