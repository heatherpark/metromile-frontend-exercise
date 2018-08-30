import React from 'react';

const CoverageLimits = props => {
  const renderLimits = () => {
    const limits = [];

    for (let key in props.currentLimits) {
      if (key !== 'name') {
        limits.push(
          <div className="limit">
            <span>
              {getCoverageTitle(props.coverageOptions, key)}
            </span>
            <span>
              {getOptionName(props.coverageOptions, key, props.currentLimits[key])}
            </span>
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
    <div className="container">
      <div className="header">{props.vehicle}</div>
      <div className="limits">
        {renderLimits()}
      </div>
      <p className="link" onClick={() => props.showEditPage(true)}>Edit Coverage</p>
    </div>
  );
};

export default CoverageLimits;