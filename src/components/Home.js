import React from 'react';

import GridThing from "./GridThing";
import FadeOne from './color-grade/FadeOne';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <div>
      <GridThing />
      {/* <FadeOne /> */}
      <div id='portfolio'>
      <Portfolio />
      </div>
    </div>
  );
}

export default Home;