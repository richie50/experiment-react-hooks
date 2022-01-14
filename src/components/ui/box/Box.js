import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

function Box({ children, className }) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
export default Box;
