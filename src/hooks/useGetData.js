import { useState, useCallback } from "react";
import { getData } from "../services/api";

const useGetData = (path) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const res = await getData(path);
    const resWithUrls = res.map((item) => (
      {
        ...item,
        ...(item.image && { image: `${path}/images/${item.image}` })
      }
    ));

    setData(resWithUrls);

    setLoading(false);

    return data;
  }, []);

  return {
    data,
    fetchData,
    loading
  };
};

export default useGetData;
