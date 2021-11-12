import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const WatchDetail = () => {
    const { user } = useAuth();
    const { watchid } = useParams();
    const [service, setService] = useState({});

    const { register, handleSubmit, reset } = useForm();

    // post order in a database 
    const onSubmit = data => {
        console.log(data);
        data.status = "pending";
        axios.post(`https://stormy-anchorage-30026.herokuapp.com/manageallorders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("One Order Added");
                    reset();
                }
            })
    }

    //  read services from databese 
    useEffect(() => {
        fetch(`https://stormy-anchorage-30026.herokuapp.com/watches/${watchid}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [watchid]);

    return (
        <div className="container-fluid py-5">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Watch Detail</h1>
            </div>
            {/* showing details  */}
            <div className="container">
                <h2 className="text-dark">User Name: {user?.displayName}</h2>
                <h2 className="text-dark">User Email: {user?.email}</h2>
                <div className="card mx-5 w-50 mx-auto">
                    <img src={service?.img} className="card-img-top" alt="..." height="400" />
                    <div className="card-body">
                        <h5 className="card-title text-dark ">{service?.serviceName}</h5>
                        <h5 className="card-title text-dark ">Watch No: {service?._id}</h5>
                        <p className="card-text text-secondary lh-sm mt-3 ">{service?.description}</p>
                        <p className="card-text text-dark lh-sm mt-3">Watch Price: ${service?.price}</p>
                    </div>
                </div>
            </div>
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Place Order</h1>
            </div>
            {/* place orde form  */}
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="text" defaultValue={user?.displayName} {...register("userName")} placeholder="User Name" />
                <br />
                <input type="email" defaultValue={user?.email} {...register("email")} placeholder="Email" />
                <br />
                <input type="text" defaultValue={service._id} {...register("key")} placeholder="Ride No" />
                <br />
                <input type="text" defaultValue={service.serviceName} {...register("serviceName")} placeholder="Ride Name" />
                <br />
                <textarea type="text" {...register("address")} placeholder="Address" />
                <br />
                <input type="number" {...register("phone")} placeholder="Phone Number" />
                <br />
                <input className="btn btn-dark rounded-pill mt-3 px-5" type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default WatchDetail;