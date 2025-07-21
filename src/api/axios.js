import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://booking-app-db.vercel.app",
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent to:", config.url);
    // You can show a loader here
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received from:", response.config.url);
    // You can hide the loader here
    return response;
  },
  (error) => {
    console.error("Response error:", error.response?.status);
    // You can show a global error alert here
    return Promise.reject(error);
  }
);

export default axiosInstance;
