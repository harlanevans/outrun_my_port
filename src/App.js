import React from "react";

import { Route, Switch } from 'react-router-dom'

import Home from "./components/Home";
import Portolio from "./components/Portfolio";
import About from "./components/About";
import Contact from './components/Contact';

import "./App.css";
import "./Mobile.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/#portfolio' component={Portolio}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
};

export default App;
