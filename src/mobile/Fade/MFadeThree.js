import React from 'react';

import { Fade } from 'react-reveal';

const MFadeThree = () => {
  return (
    <div className="bg-fade-three">
      <Fade duration={3000}>
        <div className="tri-col">
          <div className="pulse-color" id="pulse-one" />
          <div className="pulse-color" id="pulse-two" />
          <h5 className="dot-title">This is fun huh?</h5>
          <div className="pulse-color" id="pulse-one" />
          <div className="pulse-color" id="pulse-two" />
        </div>
      </Fade>
    </div>
  );
}

export default MFadeThree;