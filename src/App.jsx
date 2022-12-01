
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Mainfl from './compo/mainfl';
import Header from './compo/header/header';
import About from './compo/about/about';
import Cont from './compo/contact/contact';
import Footer from './compo/footer/footer';
import Navs from './compo/nav/nav';
import Portfo from './compo/portfolio/portfo';
import Skill from './compo/skills/skill';
import Project from './compo/projects/project';

import './App.css';

const App = () => {

  return (
      <>
        < Header />
        < Navs />
        < About />
        <Project />
        <Skill />
        < Portfo />
        < Cont />
        < Footer />
      </>
  )
}

export default App;