import React from 'react';
import styled from "styled-components";
import ee from "event-emitter";
const Container = styled.div`
    background-color: ${props => props.back} ;
    color:white;
    max-width:210px;
    padding:5px;
    position:fixed;
    top:${ props => props.top}px;
    right: ${props => props.right}px;
    transition: all 0.5s ease;
    z-index:999;
`
const emitter = new ee();

export const notify = (msg, back) => {
    emitter.emit('notification', msg, back)
}


class Notification extends React.Component {
    state = {
        top: -60,
        right: 16,
        msg: null,
        back: "rgba(0, 0, 0, 0.19)"
    }
    constructor(props) {
        super(props)

        this.timeOut = null;

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
            this.setState({ top: -60 },
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
                    top: -60,
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