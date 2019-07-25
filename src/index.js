import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Counters from './components/counters';
import ColorPicker from './components/colorpicker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <main className="content-area">
    <Router>
        <Route path="/counter" component={Counter} />
        <Route path="/color-picker" component={ColorPicker} />
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/color-picker">Color Picker</Link>
          </li>
        </ul>
    </Router>
    <Counter />
    <ColorPicker />
  </main>,
  document.getElementById('root')
);
