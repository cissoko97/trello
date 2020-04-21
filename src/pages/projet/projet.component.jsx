import React from "react";
import Header from "../../components/header/Header.component";
import axios from "axios";
import './projet.style.css'
import Addlist from "../../components/addList/addList.component";
import ProjectCard from "../../components/projectCard/projectCard.component";
import moment from "moment";
// import { } from 'react-router-dom';
import * as auth from "../../utils/auth.utils"
import Notification, { notify } from "../../components/notification/notification.component";
import * as color from "../../utils/notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/button.component";
import Input from "../../components/inputText/input.component";
const routes = require('../../utils/apiRoute');


class Projet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            active: false,
            progress: false
        }
    }

    render() {
        let listProjet = this.state.projects ? this.state.projects.map((project) => <ProjectCard key={project.id} data={project} onClick={this.selectProject}>
            <span>{project.name}</span>
            <span>Created At:{moment(new Date(project.createdAt)).fromNow()}</span>
        </ProjectCard>) : null;

        return (
            <div>
                <Header>
                    <Button font="14px" w={'auto'} raduis="2px" back='transparent' hover="rgba(0,0,0,.16)" onClick={() => { console.log('rien') }} >
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Button>
                    <Button font="14px" w={'auto'} raduis="2px" back='transparent' hover="rgba(0,0,0,.16)" onClick={() => this.logOut()} >
                        <FontAwesomeIcon icon={faDoorOpen} /> Log Out
                    </Button>
                </Header>
                <Notification></Notification>
                <div className="search__bar"><Input placeholder={'Search'} change={this.Onfilter} name="search_title" /></div>
                <div className="projet__grid">
                    {listProjet}
                    <Addlist disabled={this.state.progress} width="100%" title="projet" onClick={this.addProjet} onChange={this.newListInput} active={this.state.active} addList={this.toggleActive}></Addlist>
                </div>
            </div >
        )
    }

    componentDidMount() {
        console.log(this.props)
        this.fetchData();
    }

    newListInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleActive = (e) => {
        e.preventDefault();
        this.setState({ active: !this.state.active })
    }

    addProjet = (e) => {
        e.preventDefault();
        this.setState({
            progress: true
        })
        let membres = [];
        let ticket = {
            1: ['#61bd4f', ''],
            2: ['#f2d600', ''],
            3: ['#ff9f1a', ''],
            4: ['#eb5a46', ''],
            5: ['#c377e0', ''],
            6: ['#0079bf', '']
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
        let body = {
            name: this.state.title,
            ticket,
            membres,
            createdAt: new Date().toISOString()
        }
        axios
            .post(`${routes.projects}`, body)
            .then(res => {
                console.log(res.data)
                body.id = res.data;
                body.chefProjet = localStorage.getItem('uid');
                let storageProject = JSON.parse(localStorage.getItem("listProject"));
                localStorage.removeItem('listProject')
                storageProject.push(body);
                localStorage.setItem("listProject", JSON.stringify(storageProject))
                this.setState({
                    active: false,
                    progress: false,
                    projects: storageProject
                })
                notify("Success Add project", color.succes)
            })
            .catch(err => {
                console.error(err)
                this.setState({
                    progress: false
                })
                notify(JSON.stringify(err.response.data), color.error)
            })
    }

    selectProject = (project) => {
        console.log("Boom", project)
        localStorage.setItem('project', JSON.stringify(project))
        this.props.history.push(`/projet/${project.id}`);
    }

    fetchData = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
        let listProjet = JSON.parse(localStorage.getItem("listProject"));
        console.log('etat initial de la console', listProjet);
        if (listProjet) {
            console.log("Deja initialisé")
            console.table(listProjet);
            this.setState({
                projects: listProjet
            })
        } else {
            console.log("Pas encore initialisé");
            axios
                .get(`${routes.projects}/user`)
                .then(res => {
                    console.table(res.data)
                    this.setState({
                        projects: res.data
                    })
                    localStorage.setItem('listProject', JSON.stringify(res.data))
                    notify("Load Project success", color.succes)
                })
                .catch(err => {
                    console.error(err.response)
                    notify(JSON.stringify(err.response), color.error)

                })
        }

    }

    logOut = () => {
        auth.logOut(this.props.history)
    }

    Onfilter = (e) => {
        let title = e.target.value.toLowerCase();
        let projects = JSON.parse(localStorage.getItem('listProject')).filter((value) => value.name.toLowerCase().includes(title))
        this.setState({
            projects
        })
    }
}

export default Projet;