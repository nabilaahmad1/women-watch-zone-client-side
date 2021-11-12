import React from 'react';
import { Link } from 'react-router-dom';
import sideimg from '../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="container mt-5 py-5">
            <div className="row background1">
                <div className="col-lg-6 col-12">
                    <img src={sideimg} alt="" className="img-fluid w-100 h-100" />
                </div>
                {/* about us section  */}
                <div className="col-12 col-lg-6 my-auto py-5">
                    <h1 className="text-dark lh-base fw-bolder">About Us</h1>
                    <p className="text-dark lh-sm mt-3">Luxury watches are a source of fascination for people around the globe. But what qualifies as a luxury watch? Some may say it's any watch made of expensive materials such as gold or platinum. Others could argue that it has to be a mechanical watch with a handmade movement. All the famous brands in every price range on Women's Watch Zone. Find and purchase your dream watch now.</p>
                    <Link to="/contact">
                        <button type="button" className="btn background rounded-pill mt-3 px-5 me-3">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;