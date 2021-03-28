import './App.css';
import Login from './Login/Login';

import React, { useState, useEffect } from 'react';
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { history } from './history';
import { actions } from './actions/auth.action';
import Home from './Home/Home';
import SecureRoute from './SecureRoute';

function App() {

  const { user } = useSelector((state) => state.authentication);

  console.log('user ' , user);
//   const dispatch = useDispatch();

//   useEffect(() => { 
//     dispatch(actions.logout()); 
// }, []);


return (
  <Router history={history}>
    <div>

      <div className="container">
        <Switch>
          <SecureRoute exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </Router>
);
};


export default App;
