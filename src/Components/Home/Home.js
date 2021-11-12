import React from 'react';
import { useHistory } from 'react-router';
import About from '../About/About';
import Review from '../Review/Review';
import ShopFeature from '../ShopFeature/ShopFeature';
import Watch from '../Watch/Watch';
import './Home.css'

const Home = () => {
    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }

    return (
        <div>
            <div className="container-fluid pic py-5">
                {/* top banner intro text  */}
                <div className="text-start py-5">
                    <h1 className="title lh-base fw-bolder  ms-5">Make a Statement with <br /> Your Unique Watch Style</h1>
                    <p className="text-light lh-sm mt-3 ms-5">The life you have left is a gift. Cherish it. <br /> Enjoy it now, to the fullest. Do what matters, now.</p>
                    <button onClick={handleClick} type="button" className="btn background rounded-pill mt-3 px-5 me-3 ms-5">Learn More</button>
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