import axiosInstance from "./axios";

export const getRecommenededHotels = () => {
  return axiosInstance.get("/recommended_hotels");
};
