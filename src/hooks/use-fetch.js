import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * @param {object} options
 */

// Alternative to wrapper the onSuccess fn in the calling FC
// const useCallbackRef = (callback) => {
//   const callbackRef = useRef(callback);
//   useLayoutEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);
//   return callbackRef;
// };

const useFetch = ({ url, onSuccess }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        onSuccess(url, json);
        setData(() => {
          const ret = json?.results ? json.results : json; // usually we know the contract
          return ret;
        });
        setLoading(false);
      })
      .catch((err) => setLoading(false));
    return () => {
      console.log("I'm cleaning my shit ", url);
    };
  }, [url, onSuccess]); // run everytime the url changes , not necessary for sucessCbFn

  return {
    data,
    loading,
  };
};

export default useFetch;
