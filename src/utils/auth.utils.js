// import Notification, { notify } from "../components/notification/notification.component";
import axios from 'axios';
import * as routes from './apiRoute'

export const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const logOut = () => (dispatch) => {
    localStorage.clear();
    delete axios.defaults.headers.common['Authorization'];
};

export const login = (body) => {
    // dispatch({ type: LOADING_UI });
    axios
        .post(`${routes.login}`, body)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            //dispatch(getEntrepriseData(history));
            //dispatch({ type: SET_AUTHENTICATED });
            //dispatch({ type: DELETE_ERRORS });
        })
        .catch((err) => {
            console.error(err)
            // notify('Error de connexion', "#c10a33")
        });
};