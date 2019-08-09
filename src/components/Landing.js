import React from "react";

import { Grid } from 'semantic-ui-react';

import Nav from "./Nav";
import Header from "./Header";

const Landing = () => {
  return (
      <div class="bg-landing">
        <Grid columns={3} stackable stretched textAlign="center">
        <Grid.Column style={{zIndex: '-100'}}/>
          <Grid.Column textAlign="left">
            <Grid.Row textAlign="left">
              {/* <Nav /> */}
              <Header />
            </Grid.Row>
          </Grid.Column>
        <Grid.Column />
        </Grid>
      </div>
  );
};

export default Landing;
