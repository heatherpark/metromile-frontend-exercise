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

  onSaveLimits = () => {
    this.state.chosenLimits &&
      this.props.saveLimits(this.state.chosenLimits);

    this.props.showEditPage(false);
  }

  render() {
    return (
      <div>
        <CoverageOptions 
          limits={this.state.chosenLimits || this.props.currentLimits}
          onChooseOption={this.onChooseOption}
          options={this.props.coverageOptions} />
        <CoverageChanges
          showEditPage={this.props.showEditPage}
          onSaveLimits={this.onSaveLimits}
          options={this.props.coverageOptions}
          chosenLimits={this.state.chosenLimits}
          currentLimits={this.props.currentLimits} />
      </div>
    );
  }
}

export default EditCoverage;