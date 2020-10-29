import React from "react";
import { HashLink } from "react-router-hash-link";
import { Grid } from "semantic-ui-react";
// import { Fade } from "react-reveal";

const ChoicesNav = () => {
  return (
    <Grid>
      <Grid.Row textAlign="center">
        <HashLink to="/#portmobile" smooth>
          <Grid.Row className="choice-box-one">Portfolio</Grid.Row>
        </HashLink>
        <HashLink to="/#aboutmobile" smooth>
          <Grid.Row className="choice-box-two">About</Grid.Row>
        </HashLink>
        <HashLink to="/#contactmobile" smooth>
          <Grid.Row className="choice-box-three">Contact</Grid.Row>
        </HashLink>
        <HashLink to="/#top" smooth>
          <Grid.Row className="choice-box-four">To Top</Grid.Row>
        </HashLink>
      </Grid.Row>
    </Grid>
  );
};

export default ChoicesNav;
