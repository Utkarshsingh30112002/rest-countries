import { useEffect, useState } from "react";

const useFetch = (url, setLoading) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function xyz() {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    xyz();
  }, [url]);
  return data;
};

export default useFetch;
