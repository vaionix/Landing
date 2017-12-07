import React, { Component } from 'react';

import {Header, Navbar, RouteMap, ProjectDetails, Documents, Contact} from '../components/landing'

import '../styles/creative.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css'

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
  <Navbar/>
  <RouteMap/>
  <ProjectDetails/>
      <Documents/>
  <Contact/>
  </div>
    );
  }
}

export default App;
