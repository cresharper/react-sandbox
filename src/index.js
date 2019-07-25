import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Counters from './components/counters';
import ColorPicker from './components/colorpicker';

ReactDOM.render(
  <main className="content-area">
    <Counter />
    <ColorPicker />
  </main>,
  document.getElementById('root')
);
