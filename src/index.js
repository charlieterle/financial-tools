import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const INITIAL_DATA = [
  {id: 'first-investment', investmentName: '', value: '', percent: '', purchase: null},
  {id: 'second-investment', investmentName: '', value: '', percent: '', purchase: null},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App investments={INITIAL_DATA}/>
  </React.StrictMode>
);
