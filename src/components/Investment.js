import React from 'react';

export default function (props) {
    return (
        <li>
          <input defaultValue='Investment Name (e.g. AAPL)'></input>
          <input defaultValue='Current Value'></input>
          <input defaultValue='Target Percentage'></input>
          <button className='button deleteinvestment'>Delete this investment</button>
        </li>
    );
}