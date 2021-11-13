import React from 'react';
import { useHistory } from 'react-router';
import About from '../About/About';
import Review from '../Review/Review';
import ShopFeature from '../ShopFeature/ShopFeature';
import Watch from '../Watch/Watch';
import './Home.css'
import banner from '../../images/banner1.png'

const Home = () => {
    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }

    return (
        <div className="container">
            {/* top banner intro text  */}
            <div className="row text-center">
                <div className="col-lg-6 col-12">
                    <h1 className="title lh-base fw-bolder  ms-5 text-start mt-5">Make a Statement with Your Unique Watch Style</h1>
                    <p className="text-secondary lh-sm mt-3 ms-5 text-start">The life you have left is a gift. Cherish it. Enjoy it now, to the fullest. Do what matters, now.</p>
                    <button onClick={handleClick} type="button" className="btn button rounded-pill mt-3 px-5 me-5">Learn More</button>
                </div>
                <div className="col-lg-6 col-12">
                    <img src={banner} alt="" className="img-fluid w-75 h-75 mx-auto" />
                </div>
            </div>
            <About></About>
            <ShopFeature></ShopFeature>
            <Watch></Watch>
            <Review></Review>
        </div>
    );
};

export default Home;