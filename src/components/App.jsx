import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import styles from '../css/modules/App.module.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      currentButton: null,
    };
  }

  handleClick(buttonName) {
    const newCalculations = calculate(this.state, buttonName);
    this.setState({ ...newCalculations, currentButton: buttonName });
  }

  render() {
    const { next, total, currentButton } = this.state;
    return (
      <div className={`d-flex col ${styles.calculator}`}>
        <Display currentButton={currentButton} result={next || total} />
        <ButtonPanel clickHandler={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default App;
