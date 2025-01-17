import { useEffect, useState } from "react";
import axios from "axios";
import api from "../components/common/tokens";

const useAxios = (configParams) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(configParams);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.request(configParams);
      setRes(response);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  return [res, err, loading, fetchData];
};

export default useAxios;
