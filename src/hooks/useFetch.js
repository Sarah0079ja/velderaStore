import {useEffect, useState} from 'react'
import { Request } from '../request'


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

      useEffect(() => {
        const fetchData = async() => {
          try {
            setLoading(true)
            const response = await Request.get(url);
            setData(response.data.data);
          } catch (err) {
            setError(true)
          }
          setLoading(false)
        };
        fetchData();
      }, [url]);

      return {data, loading, error}
};

export default useFetch 