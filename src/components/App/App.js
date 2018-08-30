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

  saveLimits = newLimits => {
    this.setState({ currentLimits: newLimits });
  }

  showEditPage = editing => {
    this.setState({ editing });
  }

  render() {
    return (
      <div className="App">
        {this.state.editing ? 
          <EditCoverage
            saveLimits={this.saveLimits} /> 
          : <CoverageLimits
              showEditPage={this.showEditPage} />}
      </div>
    );
  }
}

export default App;
