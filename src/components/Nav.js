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
          <div className='nav-container' id="nav-index">
          <div className="rotate-icon">
            <button className="nav-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faGripLinesVertical} />
            </button>
          </div>
        </div>
            {/* <Fade left duration={2000} opposite when={toggle}> */}
          <div className="fixed">
            {toggle === false ? <div /> : <Choices toggle={toggle}/>}
          </div>
            {/* </Fade> */}
        </Fade>
      </Grid.Column>
    </Grid>
  );
};

export default Nav;
