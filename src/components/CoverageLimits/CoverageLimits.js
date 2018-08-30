import React from 'react';

const CoverageLimits = props => {
  const renderLimits = () => {
    const limits = [];
    
    for (let key in props.currentLimits) {
      if (key !== 'name') {
        limits.push(<div>{key} {props.currentLimits[key]}</div>);
      }
    }

    return limits;
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