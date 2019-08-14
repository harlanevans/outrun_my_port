import React from "react";

import { Grid } from "semantic-ui-react";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <div className="bg-contact">
      <Grid columns={3}>
        <Grid.Column style={{ zIndex: "-100" }} />
        <Grid.Column
          verticalAlign="bottom"
          style={{ padding: "8em 2em 0em 2em" }}
        >
          <Fade delay={500} duration={3000}>
            <div className="contact-main-box">
              <div className="contact-box-one">
                <a href="mailto: harlanevans5@gmail.com">
                  <h3 className="contact-p">harlanevans5@gmail.com</h3>
                </a>
              </div>
              <div className="contact-box-one">
                <a href="tel:801-824-4725" className="cont-a">
                  <h3 className="contact-p">801-824-4725</h3>
                </a>
              </div>
              <div className="contact-box-one-social">
                {/* <div className="contact-p-social" > */}
                <a
                  href="https://www.instagram.com/harlansevans/"
                  target="_blank"
                  className="social"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-instagram" style={{ color: "white" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harlan-evans-b08027156/"
                  target="_blank"
                  className="social"
                  rel="noopener noreferrer"
                >
                  <ion-icon
                    name="logo-linkedin"
                    style={{ color: "white", textShadow: "1px 1px #1f032e" }}
                  />
                </a>
                <a
                  href="https://github.com/harlanevans"
                  target="_blank"
                  className="social"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github" style={{ color: "white" }} />
                </a>
                {/* </div> */}
              </div>
            </div>
          </Fade>
          <Grid.Row>
            <div className='art-box'>
            <h3 className="artwork-cred">
              <a href="https://lush-boy.tumblr.com" target="_blank" rel="noopener noreferrer" className='art'>
               Artwork by LushBoy
              </a>
            </h3>
            </div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <div className="contact-h-container">
            <Fade right duration={3000}>
              <h1 className="contact-header">Contact</h1>
            </Fade>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Contact;
