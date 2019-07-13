import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

import { Grid } from 'semantic-ui-react'

import Choices from './Choices'

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>

    <div className="nav-container">
      <div className="rotate-icon">
        <button className="nav-button" onClick={toggleMenu}>
          <div className="icon">
            <FontAwesomeIcon icon={faGripLinesVertical} />
          </div>
        </button>
      </div>
    </div>
        <div className='toggle'>
            {toggle === false ? <div></div> : <Grid.Column centered><Grid.Row centered>
          <Choices /></Grid.Row></Grid.Column>}
        </div>
    </div>
  );
};

export default Nav;
