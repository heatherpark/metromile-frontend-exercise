import React from 'react';

const CoverageLimits = props => {
  const renderLimits = () => {
    const limits = [];

    for (let key in props.currentLimits) {
      if (key !== 'name') {
        limits.push(
          <div>
            {getCoverageTitle(props.coverageOptions, key)} {getOptionName(props.coverageOptions, key, props.currentLimits[key])}
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
      <div>{props.currentLimits && props.currentLimits.name}</div>
      <div>
        {renderLimits()}
      </div>
      <p onClick={() => props.showEditPage(true)}>Edit Coverage</p>
    </div>
  );
};

export default CoverageLimits;