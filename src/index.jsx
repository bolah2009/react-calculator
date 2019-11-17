import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/display.css';
import './css/index.css';

const Calculator = () => (
  <div className="d-flex col ai-c main">
    <h1 className="heading">Calculator App</h1>
    <App />
  </div>
);

ReactDOM.render(<Calculator />, document.getElementById('root'));
