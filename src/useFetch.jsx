import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (api) => {
  const [data, setData] = useState(null);
  const [IsPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCon = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get(api, { signal: abortCon.signal });
        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        if (!abortCon.signal.aborted) {
          setData(null);

          setIsPending(false);
          setError(error.message);
        } else {
          console.log("Fetch Aborted");
        }
      }
    };

    fetchData();

    return () => {
      abortCon.abort();
    };
  }, [api]);

  return { data, IsPending, error };
};

export default UseFetch;
