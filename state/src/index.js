import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Plus from './components/Plus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Plus />
  </React.StrictMode>
);

