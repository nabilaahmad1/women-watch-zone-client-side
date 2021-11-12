import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // adding spinner 
    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}>
                    </Redirect>)}
        >
        </Route >
    );
};

export default PrivateRoute;