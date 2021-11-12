import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const { createUserWithEmail, setUserName, setUser, setIsLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
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

    // to set name
    const handleName = e => {
        setName(e.target.value);
    }

    const handleRegistration = (e) => {
        // avoid default browser reloads 
        e.preventDefault();

        // checking password validity 
        if (password.length < 6) {
            setError("Your password length should be 6 or more than 6 charecter long ");
            return;
        }
        createUserWithEmail(email, password)
            .then((result) => {
                setIsLoading(true);
                setUser(result.user);
                setError("");
                setUserName(name);
                saveUser(email, name);
                history.push(url)
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => {
                setIsLoading(false);;
            });

    }

    // save user in the databese 
    const saveUser = (email, name) => {
        const user = { email, name };

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
    }

    return (
        <div className="container-fluid my-5 py-5">
            <div className="heading mb-5">
                <h1 className="background lh-base fw-bolder">Register</h1>
            </div>
            {/* registration from  */}
            <div className="container">
                <form className="row g-3" onSubmit={handleRegistration}>
                    <div className="col-12">
                        <label htmlFor="inputName4" className="form-label">Name</label>
                        <input onBlur={handleName} type="text" className="form-control" id="inputName4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="login" className="form-label">Already an User <Link to="/login">Please Log in</Link></label>
                    </div>
                    <div className="col-12">
                        <label htmlFor="login" className="form-label text-danger">{error}</label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;