import React from 'react';

import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Contact = () => {
  return(
    <div className='bg-contact'>
    <Grid columns={3}>
        <Grid.Column style={{ zIndex: "-100" }}/>
        <Grid.Column
          verticalAlign="bottom"
          style={{ padding: "10em 2em 0em 2em" }}>
          <div className="contact-main-box">
            <div className='contact-box-one'>
            <h3 className='contact-p'>Email Me</h3>
            </div>
            <div className='contact-box-one'>
            <h3 className='contact-p'>Call Me</h3>
            </div>
            <div className='contact-box-one'>
            <h3 className='contact-p'>Stalk Me</h3>
            </div>
          </div>

      </Grid.Column>
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