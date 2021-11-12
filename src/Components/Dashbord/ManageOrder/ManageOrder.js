import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [services, setServices] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);
    const [modifiedCount, setModifiedCount] = useState(false);

    // showing all users order 
    useEffect(() => {
        fetch('https://stormy-anchorage-30026.herokuapp.com/manageallorders')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [deleteCount, modifiedCount])

    // delete an user order 
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are You Sure!! You Want to Cancel the Order? ");
        if (proceed) {
            fetch(`https://stormy-anchorage-30026.herokuapp.com/manageallorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => setDeleteCount(data));
        }
    }

    // to update status 
    const onSubmit = (id) => {
        console.log(id);
        fetch(`https://stormy-anchorage-30026.herokuapp.com/manageallorders/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => setModifiedCount(result));
    };


    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Manage All Order</h1>
            </div>
            <h2 className="text-dark">Total No. of Order: {services.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <div className="col-12 mb-4"
                    key={service._id}
                >
                    <div className="card background1 py-3">
                        <div className="card-body">
                            <h4 className="text-light">User Details</h4>
                            <h5 className="text-light">User Name: {service?.userName}</h5>
                            <h5 className="text-light">Email: {service?.email}</h5>
                            <h4 className="text-light mt-5">Watch Details</h4>
                            <h5 className="card-title text-light">Watch Model Name: {service?.serviceName}</h5>
                            <h5 className="card-title text-light ">Watch Model No: {service?.key}</h5>
                            <h5 className="card-title text-light ">Order Status: {service?.status}</h5>
                            <button onClick={() => { handleDeleteOrder(service._id) }} className="btn background rounded-pill mt-3 px-5 me-3">Delete</button>
                            <button onClick={() => { onSubmit(service._id) }} className="btn background rounded-pill mt-3 px-5 me-3">Update</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default ManageOrder;