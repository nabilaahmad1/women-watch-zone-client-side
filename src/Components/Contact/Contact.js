import React from 'react';

const Contact = () => {
    return (
        <div className="container-fluid my-5 py-5">
            {/* heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder background1">Contact</h1>
            </div>
            {/* contact form  */}
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="validationServer01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationServer01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServer02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationServer02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServerUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                            <input type="text" className="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServer03" className="form-label">City</label>
                        <input type="text" className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    </div>
                    <div className="col-12">
                        <span className="input-group-text">Massage</span>
                        <textarea className="form-control" aria-label="Massage"></textarea>
                    </div>
                    <div className="col-12">
                        {/* <!-- Button trigger modal --> */}
                        <button className="btn btn-dark rounded-pill px-5" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit form</button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Notification</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>From Submited</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary px-5 rounded-pill" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light px-5 rounded-pill">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;