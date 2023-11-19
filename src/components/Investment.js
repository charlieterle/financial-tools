import React from 'react'
import Input from './Input'

export default function (props) {
    return (
        <li>
            <Input placeholder='Investment Name'/>
            <Input placeholder='Current Value'/>
            <Input placeholder='Target Percentage'/>
            <button
                className='button deleteinvestment'
                onClick={() => props.deleteInvestment(props.id)}
            >
                Delete this investment
            </button>
        </li>
    );
}