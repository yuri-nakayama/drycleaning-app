import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Location from './components/Location'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Info />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
