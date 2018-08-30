import React, { Component } from 'react';

import CoverageOptions from '../CoverageOptions/CoverageOptions';
import CoverageChanges from '../CoverageChanges/CoverageChanges';

class EditCoverage extends Component {
  state = {
    chosenLimits: null
  }

  onChooseOption = (coverageName, optionValue) => {
    this.setState(prevState => ({
      chosenLimits: {
        ...prevState.chosenLimits,
        [coverageName]: optionValue
      }
    }));
  }

  render() {
    return (
      <div>
        <CoverageOptions 
          limits={this.state.chosenLimits || this.props.currentLimits}
          onChooseOption={this.onChooseOption}
          options={this.props.coverageOptions} />
        <CoverageChanges />
      </div>
    );
  }
}

export default EditCoverage;