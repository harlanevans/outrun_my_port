import React from "react";
import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

const About = () => {
  return (
    <div className="bg-about">
      <Grid columns={3}>
        <Grid.Column style={{ zIndex: "-100" }} />
        <Grid.Column textAlign='center' verticalAlign='bottom'>
          <div className="abt-txt-cont">
          <Fade bottom duration={3000}>
            <h3 className="about-text">Born in Salt Lake City, UT.</h3>
            <h3 className="about-text">24 years old.</h3>
            <h3 className="about-text">
              Student at University of Utah. 
            </h3>
            <h3 className="about-text">
              Pursuing a degree in Computer
              Science with a minor in philosophy.
            </h3>
          </Fade>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="about-header-container">
            <Fade right duration={3000}>
              <h1 className="about">About Me</h1>
            </Fade>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default About;
