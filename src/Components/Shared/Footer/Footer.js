import React from 'react';
import logo from '../../../images/watchicon.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid p-5 background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={logo} alt="website-logo" width="50" height="40" className="d-inline-block me-3" />
                        <span className="title lh-base fs-2">Women's Watch Zone</span>
                        <p className="text-light lh-base mt-3"> Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
                        {/* social icons  */}
                        <div className="icon">
                            <a href="http://facebok.com" target="_blank" rel='noreferrer'><i className="fab fa-facebook-square fs-2 mx-3 title"></i></a>
                            <a href="http://twitter.com" target="_blank" rel='noreferrer'><i className="fab fa-twitter-square fs-2 mx-3 title"></i></a>
                            <a href="http://instagram.com" target="_blank" rel='noreferrer'><i className="fab fa-instagram-square fs-2 mx-3 title"></i></a>
                        </div>
                    </div>
                    {/* open time table  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <p className="title fs-3 lh-base text-start ms-5">Opening Hours</p>
                        <table className="table text-light">
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>11:00am - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>11:00am - 10:00pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;