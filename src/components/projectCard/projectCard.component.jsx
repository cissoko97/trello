import React from "react";
import styled from "styled-components";

const PC = styled.div`
    // width:25%;
    background-color:rgba(0,0,0,.08);
    cursor:pointer;
    min-height:100px;
    max-height:100px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 4px 8px;
    border-radius:3px;
`

const ProjectCard = (props) => {
    return (<PC onClick={() => props.onClick(props.data)}>
        {props.children}
    </PC>)
}

export default ProjectCard;