import React from "react";

import Nav from "./Nav";

import { Grid } from "semantic-ui-react";

const GridThing = () => {
  return (
    <div class="bg-landing">
      <Grid columns={1} centered stackable stretched textAlign="center">
        <Grid.Column width={4} centered>
          <Grid.Row centered>
            <Nav />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default GridThing;
