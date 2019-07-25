import React from "react";

// Components
import Landing from "./Landing";
import FadeOne from "./color-grade/FadeOne";
import Portfolio from "./Portfolio";
import About from "./About";

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
          <div id="top">
            <Landing />
          </div>
          {/* <FadeOne /> */}
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="about">
            <About />
          </div>
        </div>
      );
    }
  }
}

export default Home;
