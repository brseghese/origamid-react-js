import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
        margin: props.margin,
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: "10px",
};

Button.propTypes = {
  width: PropTypes.number,
};

export default Button;
