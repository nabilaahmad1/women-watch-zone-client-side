import React from 'react';
import useService from '../../Hook/useService';
import Watches from '../Watches/Watches';

const ExploreWatches = () => {
    const [services] = useService();

    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Our Watch Collection</h1>
            </div>
            {/* mapping for show services  */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Watches
                        key={service._id}
                        service={service}
                    >
                    </Watches>
                    )
                }
            </div>
        </div>
    );
};

export default ExploreWatches;