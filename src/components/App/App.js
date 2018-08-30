import React, { Component } from 'react';
import './App.css';

import coverages from '../../data/coverages';
import vehicle from '../../data/vehicle';

class App extends Component {
  state = {
    coverageOptions: coverages,
    currentLimits: vehicle,
    editing: false
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
