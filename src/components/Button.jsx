import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/modules/Button.module.css';

const Button = ({ name, isWide }) => (
  <button className={isWide ? `${styles.button} ${styles.wide}` : styles.button} type="button">{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
};

export default Button;
