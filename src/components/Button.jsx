import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/modules/Button.module.css';

const generateClassName = (buttonIsWide, stylesObject) => {
  const { button, wide } = stylesObject;
  if (buttonIsWide) {
    return `${button} ${wide}`;
  }
  return button;
};

const Button = ({ name, isWide, color, handleClick }) => (
  <button
    style={{ backgroundColor: color }}
    className={generateClassName(isWide, styles)}
    type="button"
    id={`button-${name}`}
    onClick={handleClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
