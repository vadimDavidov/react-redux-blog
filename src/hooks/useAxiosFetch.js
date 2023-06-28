import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosFetch(dataUrl) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async url => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { cancelToken: source.token });
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
    fetchData(dataUrl);

    const cleaUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleaUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
}

export default useAxiosFetch;
