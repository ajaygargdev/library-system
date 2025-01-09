import axios from "axios";
import { BASE_URL } from "../Constents";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  config.params = { ...config.params };
  return config;
});

export default axiosClient;
