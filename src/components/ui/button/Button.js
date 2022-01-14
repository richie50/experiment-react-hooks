import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

function GButton({ children, className, clickHandler, type }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={clickHandler}>
      {children}
    </button>
  );
}

GButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  clickHandler: PropTypes.func,
  type: PropTypes.string,
};
export default GButton;
