import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bookameal-.herokuapp.com",
  headers: { Authorization: `${localStorage.getItem("authUserToken")}` }
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("authUserToken");
  if (token) {
    config.headers.Authorization = `${localStorage.getItem("authUserToken")}`;
  }
  return config;
});

export default axiosInstance;
