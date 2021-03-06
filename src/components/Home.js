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

// Mobile Components
import NavMobile from "../mobile/NavMobile";
import HeaderMobile from "../mobile/HeaderMobile";
import PortMobile from "../mobile/PortMobile";
import AboutMobile from "../mobile/AboutMobile";
import ContactMobile from '../mobile/ContactMobile';

import MFadeOne from '../mobile/Fade/MFadeOne';
import MFadeTwo from '../mobile/Fade/MFadeTwo';
import MFadeThree from '../mobile/Fade/MFadeThree';

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
              <NavMobile />
            <div id="top">
              <HeaderMobile />
            </div>
          </div>
          <MFadeOne />
          <div id="portmobile">
            <PortMobile />
          </div>
          <MFadeTwo />
          <div id="aboutmobile">
          <AboutMobile />
          </div>
          <MFadeThree />
          <div id='contactmobile'>
          <ContactMobile />
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
        </div>
      );
    }
  }
}

export default Home;
