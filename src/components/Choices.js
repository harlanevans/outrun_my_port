import React from "react";
// import { Link  } from 'react-router-dom'
import { HashLink as Link} from "react-router-hash-link";

import { Grid } from "semantic-ui-react";

const Choices = () => {
  return (
      <Grid
        columns={1}
        className="choice-container"
        centered
        stackable
        stretched
        textAlign="center"
      >
        <Grid.Column className="choice-box">
          <div className="slide-in-bottom-fade-first">
          <Link to="/#portfolio" smooth className='centered'>
            <Grid.Row className="choice-box-one" centered>
              Portfolio
            </Grid.Row>
          </Link>
              </div>
        <Link to="/#about" className='centered'>
          <div className="slide-in-bottom-fade-second">
            <Grid.Row className="choice-box-two" >
              About
            </Grid.Row>
              </div>
          </Link>
        <Link to="/#contact" className='centered'>
          <div className="slide-in-bottom-fade-third">
            <Grid.Row className="choice-box-three" >
              Contact
            </Grid.Row>
              </div>
          </Link>
        </Grid.Column>
      </Grid>
  );
};

export default Choices;
