import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisH, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import ListContentMenu from "../listContentMenu/listContentMenu.component";
import Button from "../button/button.component";
import TextArea from "../textArea/textArea.component";
import * as route from "../../utils/apiRoute";
import './ListContent.style.css';
import axios from "axios";
import CardItem from '../cardItem/cardItem.component';
class ListContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxIndex: 0,
            showMenu: false,
            addStatus: false,
            ticketState: false
        }
        this.contentListMenu = React.createRef();
    }

    render() {
        // (event) => this.props.onDragStart(event, value.id)
        let listCard = this.props.data.tasks ? this.props.data.tasks.map((value, index) => {
            return <CardItem status={this.state.ticketState} onOver={this.props.onOver} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} onClick={this.setTicketState} parentIndex={this.props.index} index={index} stateId={this.props.data.id} task={value} key={value.id} onDragStart={this.props.onDragStart} />
        }) : null

        return (
            <div className="listContent">
                <div className="listContent__header">
                    <span className="title">{this.props.title}</span>
                    <div className="icon" onClick={(e) => this.openListMenu(e)}><FontAwesomeIcon icon={faEllipsisH} /></div>
                    {this.state.showMenu ? (
                        <ListContentMenu closeMenu={this.closeListMenu}
                            inputRef={el => this.contentListMenu = el}
                        />
                    ) : null}
                </div>
                <div className="listContent__body"
                    // onDragEnd={(e) => this.props.onDragEnd(e)}
                    onDragOver={(event) => this.props.onDragOver(event)}
                    onDrop={(event) => this.props.onDrop(event, this.props.data.id)}
                >
                    {listCard}
                    {this.state.addStatus ? (
                        <div className='cardItem'>
                            <TextArea placeholder='Saissisez un titre pour cette carte...' onChange={this.onTextAreaChange} name={this.props.title.replace(' ', '')}></TextArea>
                            <div>
                                <Button disabled={this.props.disabled} hover="#61bd4f" color="#fff" font="14px" margin="auto" w="50%" raduis="3px" back='#5aac44' title="Ajouter une carte" onClick={() => { this.props.setInProgress(); this.addCard(this.props.data.id) }}></Button>
                                <Button font="14px" margin="auto" w="auto" raduis="0" back='transparent' onClick={() => { this.setState({ addStatus: false }) }}><FontAwesomeIcon icon={faTimes} /></Button>
                            </div>
                        </div>
                    ) : (<div className="listContent__footer">
                        <span className="title" onClick={() => { this.setState({ addStatus: true }) }} ><FontAwesomeIcon icon={faPlus} /> Ajouter une carte</span>
                        <div className="icon" onClick={(e) => { this.props.deleteState(this.props.data.id, this.props.index) }}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>)}
                </div>

            </div >
        )
    }


    async componentDidMount() {
        var id = this.props.data.id;
        await axios
            .get(`${route.tasks}/${this.props.data.id}`)
            .then(res => {
                console.log(this.props.index, res.data)
                this.props.fetchState(id, res.data, this.props.index)
            }).catch(err => {
                console.error("error fetch task", err.message)
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        let maxIndex = this.props.data.tasks ? this.props.data.tasks.length : 0;
        nextState.maxIndex = maxIndex;
        return nextProps.data ===  this.props.data;
    }
    // componentDidUpdate() {
    //     if (this.props.data.tasks) {
    //         console.log('dans test index')
    //         this.setState({
    //             maxIndex: this.props.data.tasks.length
    //         })
    //     }
    // }

    openListMenu = (e) => {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeListMenu)
        });
    }

    closeListMenu = (e) => {
        // console.log('drop', this.dropdownMenu);
        // console.log('target', e);
        // console.log('ContentListMenu', this.contentListMenu);
        if (!this.contentListMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeListMenu);
            });
        }
    }

    onTextAreaChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    addCard = (id) => {

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');

        let index = this.state.maxIndex;
        let ticket = {};
        let checklist = {};
        let membres = [];
        let stateID = id;
        console.log('title', this.state[this.props.title.replace(' ', '')]);
        console.log('id de la catre est ', stateID)
        let body = {
            index,
            label: this.state[this.props.title.replace(' ', '')],
            stateID: id,
            checklist,
            membres,
            ticket
        };

        axios
            .post(route.tasks, body)
            .then(res => {
                console.log("Success task", res.data)
                body.id = res.data;
                this.props.addTaskToState(body);
                this.setState({ addStatus: false })
            }).catch(err => {
                console.dir(err)
            })
        // console.table([this.props.title.replace(' ', '')])
        // console.log(this.props.title.replace(' ', ''), this.state[this.props.title.replace(' ', '')]);
        // setTimeout(() => {
        //     this.setState({ addStatus: false })
        // }, 3000);
    }

    setTicketState = () => {
        this.setState({
            ticketState: !this.state.ticketState
        })
    }


}



export default ListContent;