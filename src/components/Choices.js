import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Grid } from "semantic-ui-react";

const Choices = () => {
  return (
    <div className="choice-container">
      <HashLink to="/#portfolio" smooth>
        <div className="slide-animation-one">
          <Grid.Row className="choice-box-one">Portfolio</Grid.Row>
        </div>
      </HashLink>
      <HashLink to="/#about" smooth>
        <div className="slide-animation-two">
          <Grid.Row className="choice-box-two">About</Grid.Row>
        </div>
      </HashLink>
      <HashLink to="/#contact" smooth>
        <div className="slide-animation-three">
          <Grid.Row className="choice-box-three">Contact</Grid.Row>
        </div>
      </HashLink>
      <HashLink to="/#top" smooth>
        <div className="slide-animation-four">
          <Grid.Row className="choice-box-four">To Top</Grid.Row>
        </div>
      </HashLink>
    </div>
  );
};

export default Choices;
