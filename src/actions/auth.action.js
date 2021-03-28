import { service } from "../services/auth.service";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT  } from "./auth.type";

import { history } from '../history';

export const actions = {
    login,
    logout
}

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        service.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { 
        return { type: LOGIN_REQUEST, user  } 
    }
    function success(user) { 
        return { type: LOGIN_SUCCESS, user } 
    }
    function failure(error) { 
        return { type: LOGIN_FAILURE, error } 
    }
}

function logout() {
    return dispatch => {
        service.logout();
        dispatch(logout());
    }

    function logout() { 
        return { type: LOGOUT } 
    }
}
