import React from "react";
import Header from "../../components/header/Header.component";
import axios from "axios";
import './projet.style.css'
import Addlist from "../../components/addList/addList.component";
import ProjectCard from "../../components/projectCard/projectCard.component";
import moment from "moment";
// import { } from 'react-router-dom';
import Notification, { notify } from "../../components/notification/notification.component";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRainbow, faRing } from "@fortawesome/free-solid-svg-icons";
const routes = require('../../utils/apiRoute');


class Projet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            active: false
        }
    }

    render() {
        let listProjet = this.state.projects ? this.state.projects.map((project) => <ProjectCard key={project.id} data={project} onClick={this.selectProject}>
            <span>{project.name}</span>
            <span>Created At:{moment(new Date(project.createdAt)).fromNow()}</span>
        </ProjectCard>) : null;

        return (
            <div>
                <Header />
                {/* <button className='fa-spin'><FontAwesomeIcon icon={faRing}></FontAwesomeIcon></button> */}
                <Notification></Notification>
                <div className="projet__grid">
                    {listProjet}
                    <Addlist width="100%" title="projet" onClick={this.addProjet} onChange={this.newListInput} active={this.state.active} addList={this.toggleActive}></Addlist>
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
        let body = {
            name: this.state.title
        }
        axios
            .post(`${routes.projects}`, body)
            .then(res => {
                console.log(res.data)
                this.fetchData();
                this.setState({ active: false })
            })
            .catch(err => {
                console.error(err)
            })
    }

    selectProject = (id) => {
        this.props.history.push(`/projet/${id}`);
    }

    fetchData = () => {
        axios
            .get(`${routes.projects}/user`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    projects: res.data
                })
            })
            .catch(err => {
                console.error(err.response)
            })
    }
}

export default Projet;