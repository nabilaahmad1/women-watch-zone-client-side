import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddWatch.css'

const AddWatch = () => {
    const { register, handleSubmit, reset } = useForm();

    // adding new rides to the database 
    const onSubmit = data => {
        console.log(data);
        axios.post('https://stormy-anchorage-30026.herokuapp.com/watches', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("One Watch Added");
                    reset();
                }
            })
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Add New Watch</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="text" {...register("serviceName")} placeholder="Watch Model Name" />
                <br />
                <input type="text" {...register("img")} placeholder="Image URL" />
                <br />
                <textarea type="text" {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="Price" />
                <br />
                <input className="btn button rounded-pill mt-3 px-5" type="submit" value="Add New Watch" />
            </form>
        </div>
    );
};

export default AddWatch;