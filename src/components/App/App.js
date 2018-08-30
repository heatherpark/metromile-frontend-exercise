import React, { Component } from 'react';
import './App.css';

import CoverageLimits from '../CoverageLimits/CoverageLimits';
import EditCoverage from '../EditCoverage/EditCoverage';

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
        {this.state.editing ? <EditCoverage /> : <CoverageLimits />}
      </div>
    );
  }
}

export default App;
