import React from "react";
import styled from "styled-components";

const Txt = styled.textarea`
        resize: vertical;
        min-width: 100%;
        min-height: 54px;
        max-height: 162px;
        overflow: hidden;
        margin: 3px 0;
        text-align: start;
        overflow-wrap: break-word;
        border:none;
        &:focus{
            outline:none;
        }
    `

const TextArea = props => {

    return <Txt autoFocus value={props.value} name={props.name} placeholder={props.placeholder} onChange={(e) => { props.onChange(e) }}></Txt>
}

export default TextArea;