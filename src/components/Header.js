import React from "react";
import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

import Resume from "../assets/HarlanEvans_Resume.pdf";

const Header = () => {
  return (
    <Grid.Column width={12} textAlign="center">
      <div className="title-container">
        <Fade delay={500} duration={3000}>
          <Grid.Row className="row-title">
            <h1 className="title">Harlan Evans</h1>
          </Grid.Row>
        </Fade>
        <Fade delay={1500} duration={3000} big>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <Grid.Row className="row-title">
              <h4 className="title-resume">Resume{"()"}</h4>
            </Grid.Row>
          </a>
        </Fade>
        <Fade delay={1000} duration={3000}>
          <Grid.Row className="row-title">
            <h3 className="title">
              {"<"}Web Developer{">"}
            </h3>
          </Grid.Row>
        </Fade>
        <Fade bottom delay={1850} duration={3000}>
          <Grid.Row className="row-title">
            <p className="title-scroll">Scroll &darr;</p>
          </Grid.Row>
        </Fade>
      </div>
    </Grid.Column>
  );
};

export default Header;
