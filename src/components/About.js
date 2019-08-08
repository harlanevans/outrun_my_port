import React from 'react';
import { Fade } from 'react-reveal';
import { Grid } from 'semantic-ui-react';

const About = () => {
  return(
    <div className='bg-about'>
    <Grid>
          <Grid.Column style={{ zIndex: "-1" }} />
          <Grid.Column>

          </Grid.Column>
    <Fade right duration={3000}>
          <Grid.Column>
      <h1 className='about'>
      About Me
      </h1>
          </Grid.Column>
    </Fade>
    </Grid>
    </div>
  )
}

export default About;