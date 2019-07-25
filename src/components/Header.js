import React from "react";
import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

import Resume from "../assets/HarlanEvans_Resume_PDF.pdf";

const Header = () => {
  return (
    <Grid.Column width={12} textAlign="center">
      <div className="title-container">
        <Fade delay={1000} duration={2000}>
          <Grid.Row className='row-title'>
            <h1 className="title">Harlan Evans</h1>
          </Grid.Row>
        </Fade>
        <Fade delay={2000} duration={2000}>
          <Grid.Row className="row-title">
            <h3 className="title">
              {" "}
              {"<"}Web Developer{">"}
            </h3>
          </Grid.Row>
        </Fade>
        <Fade delay={3000} duration={2000} big>
          <a href={Resume} target="_blank" className="resume-link">
            <Grid.Row className="row-title">
              <h4 className="title">Resume{"()"}</h4>
            </Grid.Row>
          </a>
        </Fade>
        <Fade delay={4000} duration={2000}>
          <Grid.Row className="row-title">
                {/* <h5 className="title">
                  <i>
                    <u style={{padding: "0.5em"}}>Skills =></u>
                  </i>
                </h5> */}
            <h5 className="title">// React, JavaScript, CSS //</h5>
            <h5 className="title">\\ HTML, CSS Frameworks, UI/UX \\</h5>
            <h5 className="title">// Command Line, Git, Ruby on Rails //</h5>
          </Grid.Row>
        </Fade>
        <Fade delay={5000} duration={2000}>
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
    </Grid.Column>
  );
};

export default Header;
