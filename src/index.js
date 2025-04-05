// Import necessary modules or dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import App.jsx
import './styles.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches <div id="root"> in index.html
);