import React from "react";
import styled from "styled-components";
// import './button.style.css'


const Btn = styled.button`
    color: ${props => props.color};
    padding: 5px;
    min-width: ${props => props.w};
    border-radius : ${props => props.raduis};
    font-size: ${props => props.font};
    max-height: 40px;
    background-color: ${props => props.back}; 
    margin: ${props => props.margin};
    border: 0;
    cursor: pointer;
    transition:all 0.4s;
    ${props => props.hover ? `&:hover {background-color: ${props.hover}; }` : null}
    &:focus{
        outline:none;
    }
`


const Button = (props) => {
    return (
        <Btn
            color={props.color ? props.color : "#000"}
            margin={props.margin}
            hover={props.hover ? props.hover : null}
            back={props.back}
            w={props.w}
            raduis={props.raduis}
            onClick={(e) => props.onClick(e)}
            font={props.font ? props.font : "18px"}>
            {props.children ?
                props.children : null}
            {props.title}
        </Btn>
    )
}

export default Button; 