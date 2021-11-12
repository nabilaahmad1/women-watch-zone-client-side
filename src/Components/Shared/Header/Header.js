import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from '../../../images/watchicon.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light background">
            <div className="container-fluid">
                {/* company logo and name  */}
                <div className="navbar-brand fs-1 title">
                    <img src={logo} alt="website-logo" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    Women's Watch Zone
                </div>
                {/* tab and phone menu tab  */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar links to different pages  */}
                <div className="collapse navbar-collapse navbar-align" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active text-white" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link text-white" to="/about">About</NavLink>
                        <NavLink className="nav-link text-white" to="/feature">Features</NavLink>
                        <NavLink className="nav-link text-white" to="/watches">Explore Watches</NavLink>
                        <NavLink className="nav-link text-white" to="/review">Review</NavLink>
                        <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                        {/* checking user name to show header  */}
                        {user?.email &&
                            <NavLink className="nav-link text-white d-block" to="/dashboard">Dashboard</NavLink>
                        }
                        {user?.email ?
                            <button onClick={logOut} type="button" className="btn background rounded-pill px-3 me-3 d-block">Log Out</button> :
                            <NavLink className="nav-link text-white" to="/login">login</NavLink>
                        }
                        <span className="navbar-text text-white">
                            {user?.displayName}
                        </span>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;