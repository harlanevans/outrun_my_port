import React from "react";

import { Grid } from 'semantic-ui-react';

import Header from "./Header";

const Landing = () => {
  return (
      <div class="bg-landing">
        <Grid columns={3} stackable stretched textAlign="center">
        <Grid.Column style={{zIndex: '-100'}} width={4}/>
        <Grid.Column  width={4}/>
              <Header />
        </Grid>
      </div>
  );
};

export default Landing;
