import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons'
import './ListContent.style.css';
import CardItem from "../cardItem/cardItem.component";
import ListContentMenu from "../listContentMenu/listContentMenu.component";

class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.contentListMenu = React.createRef();
    }

    render() {
        return (
            <div className="listContent">
                <div className="listContent__header">
                    <span className="title">{this.props.title}</span>
                    <div className="icon" onClick={(e) => this.openListMenu(e)}><FontAwesomeIcon icon={faEllipsisH} /></div>
                    {this.state.showMenu ? (
                        <ListContentMenu
                            ref={this.contentListMenu}
                        />
                    ) : null}
                </div>
                <div className="listContent__body"
                    onDragOver={(event) => this.props.onDragOver(event)}
                    onDrop={(event) => this.props.onDrop(event, this.props.title.replace(" ", ''))}
                >
                    {this.props.data}
                </div>
                <div className="listContent__footer">
                    <span className="title"><FontAwesomeIcon icon={faPlus} /> Ajouter une carte</span>
                    <div className="icon"><FontAwesomeIcon icon={faBars} /></div>
                </div>
            </div>
        )
    }

    openListMenu = (e) => {
        e.preventDefault();
        console.log('X', e.clientX);
        console.log('Y', e.clientY);
        console.log('ref', this.contentListMenu);
        // menu.style.left = e.clientX;
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeListMenu)
        });
    }

    closeListMenu = (e) => {
        console.log(this.dropdownMenu);
        console.log(e.target);
        if (!this.contentListMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeListMenu);
            });
        }
    }
}



export default ListContent