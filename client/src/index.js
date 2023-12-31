import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


