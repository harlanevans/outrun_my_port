import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

import Choices from "./Choices";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={4}>
        <Fade left duration={3000}>
        <div className='nav-container'>
          <div className="rotate-icon">
            <button className="nav-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faGripLinesVertical} />
            </button>
          </div>
        </div>
          <div className="fixed">
            {toggle === false ? <div /> : <Choices />}
          </div>
        </Fade>
      </Grid.Column>
    </Grid>
  );
};

export default Nav;
