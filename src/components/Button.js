import React from 'react';
import buttonClasses from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ color, backgroundColor, text, onAdd }) => {
  const btnStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <button style={btnStyle} className={buttonClasses.btn} onClick={onAdd}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
