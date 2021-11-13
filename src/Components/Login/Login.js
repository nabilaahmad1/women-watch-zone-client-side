import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { signInWithEmail, setUser, setIsLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    // to set email
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    // to set password
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        // avoid default browser reloads 
        e.preventDefault();

        signInWithEmail(email, password)
            .then((result) => {
                setIsLoading(true);
                setUser(result.user);
                history.push(url)
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    return (
        <div className="container-fluid my-5 py-5" id="login">
            {/* heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Login</h1>
            </div>
            {/* login form  */}
            <form className="container" onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <label htmlFor="register">New to MediDent <Link to="/register">Create New Account</Link></label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn button rounded-pill mt-3 px-5 me-3">Sign in</button>
                </div>
            </form>
        </div>
    );
};

export default Login;