import React from "react";

// Components
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from './Contact';
import Nav from './Nav';

import FadeOne from "./color-grade/FadeOne";
import FadeTwo from "./color-grade/FadeTwo";
import FadeThree from './color-grade/FadeThree';
import EndFade from './color-grade/EndFade';

// Mobile Components
import NavMobile from "../mobile/NavMobile";
import HeaderMobile from "../mobile/HeaderMobile";
import PortMobile from "../mobile/PortMobile";
import AboutMobile from "../mobile/AboutMobile";

class Home extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    // the rest is the same...

    if (isMobile) {
      return (
        <div>
          <div className="bg-landing">
            <div id="top">
              <NavMobile />
              <HeaderMobile />
            </div>
          </div>
          <div id="portmobile">
            <PortMobile />
          </div>
          <div id="aboutmobile">
          <AboutMobile />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <div id="top">
            <Landing />
          </div>
          <FadeOne />
          <div id="portfolio">
            <Portfolio />
          </div>
          <FadeTwo />
          <div id="about">
            <About />
          </div>
          <FadeThree />
          <div id="contact">
            <Contact />
          </div>
          <EndFade />
        </div>
      );
    }
  }
}

export default Home;
