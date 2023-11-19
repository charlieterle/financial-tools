import React, {useState} from 'react'

export default function Input(props) {
    const [content, setContent] = useState('');

    function handleChange(e) {
        setContent(e.target.value);
    }

    return (
        <input type='text' placeholder={props.placeholder}></input>
    )
}