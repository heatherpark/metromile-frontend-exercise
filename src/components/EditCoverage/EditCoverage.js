import React, { Component } from 'react';

import CoverageOptions from '../CoverageOptions/CoverageOptions';
import CoverageChanges from '../CoverageChanges/CoverageChanges';

class EditCoverage extends Component {
  render() {
    return (
      <div>
        <CoverageOptions />
        <CoverageChanges />
      </div>
    );
  }
}

export default EditCoverage;