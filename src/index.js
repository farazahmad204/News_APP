// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
