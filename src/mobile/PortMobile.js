import React from "react";

import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

const PortMobile = () => {
  return (
    <div className="bg-portfolio">
      <div className="portfolio-container">
        <Grid stackable columns={2}>
          <Grid.Column>
            <Fade top duration={2000} delay={500}>
              <h1 className="portfolio-header">Portfolio</h1>
            </Fade>
            <Fade
              duration={3000}
              delay={1000}
              style={{ padding: "0em", margin: "0em" }}
            >
              <Grid.Column className="main-box">
                <a
                  href="https://sxexp.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Grid.Row className="port-box-two">
                    <h4 className="port-link">
                      <center>Southern Cross Humanitarian</center></h4>
                  </Grid.Row>
                </a>
                <a
                  href="https://devpointstudiosslc.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Grid.Row className="port-box-one">
                    <h4 className="port-link">
                      <center>DevPointStudios <br />Coming Soon</center>
                    </h4>
                  </Grid.Row>
                </a>
                <a
                  href="https://terra-nova-cabins.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Grid.Row className="port-box-two">
                    <h4 className="port-link"><center>Terra Nova Cabins</center></h4>
                  </Grid.Row>
                </a>
              </Grid.Column>
            </Fade>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default PortMobile;
