// import Notification, { notify } from "../components/notification/notification.component";
import axios from 'axios';
import * as routes from './apiRoute'

export const setAuthorizationHeader = (data) => {
    const FBIdToken = `Bearer ${data.token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    localStorage.setItem('uid', data.uid);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const logOut = (history) => {
    localStorage.clear();
    sessionStorage.clear();

    delete axios.defaults.headers.common['Authorization'];
    history.push('/');
};

export const login = (body) => {
    axios
        .post(`${routes.login}`, body)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
        })
        .catch((err) => {
            console.error(err)
        });
};