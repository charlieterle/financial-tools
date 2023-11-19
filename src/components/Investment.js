import React from 'react'
import Input from './Input'
import {nanoid} from 'nanoid'

export default function (props) {
    const input_classes = Object.keys(props.inputs);
    const inputs = input_classes.map((input_class) => (
        <Input
            className={input_class}
            placeholder={props.inputs[input_class]}
            editInvestment={props.editInvestment}
            key={nanoid()}
            investment_id={props.id}
        />
    ));

    return (
        <li>
            {inputs}
            <button
                className='button deleteinvestment'
                onClick={() => props.deleteInvestment(props.id)}
            >
                Delete this investment
            </button>
        </li>
    );
}