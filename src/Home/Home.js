import React from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions/auth.action';

function Home() {
    const { user } = useSelector((state) => state.authentication);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(actions.logout());
    }

  return (
    <div className="container">
     
        <h1>Welcome, {user.name}</h1>
        <button onClick={logout} className="btn btn-primary">Logout</button>
    </div>
  );
};

export default Home; 