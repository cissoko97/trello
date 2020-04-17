import React, { Component } from "react";
// import MyModal from "../modal/modal.component";
import MyModal from "../modal/modal.component";
import "./cardItem.style.css";
import Ticket from "../ticket/ticket.component";
import TextArea from "../textArea/textArea.component";
import * as routes from '../../utils/apiRoute';
import Button from "../button/button.component";
import axios from "axios";

class CardItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            description: this.props.task.description,
        }
        this.cardRef = React.createRef();
    }
    // 
    render() {
        //let ticket = this.props.task.ticket ? Object.keys(this.props.task.ticket) : 'null'
        let ticket = null;
        var project = JSON.parse(localStorage.getItem('project'));
        var color = Object.keys(project.ticket);
        let valeur = [];
        let tickets = null
        color.forEach(element => {
            valeur.push(project.ticket[element])
        });
        ticket = valeur.map((valeur, index) => {
            return <Ticket label={valeur[1] === '' ? "Bonjour" : null} color={valeur[0]} key={index} status={this.props.status} onClick={this.props.onClick} />
        })


        tickets = valeur.map(
            (valeur, index) => <Button key={index} margin="auto" w="100px" raduis="5px" back={valeur} title="" />)
        return (
            <div className='card' >
                <div onClick={this.toggleModal} className="cardItem" draggable="true" onDragOver={(event) => { this.props.onOver(event, this.props.index, this.props.task) }} onDragStart={(event) => this.props.onDragStart(event, this.props.task, this.props.index, this.props.stateId)}>
                    <div className="cardItem__ticket">
                        {ticket}
                        {/* <Ticket label="Reins" status={this.props.status} onClick={this.props.onClick} /> */}
                    </div>
                    <div className="cardItem__text">
                        {this.props.task.label}
                    </div>
                    {/* <div className="cardItem__footer">
                        <div>Bien</div>
                        <div>Bon</div>
                        <div>Bon</div>
                        <div>Bon</div>
                    </div> */}
                    {/* handleclick={this.handleClick} */}
                    {/* <MyModal isOpen={this.state.showModal} data={this.props.task.taskName} hideModal={this.toggleModal} /> */}
                </div>
                <MyModal isOpen={this.state.showModal} data={this.props.task} hideModal={this.toggleModal} >
                    <p>
                        <span>Description</span>
                        <TextArea onChange={this.textAreaOnChange} name="description" placeholder="description" value={this.state.description}></TextArea>
                    </p>
                    {/* <p>
                        <span>Etiquettes</span>
                        {tickets}
                    </p> */}

                    <div className="modal__footer">
                        <Button margin="auto" w="100px" raduis="5px" back='#eb5a46' title="Delete" onClick={() => this.deleteTask(this.props.parentIndex, this.props.index)} />
                        <Button margin="auto" w="100px" raduis="5px" back='#61bd4f' title="Valider" onClick={() => this.updateTask(this.props.parentIndex, this.props.index)} />
                    </div>
                </MyModal>
                {/* <MyModal show={this.state.showModal} data={this.props.task.taskName} hideModal={this.toggleModal} >Bonjour</MyModal> */}
            </div>
        )
    }


    shouldComponentUpdate(nextProps, nextState) {
        // let maxIndex = this.props.data.tasks ? this.props.data.tasks.length : 0;
        // nextState.maxIndex = maxIndex;
        return nextProps == this.props;
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

    textAreaOnChange = (e) => {
        let description = e.target.value;

        this.setState({
            description
        }, () => { console.log('good update', this.state) })
    }

    updateTask = (parentIndex, index) => {
        let body = {
            description: this.state.description
        }
        let task = this.props.task;
        task.description = this.state.description;
        axios
            .put(`${routes.tasks}/${this.props.task.id}`, body)
            .then((res) => {
                console.log(res)
                this.props.updateTask(parentIndex, index, task);
                this.toggleModal();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteTask = (parentIndex, index) => {
        axios.
            delete(`${routes.tasks}/${this.props.task.id}`)
            .then((res) => {
                console.log(res)
                this.props.deleteTask(parentIndex, index);
                this.toggleModal();
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default CardItem;