import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import AddReview from '../AddReview/AddReview';
import AddWatch from '../AddWatch/AddWatch';
import DashbordHome from '../DashbordHome/DashbordHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageService from '../ManageService/ManageService';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';

const DashBord = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://stormy-anchorage-30026.herokuapp.com/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">Home</li>
                            </Link>
                            {
                                !isAdmin && <div className="user-dashbord">
                                    <Link to={`${url}/pay`}>
                                        <li className="dashboard-menu mt-5">Pay</li>
                                    </Link>

                                    <Link to={`${url}/myorder`}>
                                        <li className="dashboard-menu mt-5">My Order</li>
                                    </Link>

                                    <Link to={`${url}/addreview`}>
                                        <li className="dashboard-menu mt-5">Add Review</li>
                                    </Link>
                                </div>
                            }

                            {
                                isAdmin && <div className="admin-dashboard">
                                    <Link to={`${url}/addwatch`}>
                                        <li className="dashboard-menu">Add Watch</li>
                                    </Link>

                                    <Link to={`${url}/manageorder`}>
                                        <li className="dashboard-menu">Manage All Orders</li>
                                    </Link>

                                    <Link to={`${url}/manageservice`}>
                                        <li className="dashboard-menu">Manage All Services</li>
                                    </Link>

                                    <Link to={`${url}/makeadmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                </div>
                            }
                            <Link to="/home">
                                <li className="dashboard-menu mt-5" onClick={logOut}>Log Out</li>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <DashbordHome></DashbordHome>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/addreview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route path={`${path}/addwatch`}>
                                <AddWatch></AddWatch>
                            </Route>
                            <Route path={`${path}/manageorder`}>
                                <ManageOrder></ManageOrder>
                            </Route>
                            <Route path={`${path}/manageservice`}>
                                <ManageService></ManageService>
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBord;