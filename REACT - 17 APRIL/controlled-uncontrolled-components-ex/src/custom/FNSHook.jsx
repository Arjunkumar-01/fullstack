import axios from 'axios';
import { useEffect, useState } from 'react';

const FNSHook = (url) => {

    const [data, setData] = useState(null);

    const getData = async (url) => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch(error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData(url);
    }, [url]);

    return {data};
}

export default FNSHook;