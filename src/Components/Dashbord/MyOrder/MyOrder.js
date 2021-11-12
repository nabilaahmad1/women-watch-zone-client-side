import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const [service, setService] = useState([]);
    const [watch, setwatch] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);

    useEffect(() => {
        fetch('https://stormy-anchorage-30026.herokuapp.com/manageallorders')
            .then(res => res.json())
            .then(data => setService(data));
    }, [deleteCount])

    useEffect(() => {
        if (service.length > 0) {
            const data = service.filter((client) => client.email === (user.email))
            setwatch(data);
        }
    }, [service, user.email])

    // delete an user order 
    const handleDeleteOrder = (id) => {
        console.log(id)
        const proceed = window.confirm("Are You Sure!! You Want to Cancel the Order? ");
        if (proceed) {
            fetch(`https://stormy-anchorage-30026.herokuapp.com/manageallorders/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': "application/json" },
            })
                .then(res => res.json())
                .then(data => setDeleteCount(data));
        }
    }

    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">My order</h1>
            </div>
            {/* showing details  */}
            <h2 className="text-dark py-5">Total No. of Order: {watch.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {watch.map(services => <div className="col-12 mb-4"
                    key={services._id}
                >
                    <div className="card background1 py-3">
                        <div className="card-body">
                            <h4 className="text-light">User Details</h4>
                            <h5 className="text-light">User Name: {services?.userName}</h5>
                            <h5 className="text-light">Email: {services?.email}</h5>
                            <h5 className="card-title text-light ">Adress: {services?.address}</h5>
                            <h5 className="card-title text-light ">Phone Number: {services?.phone}</h5>
                            <h4 className="text-light mt-5">watch Details</h4>
                            <h5 className="card-title text-light ">watch Name: {services?.serviceName}</h5>
                            <h5 className="card-title text-light ">watch No: {services?.key}</h5>
                            <button
                                onClick={() => handleDeleteOrder(services._id)}
                                className="btn background rounded-pill mt-3 px-5 me-3">Delete</button>
                        </div>
                    </div >
                </div >
                )}
            </div >
        </div >
    );
};

export default MyOrder;