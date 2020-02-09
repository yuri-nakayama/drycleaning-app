import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import ScrollToTop from './components/ScrollToTop'

import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Location from './components/Location'
import Info from './components/Info'
import Service from './components/Service'
import Notification from './components/Notification'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
          <Route path="/">
            <Landing />
            <Info />
            <Location />
          </Route>
        </Switch>
        <Notification notice="Hello world!" link="/landing"/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
