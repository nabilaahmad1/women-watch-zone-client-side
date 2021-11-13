import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import './AddReview.css'

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // adding new review to the database 
    const onSubmit = data => {
        console.log(data);
        axios.post('https://stormy-anchorage-30026.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("One Review Added");
                    reset();
                }
            })
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Add New Review</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="text" defaultValue={user.displayName} {...register("userName")} placeholder="User Name" />
                <br />
                <input type="text" {...register("img")} placeholder="Image URL" />
                <br />
                <textarea type="text" {...register("description")} placeholder="Description" />
                <br />
                <input className="btn button rounded-pill mt-3 px-5" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;