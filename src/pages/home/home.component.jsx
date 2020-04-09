import React from "react"
import Header from "../../components/header/Header.component";
// import CardItem from "../../components/cardItem/cardItem.component";
import ListContent from "../../components/listContent/ListContent.component";
import Addlist from "../../components/addList/addList.component";
import axios from "axios";
import Notification, { notify } from "../../components/notification/notification.component";
import * as apiRoute from "../../utils/apiRoute"
import './home.style.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showStatus: false,
            maxIndex: null,
            active: false,
            ticketState: false,
            states: null,
            tasks: [
                { id: "1", ticket: new Set(), checkList: [], taskName: "Read book", type: "we ll", backgroundColor: "red" },
                { id: "2", ticket: new Set(), checkList: [], taskName: "Pay bills", type: "cur rent", backgroundColor: "green" },
                { id: "4", ticket: new Set(), checkList: [], taskName: "Bien", type: "we ll", backgroundColor: "green" },
                { id: "5", ticket: new Set(), checkList: [], taskName: "Mal", type: "plani fier", backgroundColor: "green" },
                { id: "6", ticket: new Set(), checkList: [], taskName: "Regarde", type: "plani fier", backgroundColor: "yellow" },
                { id: "7", ticket: new Set(), checkList: [], taskName: "Bull ", type: "plani fier", backgroundColor: "yellow" },
                { id: "8", ticket: new Set(), checkList: [], taskName: "Pointer Exception", type: "cur rent", backgroundColor: "green" },
                { id: "9", ticket: new Set(), checkList: [], taskName: "Valeur de retour", type: "we ll", backgroundColor: "white" },
                { id: "10", ticket: new Set(), checkList: [], taskName: "Bonjour", type: "we ll", backgroundColor: "white" },
            ]
        }
    }

    render() {
        var projetState = this.state.states ? this.state.states.map((state, index) => {
            return <ListContent key={state.id} index={index} onDrop={this.onDrop} onDragStart={this.onDragStart} onDragOver={this.onDragOver} title={state.label} data={state} fetchState={this.attachTaskToState} />
        }) : null;
        // this.state.tasks.forEach((task) => {
        //     if (tasks[task.type.replace(" ", "")]) {
        //         tasks[task.type.replace(" ", "")].push(
        //             <CardItem status={this.state.ticketState} onClick={this.showLabel} key={task.id} task={task} onDragStart={(event) => this.onDragStart(event, task.id)} />
        //         );
        //     } else {
        //         tasks[task.type.replace(" ", "")] = [];
        //         tasks[task.type.replace(" ", "")].push(
        //             <CardItem status={this.state.ticketState} onClick={this.showLabel} key={task.id} task={task} onDragStart={(event) => this.onDragStart(event, task.id)} />
        //         );
        //     }
        // });

        return (
            <div>
                <Notification />
                <Header />
                <div className="board">
                    {projetState}
                    {/* <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='plani fier' data={tasks.planifier} />
                    <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='cur rent' data={tasks.current} />
                    <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='we ll' data={tasks.well} />
                    <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='Console' data={tasks["Console"]} />
                    <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='Debug' data={tasks["Debug"]} /> */}
                    <Addlist onClick={this.createState} onChange={this.newListInput} active={this.state.active} addList={this.toggleActive}></Addlist>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.match.params.id}`)
        this.fecthState();
    }

    showModal = () => {
        // this.setState({ showStatus: !this.state.showStatus }, () => {
        //   if (this.state.showStatus) {
        //     let modal = ReactDOMServer.renderToStaticMarkup(<Modal show={this.state.showStatus} onClose={this.showModal}>Bonjour le monde de la programmation</Modal>);
        //     // let doc = new DOMParser().parseFromString(modal, "text/html");
        //     let doc = document.querySelector('.board');
        //     doc.insertAdjacentHTML('beforeend', modal);
        //   }
        // })
        // document.body.appendChild(modal);
    }

    openCardMenu = (e) => {
        e.preventDefault();
        let menu = document.querySelector('.menu');
        console.log(menu);
        // menu.style.left = e.clientX;
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeCardMenu)
        });
    }

    closeCardMenu = (e) => {
        console.log(this.dropdownMenu);
        console.log(e.target);
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeCardMenu);
            });
        }
    }

    onDragStart = (event, task, initPosition, stateId) => {
        this.setState({ active: false })
        console.log('dragstart on div: ', task);
        event.dataTransfer.setData('id', JSON.stringify(task));
        event.dataTransfer.setData('position', initPosition);
        event.dataTransfer.setData('startState', stateId);


        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/html", event.target);
        event.dataTransfer.setDragImage(event.target, 40, 40);
        // console.dir(event.target)
    }

    onDragOver = (event) => {
        event.preventDefault();
        console.log('drag Over Bonjour');
    }

    onDrop = (event, finalState) => {
        console.log('cart valeur', finalState)
        let states = this.state.states;
        console.log("globale state", states);
        let id = JSON.parse(event.dataTransfer.getData('id'));
        let pos = event.dataTransfer.getData('position');
        let stateInitId = event.dataTransfer.getData('startState');

        console.log('Tache en mouvement', id)
        console.log('Position de depart', pos)
        console.log('state initiale', stateInitId)

        let stateEnd = states.slice().find(value => value.id === finalState)
        let stateInit = states.slice().find(value => value.id === stateInitId)
        id.stateID = finalState;
        console.log(stateEnd.tasks.push(id))
        stateInit.tasks.splice(pos, 1)
        console.log('End state', stateEnd)
        console.log('Start state', stateInit)
        // let tasks = this.state.tasks.filter((task) => {
        //     if (task.id === id) {
        //         task.type = cat;
        //     }
        //     return task;
        // });

        // this.setState({
        //     ...this.state,
        //     tasks
        // }, () => {
        //     console.log(this.state)
        // });
    }

    onDragEnd = (e) => {

    }

    newListInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleActive = (e) => {
        e.preventDefault()
        this.setState({ active: !this.state.active })
    }

    showLabel = (e) => {
        this.setState({
            ticketState: !this.state.ticketState
        })
    }

    createState = () => {
        console.log(this.state.title)
        let projectID = this.props.match.params.id, label = this.state.title, index = (this.state.maxIndex + 1), body = {
            label,
            index,
            projectID
        }
        axios
            .post(`${apiRoute.state}`, body)
            .then(res => {
                console.log('new state', res.data);
                this.setState({ active: false })
                this.fecthState();
            })
            .catch(err => {
                console.dir(err)
            })
    }

    fecthState = () => {
        axios
            .get(`${apiRoute.state}/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    states: res.data,
                    maxIndex: res.data.length
                }, () => {
                    console.log('fetch state project with success')
                })
            })
            .catch(err => {
                console.error(err)
                notify("Error load Data Project", "#c10a33")
            })
    }

    attachTaskToState = (id, tasks, index) => {
        //console.log(this.state.states)
        let states = this.state.states;
        let state = this.state.states.find(value => value.id === id)
        state['tasks'] = tasks;
        state['size'] = tasks.length;
        states[index] = state
        this.setState({
            states: states
        })
    }
}

export default Home;