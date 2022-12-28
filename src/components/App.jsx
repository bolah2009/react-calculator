import React, { useState} from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import styles from '../css/modules/App.module.css';
import calculator from '../logic/calculator';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    currentButton: null,
  });

  const handleClick = buttonName => {
    const newCalculations = calculator(state, buttonName);
    setState({ ...newCalculations, currentButton: buttonName });
  };

  const { next, total, currentButton } = state;
  return (
    <div className={`d-flex col ${styles.calculator}`}>
      <Display currentButton={currentButton} result={next || total} />
      <ButtonPanel clickHandler={i => handleClick(i)} />
    </div>
  );
}

export default App;
