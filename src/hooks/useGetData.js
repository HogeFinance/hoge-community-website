import { useState, useCallback } from "react";
import { getData } from "../services/api";

const useGetData = (path) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const data = await getData(path);
    setData(data);

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
