import React from 'react';

const CoverageOptions = props => {
  const renderOptions = options => {
    return options.map(optionGroup => {
      return (
        <div>
          <p>{optionGroup.title}</p>
          <select>
            {optionGroup.options.map(option =>
              <option>{option.name}</option>)}
          </select>
        </div>
      );
    });
  };

  return (
    <div>
      {renderOptions(props.options)}
    </div>
  );
};

export default CoverageOptions;