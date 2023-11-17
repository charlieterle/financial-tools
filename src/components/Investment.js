import React, {useState} from 'react';

export default function (props) {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [percent, setPercent] = useState('');

    function handleChange(e) {
        // TODO 
    }

    return (
        <li>
          <input type='text' placeholder='Investment Name'></input>
          <input type='text'placeholder='Current Value'></input>
          <input type='text' placeholder='Target Percentage'></input>
          <button className='button deleteinvestment'>Delete this investment</button>
        </li>
    );
}