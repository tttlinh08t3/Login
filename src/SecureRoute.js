import React from 'react';
import { Route, Redirect} from 'react-router-dom';

function SecureRoute({ component: Component, auth, scopes, ...rest }) {
  return (
    <Route {...rest} render={props => {
        //Redirect to login if not logged in.
        if (!localStorage.getItem('user')) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        //Render componet if logged in
        return <Component {...props} />
    }} />
);
}

export default SecureRoute;