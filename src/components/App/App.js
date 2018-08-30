import React, { Component } from 'react';
import './App.css';

import CoverageLimits from '../CoverageLimits/CoverageLimits';
import EditCoverage from '../EditCoverage/EditCoverage';

import coverages from '../../data/coverages';
import vehicle from '../../data/vehicle';

class App extends Component {
  state = {
    coverageOptions: coverages.coverageOptions,
    currentLimits: vehicle,
    editing: false,
    vehicle: vehicle.name
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
            currentLimits={this.state.currentLimits}
            vehicle={this.state.vehicle}
            coverageOptions={this.state.coverageOptions}
            saveLimits={this.saveLimits}
            showEditPage={this.showEditPage} /> 
          : <CoverageLimits
              vehicle={this.state.vehicle}
              coverageOptions={this.state.coverageOptions}
              currentLimits={this.state.currentLimits}
              showEditPage={this.showEditPage} />}
      </div>
    );
  }
}

export default App;
