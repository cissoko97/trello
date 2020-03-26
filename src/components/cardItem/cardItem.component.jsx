import React, { Component } from "react";
import "./cardItem.style.css";
class CardItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cardItem" draggable onDragStart={(event) => this.props.onDragStart(event, this.props.task.id)}>
                <div className="cardItem__ticket">
                    <div>Bien</div>
                    <div>Bon</div>
                    <div>Bon</div>
                    <div>Bon</div>
                </div>
                <div className="cardItem__text">
                    {this.props.task.taskName}
                </div>
                <div className="cardItem__footer">
                    <div>Bien</div>
                    <div>Bon</div>
                    <div>Bon</div>
                    <div>Bon</div>
                </div>
            </div>
        )
    }
}

export default CardItem;