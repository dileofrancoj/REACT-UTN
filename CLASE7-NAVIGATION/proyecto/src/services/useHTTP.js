import { useState, useEffect } from "react";
const axios = require("axios");
const BASE_URL = "http://localhost:3001/";
const useGet = ({ url, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        console.log(`${BASE_URL}${url}`);
        const { data } = await axios.get(`${BASE_URL}${url}`);
        setData(data);
        setFeching(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };
    get();
  }, [url]);
  return [data, isFetching, error];
};

export default useGet;
