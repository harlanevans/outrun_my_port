import React from "react";
import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

const Portfolio = () => {
  return (
    <div className="bg-portfolio">
      <Grid columns={3} style={{ zIndex: "-100" }}>
        <Grid.Column style={{ zIndex: "-100" }}/>

        <Grid.Column
          stretched
          verticalAlign="bottom"
          style={{ padding: "12em 0em" }}
        >
          <Fade
            duration={3000}
            delay={500}
            style={{ padding: "0em", margin: "0em" }}
          >
          <div className="main-box">
            <a
              href="https://sxexp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{padding: "1em 0em"}}
            >
              <Grid.Row className="port-box-one">
                <h4 className="port-link">Southern Cross <br/> Humanitarian</h4>
              </Grid.Row>
            </a>
            <a
              href="https://devpointstudiosslc.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid.Row className="port-box-one">
                <h4 className="port-link">DevPointStudios <br/>Coming-Soon</h4>
              </Grid.Row>
            </a>
            <a
              href="https://terra-nova-cabins.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid.Row className="port-box-one">
                <h4 className="port-link">Terra Nova Cabins</h4>
              </Grid.Row>
            </a>
              </div>
          </Fade>
        </Grid.Column>
        <Grid.Column>
          <div className="header-container">
            <Fade right delay={300} duration={2000}>
              <h1 className="portfolio">Portfolio</h1>
            </Fade>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Portfolio;
