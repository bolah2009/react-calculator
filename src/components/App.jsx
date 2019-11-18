import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import styles from '../css/modules/App.module.css';

const App = () => (
  <div className={`d-flex col ${styles.calculator}`}>
    <Display />
    <ButtonPanel />
  </div>
);


export default App;
