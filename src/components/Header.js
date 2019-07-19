import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Header = () => {
  return (
    <Grid.Column width={12} textAlign="center">
      <div className="title-container">
        <Fade delay={1000} duration={2000}>
          <Grid.Row>
            <h1 className="title">Harlan Evans</h1>
          </Grid.Row>
        </Fade>
        <Fade delay={2000} duration={2000}>
          <Grid.Row className="row-title">
            <h3 className="title">
              {" "}
              {"<"}Web Developer{">"}
            </h3>
          </Grid.Row>
        </Fade>
        <Fade delay={3000} duration={2000}>
          <Grid.Row className="row-title">
            <h5 className="title">// React, Rails, JavaScript //</h5>
            <h5 className="title">\\ HTML, CSS, CSS Frameworks \\</h5>
            <h5 className="title">// UI/UX, Git, SCRUM & AGILE //</h5>
          </Grid.Row>
        </Fade>
      </div>
    </Grid.Column>
  );
}

export default Header;