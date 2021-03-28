import { createStore, applyMiddleware } from 'redux';
import rootReducer from './auth.reducer';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);