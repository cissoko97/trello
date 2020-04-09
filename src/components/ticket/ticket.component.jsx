import React from "react";
import styled from "styled-components";

const Tck = styled.span`
    min-width: 40px;
    max-width: auto;
    cursor: pointer;
    border-radius: 4px;
    min-height: 8px;
    max-height: 16px;
    font-size:12px;
    padding-left:2px;
    text-align:left;
    margin: 0 4px 0 0;
    background-color: tomato;
`

const Ticket = (props) => {
    return (
        <Tck className="btn" onClick={(e) => {props.onClick(e)}}>
            {props.status ?
                props.label : null
            }
        </Tck>
    )
}

export default Ticket;