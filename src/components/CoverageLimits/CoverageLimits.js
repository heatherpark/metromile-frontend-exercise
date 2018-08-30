import React from 'react';

const CoverageLimits = props => {
  const renderLimits = () => {
    const limits = [];

    for (let key in props.currentLimits) {
      if (key !== 'name') {
        limits.push(<div>{getCoverageTitle(props.coverageOptions, key)} {props.currentLimits[key]}</div>);
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

  // const getOptionName = (coverageOptions, optionName, optionValue) => {
  //   for (let optionType of coverageOptions) {
  //     if ( === optionType.name) {
  //       return optionType.title;
  //     }
  //   }
  // };

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