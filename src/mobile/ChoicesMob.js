import React, {useState} from "react";
import { HashLink } from "react-router-hash-link";
import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

const ChoicesNav = () => {
  return (
    <Grid>
      <Grid.Row textAlign="center">
          <HashLink to="/#portmobile" smooth>
            {/* <div className="slide-animation-one"> */}
            <Grid.Row className="choice-box-one">Portfolio</Grid.Row>
            {/* </div> */}
          </HashLink>
          <HashLink to="/#aboutmobile" smooth>
            {/* <div className="slide-animation-two"> */}
            <Grid.Row className="choice-box-two">About</Grid.Row>
            {/* </div> */}
          </HashLink>
          <HashLink to="/#contact" smooth>
            {/* <div className="slide-animation-three"> */}
            <Grid.Row className="choice-box-three">Contact</Grid.Row>
            {/* </div> */}
          </HashLink>
          <HashLink to="/#top" smooth>
            {/* <div className="slide-animation-four"> */}
            <Grid.Row className="choice-box-four">To Top</Grid.Row>
            {/* </div> */}
          </HashLink>
      </Grid.Row>
    </Grid>
  );
};

export default ChoicesNav;
