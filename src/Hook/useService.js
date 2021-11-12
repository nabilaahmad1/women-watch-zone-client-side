import { useEffect, useState } from "react";

const useService = () => {
    // fetch services data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-anchorage-30026.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // return service details 
    return [services];
}
export default useService;