import React from "react";
import './inputField.style.css';

const InputField = (props) => {
    return (
        <div className="divInput">
            <input className="inputField" onChange={(e) => props.onChange(e)} type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default InputField;