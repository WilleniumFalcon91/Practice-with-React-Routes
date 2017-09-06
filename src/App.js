import React, { Component } from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch, 
  Link
 } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Jank from './jank.js'
import Bob from './bob.js'
import Thing from './thing.js'

const navs = [
  <Jank />,
  <Bob />,
  <Thing />
];

const navNames = [
  'Jank',
  'Thing',
  'Bob'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav: 0
    }
  }

  render() {
    const componentToRender = navs[this.state.currentNav];
    const myNavs = navs.map((comp, idx) => (
         <li><a href="#" onClick={(event) => {
            event.preventDefault();
            this._changeNav(idx);
            }}>{navNames[idx]}</a></li>
    ));


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Thing Bob Jank Face</h2>
        </div>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/"> Get to the Janker </Link>
              </li>
              <li>
                <Link to="/bob"> Get to the Bober </Link>
              </li>
              <li>
                <Link to="/thing"> Get to the Thinger </Link>
              </li>
            </ul>
        
            {/* <Switch> */}
            <Route exact path="/" component={Jank} />
            <Route path="/bob" component={Bob} />
            <Route path="/thing" component={Thing} />
            {/* </Switch> */}
          </div>
        </BrowserRouter>
        {/* {componentToRender} */}
      </div>
    );
  }

  _changeNav = (navValue) => {
    console.log(`You clicked a thing: ${navValue}!`);
    this.setState({
      currentNav: navValue
    })
  }
}

export default App;
