import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const apiResponse = await fetch(url, { ...options });
      if (!apiResponse.ok) throw new Error(apiResponse.statusText);
      const result = await apiResponse.json();
      if (result) {
        setData(result);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setData(null);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
