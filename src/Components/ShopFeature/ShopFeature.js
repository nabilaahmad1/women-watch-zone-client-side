import React from 'react';
import './ShopFeature.css';
import brand1 from '../../images/brand1.jpg'
import brand2 from '../../images/brand2.jpg'
import brand3 from '../../images/brand3.jpg'
import brand4 from '../../images/brand4.jpg'

const ShopFeature = () => {
    return (
        <div className="container my-5 py-3">
            {/* service quality  */}
            <h1 className="lh-base fw-bolder">Our Service Quality</h1>
            <div className="row shadow bg-white rounded mb-5">

                <div className="col-lg-3 col-md-6 col-12">
                    <i className="fas fa-truck icon"></i>
                    <h3>Free Delivary</h3>
                    <p>Free Shipping All over The Country</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <i className="fas fa-exchange-alt icon"></i>
                    <h3>Return Policy</h3>
                    <p>Return within 7days of Buying</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <i className="fas fa-headset icon"></i>
                    <h3>24/7 Support System</h3>
                    <p>Whenever You Call Us, Instant Reply </p>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <i className="fas fa-money-bill-alt icon"></i>
                    <h3>Secure Payment</h3>
                    <p>Safe Payment Way</p>
                </div>
            </div>
            {/* watch brands  */}
            <h1 className="lh-base fw-bolder">Our Watch Brands</h1>
            <div className="row shadow bg-white rounded mt-5">

                <div className="col-lg-3 col-md-6 col-12">
                    <img src={brand1} alt="" className="img-fluid w-100 h-100" />
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src={brand2} alt="" className="img-fluid w-100 h-100" />
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src={brand3} alt="" className="img-fluid w-100 h-100" />
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src={brand4} alt="" className="img-fluid w-100 h-100" />
                </div>
            </div>
        </div>
    );
};

export default ShopFeature;