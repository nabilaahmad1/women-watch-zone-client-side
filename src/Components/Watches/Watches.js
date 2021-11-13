import React from 'react';
import { Link } from 'react-router-dom';

const Watches = (props) => {
    // data distructing
    const { _id, serviceName, img, description, price } = props.service;
    return (
        <div className="col">
            {/* watch details  */}
            <div className="card h-100 shadow bg-white rounded">
                <img src={img} className="card-img-top " alt="" height="400" />
                <div className="card-body">
                    <h5 className="card-title text-dark lh-base fw-bolder ">{serviceName}</h5>
                    <p className="card-text text-dark lh-sm mt-3 ">{description}</p>
                    <p className="card-text text-dark lh-sm mt-3">Watch Price: ${price}</p>
                    <Link to={`/watchdetail/${_id}`}>
                        <button className="btn button rounded-pill mt-3 px-5" type="button">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Watches;