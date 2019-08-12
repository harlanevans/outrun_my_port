import React from "react";

import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

const FadeThree = () => (
  <div className="bg-fade-three">
    <Grid columns={3}>
            <Grid.Column>
          <Fade duration={3000}>
                <div className="tri-col">
                <div className='pulse-color' id="pulse-one" />
                <div className='pulse-color' id="pulse-two" />
                <div className='pulse-color' id="pulse-one" />
                <div className='pulse-color' id="pulse-two" />
            </div>
          </Fade>
            </Grid.Column>
      <Grid.Column>
          <Fade duration={3000}>
        <div className="tri-col">
          <div className='pulse-color' id="pulse-two" />
          <div className='pulse-color' id="pulse-one" />
          <h5 className='dot-title'>This is fun huh?</h5>
          <div className='pulse-color' id="pulse-two" />
          <div className='pulse-color' id="pulse-one" />
        </div>
          </Fade>
      </Grid.Column>
            <Grid.Column>
          <Fade duration={3000}>
                <div className="tri-col">
                <div className='pulse-color' id="pulse-one" />
                <div className='pulse-color' id="pulse-two" />
                <div className='pulse-color' id="pulse-one" />
                <div className='pulse-color' id="pulse-two" />
            </div>
            </Fade>
            </Grid.Column>
    </Grid>
  </div>
);

export default FadeThree;
