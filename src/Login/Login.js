import { actions } from '../actions/auth.action';
import {useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const { isLoggedIn, user } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    const location = useLocation();

    const onChangeUsername = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const login = () => {
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(actions.login(username, password, from));
    }

    console.log('isLoggedIn ' , isLoggedIn);
    if(!!isLoggedIn && !!user) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="container col-md-6" name="form">
        <form name="form" onSubmit={login}> 
            <h1>Log in</h1>

            <div className="form-group">
                <label>Username</label>
                <input type="text"  onChange={onChangeUsername} className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"  onChange={onChangePassword} className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
