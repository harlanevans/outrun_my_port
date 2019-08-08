import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu } from "semantic-ui-react";

import { Grid } from "semantic-ui-react";

class Choices extends React.Component {
  state = { activeItem: "" };

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  
  render() {
    const { activeItem } = this.state;
    return (
      <div className="choice-container">
        <HashLink to="/#portfolio" smooth>
          <div className="slide-in-left-one">
          <Grid.Row className="choice-box-one">
            <Menu.Item
              name="portfolio"
              active={activeItem === "portfolio"}
              onClick={this.handleClick}
            >
              <div>Portfolio</div>
            </Menu.Item>
          </Grid.Row>
          </div>
        </HashLink>
        {/* <HashLink to='/#skills' smooth >
        <div className='slide-in-left-skills'>
          <Grid.Row className='choice-box-skills'>
            <Menu.Item
            name='skills'
            active={activeItem === 'skills'}
            onClick={this.handleClick}
            >
              <div>Skills</div>
            </Menu.Item>
          </Grid.Row>
        </div>
        </HashLink> */}
        <HashLink to="/#about" smooth>
          <div className="slide-in-left-two">
          <Grid.Row className="choice-box-two">
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleClick}
            >
              About
            </Menu.Item>
          </Grid.Row>
          </div>
        </HashLink>
        <HashLink to="/#contact" smooth>
          <div className="slide-in-left-three">
          <Grid.Row className="choice-box-three">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleClick}
            >
              Contact
            </Menu.Item>
          </Grid.Row>
          </div>
        </HashLink>
        <HashLink to="/#top" smooth>
          <div className="slide-in-left-four">
          <Grid.Row className="choice-box-four">
            <Menu.Item
              name="to_top"
              active={activeItem === "to_top"}
              onClick={this.handleClick}
            >
              To Top
            </Menu.Item>
          </Grid.Row>
          </div>
        </HashLink>
      </div>
    );
  }
}

export default Choices;
