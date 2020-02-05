import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Location from './components/Location'
import Price from './components/Price'
import Service from './components/Service'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Service />
      <Price />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
