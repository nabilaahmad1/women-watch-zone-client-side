import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://stormy-anchorage-30026.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container-fluid my-5">
            {/*  heading  */}
            <div className="heading mb-5">
                <h1 className="lh-base fw-bolder">Reviews</h1>
            </div>
            {/* review cards  */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {
                    reviews.map(review => <div className="col"
                        key={review._id}
                        review={review}
                    >
                        <div className="card h-100 background" style={{ borderRadius: "20px" }}>
                            <img src={review.img} className="card-img-top" alt="slide-image1" height="350" style={{ borderRadius: "20px" }} />
                            <div className="card-body">
                                <h5 className="card-title title">{review.userName}</h5>
                                <p className="card-text">{review.description}</p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Review;