import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useFetch = (url, setLoading) => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function xyz() {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      if(res.status=='404')navigate('./NotFoundPage')
      setData(json);
      setLoading(false);
    }
    xyz();
  }, [url]);
  return data;
};

export default useFetch;
