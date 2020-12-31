import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setFetchedData(data));
  }, [url]);
  return fetchedData;
};
