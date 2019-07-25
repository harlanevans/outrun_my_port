import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Resume from "../assets/HarlanEvans_Resume_PDF.pdf";


const HeaderMobile = () => {
  return(
    <div>
          <div className="padding" />
          <div className="title-container">
            <Fade duration={2000} delay={1000}>
              <Grid.Row>
                <h1 className="title">Harlan Evans</h1>
              </Grid.Row>
            </Fade>
            <Fade delay={2000} duration={2000}>
              <Grid.Row>
                <h3 className="title">
                  {" "}
                  {"<"}Web Developer{">"}
                </h3>
              </Grid.Row>
            </Fade>
            <Fade delay={3000} duration={2000}>
              <a href={Resume} target="_blank" className="resume-link">
                <Grid.Row className="row-title">
                  <h4 className="title">Resume</h4>
                </Grid.Row>
              </a>
            </Fade>
            <Fade delay={4000} duration={2000}>
              <Grid.Row className="row-title">
                <h5 className="title">
                  <i>
                    <b>Skills =></b>
                  </i>
                </h5>
                <h5 className="title">// React, Rails, JavaScript //</h5>
                <h5 className="title">\\ HTML, CSS, CSS Frameworks \\</h5>
                <h5 className="title">// UI/UX, Git, SCRUM & AGILE //</h5>
              </Grid.Row>
            </Fade>
            <Fade delay={4500} duration={2000}>
              <Grid.Row className="row-title">
                <h6 className="title">
                  <i>
                    <u>Currently Learning: </u>
                  </i>
                </h6>
                <p className="title">
                  {"["} NodeJS {"]"}{" "}
                </p>
                <p className="title">
                  {"["} Sketch {"]"}{" "}
                </p>
              </Grid.Row>
            </Fade>
          </div>
    </div>
  )
}

export default HeaderMobile;