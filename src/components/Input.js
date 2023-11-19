import React, {useState} from 'react'

export default function Input(props) {
    const [content, setContent] = useState('');

    function handleChange(e) {
        setContent(e.target.value);
    }

    function handleBlur(e) {
        props.editInvestment(props.investment_id, props.className, e.target.value);
    }

    return (
        <input
            type='text' 
            placeholder={props.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
        >
        </input>
    )
}