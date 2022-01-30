import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

const Input = ({ label, type, name, changeHandler, keyPressHandle }, ref) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        data-testid="generic-input"
        ref={ref}
        id={label}
        type={type}
        name={name}
        placeholder={label}
        onChange={changeHandler}
        onKeyDown={keyPressHandle}
      />
    </div>
  );
};

// This basically makes it easy to pass external ref to this component
// For example if you dont want to handle input logic internally
const GroceryInput = React.forwardRef(Input);
// console.log(GroceryInput);

GroceryInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default GroceryInput;
