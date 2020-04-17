import React from "react";
import Header from "../../components/header/Header.component";
// import CardItem from "../../components/cardItem/cardItem.component";
import ListContent from "../../components/listContent/ListContent.component";
import Addlist from "../../components/addList/addList.component";
import axios from "axios";
import Notification, { notify } from "../../components/notification/notification.component";
import * as color from "../../utils/notification";
import * as apiRoute from "../../utils/apiRoute";
import './home.style.css';
import Button from "../../components/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import * as auth from "../../utils/auth.utils";
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showStatus: false,
            maxIndex: null,
            active: false,
            ticketState: false,
            states: null,
            progress: false
        }
    }

    projectState = () => {
        return this.state.states ? this.state.states.map((state, index) => {
            let maxIndex = this.state.states.tasks ? this.state.states.tasks.length : null;
            return <ListContent disabled={this.state.progress} key={state.id} index={index} onDrop={this.onDrop} maxIndex={maxIndex} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onOver={this.onOver} onDragOver={this.onDragOver} setInProgress={this.setInProgress} title={state.label} data={state} fetchState={this.attachTaskToState}
                addTaskToState={this.addTaskToState} deleteTask={this.deleteTask} updateTask={this.updateTask} deleteState={this.deleteState} />
        }) : null;
    }

    render() {

        return (
            <div>
                <Notification />
                <Header>
                    <Button font="14px" w={'auto'} raduis="2px" back='transparent' hover="rgba(0,0,0,.16)" onClick={() => this.backHome()} >
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Button>
                    <Button font="14px" w={'auto'} raduis="2px" back='transparent' hover="rgba(0,0,0,.16)" onClick={() => this.logOut()} >
                        <FontAwesomeIcon icon={faDoorOpen} /> Log Out
                    </Button>
                </Header>
                <div className="board">
                    {this.projectState()}
                    <Addlist disabled={this.state.progress} onClick={this.createState} onChange={this.newListInput} active={this.state.active} addList={this.toggleActive}></Addlist>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.match.params.id}`)
        this.fecthState();
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
        sessionStorage.setItem('id', JSON.stringify(task));
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.setData("text/html", event.target);
        event.dataTransfer.setDragImage(event.target, 40, 40);
        // console.dir(event.target)
        return false;
    }

    onDragOver = (event) => {
        event.preventDefault();
        // console.log('drag Over Bonjour', index);
    }

    onOver = (event, index, task) => {
        event.preventDefault();
        // console.log('Au dessus de l\'index', index);
        // console.log('Dans le state', task);
        // console.log('Au dessus de ', index);
        let beginTask = sessionStorage.getItem('id');
        console.log(`Over Me ${beginTask} Bonjour`);
        if (beginTask.id === task.id)
            sessionStorage.setItem('o', JSON.stringify(task))
        else {
            sessionStorage.setItem('o', JSON.stringify(task))
            sessionStorage.setItem('index', index)
        }
    }

    onDrop = (event, finalState) => {
        event.preventDefault();
        console.log("Dans le Drop");
        // console.log('tache final', finalState)
        var states = this.state.states;
        // console.log("globale state", states);
        var stateEnd = null;
        var dummyTasks = null;
        var newPosition = parseInt(sessionStorage.getItem('index'))
        var id = JSON.parse(event.dataTransfer.getData('id'));
        var pos = event.dataTransfer.getData('position');
        var stateInitId = event.dataTransfer.getData('startState');

        // console.log('Over', JSON.parse(sessionStorage.getItem('o')).id);
        if (JSON.parse(sessionStorage.getItem('o')) === null) {
            console.log('Over syr rien')
            let finalStateIndex;
            stateEnd = states.slice().find((value, index) => { finalStateIndex = index; return (value.id === finalState) });
            let initStateIndex;
            let stateInit = states.slice().find((value, index) => { initStateIndex = index; return (value.id === stateInitId) });
            id.stateID = finalState;
            id.index = 1;
            stateEnd.tasks.push(id)
            dummyTasks = stateEnd.tasks.slice();
            stateInit.tasks.splice(pos, 1)
            states[finalStateIndex] = stateEnd;
            states[initStateIndex] = stateInit;
        } else if (JSON.parse(sessionStorage.getItem('o')).id === id.id && finalState === id.stateID) {
            console.log("pas de changement")
        } else if (JSON.parse(sessionStorage.getItem('o')).id === id.id && finalState !== id.stateID) {
            console.log("Same over but State")
            let finalStateIndex;
            stateEnd = states.slice().find((value, index) => { finalStateIndex = index; return (value.id === finalState) });
            let initStateIndex;
            let stateInit = states.slice().find((value, index) => { initStateIndex = index; return (value.id === stateInitId) });
            id.stateID = finalState;
            id.index = 1;
            stateEnd.tasks.push(id);
            dummyTasks = stateEnd.tasks.slice();
            stateInit.tasks.splice(pos, 1)
            states[finalStateIndex] = stateEnd;
            states[initStateIndex] = stateInit;
        } else if (JSON.parse(sessionStorage.getItem('o')).id !== id.id && finalState === id.stateID) {
            console.log("Dans la meme card");

            let finalStateIndex;
            stateEnd = states.slice().find((value, index) => { finalStateIndex = index; return (value.id === finalState) });
            let initStateIndex;
            // let stateInit = states.slice().find((value, index) => { initStateIndex = index; return (value.id === stateInitId) });
            // id.stateID = finalState;
            //stateInit.tasks.splice(pos, 1)
            let dummy = stateEnd.tasks.slice();
            console.table("Dummy avant", dummy);
            if (newPosition < pos) {
                id.index = (newPosition + 1) - 0.5;
                dummy.splice(newPosition, 0, id);
                pos++;
                dummy.splice(pos, 1);
            } else {
                id.index = (newPosition + 1) - 0.5;
                dummy.splice(pos, 1);
                dummy.splice((newPosition - 1), 0, id);
            }
            // stateEnd
            dummyTasks = dummy.slice();
            console.log("Dummy apres", dummy);
            stateEnd.tasks = dummy;
            states[finalStateIndex] = stateEnd;

        } else if (JSON.parse(sessionStorage.getItem('o')).id !== id.id && finalState !== id.stateID) {
            console.log('Dans deux card different Mais avec survole')
            let finalStateIndex;
            stateEnd = states.slice().find((value, index) => { finalStateIndex = index; return (value.id === finalState) });
            let initStateIndex;
            let stateInit = states.slice().find((value, index) => { initStateIndex = index; return (value.id === stateInitId) });
            id.stateID = finalState;
            id.index = 0.5;
            stateEnd.tasks.splice(newPosition, 0, id)
            dummyTasks = stateEnd.tasks.slice();
            let pos = event.dataTransfer.getData('position');
            stateInit.tasks.splice(pos, 1)
            states[finalStateIndex] = stateEnd;
            states[initStateIndex] = stateInit;
        }
        // console.log('Tache au debut du Mov', id);
        // console.log('Position de depart', pos);
        // console.log('tache initiale', stateInitId);

        this.setState({
            states: states
        })
        // console.log(finalStateIndex, initStateIndex)
        // console.log('Tache à la fin du Mov', id)
        // console.log('End state', stateEnd)
        // console.log('Start state', stateInit)
        sessionStorage.removeItem('index');
        sessionStorage.removeItem('o');
        sessionStorage.removeItem('id');
        let a = {};
        let sendingData = dummyTasks.map((value, index) => a = { id: value.id, index } || a)

        console.log("Sending data");
        console.table(sendingData);
        let updateValue = {
            id: finalState,
            tasks: sendingData
        }

        // console.log('Dummy tasks', dummyTasks)
        // console.log('avant affectation', id)
        console.log(updateValue);
        // id['data'] = dummyTasks;
        // console.log('avant le depart pour le serveur', id)
        // je dois passer updatevalue à le requete de mise à jour
        axios.put(apiRoute.tasks, updateValue)
            .then(res => {
                console.log(res.status);
                notify('Good', color.succes)
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    onDragEnd = (e) => {
        alert('Bonjour le monde');
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
        // localStorage.setItem('FBIdToken', FBIdToken);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
        this.setState({
            progress: true
        })
        console.log(this.state.title)
        let projectID = this.props.match.params.id, label = this.state.title, index = (this.state.maxIndex + 1),
            body = {
                label,
                index,
                projectID,
                createdAt: new Date().toISOString()
            }
        axios
            .post(`${apiRoute.state}`, body)
            .then(res => {
                console.log('new state', res.data);
                body.size = 0;
                body.id = res.data;
                this.setState({
                    active: false,
                    progress: false
                })
                this.setState({
                    states: [...this.state.states, body]
                }, () => {
                    notify('success add state', color.succes)
                })

                // this.fecthState();
            })
            .catch(err => {
                console.dir(err);
                this.setState({ progress: false })
                notify('error encouted', color.error)
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
                notify("Error load Data Project", color.error)
            })
    }

    attachTaskToState = (id, tasks, index) => {
        //console.log(this.state.states)
        let states = this.state.states;
        let state = this.state.states.find(value => value.id === id);
        state['tasks'] = tasks;
        state['size'] = tasks.length;
        states[index] = state;
        this.setState({
            states: states
        })
    }

    addTaskToState = (body) => {
        this.setState({
            progress: false
        })
        let states = this.state.states;
        let position = null;
        let state = this.state.states.find((value, index) => {
            position = index;
            return (value.id === body.stateID);
        })


        state.tasks.push(body)
        states[position] = state;

        this.setState({
            states
        });
        notify('succes add task', color.succes)
    }

    logOut = () => {
        auth.logOut(this.props.history)
    }

    backHome = () => {
        localStorage.removeItem('project')
        this.props.history.push('/projet');
    }

    setInProgress = () => {
        this.setState({
            progress: !this.state.progress
        })
    }

    deleteTask = (stateIndex, taskIndex) => {
        let states = this.state.states.slice()
        console.log(stateIndex)
        console.log(states[stateIndex].tasks)
        states[stateIndex].tasks.splice(taskIndex, 1);
        this.setState({
            states
        })
    }

    updateTask = (stateIndex, taskIndex, task) => {
        let states = this.state.states.slice()
        console.log(stateIndex)
        console.log(states[stateIndex].tasks)
        states[stateIndex].tasks[taskIndex] = task;
        this.setState({
            states
        })
    }

    deleteState = (id, index) => {
        let states = this.state.states.slice();
        axios
            .delete(`${apiRoute.state}/${id}`)
            .then((res) => {
                console.log(res);
                states.splice(index, 1)
                this.setState({
                    states
                })
            }).catch(err => {
                console.log(err)
            })
    }
}

export default Home;