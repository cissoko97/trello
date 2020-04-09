import React from "react";
import InputField from "../../components/inputField/inputField.component";
import Button from "../../components/button/button.component";
import './LoginAndRegister.style.css';
import * as routes from '../../utils/apiRoute';
import { setAuthorizationHeader } from '../../utils/auth.utils'
import axios from "axios";
import Notification, { notify } from "../../components/notification/notification.component";

class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: false
        }
    }

    render() {
        return (
            <div className="authenticate">
                <Notification></Notification>
                <div className="login">
                    <h3 className="login__title">Login</h3>
                    <div className="auth__body">
                        <InputField onChange={this.onChange} type="text" name="loginEmail" placeholder="Enter Your Email" />
                        <InputField onChange={this.onChange} type="password" name="loginPassword" placeholder="Enter Your Password" />
                    </div>
                    <Button margin="auto" w="50%" raduis="0" back='#5aac44' title="Login" onClick={this.logIn} />
                </div>
                <div className="signup">
                    <h3 className="login__title">Register Or SignUp</h3>
                    <div className="auth__body">
                        <InputField onChange={this.onChange} type="text" name="signupName" placeholder="Enter Your name" />
                        <InputField onChange={this.onChange} type="text" name="signupEmail" placeholder="Enter Your Email" />
                        <InputField onChange={this.onChange} type="password" name="signupPassword" placeholder="Enter Your Password" />
                        <InputField onChange={this.onChange} type="password" name="signupConfPassword" placeholder="Enter Your Password" />
                        <InputField onChange={this.onChange} type="text" name="signupPhone" placeholder="Enter Your Phone number" />
                    </div>
                    <Button margin="auto" w="50%" raduis="0" back='#5aac44' title="Sign In" onClick={this.signUp} />
                </div>
            </div>
        );
    }

    signUp = () => {
        console.log("Bonjour", `${routes.signup}`);
        let body = {
            name: this.state.signupName,
            email: this.state.signupEmail,
            phone: this.state.signupPhone,
            password: this.state.signupPassword,
            confirmedPassword: this.state.signupConfPassword
        }
        axios.post(`${routes.signup}`, body).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err.response.data);
            notify(JSON.stringify(err.response.data), "#c10a33")
        });
    }

    componentDidMount() {
        console.log(this.props)
    }

    logIn = () => {
        let body = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }
        axios
            .post(`${routes.login}`, body)
            .then((res) => {
                setAuthorizationHeader(res.data.token);
                this.props.history.push('/projet');
            })
            .catch((err) => {
                console.log(err.response.data)
                notify(JSON.stringify(err.response.data), "#c10a33")
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            // console.log('state', this.state)
        })
    }
}

export default LoginAndRegister;