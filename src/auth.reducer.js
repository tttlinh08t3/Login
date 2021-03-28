
import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT  } from './actions/auth.type';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = !!user ? { isLoggedIn: true, user: user } : {isLoggedIn: true, user: null};


export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                user: action.user
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
              };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    authentication
});

export default rootReducer;