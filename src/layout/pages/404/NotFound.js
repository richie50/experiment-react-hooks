import React, { useCallback, useState } from "react";

import useFetch from "hooks/use-fetch";

const NotFound = () => {
  const [url, setUrl] = useState("https://randomuser.me/api/");

  let onSuccess = useCallback((url, json) => {
    console.log(url, " data =>", json);
  }, []); // memoize this function without the useRef , it makes sense this way better

  const { data, loading } = useFetch({ url, onSuccess });
  return (
    <div>
      <h1 data-testid="heading"> Navigated to the wrong route</h1>
      <button onClick={() => setUrl("https://api.ipify.org?format=json")}>
        Get my current IP
      </button>
      <br />
      <button
        onClick={() =>
          setUrl("http://universities.hipolabs.com/search?country=Canada")
        }
      >
        Get canadian universities
      </button>
      {!loading && <strong>{JSON.stringify(data)}</strong>}
    </div>
  );
};

export default NotFound;
