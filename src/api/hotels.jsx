import axiosInstance from "./axios";

export const getHotels = () => {
  return axiosInstance.get("/hotels");
};
