import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);

    // showing all users order 
    useEffect(() => {
        fetch('https://stormy-anchorage-30026.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [deleteCount])

    // delete an user order 
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are You Sure!! You Want to Cancel the Order? ");
        if (proceed) {
            fetch(`https://stormy-anchorage-30026.herokuapp.com/watches/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => setDeleteCount(data));
        }
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Manage All Order</h1>
            </div>
            <h2 className="text-dark">Total No. of Order: {services.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <div className="col-12 mb-4"
                    key={service._id}
                    service={service}
                >
                    <div className="card py-3 shadow bg-white rounded">
                        <div className="card-body">
                            <h4 className="text-dark">Watch Details</h4>
                            <h5 className="card-title text-dark lh-base fw-bolder ">{service.serviceName}</h5>
                            <p className="card-text text-dark lh-sm mt-3 ">{service.description}</p>
                            <p className="card-text text-dark lh-sm mt-3">Watch Price: ${service.price}</p>
                            <button onClick={() => { handleDeleteOrder(service._id) }} className="btn button rounded-pill mt-3 px-5 me-3">Delete</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default ManageService;