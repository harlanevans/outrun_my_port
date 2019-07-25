import React from "react";
import { Fade } from 'react-reveal';
import { Grid } from 'semantic-ui-react';

const Portfolio = () => {


  return (
    <div className="bg-portfolio">
    <Grid columns={3}>
        <Grid.Column style={{zIndex: '-1'}}>
      </Grid.Column>

            <Grid.Column className="main-box" stretched verticalAlign='bottom' style={{padding: '10em 0em'}}>
        <Fade duration={3000} delay={1300} style={{ padding: '0em', margin: '0em' }}>
              <a
                href="https://devpointstudiosslc.netlify.com/"
                target="_blank"
              >
                <Grid.Row className="port-box-one">
                  <h4 className="port-link">
                    DevPointStudios Coming Soon Page
                    </h4>
                </Grid.Row>
              </a>
              <a href="https://sxexp.herokuapp.com/" target="_blank">
                <Grid.Row className="port-box-two">
                  <h4 className="port-link">Southern Cross Humanitarian</h4>
                </Grid.Row>
              </a>
              <a
                href="https://terra-nova-cabins.herokuapp.com/"
                target="_blank"
              >
                <Grid.Row className="port-box-two">
                  <h4 className="port-link">Terra Nova Cabins</h4>
                </Grid.Row>
              </a>
      </Fade>
            </Grid.Column>
      <Grid.Column>
      <div className="header-container">
      <div className='slide-in-right'>
      <Fade right delay={300} duration={2000}>
        <h1 className="portfolio">Portfolio</h1>
      </Fade>
      </div>
      </div>
      </Grid.Column>
    </Grid>
    </div>
  );
};

export default Portfolio;
