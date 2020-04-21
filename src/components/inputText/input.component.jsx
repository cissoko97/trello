import React from "react";
import styled from "styled-components";

const Inp = styled.input`
        width:100%;
        height:30px;
        padding:3px;
        border:none;
        border-radius:3px;
        margin: 3px 0;
        overflow-wrap: break-word;
        //&:focus{
            // outline:none;
        //}
    `

const Input = (props) => {

    return <Inp autoFocus autoComplete='off' type='text' placeholder={props.placeholder} name={props.name} onChange={(e) => props.change(e)}></Inp>
}

export default Input;