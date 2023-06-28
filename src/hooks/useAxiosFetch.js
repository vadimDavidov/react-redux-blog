import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosFetch() {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3500/posts');
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData();

    const cleaUp = () => {
      isMounted = false;
    };
    return cleaUp;
  }, []);

  return { data, fetchError, isLoading };
}

export default useAxiosFetch;
