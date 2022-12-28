import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/modules/Display.module.css';

const Display = ({ result, currentButton }) => (
    <div className={`d-flex col jc-c ${styles.display}`}>
      <div role="presentation" className={styles.currentButton}>{currentButton}</div>
      <div role="status" className={styles.mainDisplay} id="display">
        {result || '0'}
      </div>
    </div>
  )

Display.propTypes = {
  result: PropTypes.string,
  currentButton: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  currentButton: '',
};

export default Display;
