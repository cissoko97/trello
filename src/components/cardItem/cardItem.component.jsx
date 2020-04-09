import React, { Component } from "react";
// import MyModal from "../modal/modal.component";
import MyModal from "../modal/modal.component";
import "./cardItem.style.css";
import Ticket from "../ticket/ticket.component";

class CardItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
            // ticketState: false
        }
        this.cardRef = React.createRef();
    }
    // 
    render() {
        let state = this.state.showModal;
        return (
            <div className='card'>
                <div onClick={this.toggleModal} className="cardItem" draggable onDragStart={(event) => this.props.onDragStart(event, this.props.task, this.props.index , this.props.stateId)}>
                    <div className="cardItem__ticket">
                        <Ticket label="Reins" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="mains" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="reindenew" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="mainsdelamort" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="Ok !!" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="Ok !!" status={this.props.status} onClick={this.props.onClick} />
                        <Ticket label="Ok !!" status={this.props.status} onClick={this.props.onClick} />
                    </div>
                    <div className="cardItem__text">
                        {this.props.task.label}
                    </div>
                    <div className="cardItem__footer">
                        <div>Bien</div>
                        <div>Bon</div>
                        <div>Bon</div>
                        <div>Bon</div>
                    </div>
                    {/* handleclick={this.handleClick} */}
                    {/* <MyModal isOpen={this.state.showModal} data={this.props.task.taskName} hideModal={this.toggleModal} /> */}
                </div>
                <MyModal isOpen={this.state.showModal} data={this.props.task.label} hideModal={this.toggleModal} />
                {/* <MyModal show={this.state.showModal} data={this.props.task.taskName} hideModal={this.toggleModal} >Bonjour</MyModal> */}
            </div>
        )
    }

    toggleModal = () => {
        // e.preventDefault()
        console.log('Open avant', this.state);
        if (this.state.showModal) {
            this.setState({ showModal: false }, () => { });
        } else {
            this.setState({ showModal: true })
        }
        document.addEventListener('click', this.hideModal)

    }

    // onClick = (e) => {
    //     this.setState({
    //         ticketState: !this.props.ticketState
    //     })
    // }
    // hideModal = (e) => {
    //     console.log('Close avant', this.state);
    //     this.setState({
    //         showModal: false
    //     }, () => {
    //         console.log('Close Apres', this.state);
    //     });
    //     //document.removeEventListener('click' , this.hideModal)
    // }

    // handleClick = e => {
    //     if (this.cardRef.contains(e.target)) {
    //         return
    //     }
    //     this.hideModal();
    // }
}

export default CardItem;