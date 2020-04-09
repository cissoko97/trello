import React from "react";
import './listComponentMenu.style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from "@fortawesome/free-solid-svg-icons";


const ListContentMenu = (props) => (
    <div ref={props.inputRef} className="ListContentMenu">
        <div className="menu__item">
            <span className="menu__title">Listes des actions</span>
            {/* <FontAwesomeIcon onClick={(e) => { props.closeMenu(e) }} className="menu__times" icon={faTimes} /> */}
        </div>
        <div className="menu__separation">
            <hr />
        </div>
        <div className="menu__item">Bonsoir Ok je vais reg</div>
        <div className="menu__item">Bonsoir</div>
        <div className="menu__separation">
            <hr />
        </div>
        <div className="menu__item">Bonsoir</div>
        <div className="menu__item">Well done!!</div>
        <div className="menu__item">Well done!!</div>
        <div className="menu__separation">
            <hr />
        </div>
        <div className="menu__item">Well done!!</div>
    </div>
)

export default ListContentMenu;