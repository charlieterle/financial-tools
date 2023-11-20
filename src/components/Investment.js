import React, {useState} from 'react'

export default function Investment(props) {
    const [state, setState] = useState({
        name: '',
        value: '',
        percent: ''
    });

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    function handleBlur(e) {
        props.editInvestment(props.id, e.target.name, e.target.value);
    }

    const input_classes = Object.keys(props.inputs);
    const inputs = input_classes.map((input_class) => (
        <input
            name={input_class}
            type='text' 
            key={`${props.id}-${input_class}`}
            placeholder={props.inputs[input_class]}
            onChange={handleChange}
            onBlur={handleBlur}
            value={state[input_class]}
        />
    ));

    const editingTemplate = (
        <li>
            {inputs}
            <button
                className='button deleteinvestment'
                onClick={() => props.deleteInvestment(props.id)}>
                Delete this investment
            </button>
        </li>
    );

    const resultsTemplate = (
        <li>
            {props.name}: {`${props.purchase < 0 ? 'SELL' : 'BUY'}`} {props.purchase}
        </li>
    );

    return (
        props.isEditing ? editingTemplate : resultsTemplate
    );
}