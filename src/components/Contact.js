import React from 'react';

import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Contact = () => {
  return(
    <div className='bg-contact'>
    <Grid columns={3}>
        <Grid.Column style={{ zIndex: "-100" }}/>
      <Grid.Column />
      <Grid.Column>
        <div className='contact-h-container'>
        <Fade right duration={3000}>
          <h1 className='contact-header'>
      Contact Me
          </h1>
        </Fade>
        </div>
      </Grid.Column>
    </Grid>
    </div>
  )
}

export default Contact;