import React from 'react';

const CoverageOptions = props => {
  const renderOptions = options => {
    return options.map(optionGroup => {
      return (
        <div>
          <p className="header">{optionGroup.title}</p>
          <select onChange={(e) => props.onChooseOption(optionGroup.name, e.target.value)}>
            {optionGroup.options.map(option =>
              <option 
                selected={props.limits[optionGroup.name] === option.value}
                value={option.value}>{option.name}</option>)}
          </select>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <p className="header">{props.vehicle}</p>
      {renderOptions(props.options)}
    </div>
  );
};

export default CoverageOptions;