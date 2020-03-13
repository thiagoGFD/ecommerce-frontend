import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
const {user} = useSelector(state => state.authentication);
return (
    <Route
    {...rest}
    render={({ location }) =>
        !!user && !!user.token ? (
        children
        ) : (
        <Redirect to={{ pathname: "/login", state: { from: location }}} />
        )
    }
    />
);
}

export default PrivateRoute;