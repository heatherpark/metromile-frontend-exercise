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

  showEditPage = (editing) => {
    this.setState({ editing });
  }

  render() {
    return (
      <div className="App">
        {this.state.editing ? 
          <EditCoverage /> 
          : <CoverageLimits
              showEditPage={this.showEditPage} />}
      </div>
    );
  }
}

export default App;
