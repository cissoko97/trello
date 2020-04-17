import React from 'react';
import styled from "styled-components";
import ee from "event-emitter";
const Container = styled.div`
    background-color: ${props => props.back} ;
    color:white;
    text-align:center;
    max-width: 250px;
    min-width: 210px;
    padding:5px;
    position:fixed;
    border-radius:3px;
    top:${ props => props.top}px;
    right: ${props => props.right}px;
    transition: all 0.5s ease;
    box-shadow: 3px 3px 5px 0 rgba(9,30,66,.25);
    z-index:999;
`
const emitter = new ee();

export const notify = (msg, back) => {
    emitter.emit('notification', msg, back)
}


class Notification extends React.Component {
    state = {
        top: -200,
        right: 16,
        msg: null,
        back: "rgba(0, 0, 0, 0.19)"
    }

    timeOut = null;
    
    constructor(props) {
        super(props)
        emitter.on('notification', (msg, back) => {
            this.onShow(msg, back)
        })
    }


    onShow = (msg, back) => {

        this.setState({
            msg, back
        })
        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.setState({ top: -200 },
                () => {
                    this.timeOut = setTimeout(() => {
                        this.showNotification();
                    }, 500)
                })
        } else {
            this.showNotification();
        }
    }

    showNotification = () => {
        this.setState({
            top: 60
        }, () => {
            this.timeOut = setTimeout(() => {
                this.setState({
                    top: -200,
                    msg: 'notification'
                })
            }, 8000)
        })
    }

    render() {
        return (
            <Container back={this.state.back} top={this.state.top} right={this.state.right} >
                {this.state.msg}
            </Container>
        )
    }
}

export default Notification;