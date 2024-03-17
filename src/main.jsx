import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM instead of ReactDOM/client
import App from './App.jsx';
import './index.css';

// Use ReactDOM.render instead of ReactDOM.createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
