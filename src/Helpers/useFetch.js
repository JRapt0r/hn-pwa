import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ErrorHandler from "../Pages/ErrorHandler";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(<Loading/>);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(<Loading/>);
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(null);
      }
      catch (error) {
        setError(<ErrorHandler error={error.toString()}>
          Try disabling your ad/script blocker to allow for third-party requests
        </ErrorHandler>);
      }
    })();
  }, [url]);

  return [loading, data, error];
}

export default useFetch;