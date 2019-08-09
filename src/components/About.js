import React from "react";
import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

const About = () => {
  return (
    <div className="bg-about">
      <Grid columns={3}>
        <Grid.Column style={{ zIndex: "-100" }} />
        <Grid.Column />
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
