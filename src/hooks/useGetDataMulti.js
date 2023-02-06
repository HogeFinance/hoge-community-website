import { useState, useCallback } from "react";
import { getData } from "../services/api";

const useGetDataMulti = (path) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const res = await getData(path);
    let categories = [];
    let items = [];

    Object.keys(res).forEach((category) => {
      const itemsWithUrls = res[category].map((item) => (
        {
          ...item,
          ...(item.image && {image: `${path}/images/${item.image}`})
        }
      ))

      categories.push(category);
      items.push(itemsWithUrls);
    });

    setData({
      categories,
      items
    });

    setLoading(false);

    return data;
  }, []);

  return {
    data,
    fetchData,
    loading
  };
};

export default useGetDataMulti;
