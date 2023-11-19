import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const INITIAL_DATA = [
  {id: 'first-investment', name: '', value: '', percent: ''},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App investments={INITIAL_DATA}/>
  </React.StrictMode>
);
