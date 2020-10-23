import { useState, useEffect } from "react";
const axios = require("axios"); // npm i axios

const useGet = ({ url, params = {}, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(url, params); // prop : data
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    get();
  }, [url]);
  return [data, isLoading, error];
};

export default useGet;
