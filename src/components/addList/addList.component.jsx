import React from "react";
import styled from "styled-components";
import Button from "../button/button.component";
import Input from "../inputText/input.component";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
        background-color:#ebecf0;
        width: ${props => props.width};
        margin-right: 0px;
        padding:4px;
        border-radius:3px;
    `

const Addlist = (props) => {
    let placeholder = props.title === "projet" ? 'Saisissez le titre du projet...' : 'Saisissez le titre de la liste...'
    return (
        <div>
            {props.active ?
                <Card
                    width={props.width ? props.width : '272px'}
                >
                    <Input placeholder={placeholder} change={props.onChange} name="title" >
                    </Input>
                    <Button disabled={props.disabled} color="#FFF" font="14px" w="50%" raduis="3px" back='#5aac44' onClick={(e) => props.onClick(e)} >
                        {props.title === "projet" ? "Ajoutez un projet" : "Ajoutez une Liste"}
                    </Button>
                    <Button font="14px" w="auto" raduis="0" back='transparent' onClick={(e) => props.addList(e)} ><FontAwesomeIcon icon={faTimes} /></Button>
                </Card>
                :
                <Button font="14px" w={props.width ? props.width : '272px'} raduis="3px" back='rgba(0,0,0,.08)' hover="rgba(0,0,0,.16)" onClick={(e) => props.addList(e)} >
                    <FontAwesomeIcon icon={faPlus} /> {props.title === "projet" ? "Ajoutez un autre projet" : "Ajoutez une autre Liste"}
                </Button>}
        </div>
    )
}

export default Addlist;
