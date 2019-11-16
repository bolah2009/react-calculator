import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/modules/Display.module.css';

const Display = ({ result }) => (
  <div className={`d-flex col jc-c ${styles.display}`}>{result}</div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
