import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    // adding new review to the database 
    const onSubmit = data => {
        console.log(data);
        axios.put('https://stormy-anchorage-30026.herokuapp.com/user/admin', data)
            .then(res => {
                if (res.data) {
                    alert("Admin Added");
                    reset();
                }
            })
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Make Admin</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="email" {...register("email")} placeholder="Email" />
                <br />
                <input className="btn background rounded-pill mt-3 px-5" type="submit" value="Make Admin" />
            </form>

        </div>
    );
};

export default MakeAdmin;