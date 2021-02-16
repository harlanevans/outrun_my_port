import React from "react";
import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

import Resume from "../assets/HarlanEvansResume.pdf";

const Header = () => {
  return (
    <Grid.Column textAlign="right" width={8}>
    <div className="title-right">

      <div className="title-container">
        <Fade right delay={500} duration={3000}>
          <Grid.Row className="row-title">
            <h1 className="title">Harlan Evans</h1>
          </Grid.Row>
        </Fade>
        <Fade right delay={1000} duration={3000}>
          <Grid.Row className="row-title">
            <h3 className="title">
              {"<"}Web Developer{">"}
            </h3>
          </Grid.Row>
        </Fade>
        <Fade bottom right delay={1500} duration={3500}>
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
        <Fade bottom delay={1850} duration={4000}>
          <Grid.Row className="row-title">
            <p className="title-scroll">Scroll &darr;</p>
          </Grid.Row>
        </Fade>
      </div>
    </div>
    </Grid.Column>
  );
};

export default Header;
