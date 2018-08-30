import React from 'react';

const CoverageChanges = props => {
  const renderLimits = () => {
    const limits = [];

    for (let key in props.chosenLimits) {
      if (key !== 'name' && props.chosenLimits[key] !== props.currentLimits[key]) {
        limits.push(
          <div>
            {getCoverageTitle(props.options, key)} 
            {`${getOptionName(props.options, key, props.currentLimits[key])} --> ${getOptionName(props.options, key, props.chosenLimits[key])}`}
          </div>
        );
      }
    }

    return limits;
  };
  
  const getCoverageTitle = (coverageOptions, optionName) => {
    for (let coverageType of coverageOptions) {
      if (optionName === coverageType.name) {
        return coverageType.title;
      }
    }
  };

  const getOptionName = (coverageOptions, coverageName, optionValue) => {
    for (let coverageType of coverageOptions) {
      if (coverageName === coverageType.name) {
        for (let option of coverageType.options) {
          if (optionValue === option.value) {
            return option.name;
          }
        }
      }
    }
  };

  return (
    <div>
      {renderLimits()}
    </div>
  );
};

export default CoverageChanges;