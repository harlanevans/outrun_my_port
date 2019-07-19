import React from 'react';

import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';


const PortMobile = () => {

  return(
      <div className="bg-portfolio">
      <div className='portfolio-container'>
      <Grid stackable columns={2}>
        <Grid.Column>
      <Fade top duration={2000}>
        <h1 className='portfolio-header'>
      Portfolio
        </h1>
      </Fade>
      <Fade duration={3000} delay={1000}>
      <Grid.Column className='main-box' >
      <a>
          <Grid.Row className='port-box-one'>
            <h4 className='port-link'>
            DevPointStudios Coming Soon Page
            </h4>
          </Grid.Row>
      </a>
      <a>
            <Grid.Row className='port-box-two'>
            <h4 className='port-link'>
            Southern Cross Humanitarian
            </h4>
          </Grid.Row>
      </a>
      </Grid.Column>
      </Fade>
        </Grid.Column>
      </Grid>
      </div>
      </div>
  )
}

export default PortMobile;