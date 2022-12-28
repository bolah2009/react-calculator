import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/display.css';
import './css/index.css';

const Calculator = () => (
    <div className="d-flex col ai-c main">
      <h1 className="heading">Calculator App</h1>
      <App />
    </div>
  )

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Calculator />);
