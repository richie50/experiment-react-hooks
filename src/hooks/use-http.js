import { useCallback, useEffect, useState } from "react";

function useHttp(url, query, method) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  // useCallback prevent a new memory address from been assigned to this function causing unneccessary render cycle
  const resFn = useCallback(async () => {
    try {
      let response = await fetch(url);
      response = await response.json();
      setData(response);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      setError(e);
    }
  }, [url]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      resFn();
    }, 3000); // simulate delay
    return () => {
      clearTimeout(timeout); // clean up after yourself
    };
  }, [resFn]);
  return {
    data,
    error,
    loading,
  };
}

export default useHttp;
