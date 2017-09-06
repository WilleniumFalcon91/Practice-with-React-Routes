import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Jank from './jank.js'
import Bob from './bob.js'
import Thing from './thing.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Think Bob Jank Face</h2>
        </div>

        <Jank />
        <Bob />
        <Thing />
      
      </div>
    );
  }
}

export default App;
