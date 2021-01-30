import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchedData = async (url: string) => {
      const jsonData = await fetch(url);
      const data = await jsonData.json();
      setFetchedData(data);
    };
    fetchedData(url);
  }, [url]);
  return fetchedData;
};
