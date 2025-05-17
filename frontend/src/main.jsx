// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

// Initialize AOS
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
